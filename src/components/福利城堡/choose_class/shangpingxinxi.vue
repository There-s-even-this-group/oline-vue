<template>
    <div>
        <div class="processTitle" style="color: #080808">请务必确认联系人信息</div>
        <div class="processForm">
            <input type="text" class="processInput" value="姓名">
            <br><br>
            <input type="text" class="processInput" value="电话">
        </div>
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
        </div>
    </div>

</template>

<script>
    export default {
        name: "shangpingxinxi"
    }
</script>

<style scoped>
    .processTitle{
        width: 1000px;
        height: 30px;
    }
    .processForm{
        width: 1000px;
        height: 100px;
    }
    .processInput{
        width: 360px;
        height: 40px;
    }
    .processPic{
        padding-left: 20px;
        padding-top: 22px;
        float: left;
    }
    .processText{
        float: left;
        padding-top: 60px;
        padding-left: 20px;
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
</style>