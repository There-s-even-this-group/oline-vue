<template>
  <el-container direction="vertical">
    <el-header class="el-header">
      <h1 align="center">轮播板块</h1>
    </el-header>
    <el-container style="height: 800px">
      <el-main class="el-main">
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="70" align="center">
          </el-table-column>
          <el-table-column label="活动标题" width="400" align="center">
            <div class="block"><el-avatar :size="50" ></el-avatar></div>
          </el-table-column>
          <el-table-column prop="name" label="课程名称" width="200" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="sex" label="课程讲师" width="150" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="email" label="发布日期" width="180" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="phone" label="开始时间" width="180" align="center">
            <template></template>
          </el-table-column>
          <el-table-column prop="birthday" label="报名总人数" width="150" align="center">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>

        </el-table>

      </el-main>
      <el-aside class="el-aside">
        <el-tag class="all" align="center" >总体操作</el-tag>
        <el-div>
          <el-row style="margin-top: 50px;margin-left: 30px">
            <el-col :span="24">
              <div>
                <el-button type="primary" round @click="cre">创建</el-button>
              </div>
            </el-col>
          </el-row>
        </el-div>
        <el-div>
          <el-row style="margin-top: 100px ;margin-left: 30px">
            <el-col :span="24">
              <div>
                <el-button type="warning" round @click="edit">编辑</el-button>
              </div>
            </el-col>
          </el-row>
        </el-div>

        <el-div>
          <el-row style="margin-top: 100px ;margin-left: 30px">
            <el-col :span="24">
              <div>
                <el-button type="danger" round @click="del">删除</el-button>
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
        tableData: [{
          date: '1000',
          name: 'C++',
          },
          {
            date: '1000',
            name: 'Python',
            }
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

      cre(){
        this.$router.push('/welfare_castle_release')
      },
      edit(){
        this.$router.push('/welfare_castle_release')
      }


    }
  }
</script>

<style scoped>

  .btn{color: #fff;background-color:#82848a;}
  .all{font-size: 25px;background-color: #dfe4ed;padding-right:15px}
  .a{width: 70px;height: 40px;padding-top: 5px}
  .el-header{margin-top: 50px}
  .el-footer{margin-left: 700px}
  .el-main{margin-left: 150px}
  .el-aside{margin-right: 100px}






</style>
