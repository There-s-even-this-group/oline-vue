<template>
    <el-form ref="form" :model="form"  status-icon :rules="rules" label-width="80px">
        <el-form-item label="课程标题" prop="public_className">
            <el-col :span="11">
            <el-input v-model="form.public_className"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="上课时间" prop="StartClassDate">
            <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.StartClassDate"
                                format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-M-d"
                                style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="开始时间" prop="BeginClassTime">
            <el-col :span="11">
                <el-time-select
                        placeholder="起始时间"
                        v-model="form.BeginClassTime"
                        :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30'
                        }">
                </el-time-select>
            </el-col>
        </el-form-item>
        <el-form-item label="结束时间" prop="EndClassTime">
            <el-col :span="11">
                <el-time-select
                        placeholder="结束时间"
                        v-model="form.EndClassTime"
                        :picker-options="{ start: '08:30',step: '00:15',end: '18:30', minTime: form.BeginClassTime}"
                >
                </el-time-select>
            </el-col>
        </el-form-item>
        <el-form-item label="适合学员" prop="MatchStudent">
            <el-col :span="11">
            <el-input v-model="form.MatchStudent" placeholder="JAVA牛批"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="课程分类" prop="public_classType">
            <el-select v-model="form.public_classType" placeholder="听力">
                <el-option label="听力" value="Listening"></el-option>
                <el-option label="阅读" value="Reading"></el-option>
                <el-option label="词汇" value="Vocabulary"></el-option>
                <el-option label="活动" value="Activities"></el-option>
                <el-option label="口语" value="Speaking"></el-option>
                <el-option label="写作" value="Writing"></el-option>
                <el-option label="资讯" value="Information"></el-option>
                <el-option label="机经" value="Prediction"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="课程阶段" prop="ClassStage">
            <el-select v-model="form.ClassStage" placeholder="报名阶段">
                <el-option label="报名阶段" value="报名阶段"></el-option>
                <el-option label="结束阶段" value="结束阶段"></el-option>
                <el-option label="课程结束" value="课程结束"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
            <el-button type="primary" @click="resetForm('form')">取消</el-button>
        </el-form-item>
    </el-form>

</template>

<script>
    export default {
        data() {
            var checktitle = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('标题不能为空'));
                }
                callback();
            };
            var checkregion1 = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('课程分类不能为空'));
                }
                callback();
            };
            var checkregion2 = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请选择课程阶段'));
                }
                callback();
            };
            var checkdate1 = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请选择上课时间'));
                }
                callback();
            };
            var checkdate2 = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请选择开始时间'));
                }
                callback();
            };
            var checkdate3 = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请选择结束时间'));
                }
                callback();
            };
            var checkstudent = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请选择适合的学员'));
                }
                callback();
            };
            return {
                form: {
                    public_className: '',
                    public_classType: '',
                    CreateDate:'',
                    StartClassDate: '',
                    BeginClassTime: '',
                    EndClassTime: '',
                    MatchStudent: '',
                    ClassStage: '',
                },
                rules:{
                    public_className:[
                        { validator: checktitle, trigger: 'blur' }
                    ],
                    public_classType:[
                        { validator: checkregion1, trigger: 'blur' }
                    ],
                    ClassStage:[
                        { validator: checkregion2, trigger: 'blur' }
                    ],
                    StartClassDate:[
                        { validator: checkdate1, trigger: 'blur' }
                    ],
                    BeginClassTime:[
                        { validator: checkdate2, trigger: 'blur' }
                    ],
                    EndClassTime:[
                        { validator: checkdate3, trigger: 'blur' }
                    ],
                    MatchStudent:[
                        { validator: checkstudent, trigger: 'blur' }
                    ],
                }
            }
        },
        computed: {
            getDate: function() {
                let day = new Date();
                return day.getFullYear() + '-' + day.getMonth() + '-' + day.getDay();
            },
        },
        created() {
            this.form.CreateDate = this.getDate
            console.log(this.form.CreateDate)
        },
        methods: {
            submitForm(formName) {
                console.log(this.form);
                this.$refs[formName].validate((valid) => {
                    console.log(valid);
                    if (valid) {

                        this.$emit('item1click',this.form)
                        // this.postRequest('/addOpenClass',this.form).then( res =>{
                        //     console.log(res);
                        //     if(res.data.code == 1)
                        //     {
                        //         this.$store.dispatch('courseID/postupdateID',res.data.id)
                        //         const h = this.$createElement;
                        //         this.$notify({
                        //             title: '提示信息',
                        //             message: h('i', {style: 'color: teal'}, '您已成功创建公开课')
                        //         });
                        //     }
                        //     if (res.data.code == 500){
                        //         this.$notify.error({
                        //             title: '错误',
                        //             message: '这是一条错误的提示消息'
                        //         });
                        //     }
                        // })
                    }
                    else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>