<template>
  <el-div>
    <el-container>
      <el-header></el-header>
      <el-container>
        <el-aside class="el-aside">
          <el-tabs :tab-position="tabPosition" style="height:800px" type="card" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="1"></el-tab-pane>
            <el-tab-pane label="课程描述" name="2"></el-tab-pane>
            <el-tab-pane label="课程资料" name="3"></el-tab-pane>
          </el-tabs>


        </el-aside>

        <el-main class="el-main1" v-show="EssentialInformation">
          <el-form ref="form" :model="form" label-width="120px" style="height: 800px" >
            <el-form-item label="活动名称">
              <el-input style="width: 300px" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="开始日期">
              <el-input type="date" style="width: 300px" ></el-input>
            </el-form-item>
            <el-form-item label="结束日期">
              <el-input type="date" style="width: 300px" ></el-input>
            </el-form-item>
            <el-form-item label="活动性质" >
              <!--              这个地方如果不双向绑定值，会报错，因为我已经在el-checkbox里定义了label值-->
              <el-checkbox-group v-model="form.check">
                <el-checkbox label="星期一" >星期一</el-checkbox>
                <el-checkbox label="星期二" >星期二</el-checkbox>
                <el-checkbox label="星期三" >星期三</el-checkbox>
                <el-checkbox label="星期四" >星期四</el-checkbox>
                <el-checkbox label="星期五" >星期五</el-checkbox>
                <el-checkbox label="星期六" >星期六</el-checkbox>
                <el-checkbox label="星期日" >星期日</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="开始时间">
              <el-input type="time" style="width: 300px" ></el-input>
            </el-form-item>
            <el-form-item label="结束时间">
              <el-input type="time" style="width: 300px" ></el-input>
            </el-form-item>
            <el-form-item label="适合学员">
              <el-input style="width: 300px" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="课程费用">
              <el-input style="width: 300px" v-model="form.name"></el-input>RMB
            </el-form-item>
            <el-form-item label="课程分类">
              <el-radio-group v-model="form.name">
                <el-radio :label="3">公益商城</el-radio>
                <el-radio :label="6">特色商城</el-radio>
                <el-radio :label="9">名师精品商城</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="课程分类">
              <el-select v-model="form.name">
                <el-option value="听力">听力</el-option>
                <el-option value="阅读">阅读</el-option>
                <el-option value="写作">写作</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="课程阶段">
              <el-select v-model="form.name">
                <el-option value="报名阶段">报名阶段</el-option>
                <el-option value="结束报名">结束报名</el-option>
                <el-option value="课程结束">课程结束</el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" round >提交</el-button>
            </el-form-item>
          </el-form>
        </el-main>
        <el-main class="el-main1" v-show="CourseDescription">
          <el-form ref="form" :model="form" label-width="120px" style="height: 800px" >
            <el-form-item label="课程教师">
              <el-select v-model="form.name">
                <el-option value="Tank-Tan">Tank-Tan</el-option>
                <el-option value="yueyue">yueyue</el-option>
                <el-option value="XiongDa">Xiongda</el-option>
                <el-option value="Xioajie">Xiaojie</el-option>
                <el-option value="Qilin">Qilin</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="课程群">
              <el-select v-model="form.name">
                <el-option value="一班">一班</el-option>
                <el-option value="一班">一班</el-option>
                <el-option value="一班">一班</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="宣传图" >
              <el-input type="file" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="活动地点" >
              <el-input type="text" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="课程大纲" >
              <textarea style="margin: 0px; width: 590px;height: 170px">刚吃了点薯片，太好吃了</textarea>
              <p>请输入2-100个字符</p>
            </el-form-item>
            <el-form-item label="上课方式" >
              <textarea style="margin: 0px; width: 590px;height: 170px">刚吃了点薯片，太好吃了</textarea>
              <p>请输入2-100个字符</p>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" round>保存</el-button>
            </el-form-item>
          </el-form>
        </el-main>
        <el-main class="el-main2"v-show="CourseMaterials" >
          <el-table
                  ref="multipleTable"
                  :data="tabledata"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @selection-change="handleSelectionChange"
                  class="el-table"
          >
            <el-table-column label="资料种类" align="center" width="400px" prop="name"></el-table-column>
            <el-table-column label="资料名" align="center" width="400px" prop="data"></el-table-column>
            <el-table-column label="资料下载" align="center" width="400px">
              <el-button type="success" icon="el-icon-download" circle ></el-button>
            </el-table-column>

          </el-table>
        </el-main>
      </el-container>

    </el-container>

  </el-div>

</template>

<script>
    export default {
        data() {
            return {
              activeName: 'first',
              tabPosition: 'left',
              EssentialInformation:true,
              CourseDescription:false,
              CourseMaterials:false,
              tabledata:[
                {
                  name:'sf',
                  data:'dsa',
                },
                {
                  name:'sf',
                  data:'dsa',
                }

              ],

              form:{


                name:'sf',
                data:'dsa',
                check:[],



              }
            }
        },
        mounted: function () {
        },
        methods: {
          handleClick(tab, event) {
            if(tab.name==1){
              this.EssentialInformation=true;
              this.CourseDescription=false;
              this.CourseMaterials=false
            }else if (tab.name==2){
              this.EssentialInformation=false
              this.CourseDescription=true;
              this.CourseMaterials=false
            }else if(tab.name==3){
              this.EssentialInformation=false;
              this.CourseDescription=false;
              this.CourseMaterials=true
            }
          },
          handleSelectionChange(val) {
            this.multipleSelection = val;
          },

        }
    }
</script>

<style scoped>
  .el-aside{margin-left: 100px}
  .el-main1{margin-left: 400px}
  .el-table{padding-right: 400px}




</style>
