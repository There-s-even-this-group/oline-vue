<template>
    <div class="main-open-back">
        <div class="left-back">
            <img src="~assets/img/dgcq.jpg" alt="">
        </div>
        <div class="center-review">
            <div class="open-class-review">
             <open_class_item>
                 <a href="#" slot="imgOfenter" class="open-class-back" @click="courseDetails">去看回放</a>
             </open_class_item>
            </div>
            <div class="open-class-review">
                <open_class_item>
                    <a href="" slot="imgOfenter" class="open-class-back" @click="courseDetails">去看回放</a>
                </open_class_item>
            </div>
            <div class="open-class-review">
                <open_class_item>
                    <a href="" slot="imgOfenter" class="open-class-back" @click="courseDetails">去看回放</a>
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
            return {}
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
