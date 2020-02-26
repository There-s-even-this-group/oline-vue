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
              <el-button type="submit" class="btn">搜索</el-button>
            </el-div>
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
          <el-table-column prop="phone" label="电话" width="140" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="birthday" label="出生日期" width="140" align="center">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="loginday" label="注册时间" width="140" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="grade" label="课程资源" width="290" align="center">
            <template>
              <el-div>
                <el-button type="primary" round>
                  文章
                  <el-tag type="circle">100</el-tag>
                </el-button>
              </el-div>
              <el-div>
                <el-button type="warning" round>
                  课程
                  <el-tag type="circle">100</el-tag>
                </el-button>
              </el-div>

            </template>
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
                <el-button type="primary" round>创建用户</el-button>
              </div>
            </el-col>
          </el-row>
        </el-div>
        <el-div>
          <el-row style="margin-top: 100px">
            <el-col :span="24">
              <div>
                <el-button type="success" round>解冻用户</el-button>
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
        tableData: [{
          date: '2016-05-03',
          name: '小猪猪',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '大猪猪',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '大猪猪',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '大猪猪',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '大猪猪',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '大猪猪',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '大猪猪',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '大猪猪',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    mounted: function () {
    },
    methods: {
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
