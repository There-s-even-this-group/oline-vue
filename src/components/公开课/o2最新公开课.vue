<template>
    <div class="aaa">
        <div class="advertisement">
            <img src="~assets/img/dgcq.jpg" alt="">
        </div>
        <div class="abc">
            <div class="open-class" v-for="index in openClass[Reading].list.length">
                <open_class_item :openClass="openClass[Reading].list[index-1]"></open_class_item>
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
            return {
                Reading:"Reading",
                openClass: {
                    Listening: {list: []},
                    Speaking: {list: []},
                    Reading: {list: []},
                    Writing: {list: []},
                    Vocabulary: {list: []},
                    Information: {list: []},
                    Activities: {list: []},
                    Prediction: {list: []},
                }
            }
        },
        created() {
            this.getOpenClassData("Reading");
        },
        mounted: function () {

        },
        methods: {
            getOpenClassData(type){
                this.postRequest('/getOpenClassByClassType',{public_classType:type}).then( res =>{
                    console.log(res);
                    this.openClass[type].list.push(...res.data.openClass)
                    console.log(this.openClass[type]);
                    console.log(this.openClass[type].list);
                }).catch(err =>{
                    console.log(err);
                })
            }
        }
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
