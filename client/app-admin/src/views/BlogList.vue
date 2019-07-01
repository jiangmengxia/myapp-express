<template>
    <div class="app-container">
        <div>
            <Card v-for="item in list" style="margin-top: 20px;">
                <div>
                    <h4>标题：<b>{{item.title}}</b>
                        <span class="pull-right">
                        <Button type="error" @click="deleteBlog(item)">删除</Button>
                        <Button type="primary" @click="editBlog(item)">编辑</Button>
                    </span>
                        <div class="clx"></div>
                    </h4>
                    <p v-html="item.content" style="padding: 10px 0;"></p>
                    <div class="border-top-theme" style="padding:10px 0;">
                        <span class="pull-right">{{item.date | dateFormat}}</span>
                        <div class="clx"></div>
                    </div>
                </div>
            </Card>

            <no-data v-if="list.length==0"></no-data>
            <div class="mt-20 mb-20 text-center">
                <Page :total="count" :current="page" @on-change="nextPage" show-total></Page>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import NoData from '../components/no-data'

    export default {
        name: "editor-demo",
        components:{NoData},
        data: function () {
            return {
                page:1,
                page_num:10,
            }
        },
        computed: {
            ...mapState({
                list: state => state.blog.blogList.list,
                count: state => state.blog.blogList.count,
            })
        },
        methods: {
            nextPage(index){
                this.page = index
                this.$store.dispatch('image/getBlogList',{
                    page:index,
                    page_num:this.page_num
                })
            },
            deleteBlog(item) {
                console.log('--item', item)
                this.$store.dispatch('blog/deleteBlog', {
                    _id: item._id, cb: () => {
                        this.$store.dispatch('blog/getBlogList', {})
                    }
                })
            },
            editBlog(item) {
                this.$router.push({
                    path: '/blog/edit',
                    query: {
                        _id: item._id
                    }
                })
            }
        },
        created() {
            this.$store.dispatch('blog/getBlogList', {
                page:this.page,
                page_num:this.page_num
            })
        }
    }
</script>
<style scoped>

</style>
