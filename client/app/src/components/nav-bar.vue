<template>
    <div class="nav-bar">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <MenuItem name="1">
               首页
            </MenuItem>
            <MenuItem name="2">
               关于我
            </MenuItem>
            <MenuItem name="3">
                日积月累
            </MenuItem>
            <MenuItem name="4">
                不亦乐乎
            </MenuItem>
        </Menu>
    </div>
</template>

<script>
    export default {
        name: "nav-bar"
    }
</script>

<style lang="scss" scoped>
    .nav-bar{
        text-align: right;
        position: relative;
    }
    .nav-bar li{
        position: relative;
    }
    /deep/ ul.ivu-menu > li.ivu-menu-item{
        /*position: relative;*/
        &:after{
            position: absolute;
            content: '';
            bottom: 0;
            height: 3px;
            left: 0;
            right: 100%;
            background: #f5a623;
            transition: right ease-in-out 300ms;
         }
        &.ivu-menu-item-selected.ivu-menu-item-active:after{
            right: 0;
        }
    }
</style>