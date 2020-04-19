<template>
  <div style="margin-left: 40%">
    <adminUpdateSecondMenu/>

    <router-view/>
  </div>
</template>

<script>
  import adminUpdateSecondMenu from "./AdminSecondMenu.vue";
  export default {
    components: {
      adminUpdateSecondMenu
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
