<template>
    <course-details>
        <div slot="lijiBaoming" class="fn-clear">
            <a href="###" class="classInfo_ljbm" @click="baoming">立即报名</a>
            <a href="###" class="classInfo_join">加入该活动群</a>
        </div>

        <el-popover slot="download" placement="bottom-start" width="400" trigger="click" transition="fade-in-linear">
            <div class="flcb_cardDownload">
                <h3 class="flcb_cardDownloadT">2015年1月精品课程下载</h3>
                <ul v-for="item in num">
                    <li>
                        <span class="flcb_cardDownloadZl">资料{{item}}</span>
                        <span class="flcb_cardDownloadBt">2015年1月精品课听说读写下载</span>
                        <a href="" class="flcb_cardDownloadXz" @click="ziliaoDownload(item)">&nbsp;</a>
                    </li>
                </ul>
            </div>
            <el-button slot="reference" class="classInfo_iconxz">资料下载</el-button>
        </el-popover>

    </course-details>
</template>

<script>
    import courseDetails from "../common/courseDetails";
    export default {
        components:{
            courseDetails,
        },
        data() {
            return {
                num: [1,2,3],
            };
        },
        mounted: function () {
        },
        methods: {
            ziliaoDownload(item) {

            },
            baoming(){
                console.log(this.$route.query.public_id)
                this.postRequest("/baomingOpenClass",{public_id:this.$route.query.public_id}).then(res =>{
                    const h = this.$createElement;
                    if(res.data.code == 1) {
                        this.$notify({
                            title: '提示信息',
                            message: h('i', {style: 'color: teal'}, '您已加入该公开课')
                        });
                    }
                    else
                        this.$notify({
                            title: '提示信息',
                            message: h('i', {style: 'color: teal'}, '报名失败，请稍微再试！')
                        });
                }).catch(err =>{
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>
    a.classInfo_ljbm{width:177px; height:39px; display:block; background:url(~assets/img/公开课/classInfo_Button.png) 0 -60px no-repeat; float:left;color:#fff; text-align:center; line-height:39px; margin-right:15px;}
    a.classInfo_ljbm:hover{background:url(~assets/img/公开课/classInfo_Button.png) -200px -60px no-repeat;}
    a.classInfo_join{width:177px; height:39px; display:block; background:url(~assets/img/公开课/classInfo_Button.png) 0 0 no-repeat; float:left;color:#009FD6; text-align:center; line-height:39px;}
    a.classInfo_join:hover{background:url(~assets/img/公开课/classInfo_Button.png) -200px 0 no-repeat;color:#fff;}
    .classInfo_iconxz{height:38px; display:block; background:url(~assets/img/公开课/classInfo_icon.png) 0 -190px no-repeat; padding:0 20px 0 50px; line-height:38px;}
    .classInfo_iconxz:hover{background:url(~assets/img/公开课/classInfo_icon.png) 0 -230px no-repeat ;color:#68BF4A}
    .flcb_cardDownload{}
    .flcb_cardDownloadT{ font-size:18px; line-height:60px; height:60px;color:#333;}
    .flcb_cardDownload li{height:38px; line-height:38px; padding-left:15px; border:solid 1px #eee; margin-bottom:10px;color:#555; font-size:14px;}
    .flcb_cardDownload li span{margin-right:20px; display:inline-table; float:left; height:38px;}
    a.flcb_cardDownloadXz{width:19px; height:38px; display:block; float:left; background:url(~assets/img/公开课/flcb_cardDownloadXz.png) 0 10px no-repeat;}
    a.flcb_cardDownloadXz:hover{background:url(~assets/img/公开课/flcb_cardDownloadXz.png) -20px 10px no-repeat;}
</style>
