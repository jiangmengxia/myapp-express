<template>
    <div id="side">
        <Menu theme="dark" active-name="1-1" :open-names="['1']" style="width: 100%">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    用户管理
                </template>
                <router-link to="/list">
                    <MenuItem name="1-1">所有用户</MenuItem>
                </router-link>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    文章管理
                </template>
                <router-link to="/blog/cata">
                    <MenuItem name="2-0">文章类型管理</MenuItem>
                </router-link>
                <router-link to="/blog/add">
                    <MenuItem name="2-1">新增文章</MenuItem>
                </router-link>
                <router-link to="/blog/list">
                    <MenuItem name="2-2">我的文章</MenuItem>
                </router-link>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    图片管理
                </template>
                <!--<router-link to="/image/type-list">-->
                <!--<MenuItem name="3-1">图片类型管理</MenuItem>-->
                <!--</router-link>-->
                <router-link to="/image/list">
                    <MenuItem name="3-2">图片管理</MenuItem>
                </router-link>
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
