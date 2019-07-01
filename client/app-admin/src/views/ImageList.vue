<template>
    <div class="app-container">
        <div class="mr-20 mb-20">
            <Button type="primary" class="" @click="showModal">上传图片</Button>
        </div>
        <Modal v-model="show" title="上传图片" @on-ok="addImage">
            <upload-image></upload-image>
            <!--选择上传用户：-->
            <!--<Select v-model="searchValue">-->
            <!--<Option value="item._id" v-for="item in userList">{{item.username}}</Option>-->
            <!--</Select>-->
        </Modal>
        <div class="img-list">
            <table v-if="list.length>0">
                <thead>
                <!--<th>上传者</th>-->
                <th>图片名称</th>
                <th>图片</th>
                <th>url</th>
                <th>上传时间</th>
                <th>操作</th>
                </thead>
                <tbody>
                <tr v-for="item in list">
                    <!--<td>{{item.uploader ? item.uploader.username : ''}}</td>-->
                    <td>{{item.name}}</td>
                    <td>
                        <view-scale-image :url="item.url"></view-scale-image>
                    </td>
                    <td>{{item.url}}</td>
                    <td>{{item.date| dateFormat}}</td>
                    <td>
                        <Button type="error" @click="deleteImage(item)">删除</Button>
                    </td>
                </tr>
                </tbody>
            </table>
            <no-data v-else></no-data>
            <div class="mt-20 mb-20 text-center">
                <Page :total="count" :page-size="page_num" :current="page" @on-change="nextPage" show-total></Page>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import NoData from '../components/no-data'
    import UploadImage from '../components/upload-image'
    import ViewScaleImage from '../components/view-scaler-image'

    export default {
        name: "editor-demo",
        data() {
            return {
                show: false,
                page: 1,
                page_num: 5,
                searchValue: '',
            }
        },
        components: {NoData, UploadImage, ViewScaleImage},
        computed: {
            ...mapState({
                list: (state) => state.image.imageList.list,
                count: (state) => state.image.imageList.count,
                userList: (state) => state.user.userList.list
            })
        },
        methods: {
            nextPage(index) {
                this.page = index
                this.$store.dispatch('image/getImageList', {
                    page: index,
                    page_num: this.page_num
                })
            },
            showModal() {
                this.show = true
            },
            deleteImage(item) {
                let _id = item._id
                this.$store.dispatch('image/deleteImage', {_id: _id}).then(() => {
                    console.log('-------------------deleted-------------')
                    this.$Message.success('删除成功！')
                    this.$store.dispatch('image/getImageList', {})
                })
            },
            addImage() {
                this.$store.dispatch('image/getImageList', {})
            }
        },
        created() {
            this.$store.dispatch('image/getImageList', {
                page: this.page,
                page_num: this.page_num
            })
            // this.$store.dispatch('user/getUserList', {})
        }
    }
</script>
<style scoped>

</style>
