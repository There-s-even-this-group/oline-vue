<template>
  <div>
    <slot name="contentDetailsPl">
      <div class="tfr_DetailsPlTop">
        文章评论<span>18</span>
        <span class="glyphicon glyphicon-heart" title="点击后关注"  style="float: right;right: 50px;font-size: 30px;color: red;"  ></span>
      </div>
      <div class="tfr_DetailsSr">
        <textarea name="" cols="" rows="" class="tfr_DetailsInput"></textarea>
      </div>
      <div  class="tfr_DetailsTj">
        <dl>
          <dt><a class="tfr_DetailsTjLink">登录</a>后参与评论</dt>
          <dd><a href="###" class="tfr_DetailsTjpl">提交评论</a></dd>
        </dl>
      </div>
      <div class="tfr_DetailsMessage">
        <ul v-for="(item,index) in plcontent.plText">
          <li>
            <div class="tfr_DetailsMPic">
              <img src="~assets/img/托福人/125x125.jpg">
              <div class="tfr_DetailsMPicB"></div>
            </div>
            <div class="tfr_DetailsMText">
              <div class="tfr_DetailsMTitle">{{item}}</div>
              <div class="tfr_DetailsName"><span>{{plcontent.username[index]}}</span>{{plcontent.date[index]}}
              </div>
            </div>
            <div class="tfr_DetailsLc">#16</div>
          </li>
        </ul>
      </div>
    </slot>
  </div>
</template>

<script>
  export default {
    name: "tfr_ContentDetailsPl",
    data() {
      return {
        plcontent: {
          plText:['品论内容评论内容','我这是一条评论','我这又是一条评论'],
          username:['会员123','会员234','会员345'],
          date:['一个月前（12-03）','一个月前（12-04）','一个月前（12-05）']
        }
      }
    }
  }
</script>

<style scoped>
  .tfr_DetailsPlTop{margin-bottom:15px;color:#777;}
  .tfr_DetailsSr{ margin-bottom:15px;}
  .tfr_DetailsInput{width:840px; height:140px; background:#ebebeb; border:none; padding:5px;
    font-size:14px; line-height:24px; color:#333; margin-bottom:10px;}

  .tfr_DetailsTj{
    display: flex;
    padding-top:10px;}
  .tfr_DetailsTj dl{
    display: flex;
    overflow:hidden;}
  .tfr_DetailsTj dt{
    flex: 3;
    color:#666; float:left; width:660px; line-height:40px;}
  a.tfr_DetailsTjLink{color:#68BF4A;}
  .tfr_DetailsTj dd{
    flex: 1;
    width:200px;}
  a.tfr_DetailsTjpl{
    width:100px; height:40px; text-align:center; display:block;
    color:#fff; line-height:40px; background:#68BF4A; border-radius:5px;}

  .tfr_DetailsMessage{
    display: inline-block;
  }
  .tfr_DetailsMessage{}
  .tfr_DetailsMessage li{ overflow:hidden; border-bottom:solid 1px #dcdcdc; padding:20px 0;}

  .tfr_DetailsMPic{width:36px; height:36px; position:relative; float:left;}
  .tfr_DetailsMPic img{width:36px; height:36px;}
  .tfr_DetailsMPicB{top:0; left:0; position:absolute;
    background:url(~assets/img/托福人/border36x36.png) 0 0 no-repeat;
    z-index:2;width:36px; height:36px;}

  .tfr_DetailsMText{
    width:750px; display: block;
  text-align: left;
  }
  .tfr_DetailsMTitle{font-size:14px; line-height:18px; color:#666; padding-left:45px;}
  .tfr_DetailsName{font-size:12px; line-height:18px; color:#666;padding-left:45px;}
  .tfr_DetailsName span{color:#06F;}

  .tfr_DetailsLc{width:60px; text-align:center; line-height:36px; color:#777; float:right;}
</style>