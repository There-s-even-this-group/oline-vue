<template>
    <div>
        <img style="margin-left: 5%" src="../../../assets/logo.png">
        <el-button type="success" size="mini" disabled style="margin-right: 10%;float: right;margin-top: 20px">注册</el-button>
        <el-button type="success" size="mini" style="margin-right: 1%;float: right; margin-top: 20px" @click="userLogin">登录</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted: function () {
        },
        methods: {
            userLogin : function () {
                this.$router.push('/online/login')
            }
        }
    }
</script>

<style scoped>

</style>
