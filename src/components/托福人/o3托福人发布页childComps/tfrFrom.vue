<template>
<div>
    <el-upload
            class="avatar-uploader"
            ref="upload"
            :action="basepath"
            :limit="1"
            :data="{imgPath:'toelfman'}"
            :auto-upload="false"
            accept="image/jpeg,image/gif,image/png"
            :show-file-list="true"
            :on-progress="onAvatarUpload"
            :on-success="handleAvatarSuccess"
            :on-change="onAvatarChange"
            :before-upload="beforeAvatarUpload">
      <!--            :http-request="uploadSectionFile"-->

      <div><span class="propaganda">宣传图片</span></div>
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2MB</div>
    </el-upload>

    <el-form :label-position="'right'" label-width="80px" :model="formLabelAlign">
      <el-form-item label="文章标题">
        <el-input  v-model="formLabelAlign.article_title" placeholder="文章标题"></el-input>
      </el-form-item>
      <el-form-item label="文章分类">
        <el-radio-group v-model="formLabelAlign.article_sort" size="medium">
          <el-radio border label="听力"></el-radio>
          <el-radio border label="阅读"></el-radio>
          <el-radio border label="词汇"></el-radio>
          <el-radio border label="活动"></el-radio>
          <el-radio border label="口语"></el-radio>
          <el-radio border label="写作"></el-radio>
          <el-radio border label="资讯"></el-radio>
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
</div>
</template>

<script>

  export default {
    name: "tfrFrom",
    data() {
      return {
        ad_url: '',//上传后的图片或视频URL
        basepath:'/upload/tfrRecieve',//上传UR
        imageUrl:'',
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
    },
    methods: {
      handleAvatarSuccess(res, file) {
        console.log(file);
        console.log(res);
        console.log('--------------');
        //下面才是真正的上传文章
        this.formLabelAlign.article_picture = res;
        this.formLabelAlign.article_sort = this.getarticle_sort(this.formLabelAlign.article_sort);
        console.log('正在上传的url为：'+this.formLabelAlign.article_picture);
        this.postRequest('/tfrArticle/addArticle', this.formLabelAlign).then(res => {
          const h = this.$createElement;
          this.$notify({
            title: '提示信息',
            message: h('i', {style: 'color: teal'}, '您已成功创建托福文章')
          });
        })
      },
      beforeAvatarUpload(file) {
        console.log('上传之前');
        console.log(file);
        console.log('--------------');
        const isLt2M = file.size / 1024 / 1024 < 5;

        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 5MB!');
        }
        return isLt2M;
      },
      onAvatarUpload(event, file, fileList){
      },
      onAvatarChange(file, fileList){
        console.log('change');
        console.log(file);
        // 显示上传成功的图片
        if(file.status == 'ready')
          this.imageUrl = URL.createObjectURL(file.raw);
      },
      uploaderror(err, file, fileList) {
        console.log(err);
        console.log(file);
        console.log(fileList);
      },
      getarticle_sort(sort)  {
        if(sort == '听力')
          return 'Listening'; else if(sort == '阅读')
          return 'Reading'; else if(sort == '词汇')
          return 'Vocabulary'; else if(sort == '活动')
          return 'Activities';else if(sort == '口语')
          return 'Speaking';else if(sort == '写作')
          return 'Writing';else if(sort == '资讯')
          return 'Information';else if(sort == '机经')
          return 'Prediction';
      },
      onSubmit() {
        console.log('submit!');
        this.formLabelAlign.article_date = this.getDate;
        this.$refs.upload.submit()
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
  .propaganda{
    color:#3c763d;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075);
  }
  .avatar-uploader{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 850px;
    height: 430px;
    display: block;
  }
  .el-upload__input input[file] {
    display: none;
  }
</style>