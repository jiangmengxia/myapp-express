<template>
    <div class="line-text">
        <span class="pull-left color-grey">{{left}}</span>
        <span class="pull-right color-grey">{{right}}</span>
        <div class="clx"></div>
    </div>
</template>

<script>
    export default {
        name: "line-text",
        props: ['left', 'right']
    }
</script>

<style scoped>
    .line-text {
        padding: 5px 0;
    }
</style>