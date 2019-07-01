<template>
    <h2 class="text-center title bg-white color-normal">
        <span class="title-c">
            {{title}}
            <div class="line-left"></div>
            <div class="line-right"></div>
        </span>
    </h2>
</template>

<script>
    export default {
        props: ['title'],
        name: "line-title-main"
    }
</script>

<style lang="scss" scoped>
    .title{
        padding: 5px 10px 5px 20px;
        line-height: 200%;
        /*margin-bottom: 20px;*/
    }
    .title-c{
        position: relative;
        &:after{
            position: absolute;
            content: '';
            width: 40px;
            height: 2px;
            background: #434343;
            top: 50%;
            right: -40px;
            margin-right: -10px;
        }
        &:before{
            position: absolute;
            content: '';
            width: 40px;
            height: 2px;
            background: #434343;
            top: 50%;
            left: -40px;
            margin-left: -10px;
        }
        &>.line-right{
            position: absolute;
            content: '';
            width: 80px;
            height: 2px;
            background: #232323;
            top: 50%;
            right: -80px;
            margin-right: -20px;
            margin-top: 4px;
        }
        &>.line-left{
            position: absolute;
            content: '';
            width: 80px;
            height: 2px;
            background: #232323;
            top: 50%;
            left: -80px;
            margin-left: -20px;
            margin-top: 4px;
        }
    }
</style>
