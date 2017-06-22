<template>
  <div id="app">
    <Hello></Hello>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,p,blockquote,pre,hr,figure,table,caption,th,td,form,fieldset,legend,input,button,textarea,menu{margin:0;padding:0;box-sizing:border-box;-webkit-box-sizing:border-box;}
html,body,form,fieldset,p,div,h1,h2,h3,h4,h5,h6{-webkit-text-size-adjust:none}
html{font-size:16px}
body{font-family:"微软雅黑",arial,sans-serif; background:#e6e6e6;}
header,footer,section,article,aside,nav,hgroup,address,figure,figcaption,menu,details{display:block;}
table{border-collapse:collapse;border-spacing:0;}
caption,th{text-align:left;font-weight:normal;}
html,body,fieldset,img,iframe,abbr{border:0;}
i,cite,em,var,address,dfn{font-style:normal;}
[hidefocus],summary{outline:0;}
li{list-style:none;}
h1,h2,h3,h4,h5,h6,small{font-size:100%;font-style: normal;font-weight: normal;}
sup,sub{font-size:83%;}
pre,code,kbd,samp{font-family:inherit;}
q:before,q:after{content:none;}
textarea{overflow:auto;resize:none;}
label,summary{cursor:default;}
a,button{cursor:pointer;border:none;}
del,ins,u,s,a,a:hover{text-decoration:none;}
body,textarea,input,button,select,keygen,legend{color:#333;outline:0;}
body *{-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0)}
.clearfix:after{content:".";display:block;overflow:hidden;height:0;clear:both;visibility:hidden;}
* html .clearfix{height:1%;}
input,textarea,select{outline: none; -webkit-appearance:none;}
.clearOver{overflow: hidden; text-overflow:ellipsis; white-space: nowrap;}


body {
    background-image: url('./assets/bodyBg.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-top: 48%;
    padding-bottom: 20%;
    color: #6b2803;
    position: relative;
    font-size: .875rem;
}
.topBan {
    width: 100%;
    display: block;
    position: absolute;
    top: 3%;
    left: 0;
    z-index: 10;
}

.box {
    position: relative;
    background-image: url('./assets/boxBg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    padding-top: 16%;
    padding-bottom: 65%;
}

.lineBox {
    text-align: center;
    line-height: 1.5;
    margin-bottom: 10%;
}
.box img {
    width: 94%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.checkGift {
    margin-bottom: 10%;
}
.checkGift .word {
    font-weight: bold;
    margin-bottom: 6%;
}
.checkGift img {
    display: inline-block;
    width: 100%;
}
.checkGift a:active {
    opacity: .7;
}
.line {
    margin: 10% 0 0 0;
}
.noLoginBtn {
    width: 46%;
    display: inline-block;
}
.noLoginBtn:active {
    opacity: .7;
}
.noLoginBtn img {
    width: 100%;
    display: inline-block;
}
.sbar {
    margin-top: 4%;
}
.sbar img{
    margin: 0 auto;
}
.sbarBox {
    position: relative;
}
.sbar .gray {
    position: absolute;
    width: 83%;
    height: 28%;
    top: 33%;
    left: 50%;
    transform: translateX(-49.5%);
    background-image: url('./assets/gray.jpg');
    background-size: 100% 100%;
    border-radius: 4px;
}
.sbar .green {
    height: 100%;
    width: 50%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url('./assets/green.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 4px;
}
.sbar .tip {
    font-size: 1.3rem;
}

.rules {
    position: absolute;
    left: 0;
    bottom: 2%;
}
.rules img{
    margin: 0 auto;
    display: block;
    width: 100%;
}
.rules .cnt {
    background-image: url('./assets/bancnt.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    min-height: 9rem;
    padding: 0 10% 5% 10%;
    font-size: .75rem;
    line-height: 1.8;
}
.rules .cnt li {
    position: relative;
    padding-left: 3%;
}
.rules .cnt span {
    display: inline-block;
    text-align: center;
    width: .9rem;
    height: .9rem;
    line-height: .9rem;
    border-radius: 50%;
    background-color: #6b2803;
    color: #fff;
    font-size: .625rem;
    position: absolute;
    right: 100%;
    top: 8%;
}

.shadow {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .6);
    z-index: 100;
}
.shadow img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.prizeBox {
    position: absolute;
    top: 30%;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 0;
}
.prizeBox li {
    font-size: .875rem;
    display: inline-block;
    width: 25%;
    color: #fff;
    position: relative;
}
.prizeBox li span {
    transform: rotateZ(-22deg) translate(0%, 170%);
    position: absolute;
    display: block;
    width: 66%;
}
.prizeBox li i {
    transform: rotateZ(-22deg) translateX(40%);
    position: absolute;
    display: block;
    width: 66%;
    font-size: .625rem;
    top: 70%;
}
.prizeBox img {
    position: static;
    width: 100%;
}
.shadow .check {
    position: absolute;
    top: 55%;
    width: 45%;
    left: 50%;
    transform: translateX(-50%);
}
.shadow .check:active {
    opacity: .7;
}
.shadow .check img {
    width: 100%;
    position: static;
}

.error {
    line-height: 3;
    padding: 1rem;
    position: fixed;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .6);
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
}

.bigTipBox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .6);
    z-index: 1000;
}
.tipBox {
    position: absolute;
    width: 70%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    background-color: #fff;
    border-radius: 5px;
    color: #666;
    text-align: center;
    overflow: hidden;
}
.tipBox p {
    padding: 1rem;
}
.tipBox a {
    padding: .8rem;
    display: block;
    background-color: #ef5a50;
    color: #fff;
}
.gitImg {
    width: 80% !important;
}
.img-one, .img-two {
    position: absolute;
    width: 38% !important;
}
.img-one {
    left: 50%;
    top: -2%;
    transform: translateX(-50%);
}
.img-two {
    left: 10%;
    bottom: 20%;
    width: 28% !important;
}
.gifBox {
    position: relative;
}
.loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.7);
    z-index: 9999;
}
.loading img {
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15%;
}
.blackA {
    display: inline-block;
    width: 46%;
}
</style>
