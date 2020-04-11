<template>
    <div class="doc1180">
        <div class="crumbs_patch">
            <a href="" @click="toPublicClass">公开课</a>》
            <a href="" @click="toLatestPublicClass">最新公开课</a>》
            <span>2015年托福英语考试</span>
        </div>
        <div class="classInfo">
            <dl>
                <dt><a href="###"><img src="~assets/img/公开课/500x290.png"></a></dt>
                <dd>
                    <div class="classInfo_title">安帅：打马竞伊斯科和J罗可能一起上|曝佩德罗已决定夏季离开巴萨</div>
                    <div class="classInfo_time"><span>课程时间：</span><span>2015-12-29</span><span>15:30-17:30</span></div>
                    <div class="classInfo_name">
                        <div class="classInfo_pic"><img src="~assets/img/托福人/125x125.jpg"></div>
                        <div class="classInfo_zjr">主讲人：天天</div>
                        <a href="###" class="openClassZan">30</a>
                        <div class="classInfo_adress"><span>|</span>上课方式：YYYY</div>
                    </div>
                    <div class="classInfo_icon">
                        <ul>
                            <li><a href="###" class="classInfo_iconWx">微信</a></li>
                            <li><a href="###" class="classInfo_iconWb">微博</a></li>
                            <li><a href="###" class="classInfo_iconKj">空间</a></li>
                            <li><a href="###" class="classInfo_iconQQ">QQ</a></li>
                            <li><a href="###" class="classInfo_iconrr">人人</a></li>
                            <li><slot name="download"></slot></li>
                        </ul>
                    </div>
                    <div class="classInfo_text">倒计时：10天18小时56分<span>|</span>已报名人数：230人</div>
                    <slot name="lijiBaoming">
                    </slot>
                </dd>
            </dl>
        </div>
        <div class="classInfo_main">
            <el-tabs v-model="activeName" @tab-click="handleClick" class="labelTitle">
                <el-tab-pane label="课程介绍" name="first" :lazy="true"><CourseIntroduction /></el-tab-pane>
                <el-tab-pane label="教师介绍" name="second" :lazy="true"></el-tab-pane>
            </el-tabs>
            <slot name="sideBar"></slot>
        </div>
    </div>
</template>

<script>
    import CourseIntroduction from "../公开课/o2课程详细页child/o2课程介绍";
    export default {
        components:{
            CourseIntroduction,
        },
        data() {
            return {
                activeName: 'first',
            };
        },
        mounted: function () {
        },
        methods: {
            toLatestPublicClass(){
                this.$router.replace({
                    path:'/online/open_class',
                    query:{

                    }
                })
            },
            toPublicClass(){

            },
            handleClick(tab, event) {
                console.log(tab, event);
            },

        }
    }
</script>

<style scoped>
    .doc1180{
        width:1180px; margin:0 auto
    }
    .crumbs_patch{
        display: flex;
        flex-direction: row;
        color:#999; line-height:22px; font-size:12px;padding:33px 0 15px;}
    .crumbs_patch a{margin-right:10px;}
    .classInfo{padding-bottom:40px;}
    .classInfo dl{overflow:hidden;}
    .classInfo dt,
    .classInfo dt img{width:500px; height:290px;}
    .classInfo dt{float:left; overflow:hidden;}
    .classInfo dd{width:660px; float:right;}
    .classInfo_title{
        text-align: left;
        font-size:20px; line-height:30px;}
    .classInfo_time{
        margin-top: 5px;
        width:300px;color:#777;
        text-align: left;
        font-size:14px; line-height:24px;margin-bottom:10px;}
    .classInfo_time span{margin-right:5px;}
    .classInfo_pic {width:42px; height:42px;padding:1px 0 0 1px; overflow:hidden; border:solid 1px #dadada; float:left; margin-right:10px;}
    .classInfo_pic img{width:41px; height:41px;}
    .classInfo_name{overflow:hidden; font-weight:bold;display: flex}
    .classInfo_zjr{height:45px; display:inline-table; float:left; line-height:45px; margin-right:10px;}
    a.openClassZan{
        float: left;
        width: 92px;
        height:45px;
        overflow:hidden;
        background:url(~assets/img/公开课/zan.png) 0 0 no-repeat;
        padding-left:32px;
        margin-top: 10px;
        line-height:24px;
        color:#fff;
    }
    .classInfo_adress{width:380px;height:45px; line-height:45px; margin-bottom:20px;}
    .classInfo_adress span{ margin-right:10px;}
    .classInfo_icon{
        width: 500px;
        text-align: left;
    }
    .classInfo_icon ul{border-top:solid 1px #eee;border-left:solid 1px #eee;display:inline-table;}
    .classInfo_icon li{height:38px; float:left;display:inline-table;border-bottom:solid 1px #eee;border-right:solid 1px #eee; overflow:hidden;}
    a.classInfo_iconWx{width:62px;height:38px;display:block; background:url(~assets/img/公开课/classInfo_icon.png) 0 0 no-repeat; text-indent:-9999px;}
    a.classInfo_iconWx:hover{background:url(~assets/img/公开课/classInfo_icon.png) -62px 0 no-repeat;}
    a.classInfo_iconWb{width:62px; height:38px; display:block; background:url(~assets/img/公开课/classInfo_icon.png) 0 -38px no-repeat; text-indent:-9999px;}
    a.classInfo_iconWb:hover{background:url(~assets/img/公开课/classInfo_icon.png) -62px -38px no-repeat;}
    a.classInfo_iconKj{width:62px; height:38px; display:block; background:url(~assets/img/公开课/classInfo_icon.png) 0 -76px no-repeat; text-indent:-9999px;}
    a.classInfo_iconKj:hover{background:url(~assets/img/公开课/classInfo_icon.png) -62px -76px no-repeat;}
    a.classInfo_iconQQ{width:62px; height:38px; display:block; background:url(~assets/img/公开课/classInfo_icon.png) 0 -114px no-repeat; text-indent:-9999px;}
    a.classInfo_iconQQ:hover{background:url(~assets/img/公开课/classInfo_icon.png) -62px -114px no-repeat;}
    a.classInfo_iconrr{width:62px; height:38px; display:block; background:url(~assets/img/公开课/classInfo_icon.png) 0 -152px no-repeat; text-indent:-9999px;}
    a.classInfo_iconrr:hover{background:url(~assets/img/公开课/classInfo_icon.png) -62px -152px no-repeat;}

    .flcb_cardDownload li{height:38px; line-height:38px; padding-left:15px; border:solid 1px #eee; margin-bottom:10px;color:#555; font-size:14px;}
    .flcb_cardDownload li span{margin-right:20px; display:inline-table; float:left; height:38px;}

    .classInfo_text{
        text-align: left;
        height:44px; line-height:44px; color:#555;}
    .classInfo_text span{ margin:0 10px;}
    .classInfo_main{
        overflow:hidden;
        display: flex;
    }
    .classInfo_menu li{height:50px;width:120px; text-align:center;line-height:50px;font-size:16px; float:left; background:url(~assets/img/公开课/classInfo_Button.png) 0 -140px;}
    .classInfo_menu li.on{background:url(~assets/img/公开课/classInfo_Button.png) 0 -195px repeat-x;}
    .classInfo_menu li a{color:#555;}
    .classInfo_menu li.on a{color:#009FD6;}
    .classInfo_Js dt{width:137px; height:131px; border:solid 1px #dcdcdc;padding-top:6px; float:left;}
    .classInfo_Js dt a{width:125px; height:125px; display:block; margin:0 auto;}
    .classInfo_Js dd{width:680px; float:right;}
    .classInfo_Nr span{font-weight:bold;}
    .classInfo_list dl{margin-bottom:15px;overflow:hidden;}
    .classInfo_list dt{font-size:16px; line-height:36px; padding-left:35px; background:url(~assets/img/公开课/dian_1.png) 20px 15px no-repeat;color:#333;border-bottom:solid 1px #dcdcdc;}
    .classInfo_list dd{overflow:hidden;border-bottom:solid 1px #dcdcdc;}
    .classInfo_contact h3{font-size:16px; font-weight:bold; line-height:26px;}
    .classInfo_contact p{color:#999; font-size:16px; line-height:26px;}
    .classInfo_item dl{overflow:hidden; border-bottom:1px dashed #dcdcdc; padding-bottom:15px;}
    .classInfo_item dt{width:48px; height:48px; float:left;}
    .classInfo_item dt img{width:48px; height:48px;}
    .classInfo_item dd{width:205px; float:right;}
    .classInfo_itemDd h3{font-size:12px; font-weight:bold; line-height:22px;color:#68BF4A; margin-bottom:5px;}
    .classInfo_itemDd h3 img{ vertical-align:middle; margin-left:5px;}
    .classInfo_itemDd p{color:#999; font-size:12px;}
    .classInfo_itemDd p a{color:#999;}
    .classInfo_itemDd p a:hover{color:#68BF4A}
    .classInfo_itemDd span{margin-right:5px;}
    .labelTitle{
        flex: 3;
    }
</style>