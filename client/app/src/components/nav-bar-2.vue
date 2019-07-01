<template>
    <div class="nav-bar">
        <ul name="name">
            <router-link to="/">
                <li class="ft-12" name="1" :class="{active:name===1}" @click="handleClick(1)">
                    主页
                </li>
            </router-link>
            <router-link to="/person-home">
                <li class="ft-12" name="2" :class="{active:name===2}" @click="handleClick(2)">
                    酸豆角
                </li>
            </router-link>
            <router-link to="/person-home">
                <li class="ft-12" name="3" :class="{active:name===3}" @click="handleClick(3)">
                    酸菜鱼
                </li>
            </router-link>
            <router-link to="/person-home">
                <li class="ft-12" name="4" :class="{active:name===4}" @click="handleClick(4)">
                    群英会
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "nav-bar",
        data() {
            return {
                name: 0,
            }
        },
        props: {
            init: {
                type: Number,
            }
        },
        methods: {
            handleClick(name) {
                this.name = name
            }
        },
        watch: {
            init(value) {
                this.name = value
            }
        },
        created() {
            if (this.init !== undefined)
                this.name = this.init
        }
    }
</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
    }

    li {
        line-height: 40px;
        background: rgba(0, 0, 0, 0.3);
        margin: auto 0;
        padding: 0 10px;
        display: inline-block;
        color: #ffffff;
        cursor: pointer;
        &:hover {
            background: rgba(0, 0, 0, 0.8);
        }
        &.active {
            background: rgba(132, 112, 255, 1);
        }
    }
</style>