<template>
    <div class="aaa">
        <div class="advertisement">
            <img src="~assets/img/dgcq.jpg" alt="">
        </div>
        <div class="abc">
            <div class="open-class">
                <open_class_item></open_class_item>
            </div>
            <div class="open-class">
                <open_class_item></open_class_item>
            </div>
            <div class="page-list">
                <tfr-page-list></tfr-page-list>
            </div>
        </div>
    </div>
</template>

<script>
    import open_class_item from "../common/open_class_item";
    import tfrPageList from "../common/tfrPageList";
    export default {
        components: {
            open_class_item,
            tfrPageList,
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
    .aaa{
        display: flex;
    }
    .advertisement{
        width: 300px;
        padding-left: 80px;
        flex: 1;
    }
    .abc{
        flex:4;
    }
    .open-class{
        display: block;
    }
    .page-list{
        display: inline-block;
        width:1080px;
        overflow:hidden;
        font-family:"宋体";
        padding-right:50px;
    }
</style>
