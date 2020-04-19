<template>
  <div style="margin-left: 10%">
    <div style="display: inline;width: 80%">
      <!--   滚动窗   -->
      <div style="width: 60%;float: left;display: inline-block">
        <!--   图片滚动窗口   -->
        <el-carousel trigger="click" height="350px">
          <el-carousel-item v-for="item in list" :key="item">
            <!--            <h3 class="small">{{ item }}</h3>-->
            <img :src="item"  width='100%' height='100%'>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!--   主页右侧内容   -->
      <div style="float: left;display: inline-block;margin-right: 10%;margin-top: 2%">
        <div style="margin-left: 15%">
          <div style="margin-left: 20%;display: inline-block;float: left">
            <img :src="this.signSrc" style="cursor: pointer;" @click="signIn()">
          </div>
          <div class="toefl_SignNum">
            <p>{{this.signUpNumber}}</p>
            <p>已签到</p>
          </div>
        </div>
        <div style="margin-left: 15%;margin-top: 30%;width: 350px">
          <div style="margin-left: 17%">
            <p style="display: inline-block">
              热门小组
            </p>
            <p style="display: inline-block;float: right;cursor: pointer;">
              换一换
            </p>
          </div>
          <div style="margin-left: -9%;margin-top: 3%">
            <div class="index_itemRHot" style="margin-left: 23%">
              <dl>
                <dt><a href="###"><img src="http://120.27.241.26/group1/M00/00/00/rBDDUl6btJeAFIGTAAAX6nl72Dk121.png" width="48" height="48"></a></dt>
                <dd>
                  <div class="fn-clear">
                    <span class="index_itemRHotName">标题请控制字数</span>
                    <span class="index_itemRHotPic"><img src="http://120.27.241.26/group1/M00/00/00/rBDDUl6bs-eAaXFEAAAB_-CQi6Q821.png" ></span>
                    <span class="index_itemRHotNum">234567人加入</span>
                  </div>
                  <div class="index_itemRHotText">简介请控制字数</div>
                </dd>
              </dl>
              <dl>
                <dt><a href="###"><img src="http://120.27.241.26/group1/M00/00/00/rBDDUl6btJeAFIGTAAAX6nl72Dk121.png" width="48" height="48"></a></dt>
                <dd>
                  <div class="fn-clear">
                    <span class="index_itemRHotName">你不做作就不会死</span>
                    <span class="index_itemRHotPic"><img src="http://120.27.241.26/group1/M00/00/00/rBDDUl6bs-eAaXFEAAAB_-CQi6Q821.png" ></span>
                    <span class="index_itemRHotNum">234567人加入</span>
                  </div>
                  <div class="index_itemRHotText">你不做作就不会死你不做作就不会死你不做作就不会死</div>
                </dd>
              </dl>
              <dl>
                <dt><a href="###"><img src="http://120.27.241.26/group1/M00/00/00/rBDDUl6btJeAFIGTAAAX6nl72Dk121.png" width="48" height="48"></a></dt>
                <dd>
                  <div class="fn-clear">
                    <span class="index_itemRHotName">你不做作就不会死</span>
                    <span class="index_itemRHotPic"><img src="http://120.27.241.26/group1/M00/00/00/rBDDUl6bs-eAaXFEAAAB_-CQi6Q821.png" ></span>
                    <span class="index_itemRHotNum">234567人加入</span>
                  </div>
                  <div class="index_itemRHotText">你不做作就不会死你不做作就不会死你不做作就不会死</div>
                </dd>
              </dl>
            </div>
          </div>
          <div style="margin-left: -9%;margin-top: 3%">
            <div class="index_itemR" style="margin-left: 24%">
              <div class="index_itemRtitle">
                <h3>最新公开课</h3>
                <a href="###" class="index_itemRMore">更多</a>
              </div>
              <div class="index_itemROpen">
                <dl>
                  <dt class="now">
                    <div class="index_itemROpenM">十二月</div>
                    <div class="index_itemROpenD">28</div>
                  </dt>
                  <dd>
                    <div class="index_itemROpenTitle"><a href="###">标题请控制字数234567人简介请控制字数加入人简介请控制字数加入</a></div>
                    <div class="index_itemROpenText">
                      <span>17:30-21:00</span>
                      <span>主讲：公开来看</span>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <div class="index_itemROpenM">十二月</div>
                    <div class="index_itemROpenD">28</div>
                  </dt>
                  <dd>
                    <div class="index_itemROpenTitle"><a href="###">标题请控制字数234567人简介请控制字数加入人简介请控制字数加入</a></div>
                    <div class="index_itemROpenText">
                      <span>17:30-21:00</span>
                      <span>主讲：公开来看</span>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <div class="index_itemROpenM">十二月</div>
                    <div class="index_itemROpenD">28</div>
                  </dt>
                  <dd>
                    <div class="index_itemROpenTitle"><a href="###">标题请控制字数234567人简介请控制字数加入人简介请控制字数加入</a></div>
                    <div class="index_itemROpenText">
                      <span>17:30-21:00</span>
                      <span>主讲：公开来看</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div style="margin-left: -9%;margin-top: 3%">
            <div class="index_itemR" style="margin-left: 24%">
              <div class="index_itemRtitle">
                <h3>热门活动</h3>
                <a href="###" class="index_itemRMore">更多</a>
              </div>
              <div class="index_Active">
                <dl>
                  <dt class="now"><a href="#"><img src="http://120.27.241.26/group1/M00/00/00/rBDDUl6btfSAS0JkAABX1btq9No157.png"></a></dt>
                  <dd>
                    <div class="index_ActiveTitle"><a href="#">标题请控制字</a></div>
                    <div class="index_ActiveNum">234567人参加</div>
                    <a href="#" class="index_ActiveB">我要参见</a>
                  </dd>
                </dl>
                <dl>
                  <dt class="now"><a href="#"><img src="http://120.27.241.26/group1/M00/00/00/rBDDUl6btfSAS0JkAABX1btq9No157.png"></a></dt>
                  <dd>
                    <div class="index_ActiveTitle"><a href="#">标题请控制字</a></div>
                    <div class="index_ActiveNum">234567人参加</div>
                    <a href="#" class="index_ActiveB">我要参见</a>
                  </dd>
                </dl>
                <dl>
                  <dt class="now"><a href="#"><img src="http://120.27.241.26/group1/M00/00/00/rBDDUl6btfSAS0JkAABX1btq9No157.png"></a></dt>
                  <dd>
                    <div class="index_ActiveTitle"><a href="#">标题请控制字</a></div>
                    <div class="index_ActiveNum">234567人参加</div>
                    <a href="#" class="index_ActiveB">我要参见</a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--  主页左侧剩余内容    -->
      <div style="width: 80%;float: left;margin-top: -42%">
        <div class="toefl_h3" style="width: 75%;float: left">最新发布</div>
        <div style="width: 75%;float: left" v-for="(item,i) in article">
          <dl class="toefl_dl">
            <dt><a href="###" class="toefl_indexPic"><img :src="'http://120.27.241.26/'+item.article_picture" width="400" height="240"></a></dt>
            <dd>
              <div class="toefl_title" style="margin-left: 410px;margin-top: -240px">
                <h3>{{item.article_title}}</h3>
                <a class="toefl_anniu" @click="this.goSpaking()">托福口语</a>
              </div>
              <div class="toefl_indexExcerpt" style="margin-left: 420px">
                {{item.article_content}}
              </div>
              <div class="toefl_indexTime" style="margin-left: 420px;margin-top: 5%;margin-bottom: 2%">{{item.article_date}}</div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getToken} from "../../../utils/auth";

  export default {
    data() {
      return {
        list : [
          'http://120.27.241.26/group1/M00/00/00/rBDDUl54fBKAZACvAAAgu89t3Pc341.png',
          'http://120.27.241.26/group1/M00/00/00/rBDDUl5bcO2ANCAWAAAGsa4U3Is409.png',
          'http://120.27.241.26/group1/M00/00/00/rBDDUl5bgbqAdAK3AAANpobPlo0663.png',
          'http://120.27.241.26/group1/M00/00/00/rBDDUl6RQjaACu77AAXNXUDdTUI484.jpg',
        ],
        roles : '',
        signSrc: '',
        noSignSrc : 'http://120.27.241.26/group1/M00/00/00/rBDDUl6SezqARKLRAAAH3trMSkg791.png', //未签到图片地址
        alreadySignSrc: 'http://120.27.241.26/group1/M00/00/00/rBDDUl6SwFaAFEtdAAAL0TvfO78126.png',  //已签到图片地址
        signUpNumber : '0',
        article : []
      }
    },
    mounted: function () {
      this.init()
    },
    methods: {
      init(){
        this.getRequest('/op/ifSignIn').then(resp => {
          var data = resp.data;
          if (data.code === 200) {
            this.signSrc = this.noSignSrc;
          } else if (data.code === 20010) {
            this.signSrc = this.alreadySignSrc;
          } else if (!getToken()) {
            console.log('--------------------------------恭喜你发现了这个小惊喜--------------------------------\n' +
                        '-------------------------------人人托福正在招募工作人员-------------------------------\n' +
                        '----------------------------------期待你的加入哦！------------------------------------\n');
          } else {
            this.$message.warning('服务器未响应，请刷新页面！');
            this.signSrc = this.noSignSrc;
          }
        }).catch(error => {});
        this.getRequest('/op/getSignNumber').then(resp => {
          var data = resp.data;
          if (data.code === 200) {
            this.signUpNumber = data.message;
          } else {
            this.$message.error('网络错误！请检查网络连接')
          }
        }).catch(error => {});
        this.getArticle();
      },
      signIn(){
        this.getRequest('/op/signIn').then(resp => {
          var data = resp.data;
          if (data.code === 200) {
            this.$message.success(data.message);
            this.signSrc = this.alreadySignSrc;
          } else if (data.code === 20011) {
            this.$message.success(data.message);
            this.signSrc = this.alreadySignSrc;
          } else if (data.code === 20010) {
            this.$message.warning(data.message);
            this.signSrc = this.alreadySignSrc;
          } else if (!getToken()) {
            this.$message.warning('亲，先登录哦!');
            this.$router.push('/online/login');
          } else {
            this.$message.warning('服务器未响应，请刷新页面！');
          }
        }).catch(error => {});
        this.getRequest('/op/getSignNumber').then(resp => {
          var data = resp.data;
          if (data.code === 200) {
            this.signUpNumber = data.message;
          } else {
            this.$message.error('网络错误！请检查网络连接')
          }
        }).catch(error => {});
      },
      getArticle() {
        this.getRequest('/getNewArticle').then(resp => {
          var data = resp.data;
          this.article = data.message;
          console.log(this.article)
        }).catch(error => {});
      },
      goSpaking() {
        this.$router.push('/toeflman/toelfsort?tfr_Sort_type=Speaking')
      }
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .toefl_SignNum{width:138px; height:60px; border:solid 1px #68BF4A; float: left;padding-top:8px;display: inline-block;margin-left: 69%;margin-top: -64px}
  .toefl_SignNum p{text-align:center; color:#999; font-size:12px; line-height:18px;}
  .toefl_h3{padding-top:20px;font-size:16px;line-height:36px; border-bottom:solid 1px #e5e5e5; margin-bottom:15px;}
  .toefl_indexExcerpt{font-size:14px; line-height:24px; height:144px; overflow:hidden; color:#666; margin-bottom:20px;}
  .toefl_indexTime{color:#999; font-size:12px; line-height:20px;}
  a.toefl_indexPic{width:400px; height:238px; display:block;}
  a.toefl_indexPic img{width:400px; height:238px;}
  .toefl_title{overflow:hidden; margin-bottom:20px;}
  .toefl_title h3{width:300px; float:left; font-size:24px; line-height:34px;}
  a.toefl_anniu{width:120px; height:25px; display:block; background:url(../../../assets/img/首页/toefl_index.png) 0 0 no-repeat; float:right; text-align:center; line-height:25px; margin-top:5px;color:#fff;}
  a.toefl_anniu:hover{ background:url(../../../assets/img/首页/toefl_indexHover.png) 0 0 no-repeat;}
  .index_itemRHot{}
  .index_itemRHot dl{overflow:hidden; margin-bottom:20px;}
  .index_itemRHot dt{width:48px; height:48px; float:left;}
  .index_itemRHot dt img{width:48px; height:48px;}
  .index_itemRHot dd{width:210px; height:48px; overflow:hidden; float:right;}
  .index_itemRHotName,
  .index_itemRHotNum{height:22px; display:inline-table; float:left;font-size:12px; color:#999; line-height:22px;}
  .index_itemRHotName{color:#68BF4A; padding-right:10px;}
  .index_itemRHotPic{padding:3px 10px 0 0;display:inline-table;float:left;}
  .index_itemRHotText{height:24px; font-size:12px; line-height:22px;color:#999; overflow:hidden;}
</style>
