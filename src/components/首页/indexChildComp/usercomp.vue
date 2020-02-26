<template>
    <div v-if="this.login">
        {{username}}
        <span>
        <el-badge :value="infoNumber" class="item">
            <i class="el-icon-bell"></i>
        </el-badge>
        </span>
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
            }
        },
        watch:{
            $route(to, from) {
                if (to.path == '/online'){
                    getRequest('/getInf').then(response => {
                       var data = response.data;
                       this.username = data.username;
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>
