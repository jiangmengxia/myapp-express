<template>
    <div class="we-app-wrap">
        <div class="entry-intro color-white flex align-center">
            <div class="content">
                <h1 style="font-weight: normal">Hi,this is ddj & edj blog, welcome</h1>
                <hr style="margin-top:15px;border-bottom: 0;border-top: 1px solid #fff;border-left: 0; border-right: 0;"/>
                <p style="margin-top:15px; font-size: 12px;">A WEBSITE TO INTRODUCE A DOUBLE DAILY LIFE & CAREER EXPERIENCE RECORDS
                    <button style="margin-top: 5px; margin-bottom: 5px;" type="white" align="right" width="200" hspace="10" vspace="10" >go</button>
                </p>
            </div>
        </div>
        <div class="we-app color-white">
            <Row class="flex users">
                <Col :xs="24" :sm="12" class="modal left">
                <router-link to="/zone" class="color-white">
                    <div class="user pb-20 pt-20 pl-20 pr-20">
                        <div class="introl">
                            <h1>葫芦娃</h1>
                            <div hspace="0" vspace="0" class="pull-right user-avatar">
                                <!--<img src="../../assets/index/1.png" style="height: 100%">-->
                            </div>
                            <br><br>
                            <!--<img src="../../assets/index/1.png"-->
                            <!--align="left" width="200" hspace="0" vspace="0" style="margin-right: 5px;margin-bottom: 20px;" class="pull-right">-->
                            <div>性别：男</div>
                            <div>职位：软件工程师</div>
                            <div>工作年限：3年</div>
                            <div>十字简介：闷骚宅男、无聊至极</div>
                        </div>
                    </div>
                </router-link>
                </Col>
                <Col :xs="24" :sm="12" class="modal right">
                <div class="user pb-20 pt-20 pl-20 pr-20">
                    <div class="introl">
                        <h1>葫芦娃</h1>
                        <div hspace="0" vspace="0" class="pull-right user-avatar">
                            <!--<img src="../../assets/index/1.png" style="height: 100%">-->
                        </div>
                        <br><br>
                        <div>性别：男</div>
                        <div>职位：软件工程师</div>
                        <div>工作年限：3年</div>
                        <div>十字简介：闷骚宅男、无聊至极</div>
                    </div>
                </div>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>

    export default {
        name: "we",
        data() {
            return {}
        },
    }
</script>

<style lang="scss" scoped>
    .entry-intro {
        background: url("../../assets/index/bg.jpeg") no-repeat center 0;
        position: relative;
        height: 320px;
        &:before {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(43, 47, 75, 0.8);
        }
        .content {
            position: relative;
            z-index: 10;

            @media screen and (min-width: 0) {
                width: 100%;
                margin: auto 20px;
            }
            @media screen and (min-width: 992px) {
                width: 970px;
                margin: auto 60px;
            }
            @media screen and (min-width: 1200px) {
                width: 1170px;
                margin: auto 60px;
            }
            transform: translateY(-40px);
            font-family:SimSun;
            p{
                color: rgba(250, 250, 250, 1);
                /*font-family:SimSun;*/
            }
        }
    }

    .we-app {
        &:before {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(43, 47, 75, 0.8);
        }
        position: relative;
        background: url("../../assets/index/bg.jpeg") no-repeat center -320px;
        padding: 40px 40px 0px 40px;
        overflow: visible;
        .users{
            position: relative;
        }
    }

    .modal {
        .user {
            line-height: 200%;
        }
        &.left {
            margin-bottom: 1px;
            background: rgba(99, 184, 255, 0.3);
            &:hover {
                background: rgba(99, 184, 255, 0.8);
                position: relative;
            }
            .user-avatar {
                background: url("../../assets/index/1.png") 100%/100% no-repeat;
                width: 40%;
                max-width: 40%;
                height: 200px;
                margin-bottom: 5px;
                opacity: 0.75;
                margin-left: 5px;
            }
        }
        &.right {
            margin-bottom: 1px;
            background: rgba(132, 112, 255, 0.3);
            margin-top: -100px;
            @media screen and (max-width: 768px) {
                margin-top: 0;
            }
            &:hover {
                background: rgba(132, 112, 255, 0.8);
                /*color: #333333;*/
            }
            .user-avatar {
                background: url("../../assets/index/1.png") 100%/100% no-repeat;
                width: 40%;
                max-width: 40%;
                height: 200px;
                margin-bottom: 5px;
                opacity: 0.75;
                margin-left: 5px;
            }
        }
    }
</style>
