<template>
    <div>
        <el-form :rules="rules" class="login-container" label-position="left" :model="registerFrom" ref="registerFrom"
                 label-width="0px" v-loading="loading">
            <h3 class="login_h3">新用户注册</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="registerFrom.username" style="width: 75%" prefix-icon="el-icon-user"
                          auto-complete="off" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="registerFrom.password" style="width: 75%" prefix-icon="el-icon-key"
                          auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item prop="chickPass">
                <el-input type="password" v-model="registerFrom.chickPass" style="width: 75%" prefix-icon="el-icon-key"
                          auto-complete="off" placeholder="确认密码"></el-input>
            </el-form-item>
            <el-form-item prop="email">
                <el-input type="text" v-model="registerFrom.email" style="width: 75%" prefix-icon="el-icon-message"
                          auto-complete="off" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-row>
                    <el-col :span="7"><div>
                        <el-input v-model="registerFrom.code" placeholder="验证码" ></el-input>
                    </div></el-col>
                    <el-col :span="12"><div class="login-code" @click="refreshCode">
                        <!--验证码组件-->
                        <s-identify :identifyCode="identifyCode"></s-identify>
                    </div></el-col>
                    <el-col :span="5"><div style="margin-left: -110px">
                        <span style="font-size: 5px " @click="refreshCode">需要看眼科？</span>
                    </div></el-col>
                </el-row>
            </el-form-item>
            <el-form-item style="width: 100%">
                <el-button type="primary" style="width: 75%" @click.native.prevent="submitClick">注册</el-button>
            </el-form-item>
        </el-form>
        <div class="login_zcymm"><a @click="goLogin">马上登陆</a>已有账号？<a href="###" class="login_zhmm" style="margin-right: 7%">找回密码</a></div>
    </div>
</template>

<script>
    import SIdentify from "../tools/SIdentify";
    export default {
        components: {
            SIdentify
        },
        data() {
            const validateCode = (rule, value, callback) => {
                if (this.identifyCode !== value) {
                    this.registerFrom.code = ''
                    this.refreshCode()
                    callback(new Error('请输入正确的验证码'))
                } else {
                    callback()
                }
            }
            const chickPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.registerFrom.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            }
            return {
                rules: {
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'}],
                    code: [{ validator: validateCode, trigger: 'blur' }],
                    chickPass: [{ validator: chickPassword, trigger: 'blur' }],
                    email:[{required: true, message: '请输入密码', trigger: 'blur'},
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }]
                },
                registerFrom: {
                    username: '',
                    password: '',
                    chickPass:'',
                    code: '',
                    email: '',
                    role: '1'  //此处为一般用户注册，管理员及教师账户授权由账号管理部分完成
                },
                loading: false,
                identifyCodes: '1234567890',
                identifyCode: ''
            }
        },
        created () {
            this.refreshCode()
        },
        methods: {
            randomNum(min, max) {
                return Math.floor(Math.random() * (max - min) + min)
            },
            refreshCode() {
                this.identifyCode = ''
                this.makeCode(this.identifyCodes, 4)
            },
            makeCode(o, l) {
                for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[
                        this.randomNum(0, this.identifyCodes.length)
                        ]
                }
            },
            submitClick: function () {
                this.$refs.registerFrom.validate(valid => {
                    if (valid) {
                        this.loading = true;
                        this.$store.dispatch('user/register', this.registerFrom)
                            .then(() => {
                                this.$message({
                                    message: '注册成功',
                                    type: 'success'
                                });
                                this.$router.push({ path: this.redirect || '/online/login'});
                                next();
                                this.loading = false
                            })
                            .catch(() => {
                                this.loading = false
                            })
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                });
            },
            goLogin: function () {
                this.$router.push('/online/login')
            }
        }
    }
</script>

<style scoped>
    .login_h3{padding-bottom:55px; font-size:20px; line-height:30px; color:#555;}
    .login_zcymm{overflow:hidden;width:400px; padding-top:15px;}
    .login_zcymm{font-size:12px;}
    .login_zcymm a{ display:inline-table; float:left; color:#009FD6;}
    .login_zcymm a.login_zhmm{float:right;color:#055874;}
    .login-code {
        width: 100px;
    }
</style>
