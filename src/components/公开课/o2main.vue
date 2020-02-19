<template>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="labelTitle">
        <el-tab-pane label="最新公开课" name="first" :lazy="true"><latest-open-class /></el-tab-pane>
        <el-tab-pane label="往期回顾" name="second" :lazy="true"><review-open-class /></el-tab-pane>
        <el-tab-pane label="名师推荐" name="third" :lazy="true"><TeacherRecommend></TeacherRecommend></el-tab-pane>
    </el-tabs>
</template>

<script>
    import LatestOpenClass from "./o2最新公开课";
    import ReviewOpenClass from "./o2往期回顾-往期回顾"
    import TeacherRecommend from "./o2名师推荐";
    export default {
        components: {
            LatestOpenClass,
            ReviewOpenClass,
            TeacherRecommend,
        },
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
    .labelTitle{
    }
</style>
