<template>
    <div>
        <Button type="primary" @click="showAddModal">新增分类</Button>
        <Select style="width: 200px;" class="pull-right" v-model="selectValue" @on-change="nextPage(1)">
            <Option v-for="option in userList" :value="option._id" :key="option._id">{{option.username}}</Option>
        </Select>
        <br/>
        <table class="clx">
            <thead>
            <th>分类名</th>
            <th>所属用户</th>
            <th>创建时间</th>
            <th>操作</th>
            </thead>
            <tbody>

            <tr v-for="item in list" :key="item._id">
                <td>{{item.name}}</td>
                <td>{{item.author.username}}</td>
                <td>{{item.date|dateFormat}}</td>
                <td>
                    <Button type="success">编辑</Button>&nbsp;
                    <Button type="error" @click="deleteCata(item)">删除</Button>
                </td>
            </tr>
            </tbody>
        </table>
        <br/>
        <Page :total="count" :page-size="page_num" :current="page" @on-change="nextPage" show-total></Page>
        <Modal v-model="show" :title="operate==1 ? '修改分类信息':'新增分类'" @on-ok="confirmUpdate">
            <Form ref="formData" :label-width="80" v-model="formData">
                <FormItem label="分类名">
                    <Input v-model="formData.name"/>
                </FormItem>
                <FormItem label="所属用户">
                    <Select v-model="formData.author">
                        <Option v-for="option in userList" :key="option._id" :value="option._id">{{option.username}}
                        </Option>
                    </Select>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>

<script>
    import API from '../requests/apis/user'
    import BLOG_API from '../requests/apis/blog'
    import {mapState} from 'vuex'

    export default {
        name: "BlogCatagory",
        computed: {
            ...mapState({
                list: (state) => state.blog.blogCataList.list,
                count: (state) => state.blog.blogCataList.count,
            })
        },
        data() {
            return {
                userList: [],
                show: false,
                selectValue: '',
                formData: {
                    name: '',
                    author: '',
                },
                operate: 0,
                page: 1,
                page_num: 5,
            }
        },
        methods: {
            nextPage(index) {
                this.page = index
                this.$store.dispatch('blog/getBlogCataList', {
                    page: index,
                    page_num: this.page_num,
                    author: this.selectValue
                })
            },
            fresh() {
                API.getUsers({}).then(res => {
                    this.userList = res.data
                })
                this.nextPage(1)
            },
            showAddModal() {
                this.show = true
            },
            confirmUpdate() {
                if (this.operate === 1)
                    API.updateUser(this.formData).then(res => {
                        if (res.ret === 1) {
                            this.fresh()
                        }
                    })
                else
                    BLOG_API.addBlogCatagory(this.formData).then(res => {
                        if (res.ret === 1) {
                            this.$Message.success('添加成功！')
                            this.fresh()
                        }
                    })
            },
            deleteCata(item) {
                BLOG_API.deleteBlogCata({_id: item._id}).then(res => {
                    if (res.ret === 1) {
                        this.$Message.success('删除成功！')
                        this.fresh()
                    }
                })
            },
        },
        created() {
            this.fresh()
        }
    }
</script>

<style scoped>

</style>
