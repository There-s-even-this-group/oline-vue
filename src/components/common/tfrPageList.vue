<template>
  <div class="pageList">
    <el-pagination
            background
            layout="prev, pager, next"
            :total="500"
            @size-change="SizeChange"
            @current-change="CurrentChange"
            @prev-click="PrevClick"
            @next-click="NextClick"
    >
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "tfrPageList",
    methods: {
      SizeChange(num){
        console.log(num);
      },
      CurrentChange(num){
        console.log('当前页'+ num);
        this.$emit('NumChange',num);
      },
      PrevClick(num){
        console.log('当前页'+ num);
        this.$emit('NumChange',num);
      },
      NextClick(num){
        console.log('当前页'+ num);
        this.$emit('NumChange',num);
      }
    }
  }
</script>

<style scoped>
  .pageList{padding:70px 0 20px; overflow:hidden;}

</style>