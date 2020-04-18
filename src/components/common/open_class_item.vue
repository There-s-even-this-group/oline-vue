<template>
    <div class="open-class-item">
        <div class="openClassDate">
            <span class="openClassD">{{getday}}日</span><span class="openClassM">{{getmonth}}月</span>
        </div>
        <div>
            <dl >
            <dt>
                <div class="openClassTec"><a href="#"><img src="~assets/img/托福人/125x125.jpg" width="125" height="125"></a></div>
                <div class="openClassName">主讲人：{{openClass.mainSpeaker}}</div>
                <a class="openClassZan" href="###">32</a>
                <div class="openClassJieshao">{{openClass.introducingCourse}}</div>
                <div class="openClassMore"><a href="###">了解更多</a></div>
            </dt>
            <dd>
                <h3 class="openClassTitle">{{openClass.public_className}}</h3>
                <div class="openClassTime">课程时间：<span>{{openClass.startClassDate}}</span>&nbsp;&nbsp;<span>{{openClass.beginClassTime +'-' + openClass.endClassTime}}</span></div>
                <div class="openClassPic">
                   <img :src="'http://120.27.241.26/'+openClass.public_classPicture" width="720" height="415">
                </div>
            </dd>
        </dl>
            <div class="openBaoming">
                <slot name="imgOfenter">
                <a href="#" class="openClassBm" @click="courseDetails">立即报名</a>
                </slot>
                <span>已报名人数：<b>{{openClass.sign_Number}}人</b></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "open_class_item",
        data() {
            return {

            }
        },
        computed:{
            getday: function(){
                let dayArr = this.openClass.createDate.split('-')
                return dayArr[2];
            },
            getmonth: function(){
                let dayArr = this.openClass.createDate.split('-')
                return dayArr[1];
            }
        },
        props: {
            openClass: {
                type: Object,
                default() {
                    return {};
                }
            },
            index: {
                type: Number,
                default() {
                    return 0;
                }
            }
        },
        methods: {
            courseDetails() {
                this.$router.push({
                    path:'/open_class/courseDetails',
                    query:{
                        public_id:this.openClass.public_classID
                    }
                })
            },
        },
    }
</script>

<style scoped>
    .open-class-item{
        width:1040px;
        border-left:1px solid #dedede;
        padding-left:30px;
        display: flex;
        margin-top: 10px;
    }
    .open-class-item dl {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
    }
    .open-class-item dt{
        width:auto;
        padding:120px 75px 0;
    }
    .openClass dd{
        width:720px;
    }
    .openClassDate{
        width:110px; height:97px;
        background:url(~assets/img/公开课/openClassTime.png) 0 0 no-repeat;
        z-index:2;color:#fff;text-align:center; padding-right:2px;
        margin-right: 0px;

    }
    .openClassD{
        width:105px;
        height:50px;
        display:block;
        padding-top:10px;
        font-size:30px;
        line-height:50px;
    }
    .openClassM{
        width:105px;
        height:20px;
        display:block;
        line-height:20px;
    }
    .openClassTec{
        width:131px;
        height:131px;
        margin:0 auto;
        border:solid 1px #d3d3d3;
        padding:6px 0 0 6px;
    }
    .openClassName{
        padding:10px 0 10px;
        text-align:center;
    }
    a.openClassZan{
        width:52px;
        height:23px;
        display:block;
        overflow:hidden;
        background:url(~assets/img/公开课/zan.png) 0 0 no-repeat;
        text-align:center;
        padding-left:32px;
        color:#fff;
        margin:0 auto;
        line-height:24px;
    }
    .openClassJieshao{
        color:#999;
        font-size:12px;
        padding:15px 0;
        width: auto;
    }
    .openClassMore{
        text-align:center;
    }
    .openClassMore a{
        color:#009fd6;
        font-weight:bold;
        text-decoration:underline;
        font-size:12px;
    }

    .openClassTitle{
        font-size:26px;
        line-height:40px;
        padding:40px 0 5px;
    }
    .openClassTime{
        color:#999;
        padding-bottom:20px;
        font-size:12px;
    }
    .openBaoming{
        overflow:hidden;
        padding-bottom:50px;
        border-bottom:solid 1px #dedede;
        display: flex;
    }
    .openBaoming span {
        margin-top: 8px;
    }
    a.openClassBm{
        width: 180px;
        text-align: left;
        background:url(~assets/img/公开课/baoming.png) 0 0 no-repeat;
        line-height:39px;
        color:#fff;
        padding-left:20px;
    }
</style>