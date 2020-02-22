<template>
    <div class="tfr_left">
      <div v-for="(item,index) in tfr_sorts" class="tfr_itemLeft" :key="item.id">
         <TfrItem :articlelist="tfrArticle[perform[index]].list" :tfr_sort="tfr_sorts[index]"
                  :tfr_Sort_type="perform[index]" :perform="perform[index]" v-loading="loading"></TfrItem>
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
          loading:true,
        perform:['Listening','Speaking','Reading','Writing','Vocabulary','Information','Activities',
        'Prediction'],
        tfrArticle: {
          Listening: {page: 0,list: []},
          Speaking: {page: 0,list: []},
          Reading: {page: 0,list: []},
          Writing: {page: 0,list: []},
          Vocabulary: {page: 0,list: []},
          Information: {page: 0,list: []},
          Activities: {page: 0,list: []},
          Prediction: {page: 0,list: []},
        },
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
      },
      tfr_Sorts_type: {
        type: Array,
        default() {
          return ['听力','口语','阅读','写作','词汇',
            '资讯','活动','机经'];
        }
      },
    },
    created() {
        this.loading=true
      this.getToeflmanHomeData('Listening')
      this.getToeflmanHomeData('Speaking')
      this.getToeflmanHomeData('Reading')
      this.getToeflmanHomeData('Writing')
      this.getToeflmanHomeData('Vocabulary')
      this.getToeflmanHomeData('Information')
      this.getToeflmanHomeData('Activities')
      this.getToeflmanHomeData('Prediction')
    },
    mounted: function () {
    },
    methods: {
      getToeflmanHomeData(type) {
        this.postRequest('/tfrArticle/home',{articleType:type}).then(res =>{
          console.log(res);
          this.tfrArticle[type].list.push(...res.data.list);
          this.loading=false
        }).catch(err =>{
          console.log(err);
        })
      }
    }

  }
</script>

<style scoped>
  .tfr_left{
    display: flex;
    flex-wrap: wrap;
    overflow:hidden;
    font-family:"宋体";
    width: 1080px;
  }
  .tfr_itemLeft{
    width:510px;
    height:316px;
    border-right:1px solid #dcdcdc;
    margin-bottom:40px;
  }


</style>