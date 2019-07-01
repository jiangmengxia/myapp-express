<template>
    <!--底部图片 上面加一层膜  最上面文字描述-->
    <div class="artical-catagory1">
        <Row>
            <Col :xs="24" :sm="12" :md="8" :lg="6" class="item" v-for="(item,index) in list" :key="index+'_'+item.id">
                <router-link v-if="item.link" :to="item.link">
                    <img-hover
                            :url="item.url"
                            :has-intro="item.showDetail"
                    >
                        <div slot="intro" class="color-white flex align-center text-center"
                             style="height: 100%">
                            <div class="width-100">
                                <h4>{{item.title}}</h4>
                                <p style="line-height: 200%;margin-top: 30px;" class="ft-12 pl-20 pr-20">
                                    {{item.content}}
                                </p>
                            </div>
                        </div>
                    </img-hover>
                </router-link>
                <img-hover
                        v-else
                        :url="item.url"
                        :has-intro="item.showDetail"
                >
                    <div slot="intro" class="color-white flex align-center text-center"
                         style="height: 100%">
                        <div class="width-100">
                            <h4>{{item.title}}</h4>
                            <p style="line-height: 200%;margin-top: 30px;" class="ft-12 pl-20 pr-20">
                                {{item.content}}
                            </p>
                        </div>
                    </div>
                </img-hover>
            </Col>
        </Row>
    </div>
</template>

<script>
    import ImgHover from "../img-hover";

    export default {
        name: "artical-catagory1",
        components: {ImgHover},
        props: {
            list: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style lang="scss" scoped>
    .artical-catagory1 {
        .item {
            transition: all ease-in-out 1000ms;
        }
    }

    .tab-content {
        /*background: #fafafa;*/
    }
</style>
