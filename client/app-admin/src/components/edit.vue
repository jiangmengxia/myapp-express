<template>
    <textarea :id="id" :value="value"></textarea>
</template>
<script>
    import tinymce from 'tinymce/tinymce';
    import 'tinymce/themes/modern/theme';
    import 'tinymce/plugins/paste';
    import 'tinymce/plugins/link';
    //
    import 'tinymce/plugins/image'
    import 'tinymce/plugins/code'
    import 'tinymce/plugins/table'
    import 'tinymce/plugins/lists'
    import 'tinymce/plugins/contextmenu'
    import 'tinymce/plugins/wordcount'
    import 'tinymce/plugins/colorpicker'
    import 'tinymce/plugins/textcolor'

    import IMAGE_API from 'apis/image'

    const INIT = 0;
    const CHANGED = 2;
    var EDITOR = null;
    export default {
        props: {
            value: {
                type: String,
                required: true
            },
            setting: {},
        },
        watch: {
            value: function (val) {
                // console.log('init ' + val)
                if (this.status == INIT || tinymce.activeEditor.getContent() != val) {
                    tinymce.activeEditor.setContent(val);
                }
                this.status = CHANGED
            }
        },
        data: function () {
            return {
                status: INIT,
                id: 'editor-' + new Date().getMilliseconds(),
            }
        },
        methods: {},
        mounted: function () {
            const _this = this;
            const setting =
                {
                    selector: '#' + _this.id,
                    language: "zh_CN",
                    plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
                    init_instance_callback: function (editor) {
                        EDITOR = editor;
                        console.log("Editor: " + editor.id + " is now initialized.");
                        editor.on('input change undo redo', () => {
                            var content = editor.getContent()
                            // console.log(content)
                            _this.$emit('input', content);
                        });
                    },
                    // imagetools_cors_hosts: ['wpimg.wallstcn.com', 'wallstreetcn.com'],
                    images_upload_url: 'http://localhost:3000/image/upload',
                    images_upload_handler: (blobInfo, success, failure) => {
                        console.log('blobInfo',blobInfo)
                        let fd = new FormData()
                        fd.append('file',blobInfo.blob())
                        IMAGE_API.addImage(fd).then(res=>{
                            let result = res.data
                            success(result.path)
                        })
                    },

                };
            Object.assign(setting, _this.setting)
            tinymce.init(setting);
        },
        beforeDestroy: function () {
            tinymce.get(this.id).destroy();
        }
    }
</script>
