<template>
    <div v-if="this.login">
        <span @click="this.personal">
            {{username}}
        </span>
        <span style="margin-left: 10px">
        <el-badge :value="infoNumber" class="item">
            <i class="el-icon-bell"></i>
        </el-badge>
        </span>
        <el-button style="margin-left: 30px" size="mini" icon="el-icon-user" circle @click="this.personal"></el-button>
    </div>
</template>

<script>
    import {getToken} from "../../../utils/auth";
    import {getRequest} from "../../../utils/api";
    export default {
        data() {
            return {
                login: false,
                username: '当前已登陆',
                infoNumber: 0
            }
        },
        methods: function(){
            this.init()
        },
        created () {
            this.init()
        },
        methods: {
            init(){
                if (getToken()){
                    this.login = true;
                    this.username = this.$store.getters.username;
                } else {
                    this.login = false
                }
            },
            personal: function () {
                this.$router.push('/person/personal_data/base')
            }
        },
        watch:{
            $route(to, from) {
                if (getToken()){
                    if (to.path == '/online/'){
                        getRequest('/getInf').then(response => {
                            var data = response.data;
                            this.username = data.username;
                            this.login = true;
                        });
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
