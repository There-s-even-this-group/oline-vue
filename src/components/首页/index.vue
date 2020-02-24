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
        methods: {}
    }
</script>

<style scoped>

</style>
