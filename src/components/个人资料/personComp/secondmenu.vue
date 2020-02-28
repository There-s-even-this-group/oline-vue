<template>
    <el-menu :default-active="this.$route.path" router mode="horizontal">
        <el-menu-item v-for="(item) in navList" :index="item.name">
            {{ item.navItem }}
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                navList:[
                    {name:'/person/personal_data/base',navItem:'基本资料'},
                    {name:'/person/personal_data/icon',navItem:'头像设置'},
                    {name:'/person/personal_data/password',navItem:'密码设置'},
                ],
            }
        },
        mounted: function () {
        },
        methods: {}
    }
</script>

<style scoped>

</style>
