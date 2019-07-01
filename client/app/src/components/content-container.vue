<template>
    <Layout class="layout">
        <slot name="header">
            <Header class="layout-header">
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <nav-bar class="nav-bar"></nav-bar>
                    <nav-bar-mobile class="nav-bar-mobile"></nav-bar-mobile>
                </div>
            </Header>
        </slot>
        <Content class="content">
            <div class="content-fullscreen" style="overflow:visible">
                <slot name="content-fullscreen"></slot>
            </div>
            <div class="content-wrap container">
                <slot name="content"></slot>
            </div>
        </Content>
        <slot name="footer">
            <Footer>
                <my-footer></my-footer>
            </Footer>
        </slot>
    </Layout>
</template>

<script>
    import NavBar from '@/components/nav-bar'
    import NavBarMobile from '@/components/nav-bar-mobile'
    import MyFooter from '@/components/footer'

    export default {
        name: "content-container",
        components: {
            NavBar,
            MyFooter, NavBarMobile
        }
    }
</script>

<style lang="scss" scoped>
    .content-wrap {
        /*@media screen and (min-width: 768px) {*/

        /*}*/
        /*@media screen and (min-width: 992px) {*/
        /*width: 970px;*/
        /*}*/
        /*@media screen and (min-width: 1200px) {*/
        /*width: 1170px;*/
        /*}*/
        /*margin: auto;*/
        position: relative;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }

    .content {
        /*height: calc(100% - 64px);*/
        overflow: auto;
        position: relative;
        padding-bottom: 60px;
    }

    @media screen and (max-width: 768px) {
        .layout-logo {
            display: none;
        }
        .layout-nav {
            width: auto;
            margin-right: 30%;
        }
        .nav-bar {
            display: none;
        }
    }

    @media screen and (min-width: 768px) {
        .nav-bar-mobile {
            display: none;
        }
    }
</style>