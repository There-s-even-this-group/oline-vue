<template>
  <div class="pageList">
    <ul>
      <li><span>1</span></li>
      <li><a href="###">2</a></li>
      <li><a href="###">3</a></li>
      <li><a href="###">4</a></li>
      <li><a href="###">5</a></li>
      <li><a href="###">最后一页</a></li>
      <li><a href="###" class="pret">上一页</a></li>
      <li><a href="###" class="next">下一页</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "tfrPageList"
  }
</script>

<style scoped>
  .pageList{padding:70px 0 20px; overflow:hidden;}
  .pageList ul{display:inline-table; float:right; overflow:hidden;}
  .pageList li{display:inline-table; height:33px; line-height:32px; margin:0 3px;}
  .pageList li a{color:#65656;}
  .pageList li span{color:#009FD6;}
  .pageList li a.pret,
  .pageList li a.next{width:73px; height:33px; display:block; background:url(~assets/img/托福人/pageList.jpg) 0 0 no-repeat; text-align:center; color:#fff;}
</style>