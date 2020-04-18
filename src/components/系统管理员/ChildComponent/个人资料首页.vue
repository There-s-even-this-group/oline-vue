<template>
  <el-row>
    <el-col :span="6"><div style="margin-left: 20%">
      <User_Information/>
    </div></el-col>
    <el-col :span="18"><div>
      <router-view/>
    </div></el-col>
  </el-row>
</template>

<script>
  import User_Information from "./o7系统管理-用户资料全部组件集合";
  export default {
    components:{
      User_Information
    },
    data() {
      return {}
    },
    mounted: function () {
    },
    methods: {}
  }
</script>

<style scoped>

</style>
