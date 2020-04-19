<template>
  <el-container direction="vertical">
    <el-header class="el-header">
      <el-form>
        <el-row gutter="20">
          <el-col span="1" offset="9">
            <el-div>
              <el-tag class="a" >用户名</el-tag>
            </el-div>
          </el-col>
          <el-col span="3">
            <el-div class="grid-content bg-purple">
              <el-input v-model="inputname" placeholder="谭州勇" ></el-input>
            </el-div>
          </el-col>
          <el-col span="1">
            <el-div>
              <el-button type="submit" class="btn" @click="search">搜索</el-button>
            </el-div>
          </el-col>
          <el-col :span="1"><div class="grid-content bg-purple">
            <el-button type="submit" class="btn" @click="renew">刷新</el-button>
          </div>
          </el-col>


        </el-row>
      </el-form>
    </el-header>
    <el-container style="height: 800px" >
      <el-main>
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                @row-click="getRowInf">
          <el-table-column type="selection" width="70" align="center">
          </el-table-column>
          <el-table-column label="头像" width="100" align="center">
            <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
          </el-table-column>
          <el-table-column prop="username" label="用户名称" width="120" align="center" >
            <template slot-scope="scope" >
<!--              <el-button type="primary" round @click="userClick">-->
<!--                {{ scope.row.username }}-->
<!--              </el-button>-->

<!--              动态绑定路由，跳转到用户对应的资料页面，和路由绑定在一起的是用户名username-->
              <router-link :to="{path:'/FirstPage',query:{name:scope.row.username}}" style="color: #D92A11">{{ scope.row.username }}</router-link>

            </template>
          </el-table-column>
          <el-table-column prop="sex" label="性别" width="120" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="email" label="邮箱" width="180" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="phone" label="电话" width="140" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="birthdata" label="出生日期" width="140" align="center">
            <template slot-scope="scope">{{ scope.row.birthdata }}</template>
          </el-table-column>
          <el-table-column prop="article" label="文章" width="140" align="center">
            <template slot-scope="scope">
              <el-button type="warning" round >
                {{ scope.row.article }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column prop="curriculum" label="课程" width="140" align="center">
            <template slot-scope="scope">
              <el-button type="warning" round >
                {{ scope.row.curriculum }}
              </el-button>
            </template>
          </el-table-column>
<!--          <el-table-column label="课程资源" width="290" align="center">-->
<!--            <template>-->
<!--              <el-div>-->
<!--                <el-button type="primary" round>-->
<!--                  文章-->
<!--                  <el-tag type="circle" prop="article">-->
<!--                    <template slot-scope="scope">{{ scope.row.article }}</template>-->
<!--                  </el-tag>-->
<!--                </el-button>-->
<!--              </el-div>-->
<!--              <el-div>-->
<!--                <el-button type="warning" round>-->
<!--                  课程-->
<!--                  <el-tag type="circle" prop="curriculum">-->
<!--                    <template slot-scope="scope">{{ scope.row.curriculum}}</template>-->
<!--                  </el-tag>-->
<!--                </el-button>-->
<!--              </el-div>-->
<!--            </template>-->
<!--          </el-table-column>-->
          <el-table-column prop="ban" label="状态" width="100" align="center">
              <template slot-scope="scope">{{scope.row.ban===1?"冻结":"正常"}}</template>
          </el-table-column>
          <el-table-column prop="thaw" label="解冻" width="120" align="center">
            <el-button type="success" icon="el-icon-unlock" circle @click="Thaw"></el-button>
          </el-table-column>
          <el-table-column prop="frozen" label="冻结" width="120" align="center">
            <el-button type="info" icon="el-icon-lock" circle @click="Frozen()"></el-button>
          </el-table-column>
          <el-table-column prop="delete" label="删除" width="120" align="center">
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </el-table-column>
        </el-table>

      </el-main>
      <el-aside style="">
        <el-tag class="all">总体操作</el-tag>
        <el-div>
          <el-row style="margin-top: 50px">
            <el-col :span="24">
              <div>
                <el-button type="primary" round>创建教师账号</el-button>
              </div>
            </el-col>
          </el-row>
        </el-div>
        <el-div>
          <el-row style="margin-top: 100px">
            <el-col :span="24">
              <div>
                <el-button type="success" round>解冻教师账号</el-button>
              </div>
            </el-col>
          </el-row>
        </el-div>
        <el-div>
          <el-row style="margin-top: 100px">
            <el-col :span="24">
              <div>
                <el-button type="info" round >冷冻教师账号</el-button>
              </div>
            </el-col>
          </el-row>
        </el-div>
        <el-div>
          <el-row style="margin-top: 100px">
            <el-col :span="24">
              <div>
                <el-button type="danger" round>删除教师账号</el-button>
              </div>
            </el-col>
          </el-row>
        </el-div>




      </el-aside>
    </el-container>
    <el-footer class="el-footer">
<!--      <div class="block">-->
<!--        <el-pagination-->
<!--                @size-change="handleSizeChange"-->
<!--                @current-change="handleCurrentChange"-->
<!--                :current-page="currentPage1"-->
<!--                :page-size="8"-->
<!--                layout="total, prev, pager, next, jumper"-->
<!--                :total="50">-->
<!--        </el-pagination>-->
<!--      </div>-->

<!--      分页组件-->
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
        inputname: '',
        currentPage1: 1,
        tableData: [],
        rowBan:'',
        username:'',
      }
    },

    created() {
      this.init()
    },

    mounted: function () {
    },
    methods: {
      // //进入用户资料界面
      // userClick(){
      //   this.$message('hahashhah');
      //   this.$router.push('/User_Information');
      // },

      //刷新
      renew(){
        this.init();
      },

      //获取当前点击行的index和username
      getRowInf(row){
        var ban=row.ban;
        this.ban=ban;
        this.username=row.username;
        console.log(this.ban);
      },

      //冻结用户
      Frozen(){
        if(this.ban==0){
          var FrozenUsername=this.username;
          this.postRequest('/FrozenUser',{username:FrozenUsername}).then(resp=>{
            var code=resp.data;
            if (code==1){
              this.$message('冻结成功');
              this.init();
            }else {
              this.$message('冻结失败');
            }
          })
        }else {
          this.$message('已经是冻结状态');
        }

      },

      //解冻用户
      Thaw(){
        if(this.ban==1){
          var ThawUsername=this.username;
          this.postRequest('/ThawUser',{username:ThawUsername}).then(resp=>{
            var code=resp.data;
            if (code==1){
              this.$message('解冻成功');
              this.init();
            }else {
              this.$message('解冻失败');
            }
          })
        }else {
          this.$message('已经是解冻状态');
        }

      },

      //获取老师信息
      init(){
        this.getRequest('/AllTeacherInfo').then(resp =>{
          var list=resp.data;
          this.tableData=list.tableData1;
        })
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

      // handleSelectionChange(val) {
      //   this.multipleSelection = val;
      // },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped>
  .a{width: 70px;height: 40px;padding-top: 5px}
  .btn{color: #fff;background-color:#82848a;}
  .el-header{margin-top: 50px}
  .el-footer{margin-left: 700px}

</style>
