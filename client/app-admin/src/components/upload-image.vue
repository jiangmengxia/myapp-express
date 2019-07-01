<template>
    <div>
        <div class="demo-upload-list" v-for="item in uploadList">
            <div v-if="item.status === 'finished'">
                <img :src="item.url">
                <div class="demo-upload-list-cover">
                    <Icon type="ios-eye-outline" @click.native="handleView(item)"></Icon>
                    <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                </div>
            </div>
            <div v-else>
                <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
            </div>
        </div>
        <Upload
                ref="upload"
                :show-upload-list="false"
                :default-file-list="defaultList"
                :on-success="handleSuccess"
                :format="['jpg','jpeg','png']"
                :max-size="2048"
                :on-format-error="handleFormatError"
                :on-exceeded-size="handleMaxSize"
                :before-upload="handleBeforeUpload"
                multiple
                type="drag"
                :action="IMAGE_UPLOAD_URL"
                style="display: inline-block;width:58px;">
            <div style="width: 58px;height:58px;line-height: 58px; text-align: center;">
                <Icon type="camera" size="20"></Icon>
            </div>
            <Modal title="查看大图" v-model="visible">
                <img :src="viewImage" v-if="visible" style="width: 80%">
            </Modal>
        </Upload>

    </div>
</template>
<script>
    import {IMAGE_UPLOAD_URL} from 'apiConfig'

    export default {
        name: 'upload-image',
        /*限制最大上传数*/
        props: ['max'],
        data() {
            return {
                IMAGE_UPLOAD_URL: IMAGE_UPLOAD_URL,
                defaultList: [
                    // {
                    //     'name': 'a42bdcc1178e62b4694c830f028db5c0',
                    //     'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    // },
                    // {
                    //     'name': 'bc7521e033abdd1e92222d733590f104',
                    //     'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    // }
                ],
                imgName: '',
                visible: false,
                uploadList: [],
                viewImage: ''
            }
        },
        methods: {
            handleView(item) {
                this.viewImage = item.url;
                this.visible = true;
            },
            handleRemove(file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess(res, file) {
                file.url = res.data.path;
                file.name = res.data.name;
            },
            handleFormatError(file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize(file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            handleBeforeUpload() {
                let check = true
                if (this.max !== undefined)
                    check = this.uploadList.length < this.max;
                if (!check) {
                    this.$Notice.warning({
                        title: '最大上传'+this.max+'张照片'
                    });
                }
                return check;
            }
        },
        mounted() {
            this.uploadList = this.$refs.upload.fileList;
        }
    }
</script>
<style>
    .demo-upload-list {
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
        box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
        margin-right: 4px;
    }

    .demo-upload-list img {
        width: 100%;
        height: 100%;
    }

    .demo-upload-list-cover {
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .6);
    }

    .demo-upload-list:hover .demo-upload-list-cover {
        display: block;
    }

    .demo-upload-list-cover i {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>