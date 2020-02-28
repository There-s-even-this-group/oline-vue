<template>
    <el-form ref="passwordInf" :model="passwordInf" :rules="rules" label-width="95px" style="width: 30%;margin-top: 30px" >
        <el-form-item label="旧密码：" prop="oldpass">
            <el-input v-model="passwordInf.oldpass"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" prop="newpass">
            <el-input v-model="passwordInf.newpass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="chickpass">
            <el-input v-model="passwordInf.chickpass"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width: 200px">确认修改</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.passwordInf.chickpass !== '') {
                        this.$refs.ruleForm.validateField('checkpass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.passwordInf.newpass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                passwordInf:{
                    oldpass: '',
                    newpass: '',
                    chickpass: ''
                },
                rules:{
                    oldpass: [{ required: true, message: '请输入旧密码', trigger: 'blur' }],
                    newpass: [{ validator: validatePass, trigger: 'blur', required: true }],
                    chickpass: [{ validator: validatePass2, trigger: 'blur', required: true }],
                }
            }
        },
        mounted: function () {
        },
        methods: {}
    }
</script>

<style scoped>

</style>
