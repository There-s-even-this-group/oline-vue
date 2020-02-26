<template>
  <el-container direction="vertical">
    <el-header class="el-header">
      <el-form class="form-inline" style="width: 100%" align="center" >
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
          <el-col :span="1"><div class="grid-content bg-purple"><el-tag class="a">等级</el-tag></div></el-col>
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
          <el-col :span="1"><div class="grid-content bg-purple"><el-button type="submit" class="btn">搜索</el-button></div></el-col>
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
                @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="70" align="center">
          </el-table-column>
          <el-table-column label="头像" width="100" align="center">
            <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
          </el-table-column>
          <el-table-column prop="name" label="用户名称" width="120" align="center">
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
          <el-table-column prop="birthday" label="出生日期" width="150" align="center">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="loginday" label="注册时间" width="150" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="grade" label="等级" width="100" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="state" label="状态" width="100" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="thaw" label="解冻" width="120" align="center">
            <el-button type="success" icon="el-icon-unlock" circle></el-button>
          </el-table-column>
          <el-table-column prop="frozen" label="冻结" width="120" align="center">
            <el-button type="info" icon="el-icon-lock" circle ></el-button>
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
        <el-form :model="form" class="el-form">
          <el-form-item label="用户名称" >
            <el-input type="text" v-model="form.name" style="width: 200px" ></el-input>
          </el-form-item>
          <el-form-item label="用户密码" >
            <el-input type="password" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="出生日期" >
            <el-input type="date" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="电话" >
            <el-input v-model="form.name"  style="width: 220px"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.name" style="width: 220px"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <label-wrap for="male">
              <input type="radio" id="male" name="sex" value="男" v-model="form.sex">男
            </label-wrap>
            <label-wrap for="female">
              <input type="radio" id="female" name="sex" value="女" v-model="form.sex">女
            </label-wrap>
          </el-form-item>


        </el-form>
        <div class="demo-drawer__footer" align="center">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '创 建' }}</el-button>
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
        inputname:'',
        options1:[{value:'1',label:'正常'},{value:'2',label:'冷冻'}],
        options2:[{value:'1',label:'高'},{value:'2',label:'中'},{value:'3',label:'低'}],
        value1:'',
        value2:'',
        currentPage1: 1,
        currentPage2: 2,
        currentPage3: 3,
        currentPage4: 4,

        form:'',

        dialog: false,
        loading: false,

        tableData: [{
          date: '2016-05-03',
          name: '小猪猪',
          address: '上海市普陀区金沙江路 1518 弄'},
          {
            date: '2016-05-03',
            name: '大猪猪',
            address: '上海市普陀区金沙江路 1518 弄'}
        ]
      }
    },
    mounted: function () {
    },
    methods: {
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

      handleClose(done) {
        if (this.loading) {
          return;
        }
        this.$confirm('确定要创建此用户吗？')
            .then(_ => {
              this.loading = true;
              this.timer = setTimeout(() => {
                done();
                // 动画关闭需要一定的时间
                setTimeout(() => {
                  this.loading = false;
                }, 400);
              }, 2000);
            })
            .catch(_ => {});
      },
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
