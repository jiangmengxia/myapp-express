<template>
    <div class="tab-content">
        <!--<artical-catagory1 :list="list_1"></artical-catagory1>-->
        <!--<artical-catagory2 :list="list_2"></artical-catagory2>-->
        <artical-catagory3 :list="list_3"></artical-catagory3>
    </div>
</template>

<script>
    import ImgHover from "../../components/img-hover";
    import ArticalCatagory1 from "../../components/article/artical-catagory1";
    import ArticalCatagory2 from "../../components/article/artical-catagory2";
    import ArticalCatagory3 from "../../components/article/artical-catagory3";
    // import LineTitleMain from "../../components/line-title-main";
    export default {
        name: "tabContent1",
        components: {ArticalCatagory3, ArticalCatagory2, ArticalCatagory1, ImgHover},
        data() {
            return {
                list_1: [
                    {
                        id: 1,
                        url: 'https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
                        title: '勿忘我',
                        content: '台上凭栏干，犹怯春寒。被谁偷了最高山？将谓六丁移取去，不在人间。',
                        showDetail: true,
                        link: '',
                    },
                    {
                        id: 2,
                        url: 'https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
                        title: '勿忘我',
                        content: '台上凭栏干，犹怯春寒。被谁偷了最高山？将谓六丁移取去，不在人间。',
                        showDetail: true,
                        link: '/artical-detail',
                    }
                ],
                list_2: [
                    {
                        id: 1,
                        url: 'https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
                        title: '勿忘我',
                        content: '台上凭栏干，犹怯春寒。被谁偷了最高山？将谓六丁移取去，不在人间。',
                        showDetail: true,
                        link: '',
                    },
                    {
                        id: 2,
                        url: 'https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
                        title: '勿忘我',
                        content: '台上凭栏干，犹怯春寒。被谁偷了最高山？将谓六丁移取去，不在人间。',
                        showDetail: true,
                        link: '/artical-detail',
                    }
                ],
                list_3: [
                    {
                        id: 1,
                        url: 'https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
                        title: '勿忘我',
                        content: '台上凭栏干，犹怯春寒。被谁偷了最高山？将谓六丁移取去，不在人间。',
                        showDetail: true,
                        link: '',
                    },
                    {
                        id: 2,
                        url: 'https://images.pexels.com/photos/293029/pexels-photo-293029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
                        title: '勿忘我',
                        content: '杨柳迷离晓雾中，杏花零落五更钟。寂寂景阳宫外月，照残红。\n' +
                            '                            蝶化彩衣金缕尽，虫衔画粉玉楼空。惟有无情双燕子，舞东风。',
                        showDetail: true,
                        link: '/artical-detail',
                    },
                    {
                        id: 3,
                        url: 'https://images.pexels.com/photos/566862/pexels-photo-566862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
                        title: '勿忘我',
                        content: '杨柳迷离晓雾中，杏花零落五更钟。寂寂景阳宫外月，照残红。\n' +
                            '                            蝶化彩衣金缕尽，虫衔画粉玉楼空。惟有无情双燕子，舞东风。',
                        showDetail: true,
                        link: '/artical-detail',
                    },
                    {
                        id: 4,
                        url: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
                        title: '勿忘我',
                        content: '杨柳迷离晓雾中，杏花零落五更钟。寂寂景阳宫外月，照残红。\n' +
                            '                            蝶化彩衣金缕尽，虫衔画粉玉楼空。惟有无情双燕子，舞东风。',
                        showDetail: true,
                        link: '/artical-detail',
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .colume-1 {
        .item {
            padding: 40px;
            box-shadow: 0 0 1px 0 #d1f2e1;
            transition: all ease-in-out 1000ms;
        }
    }

    .colume-0 {
        .item {
            transition: all ease-in-out 1000ms;
        }
    }

    .tab-content {
        /*background: #fafafa;*/
    }
</style>
