<template>
    <div class="body">
        <div class="body-inner">
            <div class="index text-center color-white">
                <br><br><br><br><br><br><br>
                <h1>THIS IS</h1>
                <h1>JMX HOME</h1>
                <br>
                <h5 style="font-weight: normal">A mother of 3 old years child , A full responsive Html ,css3 sites by
                    @hfjkhad for </h5>
                <br><br><br><br>
            </div>
            <div class="content container">
                <Tabs value="name1" class="transparent-tabs">
                    <TabPane label="个人简历" name="4">
                        <resume></resume>
                    </TabPane>
                    <TabPane label="vue" name="name1">
                        <!--<tab-content1></tab-content1>-->
                    </TabPane>
                    <TabPane label="react" name="name2">
                        <!--<tab-content2></tab-content2>-->
                    </TabPane>
                    <TabPane label="express" name="name3">
                        <!--<tab-content3></tab-content3>-->
                    </TabPane>
                </Tabs>
            </div>
        </div>
        <footer></footer>
    </div>
</template>

<script>
    import Resume from "./personal/resume";

    export default {
        name: "home",
        data() {
            return {}
        },
        methods: {},
        mounted() {

        },
        components: {
            Resume,
        }
    }
</script>

<style lang="scss" scoped>
    .body {
        &:before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: url("../assets/index/bg1.jpeg") no-repeat center center;
            z-index: 0;
        }
        &:after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.6);
            z-index: 1;
        }
    }

    .body-inner {
        position: relative;
        z-index: 2;
    }

    h1 {
        font-family: 'tinymce', Arial;
        font-size: 80px;
    }

    .transparent-tabs /deep/ {
        .ivu-tabs-bar {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.2);
            margin-bottom: 0;
            border-bottom: 0;
        }
        .ivu-tabs-nav .ivu-tabs-tab-active {
            color: #000000;
            background: #ffffff;
        }
    }

    .container {
        box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.3);
        margin-bottom: 160px;
    }

</style>
