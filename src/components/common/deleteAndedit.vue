<template>
  <div class="delete-edit">
    <slot name="delete">
      <a id="delete" >删除</a>
    </slot>
    <slot name="edit">
      <a id="edit" >编辑</a>
    </slot>
  </div>
</template>

<script>
  export default {
    name: "deleteAndedit"
  }
</script>

<style scoped>
  .delete-edit{
    display: flex;
  }
</style>