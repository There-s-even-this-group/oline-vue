<template>
    <el-form ref="userInf" :model="userInf" :rules="roles" label-width="85px" style="width: 30%;margin-top: 30px" >
        <el-form-item label="用户名：">
            <el-input v-model="userInf.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="性别：">
            <el-radio-group v-model="userInf.sex" style="margin-left: 10%">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="邮箱：" prop="email">
            <el-input v-model="userInf.email"></el-input>
        </el-form-item>
        <el-form-item label="电话：" prop="phone">
            <el-input v-model="userInf.phone"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
            <el-col :span="11">
                <el-form-item>
                    <el-date-picker type="date" placeholder="选择日期" v-model="userInf.birthdata" style="width: 100%;"></el-date-picker>
                </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item label="个性签名：">
            <el-input
                    type="textarea"
                    placeholder="请输入内容"
                    v-model="userInf.sign"
                    maxlength="100"
                    :autosize="{ minRows: 3, maxRows: 5}"
                    show-word-limit
            />
            <span style="font-size: 3px;color: #a2a2a2">请输入0-100个字符</span>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width: 200px">保存</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            var validatePhone = (rule, value, callback) => {
                if (value === '') {
                } else {
                    if (!(/^1[3456789]\d{9}$/.test(this.userInf.phone))) {
                       callback(new Error('电话格式错误'))
                    }
                }
            };
            var validateEmail = (rule, value, callback) => {
                if (value === '') {
                } else {
                    if (!(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.userInf.phone))) {
                        callback(new Error('邮箱格式错误'))
                    }
                }
            };
            return {
                userInf:{
                    name: '',
                    sex: '',
                    email: '',
                    phone: '',
                    birthdata: '',
                    sign: ''
                },
                roles:{
                    email:[{ validator: validateEmail, trigger: 'blur'}],
                    phone:[{ validator: validatePhone, trigger: 'blur'}]
                }
            }
        },
        mounted: function () {
            this.init()
        },
        methods: {
            init(){
                this.$store.dispatch('user/getInfo');
                this.userInf.name = this.$store.getters.username;
                this.userInf.sex = this.$store.getters.sex;
                this.userInf.email = this.$store.getters.email;
                if (this.$store.getters.phone != 0){
                    this.userInf.phone = this.$store.getters.phone;
                }
                this.userInf.birthdata = this.$store.getters.birthdata;
                this.userInf.sign = this.$store.getters.sign;
                console.log(this.userInf)
            }
        }
    }
</script>

<style scoped>

</style>
