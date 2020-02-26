<template>
  <div>
    <slot name="contentDetails">
    {{article_content}}
    </slot>
  </div>
</template>

<script>
  export default {
    name: "tfr_ContentDetails",
    props: {
      article_content: {
        type:String,
        default(){
          return '这个人很懒，什么都没留下………'
        }
      }
    }
  }
</script>

<style scoped>

</style>