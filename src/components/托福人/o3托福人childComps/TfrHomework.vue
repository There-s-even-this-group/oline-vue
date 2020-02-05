<template>
  <div class="index_homework">
  <div v-for="(item,index) in homework.num">
    <dl>
      <dt>
        <i class="index_homeworkIcon"><img :src="homework.imgURL[index]" width="20" height="20"></i>
        <a href="#" class="index_homeworkTitle">{{item}}</a>
      </dt>
      <dd>
        <a href="#">{{homework.word[index]}}</a>
      </dd>
    </dl>
  </div>
  </div>
</template>

<script>
  export default {
    name: "TfrHomework",
    data() {
      return {
        homework:{
          num : ['听力','阅读','写作','翻译'],
          imgURL:[require("assets/img/托福人/index_homeworkIcon_1.png"),
            require("assets/img/托福人/index_homeworkIcon_2.png"),
            require("assets/img/托福人/index_homeworkIcon_3.png"),
            require("assets/img/托福人/index_homeworkIcon_4.png")],
          word:[
            '控制字数控制显示的字数控制字数控制显示的字数控制字数控制显示的字数',
            '控制字数控制显示的字数控制字数控制显示的字数控制字数控制显示的字数',
            '控制字数控制显示的字数控制字数控制显示的字数控制字数控制显示的字数',
            '控制字数控制显示的字数控制字数控制显示的字数控制字数控制显示的字数'
          ]
        }
      }
    },
    computed:{
    },
    methods: {

    }
  }
</script>

<style scoped>
  .index_homework{}
  .index_homework dt{ display:flex;overflow:hidden; margin-bottom:10px;}
  .index_homeworkIcon{width:auto; height:20px;}
  a.index_homeworkTitle{display:flex;width: 40px;height:20px;margin-left: 20px;}
  a.index_homeworkTitle:hover{color:#333; height:20px; line-height:20px; width:248px; }
  .index_homework dd{height:40px;width:300px;color:#555; font-size:14px; line-height:34px; height:34px; overflow:hidden; margin-bottom:10px; text-align: right}
</style>