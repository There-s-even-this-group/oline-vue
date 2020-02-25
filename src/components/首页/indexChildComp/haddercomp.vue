<template>
    <div>
        <img style="margin-left: 5%" src="../../../assets/logo.png">
        <el-button type="success" size="mini" style="margin-right: 10%;float: right;margin-top: 30px" @click="userRegister">注册</el-button>
        <el-button type="success" size="mini" style="margin-right: 1%;float: right; margin-top: 30px" @click="userLogin">登录</el-button>
        <usercomp style="float: right;margin-right: 30%;margin-top: 30px"/>
    </div>
</template>

<script>
    import usercomp from "./usercomp";
    export default {
        components: {
          usercomp
        },
        data() {
            return {}
        },
        mounted: function () {
        },
        methods: {
            userLogin : function () {
                this.$router.push('/online/login')
            },
            userRegister : function () {
                this.$router.push('/online/register')
            }
        }
    }
</script>

<style scoped>

</style>
