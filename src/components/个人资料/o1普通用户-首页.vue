<template>
    <el-row>
        <el-col :span="6"><div style="margin-left: 20%">
            <persionmenu/>
        </div></el-col>
        <el-col :span="18"><div>
            <router-view/>
        </div></el-col>
    </el-row>
</template>

<script>
    import persionmenu from "./personComp/persionmenu";
    export default {
        components:{
            persionmenu
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
