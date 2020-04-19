<template>
  <div align="center">
    <el-menu :default-active="this.$route.path" router mode="horizontal">
      <el-menu-item v-for="(item) in navList" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
    </el-menu>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        navList:[
          {name:'/AdminUpdateBaseinf',navItem:'基本资料'},
          {name:'/AdminUpdateIconconfig',navItem:'头像设置'},
          {name:'/AdminUpdatePassword',navItem:'密码设置'},
        ],
      }
    },
    mounted: function () {
    },
    methods: {}
  }
</script>

<style scoped>

</style>
