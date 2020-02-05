<template>
    <div class="tfr_left">
      <div v-for="(item,index) in tfr_sorts" class="tfr_itemLeft">
         <TfrItem :tfr_details="tfr_details" :tfr_sort="tfr_sorts[index]" :perform="perform[index]"></TfrItem>
      </div>
    </div>
</template>

<script>
  import TfrItem from "./TfrItem";
  export default {
    name: "TfrCategory",
    components: {
      TfrItem
    },
    data() {
      return {
        perform:['Listening','Speaking','Reading','Writing','Vocabulary','Information','Activities',
        'Prediction']
      }
    },
    props: {
      tfr_details: {
        type: Array,
        default() {
          return ['温格承诺追分施压切尔西 拒绝曼城挖角不卖小威','温格承诺追分施压切尔西 拒绝曼城挖角不卖小威','温格承诺追分施压切尔西 拒绝曼城挖角不卖小威',
            '温格承诺追分施压切尔西 拒绝曼城挖角不卖小威','温格承诺追分施压切尔西 拒绝曼城挖角不卖小威','温格承诺追分施压切尔西 拒绝曼城挖角不卖小威']
        }
      },
      tfr_sorts: {
        type: Array,
        default() {
          return ['听力/Listening','口语/Speaking','阅读/Reading','写作/Writing','词汇/Vocabulary',
            '资讯/Information','活动/Activities','机经/Prediction'];
        }
      }
    }
  }
</script>

<style scoped>
  .tfr_left{
    display: block;
    width:910px;
    overflow:hidden;
    font-family:"宋体"
  }
  .tfr_itemLeft{
    width:450px;
    height:316px;
    border-right:1px solid #dcdcdc;
    float: left;
    margin-bottom:40px;
  }


</style>