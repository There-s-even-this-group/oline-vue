<template>
  <div class="tfr_jrsx">
    <h3>今日上线</h3>
    <span>+12</span>
  </div>
</template>

<script>
  export default {
    name: "TfrAttendence"
  }
</script>

<style scoped>
  .tfr_jrsx{
    display: flex;
    overflow:hidden; padding-bottom:50px;height: 80px}
  .tfr_jrsx h3{width:100px; height:34px; line-height:34px; text-align:center; background:#68BF4A;color:#fff;}
  .tfr_jrsx span{height:24px;line-height:24px; font-size:12px; color:#666666; margin-left:5px }
</style>