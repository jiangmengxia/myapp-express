<template>
    <div class="tab-content">
        <waterfall-layout :numPerLine="numPerLine">
            <waterfall-layout-item>
                <div class="item bg-white bordered">
                    <img-hover
                            url="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"></img-hover>
                    <div class="pl-20 pr-20 pt-20 pb-20">
                        <p class="ft-8 color-light-grey text-center pb-10">design by 2018-05-20</p>
                        <h4 class="text-center">this is hock dayiy</h4>
                        <br>
                        <p class="ft-12 color-light-grey" style="line-height: 200%;">
                            杨柳迷离晓雾中，杏花零落五更钟。寂寂景阳宫外月，照残红。
                            蝶化彩衣金缕尽，虫衔画粉玉楼空。惟有无情双燕子，舞东风。
                        </p>
                    </div>
                </div>
            </waterfall-layout-item>
            <waterfall-layout-item>
                <div class="item bg-white bordered">
                    <img-hover
                            url="https://images.pexels.com/photos/1045535/pexels-photo-1045535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"></img-hover>
                    <div class="pl-20 pr-20 pt-20 pb-20">
                        <p class="ft-8 color-light-grey text-center pb-10">design by 2018-05-20</p>
                        <h4 class="text-center">this is hock dayiy</h4>
                        <br>
                        <p class="ft-12 color-light-grey" style="line-height: 200%;">
                            杨柳迷离晓雾中，杏花零落五更钟。寂寂景阳宫外月，照残红。
                            蝶化彩衣金缕尽，虫衔画粉玉楼空。惟有无情双燕子，舞东风。
                        </p>
                    </div>
                </div>
            </waterfall-layout-item>
            <waterfall-layout-item>
                <div class="item bg-white bordered">
                    <img-hover
                            url="https://images.pexels.com/photos/566862/pexels-photo-566862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"></img-hover>
                    <div class="pl-20 pr-20 pt-20 pb-20">
                        <p class="ft-8 color-light-grey text-center pb-10">design by 2018-05-20</p>
                        <h4 class="text-center">this is hock dayiy</h4>
                        <br>
                        <p class="ft-12 color-light-grey" style="line-height: 200%;">
                            杨柳迷离晓雾中，杏花零落五更钟。寂寂景阳宫外月，照残红。
                            蝶化彩衣金缕尽，虫衔画粉玉楼空。惟有无情双燕子，舞东风。
                        </p>
                    </div>
                </div>
            </waterfall-layout-item>
            <waterfall-layout-item>
                <div class="item bg-white bordered">
                    <img-hover
                            url="https://images.pexels.com/photos/293029/pexels-photo-293029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"></img-hover>
                    <div class="pl-20 pr-20 pt-20 pb-20">
                        <p class="ft-8 color-light-grey text-center pb-10">design by 2018-05-20</p>
                        <h4 class="text-center">this is hock dayiy</h4>
                        <br>
                        <p class="ft-12 color-light-grey" style="line-height: 200%;">
                            杨柳迷离晓雾中，杏花零落五更钟。寂寂景阳宫外月，照残红。
                            蝶化彩衣金缕尽，虫衔画粉玉楼空。惟有无情双燕子，舞东风。
                        </p>
                    </div>
                </div>
            </waterfall-layout-item>
            <waterfall-layout-item>
                <div class="item bg-white bordered">
                    <img-hover
                            url="https://images.pexels.com/photos/293029/pexels-photo-293029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"></img-hover>
                    <div class="pl-20 pr-20 pt-20 pb-20">
                        <p class="ft-8 color-light-grey text-center pb-10">design by 2018-05-20</p>
                        <h4 class="text-center">this is hock dayiy</h4>
                        <br>
                        <p class="ft-12 color-light-grey" style="line-height: 200%;">
                            杨柳迷离晓雾中，杏花零落五更钟。寂寂景阳宫外月，照残红。
                            蝶化彩衣金缕尽，虫衔画粉玉楼空。惟有无情双燕子，舞东风。
                        </p>
                    </div>
                </div>
            </waterfall-layout-item>
        </waterfall-layout>
    </div>
</template>

<script>
    import ImgHover from "@/components/img-hover";
    import WaterfallLayout from "@/components/waterfall/waterfall-layout";
    import WaterfallLayoutItem from "@/components/waterfall/waterfall-layout-item";

    export default {
        name: "tabContent3",
        components: {
            WaterfallLayoutItem,
            WaterfallLayout,
            ImgHover,
            // LineTitleMain
        },
        data() {
            return {
                carouselValue: 0,
                numPerLine: 4,
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
                console.log('------------------------------', this.numPerLine)
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
    .tab-content {
        /*box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.3);*/
    }
</style>
