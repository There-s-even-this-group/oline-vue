<template>
    <div class="classInfo_main">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="labelTitle">
            <el-tab-pane label="填写联系人并填写商品信息" name="first" :lazy="true"><shangpingxinxi /></el-tab-pane>
            <el-tab-pane label="填写并核对订单信息" name="second" :lazy="true"><dingdanxinxi /></el-tab-pane>
            <el-tab-pane label="购买完成" name="third" :lazy="true"><buysuccess /></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import shangpingxinxi from "../../福利城堡/choose_class/shangpingxinxi";
    import dingdanxinxi from "../../福利城堡/choose_class/dingdanxinxi";
    import buysuccess from "../../福利城堡/choose_class/buysuccess";
    export default {
        components:{
            shangpingxinxi,
            dingdanxinxi,
            buysuccess
        },
        data() {
            return {
                activeName: 'first',
            }
        },
        name: "enterclass"
    }
</script>

<style scoped>
    .classInfo_main{
        padding-left: 100px;
        width: 1400px;
        height: 600px;
    }
</style>