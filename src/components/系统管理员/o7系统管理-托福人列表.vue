<template>
  <el-container direction="vertical">
    <el-header class="el-header">
      <el-form class="form-inline" style="width: 100%" align="center" ref="form" :model="form">
        <el-row :gutter="20" >
          <el-col :span="1" :offset="4"><div class="grid-content bg-purple"><el-tag class="a">标题</el-tag></div></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <el-input v-model="inputname" placeholder="听力加强课程"></el-input>
            </div>
          </el-col>
          <el-col :span="1"><div class="grid-content bg-purple"><el-tag class="a">发布讲师</el-tag></div></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <el-select v-model="value1">
                <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="1"><div class="grid-content bg-purple"><el-tag class="a">课程类别</el-tag></div></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <el-select v-model="value2">
                <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="1"><div class="grid-content bg-purple">
            <el-button type="submit" class="btn" @click="search">搜索</el-button>
          </div>
          </el-col>
          <el-col :span="1"><div class="grid-content bg-purple">
            <el-button type="submit" class="btn" @click="renew">刷新</el-button>
          </div>
          </el-col>
        </el-row>
      </el-form>

    </el-header>
    <el-container style="height: 800px">
      <el-main>
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                @row-click="getRowInf"
                align="center">
          <el-table-column type="selection" width="70" align="center">
          </el-table-column>
          <el-table-column prop="article_title" label="文章标题" width="200" align="center">
            <template slot-scope="scope" >
              <!--              动态绑定路由，跳转到用户对应的资料页面，和路由绑定在一起的是用户名username-->
              <router-link :to="{path:'/FirstPage',query:{name:scope.row.article_title}}" style="color: #D92A11">{{ scope.row.article_title }}</router-link>
            </template>
          </el-table-column>
          <el-table-column prop="article_sort" label="文章类别" width="200" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="article_author" label="发布讲师" width="200" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="article_date" label="发布时间" width="200" align="center">
            <template slot-scope="scope">{{ scope.row.article_date}}</template>
          </el-table-column>
          <el-table-column prop="article_collect" label="收藏人数" width="200" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="article_visit" label="阅读数量" width="200" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="ban" label="状态" width="200" align="center">
            <template slot-scope="scope">{{scope.row.ban===1?"正常":"禁读"}}</template>
          </el-table-column>
          <el-table-column prop="thaw" label="解禁" width="200" align="center">
            <el-button type="success" icon="el-icon-unlock" circle @click="Thaw"></el-button>
          </el-table-column>
          <el-table-column prop="frozen" label="禁读" width="200" align="center">
            <el-button type="info" icon="el-icon-lock" circle @click="Frozen()"></el-button>
          </el-table-column>
          <el-table-column prop="delete" label="删除" width="200" align="center">
            <el-button type="danger" icon="el-icon-delete" circle @click="deletecur()"></el-button>
          </el-table-column>
        </el-table>

      </el-main>
    </el-container>

    <el-footer class="el-footer">
      <PagingCom></PagingCom>
    </el-footer>
  </el-container>
</template>

<script>
  import PagingCom from "./ChildComponent/PagingCom";
  export default {
    components: {PagingCom},
    data() {
      return {

        inputname:'',
        options1:[{value:'0',label:'正常'},{value:'1',label:'冻结'}],
        options2:[{value:'2',label:'老师'},{value:'1',label:'学生'}],
        value1:'',
        value2:'',
        currentPage1: 1,
        currentPage2: 2,
        currentPage3: 3,
        currentPage4: 4,
        form:'',
        dialog: false,
        loading: false,
        tableData:[],
        rowBan:'',
        username:'',
        id:'',
        article_title:'',

      }
    },

    created() {
      this.init()
    },

    mounted: function () {
    },

    methods: {

      //刷新
      renew(){
        this.init();
      },

      //获取当前点击行的index和username
      getRowInf(row){
        var CurBan=row.ban;
        this.ban=CurBan;
        this.article_title=row.article_title;
        console.log(this.ban);
      },

      //解冻课程
      Thaw(){
        if(this.ban==0){
          var Thawarticle_title=this.article_title;
          this.postRequest('/ThawArticle_title',{article_title:Thawarticle_title}).then(resp=>{
            var code=resp.data;
            if (code==1){
              this.$message('解冻成功');
              this.init();
            }else {
              this.$message('解冻失败');
            }
          })
        }else {
          this.$message('已经是正常状态');
        }

      },

      //冻结课程
      Frozen(){
        if(this.ban==1){
          var FrozenArticle_title=this.article_title;
          this.postRequest('/FrozenArticle_title',{article_title:FrozenArticle_title}).then(resp=>{
            var code=resp.data;
            if (code==1){
              this.$message('禁读成功');
              this.init();
            }else {
              this.$message('禁读失败');
            }
          })
        }else {
          this.$message('已经是禁读状态');
        }

      },

      //查询用户
      search(){
        var user1=this.inputname;
        console.log(user1);
        this.postRequest('/searchUser',{username:user1}).then(resp=>{
          var list=resp.data;
          this.tableData=list.tableDataSearch;
        })
      },

      //获取用户全部信息
      init(){
        this.getRequest('/AllTolfInfo').then(resp =>{
          var list=resp.data;
          this.tableData=list.tableData1;
        })
      },

      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },


    }
  }
</script>

<style scoped>

  .btn{color: #fff;background-color:#82848a;}
  .all{font-size: 25px;background-color: #dfe4ed}
  .a{width: 70px;height: 40px;padding-top: 5px}
  .el-header{margin-top: 50px}
  .el-footer{margin-left: 700px}
  .el-form{margin-left: 200px}






</style>
