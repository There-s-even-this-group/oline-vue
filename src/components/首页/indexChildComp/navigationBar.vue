<template>
    <el-menu :default-active="this.$route.path" router mode="horizontal">
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            {{ item.navItem }}
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                navList:[
                    {name:'/',navItem:'首页'},
                    {name:'/toeflman',navItem:'托福人'},
                    {name:'/open_class',navItem:'公开课'},
                    {name:'/group_chat',navItem:'群组聊'},
                    {name:'/toeflman/toefmanpublic',navItem:'福利城堡'},

                ]
            }
        },
        mounted: function () {
        },
        methods: {}
    }
</script>

<style scoped>

</style>
