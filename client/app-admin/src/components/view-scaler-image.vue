<template>
    <div class="demo-upload-list">
        <img :src="url">
        <div class="demo-upload-list-cover">
            <Icon type="ios-eye-outline" @click.native="handleView()"></Icon>
        </div>
        <Modal title="查看大图" v-model="visible">
            <img :src="viewImage" v-if="visible" style="width: 80%;margin: auto">
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "view-scaler-image",
        data () {
            return {
                viewImage:'',
                visible:false,
            }
        },
        props:['url'],
        methods: {
            handleView() {
                this.viewImage = this.url;
                this.visible = true;
            },
        }
    }
</script>

<style scoped>
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>