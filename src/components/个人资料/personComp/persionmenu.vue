<template>
    <div class="doc1180 fn-clear paddingT20">
        <div class="doc230 fn-left">
            <div class="flcb_cardUser">
                <div class="flcb_cardUserPic"><a href="###"><img :src="iconPath" width="100" height="100"></a></div>
                <div class="flcb_cardUserName"><a href="###">会员名字</a></div>
                <div class="flcb_cardUserText"><a href="###">文字文字请限制字数</a></div>
            </div>
            <div class="flcb_cardUserInfo">
                <div>你现在拥有的RPB：<span class="green">50</span></div>
                <div>你现在的等级是：学弱</div>
                <div><span>下一等级：</span>学孙<span>还差RPB：80</span></div>
                <div><a href="###" style="color: red;">充值兑换(模拟测试，不需要制作)</a></div>
            </div>
            <div>
                <el-menu :default-active="this.$route.path" router>
                    <el-menu-item v-for="(item) in navList" :index="item.name">
                        <i :class="item.icon"></i>
                        {{ item.navItem }}
                        <i class="el-icon-arrow-right" style="float: right;margin-top: 19px"></i>
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navList:[
                    {name:'/person/personal_data/base',navItem:'个人资料',icon:'el-icon-setting'},
                    {name:'/person/personal_class',navItem:'我的公开课',icon: 'el-icon-reading'},
                    {name:'/person/personal_group',navItem:'我的群组',icon: 'el-icon-chat-line-round'},
                    {name:'/person/personal_castle',navItem:'我的福利城堡',icon: 'el-icon-present'},
                    {name:'/person/personal_toeflman',navItem:'我的托福人',icon: 'el-icon-user'}
                ],
                iconPath: ''
            }
        },
        mounted: function () {
            this.getUserIcon()
        },
        methods: {
            getUserIcon(){
                this.getRequest('/getIcon').then((resp) => {
                    this.iconPath = resp.data.icon;
                })
            }
        },
        watch:{
            $route(to, from) {
                if (from.path === '/person/personal_data/icon') {
                    this.getUserIcon()
                }
            }
        }
    }
</script>

<style scoped>
    .doc1180{width:1180px; margin:0 auto}
    .paddingT20{padding-top:20px;}
    .doc230{width:230px;}
    .flcb_cardUser{width:230px; height:192px; background:url(../../../assets/img/个人中心/flcb_cardUser.jpg) 0 0 no-repeat; padding-top:25px;}
    .flcb_cardUserPic{width:100px; height:100px; background:#fff;margin:0 auto;}
    .flcb_cardUserPic img{width:100px; height:100px;}
    .flcb_cardUserName{color:#fff; text-align:center; padding:0 20px; line-height:30px; padding-top:8px; height:30px; overflow:hidden;}
    .flcb_cardUserText{color:#fff; font-size:12px; line-height:30px; height:30px; overflow:hidden; text-align:center;}
    .flcb_cardUserName a,
    .flcb_cardUserText a{color:#fff;}
    .flcb_cardUserInfo{color:#333; border-left:solid 1px #dcdcdc;border-right:solid 1px #dcdcdc; font-size:12px; padding:20px 0 50px 20px; line-height:24px;}
    .flcb_cardUserInfo span{color:#999;}
    .flcb_cardUserInfo span.green{color:#090;}
</style>
