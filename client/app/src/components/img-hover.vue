<template>
    <div @mouseenter="show=true; " @mouseleave="show=false;">
        <slot name="title"></slot>
        <div class="img-wrap">
            <img :src="url" class="width-100 normal"/>
            <img :src="url" class="img-hover" :class="{hover:show}"/>
            <div name="intro" class="intro" :class="{hover:show}" v-if="!!hasIntro">
                <slot name="intro"></slot>
            </div>
        </div>
        <slot name="content"></slot>
    </div>
</template>

<script>
    export default {
        name: "img-hover",
        props: ['url', 'hasIntro'],
        data() {
            return {
                show: false,
                opacity: 1
            }
        }
    }
</script>

<style lang="scss" scoped>
    .intro {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        background: rgba(0, 0, 0, 0.5);
        display: none;
        cursor: pointer;
        &.hover {
            display: block;
        }
    }

    .img-hover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        transition: all ease-in-out 500ms;
        cursor: pointer;
    }

    .img-hover.hover {
        position: absolute;
        top: -10%;
        left: -10%;
        width: 120%;
        height: 120%;
        z-index: 100;
    }

    .img-wrap {
        overflow: hidden;
        position: relative;
    }

    .normal {
        opacity: 0;
    }
</style>
