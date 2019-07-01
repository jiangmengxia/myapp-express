<template>
    <div id="side">
        <Menu theme="dark" active-name="1-1" :open-names="['1']" style="width: 100%">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    用户管理
                </template>
            </Submenu>
        </Menu>
    </div>
</template>

<script>
    export default {
        name: "side"
    }
</script>

<style scoped>

</style>