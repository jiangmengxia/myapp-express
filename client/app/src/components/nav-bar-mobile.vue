<template>
    <div class="nav-bar-mobile">
        <div class="modal" v-if="show"></div>
        <div class="nav-bar" @touchmove="handleTouchStart">
            <Menu theme="dark" active-name="1" class="verical-menu" width="auto" @on-open-change="openChange">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-keypad-outline" style="font-size: 30px"/>
                    </template>
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
                </Submenu>
            </Menu>
        </div>
    </div>
</template>

<script>
    export default {
        name: "nav-bar",
        data(){
          return{
              show:false
          }
        },
        methods:{
            handleTouchStart(e){
                e.preventDefault()
            },
            openChange(e){
                console.log(e)
                if(e.length===0){//close
                    this.show = false
                }else{
                    this.show = true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255,255,255,0.2);
        z-index: 101;
    }
    .nav-bar{
        /deep/ .ivu-menu-dark{
            background: none;
        }
        /deep/ .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened{
            position: absolute;
            left: 0;
            right: 0;
            /*border: 2px solid #f5a623;*/
        }
        /deep/ ul.ivu-menu > li.ivu-menu-item {
            height: 64px;
            padding-top: 0;
            padding-bottom: 0;
        }
        /deep/ ul.ivu-menu > li.ivu-menu-item-selected.ivu-menu-item-active{
            background: #f5a623 !important;
        }
        /deep/ .ivu-menu-submenu-title {
            height: 64px;
            padding-top: 0;
            padding-bottom: 0;
            line-height: 64px;
        }
        /deep/ .ivu-menu-submenu-title-icon {
            display: none;
        }
    }
</style>