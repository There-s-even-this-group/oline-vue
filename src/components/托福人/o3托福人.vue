<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24" class="main">
        <div class="left-container left">这边是左边内容</div>
        <div class="container">
          <slot name="contain">
        <TfrCategory></TfrCategory>
          </slot>
        </div>
        <div class="right-container">
          <TfrAttendance></TfrAttendance>
          <TfrHomework></TfrHomework>
          <TfrHotGroup></TfrHotGroup>
          <slot name="sideBar">
          <TfrHotActivity></TfrHotActivity>
          </slot>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import TfrCategory from "./o3托福人childComps/TfrCategory";
  import TfrAttendance from "./o3托福人childComps/TfrAttendance";
  import TfrHomework from "./o3托福人childComps/TfrHomework";
  import TfrHotGroup from "./o3托福人childComps/TfrHotGroup";
  import TfrHotActivity from "./o3托福人childComps/TfrHotActivity";

  export default {
      components :{
        TfrCategory,
        TfrAttendance,
        TfrHomework,
        TfrHotGroup,
        TfrHotActivity,
      },
      data() {
        return {
          tfr_details:['温格承诺追分施压切尔西 拒绝曼城挖角不卖小威','温格承诺追分施压切尔西 拒绝曼城挖角不卖小威','温格承诺追分施压切尔西 拒绝曼城挖角不卖小威',
            '温格承诺追分施压切尔西 拒绝曼城挖角不卖小威','温格承诺追分施压切尔西 拒绝曼城挖角不卖小威','温格承诺追分施压切尔西 拒绝曼城挖角不卖小威'],
        }
      },
    }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 40px;
    float: none;
  }
  .bg-purple {
    background: #ffffff;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    display: block;
    border-radius: 4px;
    min-height: 36px;
    bottom: 30px;
  }
  .main{
    display: flex;
  }
  .left-container{
    flex: 1.3;

    background-color: #ff5777;
  }
  .container{
    flex: 3.3;
    display: block;
  }
  .right-container {
    flex: 1.7;
  }


</style>
