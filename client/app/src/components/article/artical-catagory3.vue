<template>
    <div class="artical-catagory3">
        <waterfall-layout :numPerLine="numPerLine">
            <waterfall-layout-item
                    v-for="(item,index) in list"
                    :key="index+'_'+item.id">
                <div class="item bg-white bordered">
                    <img-hover
                            :url="item.url"></img-hover>
                    <div class="pl-20 pr-20 pt-20 pb-20">
                        <p class="ft-8 color-light-grey text-center pb-10">design by {{item.date}}</p>
                        <h4 class="text-center">{{item.title}}</h4>
                        <br>
                        <p class="ft-12 color-light-grey" style="line-height: 200%;">
                            {{item.content}}
                        </p>
                    </div>
                </div>
            </waterfall-layout-item>
        </waterfall-layout>
    </div>
</template>

<script>
    import WaterfallLayout from "../waterfall/waterfall-layout";
    import WaterfallLayoutItem from "../waterfall/waterfall-layout-item";
    import ImgHover from "../img-hover";

    export default {
        name: "artical-catagory3",
        components: {ImgHover, WaterfallLayoutItem, WaterfallLayout},
        props: {
            // numPerLine: {
            //     type: Number,
            //     default: 4
            // },
            list: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                numPerLine: 4
            }
        },
        methods: {
            onresize() {
                let width = window.innerWidth
                if (width <= 768) {
                    if (this.numPerLine != 1)
                        this.numPerLine = 1
                } else if (width <= 992) {
                    if (this.numPerLine != 2)
                        this.numPerLine = 2
                } else if (width <= 1200) {
                    if (this.numPerLine != 3)
                        this.numPerLine = 3
                } else {
                    if (this.numPerLine != 4)
                        this.numPerLine = 4
                }
            }
        },
        mounted() {
            this.onresize()
            window.onresize = () => {
                this.onresize()
            }
        },
    }
</script>

<style scoped>

</style>
