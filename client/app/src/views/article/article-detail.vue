<template>
    <content-container class="body">
        <div slot="header">
            <!--<nav-bar2></nav-bar2>-->
        </div>
        <div class="top-part" slot="content-fullscreen">
            <div class="container">
                <div class="nav-bar-home pl-20 pr-20 pt-10 pb-10">
                    <Breadcrumb separator=">">
                        <BreadcrumbItem to="/">主页</BreadcrumbItem>
                        <BreadcrumbItem to="/components/breadcrumb">dfdd</BreadcrumbItem>
                        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
        </div>
        <div slot="content" style="margin-top: -160px;padding-bottom: 160px;" class="bg-white">
            <div>
                <Row>
                    <Col :xs="24" :sm="14" :md="16" class="pl-20 pr-20 col">
                        <div class="mt-20">
                            <img src="https://images.pexels.com/photos/1374430/pexels-photo-1374430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                                 style="max-width:100%;max-height: 400px;"/>
                            <br/><br/><br/><br/>
                            <h2 class="text-center">女孩都有浪漫的小情怀——浪漫的求婚词</h2><br/><br/>
                            <p style="line-height: 200%" class="color-lighter-grey ft-12 pb-10">作者：jmx <span
                                    class="pl-20">修改于：2010-12-10 10:00</span>
                            </p>
                            <p class="content color-grey" style="line-height: 200%">
                                本文很长，记录了我博客建站初到现在的过程，还有我从毕业到现在的一个状态，感谢您的阅读，如果你还是学生，也许你能从此文中，找到我们曾经相似的地方。如果你已经工作，有自己的博客，我想，你并没有忘记当初建立个人博客的初衷吧！<br/>

                                我的个人博客已经建站有8年的时间了，对它的热爱，一直都是只增未减。回想大学读书的那几年，那会儿非常流行QQ空间，我们寝室的室友还经常邀约去学校的网吧做自己的空间。系里有个男生，空间做得非常漂亮，什么悬浮，开场动画，音乐播放器，我们女生羡慕得不得了。还邀约他跟我们一起去通宵弄空间，网上可以找到很多免费的flash资源，还有音乐，那也是第一次接触js，知道在浏览器输入一个地址，修改一下数据，就能调用一些背景出来。然后把自己QQ空间弄得漂漂亮亮的，经常邀约室友来互踩。我记得08年地震，第二天晚上，我们寝室的几个人还淡定的在寝室装扮空间呢！
                                后来空间收费项目也多了，官方漏洞也修复了，加上临近毕业，又要忙着做毕业设计，就没再打理QQ空间。我知道现在的九零后，零零后，你们肯定没看过《一帘幽梦》，那会儿我也是疯狂追剧，喜欢上紫菱，喜欢上她的网站。想看看她的小世界，而我更想学着做一个她那样的网站。那会儿还天真的以为网上真的有她的网站，百度搜了好些天也没有。<br/>
                                要毕业的时候，要交作业了，感觉自己什么都没学会。室友拉着我们去看了她同学做的网站，我们一个个佩服得五体投地，甚至觉得太不可思议了。有难度，又怕自己不会。老师教我们怎么布局，怎么做，并没有教我们右键保存网页。不知道是谁先会了这绝技，然后我们一个个又跟打了鸡血似的，疯狂在网上找网页，右键另存为。然后一个个修改文字，图片。仿佛又回到了那会儿做QQ空间那个时候。拿着copy来，并且精心修改的作品，递交了毕业设计，顺利结业。那会儿还是很蒙，一种云里雾里的感觉，竟有种不知道自己到底是会还是不会的感觉，也就是大家常说的毕业迷茫期。
                            </p>
                        </div>
                    </Col>
                    <Col :xs="24" :sm="10" :md="8" class="pl-20 pr-20 col">
                        <div class="mt-20">
                            <catagorys></catagorys>
                        </div>
                        <div class="mt-20">
                            <recommands></recommands>
                        </div>

                    </Col>
                </Row>

            </div>
        </div>
    </content-container>

</template>

<script>


    import ContentContainer from "../../components/content-container";
    import NavBar2 from "../../components/nav-bar-2";
    import Recommands from "./recommands";
    import Catagorys from "./catagorys";

    export default {
        components: {
            Catagorys,
            Recommands,
            ContentContainer, NavBar2
        },
        name: "my-article",
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
    .body {
        background: rgba(0, 0, 0, 0.6);
    }

    .top-part {
        height: 360px;
        background: url("../../assets/index/bg1.jpeg") no-repeat center center;
        background-size: 100% auto;
        &:before {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            z-index: 0;
        }
        .container {
            position: relative;
            z-index: 1;
        }
    }

    .nav-bar-home {
        z-index: 10;
        display: inline-block;
        background: rgba(255, 255, 255, .8);
        /deep/ .ivu-breadcrumb-item-separator {
            color: #000000;
            padding: 0 5px;
        }
    }

    .col {
        transition: all ease-in-out 1000ms;
    }
</style>
