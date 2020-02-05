<template>
  <div class="tfr_classify">
    <dl>
      <dt><slot name="item-img-dt"><img src="~assets/img/托福人/400x240.png" ></slot></dt>
      <dd>
        <slot name="item-title-div">
          <div class="tfr_classifyh3">
            <h3>{{tfrClassfy_title}}</h3>
            <div><a href="###" class="imgA"><img class="img" src="@/assets/img/托福人/125x125.jpg"/> alex</a>
            </div>
          </div>
          <div class="tfr_classifyText">
            <span>{{tfr_Classfy_Details}}</span>
          </div>
        </slot>
        <slot name="item-footer-div">
          <div class="tfr_classifyTime">
            <span>所属分类:</span><a href="###">{{tfr_sort}}</a>
            <span style="margin-left: 30px">发布日期：</span><span>{{publisdate}}</span>
            <div class="commDiv">
              <span class="glyphicon glyphicon-heart" style="color: #D92A11;"></span> <span>100</span>
              <span class="glyphicon glyphicon-user" style="color: #388BFF;"></span><span>20</span>
            </div>
          </div>
        </slot>
      </dd>
    </dl>
  </div>
</template>

<script>
  export default {
    name: "itemDetails",
    data(){
      return {
        publisdate:'2020-2-5',
        tfrClassfy_title:['托福口语5个技巧带你入门'] ,
        tfr_Classfy_Details: ['对于很多打算考托福的同学来说，该如何准备托福口语是个很困扰的问题。其实，利用OG，分析录音，对于很多打算考托福的同学来说，' +
        '该如何准备托福口语是个很困扰的问题。其实，' + '利用OG，分析录音对于很多打算考托福的同学来说，该如何准备托福口语是个很困扰的问题。其实，利用OG，分析录音，'],
      }
    },
    methods:{

    },
    props:{
      tfr_sort: {
        type: String,
        default() {
          return "听力/Listening"
        }
      }
    }
  }
</script>

<style scoped>
  .tfr_classify {}
  .tfr_classify dl{
    display: flex;
    overflow:hidden; margin-top: 30px;}
  .tfr_classify dt,
  .tfr_classify dt img{width:400px; height:240px;}
  .tfr_classify dt{width:400px;  overflow:hidden;}

  .tfr_classify dd{
    display: block;
    width:430px; }



  .tfr_classifyTime {
    margin-top: 20px;
    display: flex;
    color:#999;
    font-size:14px;
    line-height:22px;
    padding-left: 20px;
    overflow: hidden;
  }
  .tfr_classifyTime span {

  }
  .tfr_classifyTime a {
    display: block;
    height: 22px;
    text-align: left;

  }
  .tfr_classifyTime .commDiv{
    width: 100px;
    padding-left: 10px;
  }

</style>