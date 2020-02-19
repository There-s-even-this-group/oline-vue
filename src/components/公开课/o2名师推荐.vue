<template>
<div class="Teacher-Recommend-main">
    <div class="mstj_Js">
        <dl>
            <dt><a href="#"><img src="~assets/img/托福人/125x125.jpg" ></a></dt>
            <dd>
                <div class=""><span>老师名字：</span></div>
                <div class="mstj_Nr"><span>一般的网站会有很多页面,面包屑导航可以大大改善用户寻找他们的路径的方法。就可用性而言,面包屑可以减少一个网站的用户返回上一级页面的操作次数,而且他们可以提高般的网站会有很多页面,面包屑导航可以大大改善用户寻找他们的路径的方法。就可用性而言,面包屑可以减少一个网站的用户返回上一级页面的操作次数,而且他们可以提</span></div>
                <div class="">
                    <a href="###" class="openClassZan classInfo_zan">30</a>
                    <a href="../个人资料/教师-明细页.html" class="classInfo_weibo">查看更多</a>
                </div>
            </dd>
        </dl>
    </div>
    <div class="page-list">
        <tfr-page-list></tfr-page-list>
    </div>
</div>
</template>

<script>
    import tfrPageList from "../common/tfrPageList";
    export default {
        components: {
          tfrPageList,
        },
        data() {
            return {}
        },
        mounted: function () {
        },
        methods: {}
    }
</script>

<style scoped>
    .Teacher-Recommend-main{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .mstj_Js{
        padding:40px 0;
        overflow:hidden;
        width: 1180px;
    }
    .mstj_Js dl {
        display: flex;
        flex-direction: row;
    }
    .mstj_Nr{color:#555; line-height:20px; height:60px; margin-bottom:25px; padding-top:5px; overflow:hidden;}
    .mstj_Nr span{font-weight:bold;}
    a.openClassZan{
        width:52px; height:23px;
        display:block;
        overflow:hidden;
        background:url(~assets/img/公开课/zan.png) 0 0 no-repeat;
        text-align:center;
        padding-left:32px;
        color:#fff;
        margin:0 auto;
        line-height:24px;
    }
    a.classInfo_zan{ margin-top:10px; margin-right:10px; margin-left: 10px; float:left;}
    a.classInfo_weibo{height:23px;
        display: inline-table;
        overflow:hidden;
        padding-left:15px;
        color:#009FD6;
        line-height:24px;
        float:left;
        margin-top:10px;
        text-decoration:underline;
    }
    .page-list{
        width: 1180px;
        display: inline-block;
    }
</style>
