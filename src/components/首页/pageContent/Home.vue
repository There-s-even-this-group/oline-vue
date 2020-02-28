<template>
  <div>
    {{list}}<br>
    {{roles}}
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list : [],
        roles : []
      }
    },
    mounted: function () {
      this.init()
    },
    methods: {
      init(){
        this.getRequest('/user/getMessage').then(resp=> {
          if (resp && resp.status == 200) {
            var data = resp.data;
            this.list = data;
          }
        });
        this.roles = this.$store.getters.roles;
      }
    }
  }
</script>
