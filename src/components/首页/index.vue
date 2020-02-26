<template>
    <el-container>
        <haddercomp/>
        <el-header>
            <navigationBar/>
        </el-header>

        <el-main>
            <router-view/>
        </el-main>

        <el-footer>
            <footercomp/>
        </el-footer>
    </el-container>
</template>

<script>
    import navigationBar from "./indexChildComp/navigationBar";
    import footercomp from "./indexChildComp/footercomp";
    import haddercomp from "./indexChildComp/haddercomp";
    import {getRequest} from "../../utils/api";

    export default {
        components :{
            navigationBar,
            footercomp,
            haddercomp
        },
        data() {
            return {}
        },
        mounted: function () {
        },
        methods: {},
        watch:{
            $route(to, from) {
                if (to.path == '/online/'){
                    this.$route.go(0);
                }
            }
        }
    }
</script>

<style scoped>

</style>
