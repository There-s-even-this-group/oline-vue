<template>
    <div>
        <div class="processTitle">您好：您已经成功购买下方课程，请进入用户中心确认，也可以去找购买该课程的小伙伴了！</div>
        <br>
        <div class="processTable">
            <table border="1" cellspacing="0" cellpadding="0">
                <tr>
                    <td style="vertical-align:middle; text-align:center;height: 50px;">课程</td>
                    <td style="vertical-align:middle; text-align:center;">数量</td>
                    <td style="vertical-align:middle; text-align:center;">单价</td>
                    <td style="vertical-align:middle; text-align:center;">总价</td>
                </tr>
                <tr>
                    <td class="processKc">
                        <div class="processPic"><img src="../../../assets/img/福利城堡/classfeng.jpg" width="140" height="100"></div>
                        <div class="processText">1月托福热血口语强化班</div>
                    </td>
                    <td style="vertical-align:middle; text-align:center;">1</td>
                    <td style="vertical-align:middle; text-align:center;">799元</td>
                    <td style="vertical-align:middle; text-align:center;">799元</td>
                </tr>
                <tr>
                    <td></td>
                    <td colspan="3" class="processPay" style="width: 460px;">
                        <div>
                            <div class="zongfei" style="color: #080808">共  1  门课程 ，应付金额：799元</div>
                            <div class="zongfei">使用<input type="text" class="processRPB" style="width: 50px;color: #080808">RPB，抵扣：-100.00</div>
                            <div class="zongfei" style="font-size: 12px;color: #080808">（可用RPB2000，本次最高可用1000）</div>
                        </div>

                    </td>
                </tr>
            </table>
            <br>
            <div class="processYf" style="font-size: 20px">应付金额：<span style="color: red;">699</span>元</div>
            <br><br>
            <div class="processB">
                <div class="jinjin1">
                    <a href="###" class="processButton" style="color: #d9edf7">进入该课程群</a>
                </div>
                <div class="jinjin2">
                    <a href="###" class="processButton" style="color: #d9edf7">进入用户中心</a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "buysuccess"
    }
</script>

<style scoped>
    .processTitle{
        width: 800px;
        height: 50px;
        padding-top: 20px;
    }
    .processKc{
        width: 400px;
        height: 150px;
    }
    .processPay{
        height: 100px;
    }
    .zongfei{
        padding-left: 180px;
    }
    .processYf{
        padding-left: 710px;
    }
    .processButton{
        height: 35px;
        line-height: 18px;
        padding: 0 11px;
        border: 2px #5bc0de solid;
        background-color: #5bc0de;
        border-radius: 3px;
        display: inline-block;
        font-size: 15px;
        outline: none;
        text-align: center;
        line-height:30px;
    }
    .jinjin1{
        padding-left: 600px;
        float: left;
    }
    .jinjin2{
        padding-left: 30px;
        float: left;
    }
</style>