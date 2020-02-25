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
        }
    }
</script>

<style scoped>

</style>
