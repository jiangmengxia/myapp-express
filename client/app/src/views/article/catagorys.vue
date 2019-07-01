<template>
    <div>
        <line-title title="博客分类"></line-title>
        <br>
        <div>
            <Row class="ft-12">
                <line-text class="item" left="前端zreact相关" right="（12）"></line-text>
                <line-text class="item" left="前端vue相关" right="（12）"></line-text>
            </Row>
        </div>
    </div>
</template>

<script>
    import LineTitle from "../../components/line-title";
    import LineText from "../../components/line-text";

    export default {
        components: {
            LineText,
            LineTitle
        },
        name: "catagorys"
    }
</script>

<style lang="scss" scoped>
    .item{
        padding:0 15px;
        line-height:200%;
        &:after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 10px;
            right:10px;
            box-shadow:0 1px 1px 0 #dfdfdf;
         }
    }
</style>