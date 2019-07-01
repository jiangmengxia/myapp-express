<template>
    <div class="waterfall-layout" ref="waterfallLayout" style="height: 800px">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "waterfall-layout",
        data() {
            return {
                heightList: [], /*存储各项高度*/
                width: 0, /*每项宽度*/
                containerWidth: 0,
                lastHeightPerRow: {}, /*每排最后一个元素的高度*/
                flag: false,
                childrens: [],
                inter: null,
            }
        },
        /*numPerLine每行几项 , margin:项左右之间的距离*/
        props: {
            numPerLine: {
                default: 3,
            },
            margin: {
                default: 15
            }
        },
        watch: {
            numPerLine(value,oldvalue) {
                // this.sort()
                console.log(value,oldvalue)
                this.onresize()
            },
            margin() {
                // this.sort()
                this.onresize()
            }
        },
        methods: {
            getChilds() {
                return this.$children.filter(item => {
                    return (item.$options.name === 'waterfall-layout-item')
                })
            },

            initSortData() {
                this.childrens = this.getChilds()
                this.lastHeightPerRow = {}
                this.heightList = []
                this.containerWidth = this.$refs.waterfallLayout.clientWidth
                this.width = (this.containerWidth - (this.numPerLine + 1) * this.margin) / this.numPerLine
            },

            sortOneByOne() {
                for (let index = 0; index < this.numPerLine; index++) {
                    this.next(index)
                }
            },

            next(index) {
                if (index >= this.childrens.length) {
                    this.flag = false
                    return
                }
                console.log('开始定位第' + index + '个')
                // let WIDTH = this.containerWidth
                let numPerLine = this.numPerLine
                // let height = 0
                let index_ = index % this.numPerLine
                /*第几行*/
                let $el = this.childrens[index].$el
                let left = (index_ + 1) * this.margin + this.width * index_
                if (this.lastHeightPerRow[index_] === undefined) {
                    this.lastHeightPerRow[index_] = {
                        height: 0,
                        finished: false
                    }
                }
                // console.log('第' + index + '个元素：' + $el)
                // $el.attachEvent('onresize',()=>{
                //     console.log('第'+index+'个元素resize ok')
                // })
                // $el.onresize(() => {

                let clientHeight = $el.offsetHeight
                let top = this.lastHeightPerRow[index_].height + this.margin
                this.lastHeightPerRow[index_].height = clientHeight + this.lastHeightPerRow[index_].height + this.margin
                /*记录上一排正上方的元素的最下方的top*/
                /*设置位置*/
                $el.style.position = 'absolute'
                $el.style.left = left + 'px'
                $el.style.top = top + 'px'
                $el.style.width = this.width + 'px'
                $el.addEventListener('loaded', () => {
                    console.log('-----------------------')
                })
                console.log('第' + index + '个元素resize ok --- left :', left, 'top:', top, 'offsetHeight:', clientHeight)

                if (Math.floor((index + 1) / this.numPerLine) === (this.childrens.length % this.numPerLine)) {
                    /*刷新完毕*/
                    console.log('刷新完毕------')
                    let row = index % this.numPerLine
                    // this.lastHeightPerRow[row]['finished'] = true
                    this.flag = false
                    /*加载完成*/
                    return
                } else {
                    this.next(index + numPerLine)
                }
                // })
            },

            sort() {
                if (!!this.flag) return
                this.flag = true
                // this.initSortData()
                // this.sortOneByOne()
                this.lastHeightPerRow = {}
                this.heightList = []
                let waterFallItems = this.getChilds()
                // let numPerLine = this.numPerLine
                let WIDTH = this.$refs.waterfallLayout.offsetWidth
                // console.log('外框的宽度', WIDTH)
                this.width = (WIDTH - (this.numPerLine + 1) * this.margin) / this.numPerLine
                // console.log('每个宽度：', this.width)

                waterFallItems.map((item, index) => {
                    item.$el.style.width = this.width + 'px'
                    let clientHeight = item.$el.offsetHeight
                    setTimeout(()=>{
                        clientHeight = item.$el.offsetHeight
                    },300)
                    // let clientHeight = item.$el.offsetHeight

                    let index_ = index % this.numPerLine//第几排
                    let left = (index_ + 1) * this.margin + this.width * index_

                    if (this.lastHeightPerRow[index_] === undefined) {
                        this.lastHeightPerRow[index_] = 0
                    }
                    let top = this.lastHeightPerRow[index_] + this.margin
                    this.lastHeightPerRow[index_] = clientHeight + this.lastHeightPerRow[index_] + this.margin
                    /*记录上一排正上方的元素的最下方的top*/

                    /*设置位置*/
                    item.$el.style.position = 'absolute'
                    item.$el.style.left = left + 'px'
                    item.$el.style.top = top + 'px'

                    if (index >= waterFallItems.length - 1) {
                        let maxHeght = 0
                        for (let key in this.lastHeightPerRow) {
                            if (maxHeght < this.lastHeightPerRow[key])
                                maxHeght = this.lastHeightPerRow[key]
                        }
                        this.$refs.waterfallLayout.style.height = (maxHeght + 60) + 'px'
                    }
                    this.flag = false
                })
            },
            onresize(){
                this.h_ = window.innerWidth
                this.inter = setInterval(()=>{
                    let h = window.innerWidth
                    if(h!=this.h_){
                        this.h_ = h
                    }else{
                        this.sort()
                        clearInterval(this.inter)
                    }
                },300)
            }
        },
        mounted() {
            // this.sort();
            this.onresize()
            window.onresize = () => {
                this.onresize()
                // this.h_ = window.innerWidth
                // this.inter = setInterval(()=>{
                //     let h = window.innerWidth
                //     if(h!=this.h_){
                //         this.h_ = h
                //     }else{
                //         this.sort()
                //         clearInterval(this.inter)
                //     }
                // },100)
            }
        },
        destroyed() {
            clearInterval(this.inter)
        }
    }
</script>

<style scoped>
    .waterfall-layout {
        position: relative;
    }
</style>