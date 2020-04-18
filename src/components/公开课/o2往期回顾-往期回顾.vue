<template>
    <div class="main-open-back">
        <div class="left-back">
            <img src="~assets/img/dgcq.jpg" alt="">
        </div>
        <div class="center-review">
            <div class="open-class" v-for="index in openClass[Speaking].list.length">
                <open_class_item :openClass="openClass[Speaking].list[index-1]">
                    <a slot="imgOfenter" href="#" class="openClassBm" @click="courseDetails">立即回顾</a>
                </open_class_item>
            </div>
        </div>
    </div>
</template>

<script>
    import open_class_item from "../common/open_class_item";
    export default {
        components:{
            open_class_item,
        },
        data() {
            return {
                Speaking:"Speaking",
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
            this.getOpenClassData("Speaking");
        },
        mounted: function () {
        },
        methods: {
            courseDetails() {
                this.$router.push({
                    path:'/open_class/courseReview',
                    query:{

                    }
                })
            },
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
    .main-open-back{
        display: flex;
    }
    .left-back{
        flex: 1;
        width: 300px;
        padding-left: 80px;
    }
    .center-review{
        flex: 4;
    }
    .open-class-review{
        display: block;
    }
    a.open-class-back{
        width: 170px;
        text-align: left;
        background:url(~assets/img/公开课/kchg_huifang.png) 0 0 no-repeat;
        line-height:39px;
        color:#fff;
        padding-left:20px;
    }
</style>
