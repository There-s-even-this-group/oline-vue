<template>
  <router-view/>
</template>

<style lang="less">
  @import "assets/css/base.css";
  @import "assets/css/normalize.css";
  /*@import "assets/css/bootstrap.min.css";*/
  @import "assets/css/toefl.css";
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
