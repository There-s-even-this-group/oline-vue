<template>
  <div>
    <div class="tfr_itemLeftTop">
      <h3 :class="'tfr_item' + perform">{{tfr_sort}}</h3>
      <a href="#" @click="toToelfSort" class="viewAll">view all</a>
    </div>
    <div class="tfr_itemList">
      <ul v-for="(value,index) in articlelist">
        <li><a href="#" @click="toToelfDetails(index)">{{value.article_title}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TfrItem",
    data() {
      return {
        tfr_itemReading:'tfr_itemListening'
      }
    },
    props: {
      tfr_sort: {
        type: String,
        default() {
          return "听力/Listening"
        }
      },
      tfr_Sort_type: {
        type: String,
        default(){
          return "听力";
        }
      },
      articlelist: {
        type: Array,
        default() {
          return [];
        }
      },
      perform: {
        type: String,
        default() {
          return 'Reading'
        }
      },
    },
    created() {

    },
    methods: {
      toToelfSort() {
        this.$router.push({
          path: '/toeflman/toelfsort',
          query: {
            tfr_Sort_type: this.tfr_Sort_type
          }
        })
        console.log(this.tfr_Sort_type);
      },
      toToelfDetails(index) {
        this.$router.push({
          path: '/toeflman/toelfsort/details',
          query: {
            article_id: this.articlelist[index].article_id
          }
        })
      }
    }
  }
</script>

<style scoped>
  .tfr_itemLeftTop{overflow:hidden;width:390px;height:40px;border-bottom:solid 1px #dcdcdc; font-size:14px;line-height:40px;margin-left: 15px;}
  .tfr_itemLeftTop h3{width:170px; float:left;padding-left:5px; font-size:15px; }
  .tfr_itemList{width:500px; padding-top:15px;margin-left: 10px}
  .tfr_itemList ul li{list-style: none;}
  .tfr_itemList li{overflow: hidden;height:40px; font-size:14px; line-height:40px; padding-left:25px; background:url(~assets/img/托福人/tfr_itemList.png) 10px center no-repeat;color:#8d8d8d;}
  .tfr_itemList li a{color:#8d8d8d;}
  .tfr_itemList a:hover{color:#333;}

  a.viewAll{width:65px; height:40px;display:block;float:right;text-align:right;color:#a2a2a2;}
  a.viewAll:hover{color:#333;}

  .tfr_itemListening{color:#8ECD7B; background:url(~assets/img/托福人/tfr_itemListening.png) 0 center no-repeat;text-align: end}
  .tfr_itemSpeaking{color:#df2b23;background:url(~assets/img/托福人/tfr_itemSpeaking.png) 0 center no-repeat;text-align: end}
  .tfr_itemReading{color:#1ab592;background:url(~assets/img/托福人/tfr_itemReading.png) 0 center no-repeat;text-align: end}
  .tfr_itemWriting{color:#7569ca;background:url(~assets/img/托福人/tfr_itemWriting.png) 0 center no-repeat;text-align: end}
  .tfr_itemVocabulary{background:url(~assets/img/托福人/tfr_itemVocabulary.png) 0 center no-repeat;text-align: end}
  .tfr_itemInformation{background:url(~assets/img/托福人/tfr_itemInformation.png) 0 center no-repeat;text-align: end}
  .tfr_itemActivities{background:url(~assets/img/托福人/tfr_itemActivities.png) 0 center no-repeat;text-align: end}
  .tfr_itemPrediction{background:url(~assets/img/托福人/tfr_itemPrediction.png) 0 center no-repeat;text-align: end}
</style>