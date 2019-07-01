<template>
    <div class="app-container">
        <div class="mr-20 mb-20">
            <Button type="primary" class="" @click="showModal">新增图片类别</Button>
        </div>
        <Modal v-model="show" title="新增类别" @on-ok="addImageType">
            <Form ref="formData" :label-width="80">
                <FormItem label="类别名称">
                    <Input v-model="formData.type"/>
                </FormItem>
            </Form>
        </Modal>
        <div class="img-list">
            <table v-if="list.length>0">
                <thead>
                <th>名称</th>
                <th>添加时间</th>
                </thead>
                <tbody>
                <tr v-for="item in list">
                    <td>{{item.type}}</td>
                    <td>{{item.date| dateFormat}}</td>
                    <!--<td><Button type="error" @click="deleteImage(item)">删除</Button></td>-->
                </tr>
                </tbody>
            </table>
            <no-data v-else></no-data>
            <div class="mt-20 mb-20 text-center">
                <Page :total="count" :current="page" @on-change="nextPage" show-total></Page>
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
        data(){
          return{
              show:false,
              page:1,
              page_num:10,
              searchValue:'',
              formData:{
                  type:''
              }
          }
        },
        components:{NoData,UploadImage,ViewScaleImage},
        computed: {
            ...mapState({
                list:(state)=>state.image.imageTypes,
            })
        },
        methods:{
            addImageType(){

            },
            showModal(){
                this.show = true
            },
        },
        created(){
            this.$store.dispatch('image/getImageTypeList',{})
            // this.$store.dispatch('user/getUserList',{})
        }
    }
</script>
<style scoped>

</style>
