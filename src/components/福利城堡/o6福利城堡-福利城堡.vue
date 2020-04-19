<template>
    <div class="container-fluid">
        <div class="openMenu">
            <div class="doc11801">
                <ul class="fn-clear1" style="padding-left:240px;">
                    <li class="openMenuOn">
                        <a href="###" style="color:#00EE00">公益商城</a>
                    </li>
                    <li class="openMenuOn">
                        <a href="###" style="color: #080808">特色商城</a>
                    </li>
                    <li class="openMenuOn">
                        <a href="###" style="color: #080808">名师精品课商城</a>
                    </li>
                </ul>
            </div>
        </div>
        <br><br>
        <div class="doc1180">
            <div class="castle">
                <div class="castl_eNote">您的等级越高，打折的力度越大啊，努力升级吧，亲！</div>
                <br>
                <div class="castlePaixun" style="font-size:12px">
                        <dt class="fn-clear" style="float: left">
                            <a href="###" class="on" style="color:#0000FF">全部课程</a>
                            <a href="###" class="on" style="color:#0000FF">托福听力</a>
                            <a href="###" class="on" style="color:#0000FF">托福口语</a>
                            <a href="###" class="on" style="color:#0000FF">托福阅读</a>
                            <a href="###" class="on" style="color:#0000FF">托福写作</a>
                            <a href="###" class="on" style="color:#0000FF">托福词汇</a>
                        </dt>
                        <dd class="fn-clear">
                            <a href="###"class="dpc1" style="color:#0000FF">按开始时间从近到远排列</a>
                            <a href="###"class="dpc" style="color:#0000FF">按参与人数由多到少排列</a>
                        </dd>
                </div>
                <br><br><br><br>
                <div class="myclasses">
                    <classes></classes>
                </div>
                <div class="myclasses">
                    <classes></classes>
                </div>
                <div class="myclasses">
                    <classes></classes>
                </div>
            </div>
            <div class="pageList">
                <ul>
                    <li><span>1</span></li>
                    <li>
                        <a href="###">2</a>
                    </li>
                    <li>
                        <a href="###">3</a>
                    </li>
                    <li>
                        <a href="###">4</a>
                    </li>
                    <li>
                        <a href="###">5</a>
                    </li>
                    <li>
                        <a href="###">最后一页</a>
                    </li>
                    <li>
                        <a href="###" class="pret">上一页</a>
                    </li>
                    <li>
                        <a href="###" class="next">下一页</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
    import classes from "../福利城堡/choose_class/classes";
    export default {
        components: {
            classes,
        },
        data() {
            return {}
        },
        mounted: function () {
        },
        methods: {

        }
    }
</script>

<style scoped>
    .castl_eNote{
        color: #c9302c;
    }
    .doc11801{
        background-color: #a2a2a2;
        border-radius: 0px;
        color:#000000;
    }
    .openMenuOn{
        float: left;
        width: 120px;
    }
    .fn-clear{
        background-color: #EEEEEE;
        padding-left:80px;
        padding:10px;
    }
    .fn-clear1{
        width:1500px;
        height:55px;
        padding:20px;
    }
    a.dpc{
         padding-left:40px;
     }
    a.dpc1{
        padding-left:420px;
    }
    a.on{
        padding-left:20px;
    }
    .castlePaixun{
        border-radius: 0px;
        width:1200px;
        height:10px;

    }
    .myclasses{
        width: 1200px;
        height: 320px;
        display:inline-block;
    }

</style>
