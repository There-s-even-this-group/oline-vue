<template>
    <el-menu :default-active="this.$route.path" router mode="horizontal">
        <el-menu-item v-for="(item) in navList" :key="id" :index="item.name">
            {{ item.navItem }}
        </el-menu-item>

        <el-submenu v-for="child in navList" :index="child.name" :key="child.id" v-if="child.childNode1" >
            <template slot="title">用户管理</template>
            <el-menu-item v-for="child2 in child.childNode1" :index="child2.name" :key="child2.pid" >
                {{child2.navItem}}
            </el-menu-item>
        </el-submenu>
        <el-submenu v-for="child in navList" :index="child.name" :key="child.id" v-if="child.childNode2" >
            <template slot="title">系统管理</template>
            <el-menu-item v-for="child2 in child.childNode2" :index="child2.name" :key="child2.pid" >
                {{child2.navItem}}
            </el-menu-item>
        </el-submenu>

    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                navList:[
                    {name:'/',navItem:'首页',id:'1'},
                    {name:'/toeflman',navItem:'托福人',id:'2'},
                    {name:'/toeflman/toefmanpublic',navItem:'托福人发布页',id:'3'},
                    {name:'/open_class',navItem:'公开课',id:'4'},
                    {name:'/group_chat',navItem:'群组聊',id:'5'},

                    //增加用户管理下拉框
                    {
                        name:'',
                        navItem:'',
                        id:'6',
                        childNode1:[
                            {
                                name:'/system_admin',
                                navItem:'用户管理',
                                pid:'61'
                            },
                            {
                                name:'/teacher',
                                navItem:'讲师管理',
                                pid:'62'
                            }

                        ]
                    },
                    {
                        name:'',
                        navItem:'',
                        id:'7',
                        childNode2:[
                            {
                                name:'/Curriculum_activities',
                                navItem:'课程活动',
                                pid:'71'
                            },
                            {
                                name:'/website_link',
                                navItem:'网站链接',
                                pid:'72'
                            }

                        ]
                    },

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
