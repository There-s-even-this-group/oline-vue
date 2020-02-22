<template>
  <el-container>

    <el-header>
      <el-menu :default-active="this.$route.path" router mode="horizontal">
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          {{ item.navItem }}
        </el-menu-item>
      </el-menu>
    </el-header>

    <el-main>
      <router-view/>
    </el-main>

    <el-footer>
      <div class="flink">
        <div class="flinkTop"></div>
        <div class="flinkBody">
          <h3>友情链接</h3>
          <ul>
            <li>友情连接友情连接</li>
            <li>友情连接友情连接</li>
            <li>友情连接友情连接</li>
            <li>友情连接友情连接</li>
            <li>友情连接友情连接</li>
            <li>友情连接友情连接</li>
            <li>友情连接友情连接</li>
          </ul>
        </div>
      </div>
      <div class="footer">
        <div class="doc1180">
          <div class="footerLink">
            <a href="/#/about">人人托福</a>|
            <a href="###">联系我们</a>|
            <a href="###">招聘信息</a>|
            <a href="###">合作媒体</a>|
            <a href="###">意见反馈</a>|
            <a href="###">版权说明</a>
          </div>
          <div class="footerTxet">©2014 – xuanke.com All rights reserved. 京ICP备14022672号-1</div>
        </div>
      </div>
    </el-footer>
  </el-container>
</template>

<style lang="less">
  @import "assets/css/base.css";
  @import "assets/css/normalize.css";
  @import "assets/css/bootstrap.min.css";
  @import "assets/css/toefl.css";
  .doc1180{width:1180px; margin:0 auto}
  .flink{background:#F0F0F0; padding-bottom:20px;}
  .flinkTop{ background:#68BF4A; height:3px; border-bottom:solid 1px #A4D991;border-top:solid 1px #A4D991;}
  .flinkBody{width:1180px; margin:auto;}
  .flinkBody h3{padding:20px 0 0 40px; font-size:16px;color:#333; font-weight:bold; margin-bottom:10px;}
  .flinkBody ul{overflow:hidden; background:url(./assets/img/基础布局/flinkBody.png) 0 0 repeat;}
  .flinkBody li{width:140px; float:left;padding:0 15px 0 40px;color:#666; line-height:30px;}
  .footer{background:#5d5d5d; border-top:1px solid #bebebe; padding:40px 0;}
  .footerLink{text-align:center;color:#fff; line-height:24px;}
  .footerLink a{color:#fff; margin:0 50px;}
  .footerTxet{text-align:center; color:#fff; padding-top:20px;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
  export default {
    data() {
      return {
        navList:[
          {name:'/',navItem:'首页'},
          {name:'/about',navItem:'登录'},
          {name:'/index',navItem:'测试异步挂载路由'},
          {name:'/toeflman',navItem:'托福人首页'},
          {name:'/toefmanpublic',navItem:'托福人发布页'},
          {name:'/open_class',navItem:'公开课'},
          {name:'/group_chat',navItem:'群组聊'},
        ]
      }
    },
    mounted: function () {
    },
    methods: {}
  }
</script>
