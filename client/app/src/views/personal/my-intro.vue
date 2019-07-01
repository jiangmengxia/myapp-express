<template>
    <div>
        <Card class="card">
            <line-title title="基础信息"></line-title>
            <div class="pl-15 pr-10 pt-10 pb-10 ft-14 color-light-grey">
                <div class="text-center pb-20"><img src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="img-avatar circle" /></div>
                <div>网&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：爱狐狸</div>
                <div>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业：前端工程师</div>
                <div>工作年限：3年</div>

                <!--<div>籍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;贯：江苏省宜兴市</div>-->
                <div>现居住地：浙江省杭州市</div>
                <div>兴趣爱好：说说话 扯扯淡 写写bug</div>
            </div>
        </Card>
        <Card class="card mt-20" >
            <line-title title="工作技能"></line-title>
            <ul class="pl-15 pr-10 pt-10 pb-10 ft-14 color-light-grey ml-20">
                <li>PC端、移动端web页面开发</li>
                <li>根据产品需求、配合后端人员，完成前端效果和功能</li>
                <li>能够使用webpack，glup模块管理工具，配合前端主流框架，搭建前端项目环境</li>
                <li>熟悉angular、react、vue、jquery等前端主流框架</li>
                <!--<div>了解nodejs+express编程，数据库使用Mongoose模块</div>-->
            </ul>
        </Card>
    </div>
</template>

<script>
    import LineTitle from '@/components/line-title'

    export default {
        name: "about-me",
        components: {LineTitle}
    }
</script>

<style lang="scss" scoped>
    .card /deep/ .ivu-card-body {
        padding: 0
    }

    .card {
        line-height: 150%;
        background: #f7f7f7;
        letter-spacing: 1px;
    }

    .card:hover {
        .title {
            color: #454c5b;
            text-shadow: #dfdfdf 1px 0 2px, #dfdfdf 0 1px 2px, #dfdfdf -1px 0 2px, #dfdfdf 0 -1px 2px;
        }
        .color-light-grey {
            color: #5b6270;
        }
    }
    .img-avatar{
        width: 80px;
        height: 80px;
    }
</style>