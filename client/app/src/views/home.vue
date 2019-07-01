<template>
    <content-container>
        <div slot="header" class="nav-bar-home">
            <nav-bar2 :init="2"></nav-bar2>
        </div>
        <div slot="content-fullscreen">
            <we-module></we-module>
        </div>
        <div class="con-app bg-white pt-20 pb-20" slot="content">
            <div class="ml-20 mr-20">
                <Row>
                    <Col :xs="0" :sm="12">
                    <img src="https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                         class="width-100">
                    </Col>
                    <Col :xs="24" :sm="12" class="pl-20 pr-20">
                    <h2 class="color-normal" style="font-family: SimSun;margin-top: 30px;">EssayEdge为您在申学路上保驾护航</h2>
                    <p class="color-light-grey ft-14 mt-20">
                        <Row>
                            <Col :xs="24" :sm="0">
                            <img src="https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                                 class="width-100">
                            </Col>
                        </Row>
                        EssayEdge成立至今已有20余年，我们提供行业首屈一指的文书润的文书行业领先品牌，我们深知中国学生在文书写作方面的薄弱环节，因而有针对性地提供面向中国用户的特色服务。
                        <br/>
                        <Button type="error" style="margin-top: 10px">查看更多</Button>
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col :xs="24" :sm="12" class="pl-20 pr-20">
                    <h2 class="color-normal" style="font-family: SimSun;margin-top: 30px;">EssayEdge为您在申学路上保驾护航</h2>
                    <p class="color-light-grey ft-14 mt-20">
                        <Row>
                            <Col :xs="24" :sm="0">
                            <img src="https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                                 class="width-100">
                            </Col>
                        </Row>
                        EssayEdge成立至今已有20余年，我
                        们提供行业首屈一指的文书润色修改服务及指导。我们深知中国学生在文书写作方面的薄弱环节，因而有针对性地提供面向中国用户的特色服务。
                        <br/>
                        <Button type="error"  style="margin-top: 10px">查看更多</Button>
                    </p>
                    </Col>
                    <Col :xs="0" :sm="12">
                    <img src="https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                         class="width-100">
                    </Col>
                </Row>
            </div>
        </div>

    </content-container>

</template>

<script>
    import WeModule from './index/we'
    import ContentContainer from '../components/content-container'
    import NavBar2 from "../components/nav-bar-2";

    export default {
        components: {
            NavBar2,
            WeModule, ContentContainer
        },
        name: "home"
    }
</script>

<style lang="scss" scoped>
    .con-app {
        position: relative;
    }
    .nav-bar-home{
        position: fixed;
        top: 0;
        right: 60px;
        z-index: 100;
        /*&:hover{*/
            /*background: rgba(255,255,255,.5) ;*/
        /*}*/
    }
</style>