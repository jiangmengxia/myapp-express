<template>
    <div class="waterfall-layout-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "waterfall-layout-item",

    }
</script>

<style scoped>
    .waterfall-layout-item{
        /*border: 1px solid #f00;*/
        transition: all ease-in-out 200ms;
    }
</style>