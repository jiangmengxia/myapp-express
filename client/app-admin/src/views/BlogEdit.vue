<template>
    <div class="app-container">
        <Row>
            <Col class="text-center" span="3" style="width: 60px;">
            <b>封面</b></Col>
            <Col span="20">
            <!--<upload-image max="1"></upload-image>-->
            <image-select v-model="cover" :list="list" v-if="list" placeholder="选择图片"
                          @on-change="onchange"></image-select>
            </Col>
        </Row>
        <Row class="mt-20">
            <Col class="text-center" span="3" style="width: 60px;">
            <b>标题</b></Col>
            <Col span="20">
            <Input v-model="title" placeholder="输入标题"/>
            </Col>
        </Row>
        <Row class="mt-20">
            <Col class="text-center" span="3" style="width: 60px;">
            <b>内容</b></Col>
            <Col span="20">
            <editor class="editor" :value="content" :setting="editorSetting" @input="contentChange"></editor>
            </Col>
        </Row>
        <Row class="mt-20">
            <Col class="text-center" span="3" style="width: 60px;">
            <b></b></Col>
            <Col span="20" class="text-center">
            <Button type="primary" @click="submit">保存</Button>
            <Button type="primary" @click="content=''">取消</Button>
            </Col>
        </Row>
        <br><br>
    </div>
</template>
<script>
    import editor from '../components/edit'
    import UploadImage from '../components/upload-image'
    import Input from "iview/src/components/input/input";
    import ImageSelect from '../components/image-select'
    import {mapState} from 'vuex'

    export default {
        name: "editor-demo",
        computed: {
            ...mapState({
                list: (state) => state.image.imageList.list
            })
        },
        data: function () {
            return {
                _id: '',
                title: '',
                content: '',
                cover: '',
                //tinymce的配置信息 参考官方文档 https://www.tinymce.com/docs/configure/integration-and-setup/
                editorSetting: {
                    height: 400,
                },
                imageList: [],
            }
        },
        methods: {
            contentChange(v) {
                this.content = v
            },
            submit() {
                this.$store.dispatch('blog/editBlog', {
                    _id: this._id, content: this.content, title: this.title, cover: this.cover, cb: () => {
                        window.location.reload()
                    }
                })
            },
            onchange(cover) {
                this.cover = cover
            }
        },
        components: {
            Input,
            ImageSelect,
            'editor': editor,
            'UploadImage': UploadImage
        },
        created() {
            let {_id} = this.$route.query
            this._id = _id;
            this.$store.dispatch('blog/getBlogById', {
                _id: _id, cb: (data) => {
                    let {title, content, cover} = data
                    this.title = title
                    this.content = content
                    this.cover = cover
                }
            })
            this.$store.dispatch('image/getImageList', {})
        }
    }
</script>
<style scoped>

</style>
