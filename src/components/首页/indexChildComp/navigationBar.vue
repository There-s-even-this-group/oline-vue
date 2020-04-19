<template>
    <el-menu :default-active="this.$route.path" router mode="horizontal">
        <el-menu-item v-for="(item) in navList" :index="item.name">
            {{ item.navItem }}
        </el-menu-item>

        <template v-if="adminIf">
            <el-submenu v-for="child in adminList" :index="child.name">
                <template slot="title">{{child.name}}</template>
                <el-menu-item v-for="child2 in child.childNode" :index="child2.name" >
                    {{child2.navItem}}
                </el-menu-item>
            </el-submenu>
        </template>

    </el-menu>
</template>

<script>
    import {getRequest} from "../../../utils/api";

    export default {
        data() {
            return {
                role : [],
                navList:[
                    {name:'/',navItem:'首页'},
                    {name:'/online/toeflman',navItem:'托福人'},
                    {name:'/online/open_class',navItem:'公开课'},
                    {name:'/online/group_chat',navItem:'群组聊'},
                    {name:'/toeflman/toefmanpublic',navItem:'福利城堡'}
                ],
                adminList:[
                    {
                        name:'用户管理',
                        navItem:'',
                        childNode:[
                            {
                                name:'/system_admin',
                                navItem:'用户管理'
                            },
                            {
                                name:'/system_admin/teacher',
                                navItem:'讲师管理'
                            },
                            {
                                name:'/system_admin/tolfman',
                                navItem:'托福人列表'
                            },
                        ]
                    },
                    {
                        name:'系统管理',
                        navItem:'',
                        childNode:[

                            {
                                name:'/system_admin/Curriculum_activities',
                                navItem:'课程活动'
                            },
                            {
                                name:'/system_admin/website_link',
                                navItem:'网站链接'
                            }

                        ]
                    },
                ],
                adminIf: false
            }
        },
        mounted: function () {
            this.init();
        },
        methods: {
            init(){
                getRequest('/getInf').then(response => {
                    var data = response.data;
                    this.role = data.role;
                    if (this.role.includes('admin')){
                        this.adminIf = true;
                    }
                });
            }
        },
        watch:{
            $route(to, from) {
                if (to.path == '/online/'){
                    getRequest('/getInf').then(response => {
                        var data = response.data;
                        this.role = data.role;
                        if (this.role.includes('admin')){
                            this.adminIf = true;
                        } else {
                            this.adminIf = false
                        }
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>
