<template>
<div>
    <el-tabs v-model="activeName" type="border-card" tab-position="left">
        <el-tab-pane label="基本信息" name="first" :lazy="true"><basic-information @itemclick="basicSave"></basic-information></el-tab-pane>
        <el-tab-pane label="课程描述" name="second" :lazy="true"><course-discription @itemclick="discriptionSave"></course-discription></el-tab-pane>
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
                openClass: {
                    public_classID:'',
                    teacherID:'',
                    public_className:'',
                    public_classType:'',
                    public_classPicture:'',
                    MallType:'',
                    MainSpeaker:'',
                    Sign_Number:'',
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
                    PriceClass:'',
                    LikeTimes:'',
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
                this.openClass.public_classID = form.public_classID;
                this.openClass.public_className = form.public_className;
                this.openClass.public_classType = form.public_classType;
                this.openClass.reateDate = form.CreateDate;
                this.openClass.StartClassDate = form.StartClassDate;
                this.openClass.BeginClassTime = form.BeginClassTime;
                this.openClass.EndClassTime = form.EndClassTime;
                this.openClass.MatchStudent = form.MatchStudent;
                this.openClass.ClassStage = form.ClassStage;
                console.log(this.openClass);
            },
            discriptionSave(obj) {

            }
        }
    }
</script>

<style scoped>

</style>
