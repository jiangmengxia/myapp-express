<template>
    <div class="ft-16 title"><b>{{title}}</b>
        <div class="pull-right">
            <slot></slot>
        </div>
        <div class="clx"></div>
    </div>
</template>

<script>
    export default {
        props: ['title'],
        name: "line-title"
    }
</script>

<style lang="scss" scoped>
    .title{
        padding: 5px 10px 5px 20px;
        margin-left: 10px;
        background: #ffffff;
        position: relative;
        border-bottom: 1px solid #000000;
        line-height: 200%;
        color: #000000;
        overflow: visible;
        &:before{
            content: '';
            position: absolute;
            top: 15px;
            bottom: 0;
            left: 0;
            width: 5px;
            /*height: 100%;*/
            background: #000000;
            transform: rotate(45deg);
        }
    }
</style>