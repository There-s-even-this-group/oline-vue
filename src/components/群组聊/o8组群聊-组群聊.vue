<template>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="labelTitle">
        <el-tab-pane label="全部" name="first" :lazy="true"><All /></el-tab-pane>
        <el-tab-pane label="同城考试群" name="second" :lazy="true"><examGroup-sameCity /></el-tab-pane>
        <el-tab-pane label="考试场次群" name="third" :lazy="true"><examGroup-venue /></el-tab-pane>
        <el-tab-pane label="名师学堂群" name="fourth" :lazy="true"><schoolGroup-famousTeacher /></el-tab-pane>
        <el-tab-pane label="结伴备考群" name="fifth" :lazy="true"><examGroup-prepare /></el-tab-pane>
    </el-tabs>
</template>

<script>
    import All from "./o8组群聊-组群聊childComps/o8组群聊-组群聊全部"
    import examGroupSameCity from "./o8组群聊-组群聊childComps/o8组群聊-组群聊同城考试群"
    import examGroupVenue from "./o8组群聊-组群聊childComps/o8组群聊-组群聊考试场次群"
    import schoolGroupFamousTeacher from "./o8组群聊-组群聊childComps/o8组群聊-组群聊名师学堂群"
    import examGroupPrepare from "./o8组群聊-组群聊childComps/o8组群聊-组群聊结伴备考群"
    export default {
        components: {
            All,
            examGroupSameCity,
            examGroupVenue,
            schoolGroupFamousTeacher,
            examGroupPrepare
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