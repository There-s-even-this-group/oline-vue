<template>
<div>
    <el-tabs v-model="activeName" type="border-card" tab-position="left">
        <el-tab-pane label="基本信息" name="first" :lazy="true"><basic-information @item1click="basicSave"></basic-information></el-tab-pane>
        <el-tab-pane label="课程描述" name="second" :lazy="true"><course-discription @item2click="discriptionSave"></course-discription></el-tab-pane>
        <el-tab-pane label="课程资料" name="third" :lazy="true"><course-material></course-material></el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
    import basicInformation from "./o2公开课发布child/o2basicInformation";
    import courseDiscription from "./o2公开课发布child/o2courseDiscription";
    import courseMaterial from "./o2公开课发布child/o2courseMaterial";
    export default {
        components: {
            basicInformation,
            courseDiscription,
            courseMaterial,
        },
        data() {
            return {
                activeName: 'first',
                isCompleted: 0,
                openClass: {
                    teacherID:'',
                    public_className:'',
                    public_classType:'',
                    public_classPicture:'',
                    MallType:'',
                    MainSpeaker:'',
                    Sign_Number: 0,
                    Syllabus:'',
                    TeachingWay:'',
                    IntroducingCourse:'',
                    IntroducingSpeaker:'',
                    CreateDate:'',
                    StartClassDate:'',
                    BeginClassTime:'',
                    EndClassTime:'',
                    MatchStudent:'',
                    LectureGuide:'',
                    PriceClass: 0,
                    LikeTimes: 0,
                    GatherPlace:'',
                    ClassStage:'',
                    ClassGroup:'',
                },

            }
        },
        mounted: function () {
        },
        methods: {
            basicSave(form) {
                this.openClass.public_className = form.public_className;
                this.openClass.public_classType = form.public_classType;
                this.openClass.CreateDate = form.CreateDate;
                this.openClass.StartClassDate = form.StartClassDate;
                this.openClass.BeginClassTime = form.BeginClassTime;
                this.openClass.EndClassTime = form.EndClassTime;
                this.openClass.MatchStudent = form.MatchStudent;
                this.openClass.ClassStage = form.ClassStage;
                console.log(this.openClass);
                this.isCompleted++;
                this.postOpenClass(this.isCompleted)
            },
            discriptionSave(form) {
                this.openClass.MainSpeaker = form.MainSpeaker
                this.openClass.ClassGroup = form.ClassGroup
                this.openClass.public_classPicture = form.public_classPicture
                this.openClass.Syllabus = form.Syllabus
                this.openClass.IntroducingCourse = form.IntroducingCourse
                this.openClass.TeachingWay = form.TeachingWay
                this.openClass.LectureGuide = form.LectureGuide
                console.log(this.openClass);
                this.isCompleted++;
                this.postOpenClass()
            },
            postOpenClass(){
                console.log(this.isCompleted);
                if(this.isCompleted == 2) {
                    this.postRequest('/addOpenClass', this.openClass).then(res => {
                        console.log(res);
                        if (res.data.code == 1) {
                            const h = this.$createElement;
                            this.$notify({
                                title: '提示信息',
                                message: h('i', {style: 'color: teal'}, '您已成功创建公开课')
                            });
                            this.isCompleted = 0;
                        }
                    })

                }
                else
                    return false;
            }
        }
    }
</script>

<style scoped>

</style>
