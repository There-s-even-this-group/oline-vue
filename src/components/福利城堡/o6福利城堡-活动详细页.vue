<template>
    <div>
        <div class="openMenu">
            <div class="doc11801">
                <ul class="fn-clear1" style="padding-left:220px;">
                    <li class="openMenuOn"><a href="###" style="color:#00EE00">公益商城</a></li>
                    <li class="openMenuOn"><a href="###" style="color: #080808">特色商城</a></li>
                    <li class="openMenuOn"><a href="###" style="color: #080808">名师精品课商城</a></li>
                </ul>
            </div>
        </div>
        <div class="doc1180">
            <div class="crumbs_patch">
                <a href="###">公开课</a>》
                <a href="###">最新公开课</a>》
                <span>2015年托福英语考试</span>
                <div class="castleInfo">
                    <dl class="tu">
                        <dt class="tu1"><a href="###" ><img src="../../assets/img/福利城堡/classfeng.jpg" width="480" height="300"></a></dt>
                        <dd class="tu2">
                            <div class="castleInfo_title" style="color: #080808">安帅：打马竞伊斯科和J罗可能一起上|曝佩德罗已决定夏季离开巴萨</div>
                            <br>
                            <div class="castleTime" style="color: #080808">
                                上课时间：<span>2015-10-29</span>到<span>2016-10-29</span>&nbsp;&nbsp;&nbsp;&nbsp; 每周：
                                <span style="color: green;">2、4、6</span>&nbsp;的&nbsp;<span style="color: red;">17：30-19：30</span>上课
                            </div>
                            <div  class="flcb_cardTech" style="color: #080808">
                                <span class="first">主讲老师：</span>
                                <span class="teacherPic"><img src="../../assets/img/福利城堡/teacherfuli.jpg"></span>
                                <span class="name">老师姓名</span>
                                <span class="zan"><a href="###"><img src="../../assets/img/福利城堡/dianzan.jpg"></a></span>
                                <span class="zanNum">(32)</span>

                            </div>
                            <br>
                            <div class="castleInfo_time" style="color: #080808">活动地点：YY8637频道</div>
                            <br>
                            <div class="castleInfo_time" style="color: #080808">
                                <span ><b>12345</b>人参与</span>
                                <span class="castleInfo_Cy"><b>400</b>人关注</span>
                                <span class="castleInfo_Cy">RMB：<b style="color: green;">0</b></span>
                                <span class="glyphicon glyphicon-heart" style="font-size: 25px;color: #E6312A;" aria-hidden="true"></span>
                            </div>
                            <br>
                            <div class="fn-clear marginB15">
                                <a  class="classInfo_ljbm" style="color: #d9edf7" @click="enter()">立即报名</a>
                                <a href="###" class="classInfo_join" style="color: #5bc0de">加入该活动群</a>
                            </div>
                            <br>
                            <div class="classInfo_icon fn-clear">
                                <ul>
                                    <li><a href="###" class="classInfo_iconWx">微信</a></li>
                                    <li><a href="###" class="classInfo_iconWb">微博</a></li>
                                    <li><a href="###" class="classInfo_iconKj">空间</a></li>
                                    <li><a href="###" class="classInfo_iconQQ">QQ</a></li>
                                    <li><a href="###" class="classInfo_iconrr">人人</a></li>
                                </ul>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="classInfo_main">
            <el-tabs v-model="activeName" @tab-click="handleClick" class="labelTitle">
                <el-tab-pane label="活动详情" name="first" :lazy="true"><huodongxiangqing /></el-tab-pane>
                <el-tab-pane label="资料下载" name="second" :lazy="true"><ziliaoxiazai /></el-tab-pane>
                <el-tab-pane label="考生评价" name="third" :lazy="true"><kaoshengpingjia /></el-tab-pane>
            </el-tabs>
        </div>
        <div class="ganxingqu">
            <div class="ganganxingqu">
                <div class="ganxingquH3" style="color: #029ed7">您可能感兴趣</div>
                <br>
                <ul class="xingquu">
                    <li class="xingqu">
                        <div class="ganxingquPic"><img src="../../assets/img/福利城堡/classfeng.jpg" width="350" height="200"></div>
                        <div class="ganxingquText">托福热血口语强化班托福热血口语强化班托福热血口语强化班托福热血口语强化班</div>
                    </li>
                    <li class="xingqu">
                        <div class="ganxingquPic"><img src="../../assets/img/福利城堡/classfeng.jpg" width="350" height="200"></div>
                        <div class="ganxingquText">托福热血口语强化班托福热血口语强化班托福热血口语强化班托福热血口语强化班</div>
                    </li>
                    <li class="xingqu">
                        <div class="ganxingquPic"><img src="../../assets/img/福利城堡/classfeng.jpg" width="350" height="200"></div>
                        <div class="ganxingquText">托福热血口语强化班托福热血口语强化班托福热血口语强化班托福热血口语强化班</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import huodongxiangqing from "../福利城堡/choose_class/xiangqing";
    import ziliaoxiazai from "../福利城堡/choose_class/ziliaoxiazai";
    import kaoshengpingjia from "../福利城堡/choose_class/kaoshengpingjia";
    export default {
        components:{
            huodongxiangqing,
            kaoshengpingjia,
            ziliaoxiazai
        },
        data() {
            return {
                activeName: 'first',
            }
        },
        mounted: function () {
        },
        methods: {
            enter() {
                this.$router.push('/welfare_castle/enter_welfare_castle')
            },
        }
    }
</script>

<style scoped>
    .doc11801{
        background-color: #a2a2a2;
        border-radius: 0px;
        color:#000000;
    }
    .openMenuOn{
        float: left;
        width: 120px;
    }
    .fn-clear1{
        width:1200px;
        height:55px;
        padding:20px;
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
    a.onn{
        width:100px;
        height:600px;
    }
    .castleInfo{
        width:1100px;
        height:320px;
        float: left;
    }
    .tu1{
        width:500px;
        height:600px;
        float: left;
    }
    .tu2{
        width:600px;
        height:600px;
        font-size: 16px;
        float: left;
    }
    .classInfo_join{
        height: 35px;
        line-height: 18px;
        padding: 0 11px;
        border: 2px #5bc0de solid;
        border-radius: 3px;
        padding-left: 50px;
        padding-right: 50px;
        display: inline-block;
        font-size: 15px;
        outline: none;
        text-align: center;
        line-height:30px;
    }
    .classInfo_ljbm{
        height: 35px;
        line-height: 18px;
        padding: 0 11px;
        padding-left: 50px;
        padding-right: 50px;
        border: 2px #c9302c solid;
        border-radius: 3px;
        display: inline-block;
        font-size: 15px;
        outline: none;
        text-align: center;
        line-height:30px;
        background-color: #c9302c;
    }
    .castleInfo_Cy{
        padding-left: 20px;
    }
    .classInfo_main{
        height:980px;
    }

    .xingqu{
        float: left;
        width: 350px;
    }
    .xingquu{
        padding-left: 20px;
    }
    .ganxingqu{
        padding-left: 150px;
        height:300px;
        width: 1490px;
        float: left;
    }
    .labelTitle{
        float: left;
        padding-left: 160px;
    }
    .ganganxingqu{
        background-color: #d5d5d5;
        height: 300px;
        width: 1200px;
        padding-left: 40px;
        float: left;
    }
    .ganxingquH3{
        padding-left: 20px;
        padding-top: 15px;
    }
</style>
