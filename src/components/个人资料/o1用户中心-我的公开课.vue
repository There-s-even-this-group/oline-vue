<template>
    <div>
    <div class="open-class" v-for="item in openClass.list">
        <open_class_item :openClass="item"></open_class_item>
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
                openClass: {
                    list:[]
                }

            }
        },
        created() {
            this.getOpenClassData();
        },
        mounted: function () {
        },
        methods: {
            getOpenClassData(){
                this.getRequest('/getOpenClassByClassAll').then( res =>{
                    console.log(res);
                    this.openClass.list.push(...res.data.openClass)
                }).catch(err =>{
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>
    .open-class{
        display: block;
    }
</style>
