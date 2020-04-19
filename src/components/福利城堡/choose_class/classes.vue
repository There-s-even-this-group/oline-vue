<template>
    <div>
        <ul class="jiaoshi">
            <li class="jiaoshi1">
                <div><img src="../../../assets/img/福利城堡/classfeng.jpg" width="300" height="170"></div>
                <div class="RMBwei">RMB:<span style="color: green;">0</span>    RPB:<span style="color: green;">0</span></div>
            </li>
            <li class="jiaoshi2">
                <div><h3>托福英语强化班</h3></div>
                <br>
                <div>上课时间：<span>2015-10-29</span>到<span>2016-10-29</span>&nbsp;&nbsp;&nbsp;&nbsp; 每周：
                    <span style="color: green;">2、4、6</span>&nbsp;的&nbsp;<span style="color: red;">17：30-19：30</span>上课</div>
                <div>主讲老师：<span class="teacherPic"><img src="../../../assets/img/福利城堡/teacherfuli.jpg"></span>老师姓名<a href="###"><img src="../../../assets/img/福利城堡/dianzan.jpg"></a>(32)</div>
                <br>
                <div>适合学员： 2015年1月-2月参加托福考试的考生</div>
                <br>
                <div>托福考什么，我们就背什么？不是让你去背几万个词汇，也不是让你去背那些高大上的、千奇百怪的词汇，我们就背托福要考的词汇，这里有阅读的夺命词汇、
                    有听力的考点词、有口语的语料库，每天听写三场，每次只要30分钟，就能让你提前准备好托福考试所需要的各种词汇！1月-2月份的考生朋友们，赶紧参与进来吧！
                    <br> 托福考什么，我们就背什么？不是让你去背几万个词汇，也不是让你去背那些高大上的、千奇百怪的词汇，我们就背托福要考的词汇，这里有阅读的夺命词汇、
                    有听力的考点词、有口语的语料库，每天
                </div>
            </li>
            <li class="jiaoshi3">
                <div class=""><span style="font-size:24px">1309人</span>参与</div>
                <br>
                <div class="">
                    <a href="#" class="buttonhuo" style="color: #5bc0de" @click="huodong()">活动详情</a>
                    <br><br>
                    <a href="#" class="buttonjia" style="color: #5bc0de" @click="enter()">我要加入</a>
                    <br><br>
                    <div>
                        <el-button type="text" @click="dialogVisible = true" class="ziliaoliao">资料下载</el-button>
                        <el-dialog
                                title="课程资料"
                                :visible.sync="dialogVisible"
                                width="40%"
                                :before-close="handleClose">
                            <div class="flcb_cardDownload" style="height: 160px">
                                <h3 class="flcb_cardDownloadT">2015年1月精品课程下载</h3>
                                <br>
                                <ul>
                                    <li class="xiaxiazai">
                                        <span class="flcb_cardDownloadZl" style="color: #222222">资料1</span>
                                        <span class="flcb_cardDownloadBt"style="color: #222222">2015年1月精品课听说读写下载</span>
                                        <a href="###" class="flcb_cardDownloadXz">&nbsp;</a>
                                    </li>
                                    <br>
                                    <li class="xiaxiazai">
                                        <span class="flcb_cardDownloadZl" style="color: #222222">资料1</span>
                                        <span class="flcb_cardDownloadBt" style="color: #222222">2015年1月精品课听说读写下载</span>
                                        <a href="###" class="flcb_cardDownloadXz">&nbsp;</a>
                                    </li>
                                    <br>
                                    <li class="xiaxiazai">
                                        <span class="flcb_cardDownloadZl" style="color: #222222">资料1</span>
                                        <span class="flcb_cardDownloadBt" style="color: #222222">2015年1月精品课听说读写下载</span>
                                        <a href="###" class="flcb_cardDownloadXz">&nbsp;</a>
                                    </li>
                                </ul>
                                <el-divider></el-divider>
                            </div>
                            <span slot="footer" class="dialog-footer">
                                 <el-button @click="dialogVisible = false" class="guanbi">关闭</el-button>
                            </span>
                        </el-dialog>
                    </div>

                </div>
            </li>
        </ul>
        <el-divider></el-divider>
    </div>


</template>

<script>
    export default {
        name: "classes",
        methods: {
            huodong() {
                this.$router.push('/welfare_castle/welfare_castleDetails')
            },
            enter() {
                this.$router.push('/welfare_castle/enter_welfare_castle')
            },

        },
        data(){
            return {
                dialogVisible: false
            };
        }

    }

</script>

<style scoped>
    .jiaoshi{
        width: 1200px;
        height: 260px;
    }
    .jiaoshi1{
        float: left;
        width: 350px;
        height: 300px;
    }
    .jiaoshi2{
        float: left;
        width: 600px;
        height: 300px;
    }
    .jiaoshi3{
        float: left;
        width: 230px;
        height: 300px;
        padding-left: 120px;
    }
    a.buttonhuo{
        height: 35px;
        line-height: 18px;
        padding: 0 11px;
        border: 2px #5bc0de solid;
        border-radius: 3px;
        display: inline-block;
        font-size: 15px;
        outline: none;
        text-align: center;
        line-height:30px;
    }
    .buttonjia{
        height: 35px;
        line-height: 18px;
        padding: 0 11px;
        border: 2px #5bc0de solid;
        border-radius: 3px;
        display: inline-block;
        font-size: 15px;
        outline: none;
        text-align: center;
        line-height:30px;
    }
    .ziliaoliao{
        height: 35px;
        line-height: 18px;
        padding: 0 11px;
        border: 2px #5bc0de solid;
        border-radius: 3px;
        display: inline-block;
        font-size: 15px;
        outline: none;
        text-align: center;
        line-height:30px;
    }
    .RMBwei{
        padding-left: 100px;
        padding-top: 20px;
    }
    .xiaxiazai{
        border-radius: 2px;
        color:#000000;
        border: solid 1px #a2a2a2;
        height: 30px;
        padding-left: 10px;
        padding-top: 5px;
    }
    .flcb_cardDownloadBt{
        padding-left: 10px;
    }
    .guanbi{
        width: 50px;
        height: 30px;
        padding-left: 10px;
        padding-top: 8px;
    }

</style>