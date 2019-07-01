<template>
    <div>
        <div class="pd-0 card">
            <line-title title="本栏推荐"></line-title><br>
            <div class="rec-item pb-15 mb-20">
                <div class="ft-14 color-grey pl-10 pr-10 title"><b>个人博客，属于我的小世界</b></div>
                <div class="pl-10 pr-10 pt-10 pb-10 ft-14 color-light-grey">
                    <img src="https://wx2.sinaimg.cn/crop.0.6.1920.1067/006Pj7Mwgy1ftsssahladj31hc0u01kx.jpg"
                         align="left" width="100" hspace="0" vspace="0" style="margin-right: 5px;">
                    杨青，一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。
                </div>
            </div>
            <div class="rec-item pb-15 mb-20">
                <div class="ft-14 color-grey pl-10 pr-10 title"><b>个人博客，属于我的小世界</b></div>
                <div class="pl-10 pr-10 pt-10 pb-10 ft-14 color-light-grey">
                    <img src="https://wx2.sinaimg.cn/crop.0.6.1920.1067/006Pj7Mwgy1ftsssahladj31hc0u01kx.jpg"
                         align="left" width="100" hspace="0" vspace="0" style="margin-right: 5px;">
                    杨青，一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。
                </div>
            </div>
            <div class="rec-item pb-15 mb-20">
                <div class="ft-14 color-grey pl-10 pr-10 title"><b>个人博客，属于我的小世界</b></div>
                <div class="pl-10 pr-10 pt-10 pb-10 ft-14 color-light-grey">
                    <img src="https://wx2.sinaimg.cn/crop.0.6.1920.1067/006Pj7Mwgy1ftsssahladj31hc0u01kx.jpg"
                         align="left" width="100" hspace="0" vspace="0" style="margin-right: 5px;">
                    杨青，一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LineTitle from '@/components/line-title'
    export default {
        name: "recommands",
        components:{LineTitle}
    }
</script>

<style lang="scss" scoped>
    .card{
        line-height: 150%;
        letter-spacing: 1px;
        cursor: pointer;
    }
    .title{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .rec-item{
        border-bottom: 1px  solid #dfdfdf;
    }
    .rec-item:hover{
        .title{
            color: #454c5b;
            text-shadow: #dfdfdf 1px 0 2px, #dfdfdf 0 1px 2px, #dfdfdf -1px 0 2px, #dfdfdf 0 -1px 2px;
        }
        .color-light-grey{
            color: #5b6270;
        }
    }
</style>