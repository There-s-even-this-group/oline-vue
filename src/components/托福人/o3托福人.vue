<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24" class="mian">
        <div class="left-container left">1</div>
        <div class="container">
        <TfrCategory></TfrCategory>
        </div>
        <div class="right-container">
          <TfrAttendance></TfrAttendance>
          <TfrHomework></TfrHomework>
          <TfrHotGroup></TfrHotGroup>
          <TfrHotActivity></TfrHotActivity>
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
  import {getToeflmanHomeData} from "network/toeflmanHome";

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
      created() {
        // getToeflmanHomeData().then(res =>{
        //   this.tfr_details = res.data.tfr_details
        // })
      },
      mounted: function () {
      },
      methods: {}
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
  .mian{
    display: flex;
  }
  .left-container{
    flex: 1.3;

    background-color: #ff5777;
  }
  .container{
    flex: 3.3;
  }
  .right-container {
    flex: 1.7;
  }


</style>
