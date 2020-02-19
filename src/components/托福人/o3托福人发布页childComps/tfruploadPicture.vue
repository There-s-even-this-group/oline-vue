<template>
    <el-upload
            class="avatar-uploader"
            ref="upload"
            :action="basepath"
            accept="image/jpeg,image/gif,image/png"
            :show-file-list="true"
            :on-progress="onAvatarUpload"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
<!--            :http-request="uploadSectionFile"-->

      <div><span class="propaganda">宣传图片</span></div>
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2MB</div>
    </el-upload>
</template>

<script>
  export default {
    name: "tfruploadPicture",
    data() {
      return  {
        upload_name: '',//图片或视频名称
        ad_url: '',//上传后的图片或视频URL
        basepath:'/img/tfrRecieve',//上传UR
        imageUrl:'',
      };
    },
    props:{

    },
    methods: {
      handleAvatarSuccess(res, file) {
        // 显示上传成功的图片
        this.imageUrl = URL.createObjectURL(file.raw);
        this.upload_name = file.name;
        this.$store.dispatch('postupdateImgURL','toelfman/' + res)
        console.log(res);
        console.log(file);
        console.log('--------------');
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

        console.log('正在上传');
      },
      uploaderror(err, file, fileList) {
        console.log(err);
        console.log(file);
        console.log(fileList);
      },
    }
  }
</script>

<style scoped>
  .propaganda{
    color:#3c763d;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075);
  }
  .avatar-uploader .el-upload {
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