<template>
  <el-container direction="vertical">
    <el-header class="el-header">
      <el-form class="form-inline" style="width: 100%" align="center" ref="form" :model="form">
        <el-row :gutter="20" >

          <el-col :span="1" :offset="6"><div class="grid-content bg-purple"><el-tag class="a">用户名</el-tag></div></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <el-input v-model="inputname" placeholder="谭州勇"></el-input>
            </div>
          </el-col>
          <el-col :span="1"><div class="grid-content bg-purple"><el-tag class="a">状态</el-tag></div></el-col>
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
          <el-col :span="1"><div class="grid-content bg-purple"><el-tag class="a">角色</el-tag></div></el-col>
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
                @row-click="getRowInf">
          <el-table-column type="selection" width="70" align="center">
          </el-table-column>
          <el-table-column label="头像" width="100" align="center">
            <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
          </el-table-column>
          <el-table-column prop="username" label="用户名称" width="120" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="sex" label="性别" width="120" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="email" label="邮箱" width="180" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="phone" label="电话" width="180" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="birthdata" label="出生日期" width="150" align="center">
            <template slot-scope="scope">{{ scope.row.birthdata}}</template>
          </el-table-column>
          <el-table-column prop="role.id" label="角色" width="100" align="center">
            <template slot-scope="scope">{{scope.row.role.id===1?"学生":"老师"}}</template>
          </el-table-column>
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
            <el-button type="danger" icon="el-icon-delete" circle @click="deletecur()"></el-button>
          </el-table-column>
        </el-table>

      </el-main>
      <el-aside style="">
        <el-tag class="all">总体操作</el-tag>
        <el-div>
          <el-row style="margin-top: 50px">
            <el-col :span="24">
              <div>
                <el-button type="primary" round @click="dialog = true">创建用户</el-button>
              </div>
            </el-col>
          </el-row>
        </el-div>
        <el-div>
          <el-row style="margin-top: 100px">
            <el-col :span="24">
              <div>
                <el-button type="success" round >解冻用户</el-button>
              </div>
            </el-col>
          </el-row>
        </el-div>
        <el-div>
          <el-row style="margin-top: 100px">
            <el-col :span="24">
              <div>
                <el-button type="info" round >冷冻用户</el-button>
              </div>
            </el-col>
          </el-row>
        </el-div>
        <el-div>
          <el-row style="margin-top: 100px">
            <el-col :span="24">
              <div>
                <el-button type="danger" round>删除用户</el-button>
              </div>
            </el-col>
          </el-row>
        </el-div>




      </el-aside>
    </el-container>

    <el-drawer :before-close="handleClose" :visible.sync="dialog" direction="rtl" custom-class="demo-drawer" ref="drawer">
      <div class="demo-drawer__content" >
        <el-form :model="registerFrom" class="el-form">
          <el-form-item label="用户名称" >
            <el-input type="text" v-model="registerFrom.username" style="width: 200px" ></el-input>
          </el-form-item>
          <el-form-item label="用户密码" >
            <el-input type="password" v-model="registerFrom.password" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="电话" >
            <el-input v-model="registerFrom.phone"  style="width: 220px"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="registerFrom.email" style="width: 220px"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <label-wrap for="male">
              <input type="radio" id="male" name="sex" value="男" v-model="registerFrom.sex">男
            </label-wrap>
            <label-wrap for="female">
              <input type="radio" id="female" name="sex" value="女" v-model="registerFrom.sex">女
            </label-wrap>
          </el-form-item>
          <el-form-item label="身份">
            <label-wrap for="student">
              <input type="radio" id="student" name="role" value="1" v-model="registerFrom.role">学生
            </label-wrap>
            <label-wrap for="teacher">
              <input type="radio" id="teacher" name="role" value="2" v-model="registerFrom.role">老师
            </label-wrap>
            <label-wrap for="admin">
              <input type="radio" id="admin" name="role" value="3" v-model="registerFrom.role">管理员
            </label-wrap>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer" align="center">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button type="primary" @click="createUser()" :loading="loading">{{ loading ? '提交中 ...' : '创 建' }}</el-button>
        </div>
      </div>

    </el-drawer>

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

        registerFrom:{
          username:'',
          password:'',
          phone:'',
          email:'',
          role:'',
          sex:''
        },
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
        var ban=row.ban;
        this.ban=ban;
        this.username=row.username;
        console.log(this.ban);
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
        this.getRequest('/AllUserInfo').then(resp =>{
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

      // createUser(){
      //   this.$refs.registerFrom.validate(valid=>{
      //     if(valid){
      //       this.loading = true;
      //       this.$store.dispatch('adminAddUser',this.registerFrom).then(resp=>{
      //         var code=resp.data;
      //         if(code==1){
      //           console.log('创建成功')
      //         }else {
      //           console.log('已存在此用户')
      //         }
      //         this,loading=false;
      //       })
      //
      //     }
      //   })
      // }
      createUser(){
        this.postRequest('/adminAddUser',this.registerFrom).then(resp=>{
          var code=resp.data;
          if(code==1){
            this.loading = false;
            this.dialog = false;
            this.$message('创建成功');
          }else {
            this.loading = false;
            this.dialog = false;
            this.$message('已存在此用户');
          }
        })
      },
      // createUser(done) {
      //   if (this.loading) {
      //     return;
      //   }
      //   this.$confirm('确定要创建此用户吗？')
      //       .then(_ => {
      //         this.loading = true;
      //         this.$store.dispatch('/adminAddUser',this.registerFrom).then(resp=>{
      //           var code=resp.data;
      //           if(code==1){
      //             console.log('创建成功')
      //           }else {
      //             console.log('已存在此用户')
      //           }
      //           this.loading=false;
      //         })
      //         this.timer = setTimeout(() => {
      //           done();
      //           // 动画关闭需要一定的时间
      //           setTimeout(() => {
      //             this.loading = false;
      //           }, 400);
      //         }, 2000);
      //       })
      //       .catch(_ => {});
      // },
      cancelForm() {
        this.loading = false;
        this.dialog = false;
        clearTimeout(this.timer);
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
