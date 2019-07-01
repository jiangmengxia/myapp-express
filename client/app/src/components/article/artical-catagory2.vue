<template>
    <!--底部图片 上面加一层膜  最上面文字描述-->
    <div class="artical-catagory2">
        <Row>
            <Col :xs="24" :sm="12" :md="12" :lg="8" class="item" v-for="(item,index) in list"
                 :key="index+'_'+item.id">
                <router-link v-if="item.link" :to="item.link">
                    <div class="text-center ft-12 color-light-grey">{{item.date}}</div>
                    <h4 class="text-center mt-20" style="margin-bottom: 30px;">{{item.title}}</h4>
                    <img-hover
                            :url="item.url"
                            :has-intro="false"></img-hover>
                    <p style="line-height: 200%;margin-top: 30px;" class="color-light-grey ft-12">
                        {{item.content}}
                    </p>
                </router-link>
                <div>
                    <div class="text-center ft-12 color-light-grey">{{item.date}}</div>
                    <h4 class="text-center mt-20" style="margin-bottom: 30px;">{{item.title}}</h4>
                    <img-hover
                            :url="item.url"
                            :has-intro="false"></img-hover>
                    <p style="line-height: 200%;margin-top: 30px;" class="color-light-grey ft-12">
                        {{item.content}}
                    </p>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    import ImgHover from "../img-hover";

    export default {
        name: "artical-catagory2",
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
    .artical-catagory2 {
        .item {
            transition: all ease-in-out 1000ms;
        }
    }
</style>
