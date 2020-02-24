<template>
    <div class="doc1180">
        <div class="login">
            <div class="login_left">
                <registerformcomp/>
            </div>
            <div class="login_right">
                <thirdlogincomp/>
            </div>
        </div>
    </div>
</template>

<script>
    import thirdlogincomp from "./loginChildComp/thirdlogincomp";
    import registerformcomp from "./registerChildComp/registerformcomp";
    import SIdentify from "./tools/SIdentify";
    export default {
        components: {
            thirdlogincomp,
            registerformcomp,
            SIdentify
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
    .doc1180{width:1180px; margin:0 auto}
    .login{padding:70px 0 30px; overflow:hidden;width:900px; margin:0 auto;}
    .login_left{width:490px; float:left; border-right:solid 1px #dcdcdc; padding-bottom:15px;}
    .login_right{width:400px; float:left; padding: 0 0 0 90px;}
    .login_sanfang img{vertical-align:middle; margin-right:10px;}
    .login_sanfang a{color:#009FD6;}
    .login_shouquan a{color:#029ed7; margin-left:8px;}
</style>
