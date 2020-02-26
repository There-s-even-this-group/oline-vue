<template>
  <div class="block">
    <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage1"
            :page-size="8"
            layout="total, prev, pager, next, jumper"
            :total="50">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "PagingCom",
    data(){
      return{
        currentPage1: 1,
      }
    },


    methods:{
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      // handleSelectionChange(val) {
      //     this.multipleSelection = val;
      // },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped>

</style>