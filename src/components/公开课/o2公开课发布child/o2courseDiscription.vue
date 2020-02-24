<template>
    <el-form ref="form" :model="form"  status-icon :rules="rules" label-width="80px">
        <el-form-item label="课程讲师" prop="MainSpeaker">
            <el-col :span="11">
                <el-input v-model="form.MainSpeaker"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="课程群" prop="ClassGroup">
            <el-col :span="11">
                <el-input v-model="form.ClassGroup"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="宣传图">
            <el-col :span="11">
                <el-upload
                        class="upload-demo"
                        ref="upload"
                        :action="basepath"
                        :data="{imgPath:'openClass'}"
                        :auto-upload="false"
                        :on-success="handleAvatarSuccess"
                        :on-change="onAvatarChange"
                        :before-upload="beforeAvatarUpload"
                        :limit="1"
                      >
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-col>
        </el-form-item>
        <el-form-item label="课程安排" prop="IntroducingCourse">
            <el-col :span="11">
                <el-input type="textarea" v-model="form.IntroducingCourse" placeholder="课程安排" rows="10"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="上课方式" prop="TeachingWay">
            <el-col :span="11">
                <el-input type="textarea" v-model="form.TeachingWay" placeholder="上课方式" rows="10"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="听课指南" prop="LectureGuide">
            <el-col :span="11">
                <el-input type="textarea" v-model="form.LectureGuide" placeholder="听课指南" rows="10"></el-input>
            </el-col>
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
            var checkMainSpeaker = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入讲师哦'));
                }
                callback();
            };
            var checkClassGroup = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入课程群哦'));
                }
                callback();
            };
            var checkSyllabus = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入课程大纲哦'));
                }
                callback();
            };
            var checkIntroducingCourse = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入课程安排哦'));
                }
                callback();
            };
            var checkTeachingWay = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入上课方式哦'));
                }
                callback();
            };
            var checkLectureGuide = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入听课指南哦'));
                }
                callback();
            };
            return {
                basepath:'/img/tfrRecieve',//上传UR
                form: {
                    MainSpeaker: '',//讲师
                    ClassGroup:'',//课程群
                    public_classPicture:'',
                    Syllabus: '',//课程大纲
                    IntroducingCourse: '',//课程安排
                    TeachingWay: '',//上课方式
                    LectureGuide: '',//听课指南
                },
                rules:{
                    MainSpeaker:[
                        { validator: checkMainSpeaker, trigger: 'blur' }
                    ],
                    ClassGroup:[
                        { validator: checkClassGroup, trigger: 'blur' }
                    ],
                    Syllabus:[
                        { validator: checkSyllabus, trigger: 'blur' }
                    ],
                    IntroducingCourse:[
                        { validator: checkIntroducingCourse, trigger: 'blur' }
                    ],
                    TeachingWay:[
                        { validator: checkTeachingWay, trigger: 'blur' }
                    ],
                    LectureGuide:[
                        { validator: checkLectureGuide, trigger: 'blur' }
                    ],
                },
            }
        },
        created() {
        },
        computed: {
            getDate: function() {
                let day = new Date()
                return day.getFullYear() + '-' + day.getMonth() + '-' + day.getDay();
            },
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    console.log(valid);
                    if (valid) {
                        console.log(this.form);
                        this.$refs.upload.submit();
                    }
                    else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleAvatarSuccess(res, file) {
                console.log(file);
                console.log('--------------');
                //下面才是真正
                this.form.public_classPicture ='openClass/' + res;
                this.$emit('item2click',this.form)
            },
            beforeAvatarUpload(file) {
                console.log('上传之前');
                console.log(file);
                console.log('--------------');
                const isLt2M = file.size / 1024 / 1024 < 5;

                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 5MB!');
                }
                return isLt2M;
            },
            onAvatarChange(file, fileList){
                console.log('change');
                console.log(file);
                // 显示上传成功的图片
                if(file.status == 'ready')
                    this.imageUrl = URL.createObjectURL(file.raw);
            },
            uploaderror(err, file, fileList) {
                console.log(err);
                console.log(file);
                console.log(fileList);
            },
        }
    }
</script>

<style scoped>
    .input[type=file] {
        display: none;
    }
</style>