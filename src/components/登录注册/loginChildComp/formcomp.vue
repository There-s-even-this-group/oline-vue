<template>
    <div>
        <el-form :rules="rules" class="login-container" label-position="left" :model="loginForm" ref="loginForm"
                 label-width="0px" v-loading="loading">
            <h3 class="login_h3">欢迎登录人人托福</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" style="width: 75%" prefix-icon="el-icon-user"
                          auto-complete="off" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" style="width: 75%" prefix-icon="el-icon-key"
                          auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-row>
                    <el-col :span="7"><div>
                        <el-input v-model="loginForm.code" placeholder="验证码" ></el-input>
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
                <el-button type="primary" style="width: 75%" @click.native.prevent="submitClick">登录</el-button>
            </el-form-item>
        </el-form>
        <div class="login_zcymm"><a @click="goRegister">注册帐号</a><a href="###" class="login_zhmm" style="margin-right: 7%">找回密码</a></div>
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
                    this.loginForm.code = ''
                    this.refreshCode()
                    callback(new Error('请输入正确的验证码'))
                } else {
                    callback()
                }
            }
            return {
                rules: {
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'}],
                    code: [{ validator: validateCode, trigger: 'blur' }]
                },
                loginForm: {
                    username: 'wuyue',
                    password: 'wuyue88@',
                    code: ''
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
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.loading = true;
                        this.$store.dispatch('user/login', this.loginForm)
                            .then(() => {
                                this.$router.push({ path: this.redirect || '/'});
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
            goRegister: function () {
                this.$router.push('/online/register')
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
