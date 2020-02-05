<template>
<div>
  托福人详情
</div>
</template>

<script>
    export default {
      created() {
        this.tfr_sort = this.$route.query.tfr_sort;
      },
        data() {
            return {
              tfr_sort:'',
            }
        },
        mounted: function () {
        },
        methods: {}
    }
</script>

<style scoped>

</style>
