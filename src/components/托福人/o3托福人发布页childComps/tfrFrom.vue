<template>

    <el-form :label-position="'right'" label-width="80px" :model="formLabelAlign">
      <el-form-item label="文章标题">
        <el-input  v-model="formLabelAlign.article_title" placeholder="文章标题"></el-input>
      </el-form-item>
      <el-form-item label="文章分类">
        <el-radio-group v-model="formLabelAlign.article_sort" size="medium">
          <el-radio border label="听力"></el-radio>
          <el-radio border label="口语"></el-radio>
          <el-radio border label="阅读"></el-radio>
          <el-radio border label="写作"></el-radio>
          <el-radio border label="词汇"></el-radio>
          <el-radio border label="资讯"></el-radio>
          <el-radio border label="活动"></el-radio>
          <el-radio border label="机经"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea" v-model="formLabelAlign.article_content" placeholder="请输入文章内容" rows="20">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
  export default {
    name: "tfrFrom",
    data() {
      return {
        formLabelAlign: {
          article_title: '',
          article_sort: '',
          article_author: '暂时是我熊洪伟',
          article_content: '',
          article_date:'',
          article_picture:'',
        }
      }
    },
    computed: {
      getDate: function() {
        let day = new Date()
        return day.getFullYear() + '-' + day.getMonth() + '-' + day.getDay();
      },
      getimgURL: function () {
        return this.$store.state.getters.imgURL;
      }
    },
    methods: {
      onSubmit(){
        console.log('submit!');
        console.log(this.formLabelAlign);
        this.formLabelAlign.article_date = this.getDate;
        this.formLabelAlign.article_picture = this.getimgURL;
        this.postRequest('/tfrArticle/addArticle',this.formLabelAlign).then(res =>{
          this.$store.dispatch('imgURL/postupdateImgURL','')
          const h = this.$createElement;
          this.$notify({
            title: '提示信息',
            message: h('i', { style: 'color: teal'}, '您已成功创建托福文章')
          });
        })
      }
    },
  }
</script>

<style scoped>
  .el-form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .el-form-item {
    width: 1170px;
  }

</style>