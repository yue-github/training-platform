<template>
  <div id="tpheader">
    <div class="uk-section uk-padding-remove  uk-background-default" uk-sticky>
      <!-- 注册成功提示 -->
      <div id="modal-close-default" uk-modal class="registerRemind">
        <div class="uk-modal-dialog uk-modal-body">
          <button class="uk-modal-close-default" type="button" uk-close></button>
          <p>注册成功</p>
        </div>
      </div>
      <header class="uk-container">
        <nav class="uk-navbar-container tp-bgc" uk-navbar>
          <div class="uk-navbar-left ">
            <ul class="uk-navbar-nav">
              <li class="uk-active">
                <a href="#" class="uk-padding-remove">
                  <img src="../../assets/images/logo.png" @click="goIndex" class="logo" alt="">
                </a>
              </li>
              <li class="uk-active">
                <a href="#" class="market" @click="goIndex">
                  学习课程云超市
                </a>
              </li>
            </ul>
          </div>
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav uk-text-middle tpnav-left">
              <li class="uk-flex uk-flex-middle search">
                <a>
                  <div class="uk-search uk-search-default uk-display-inline-block">
                    <input class="uk-search-input sousuo" type="text" v-model="classSreach" placeholder="请输入课程名称" @keydown="searchKeyDown">
                  </div>
                  <button class="uk-button uk-button-primary" @click="toProductList">
                    <i class="fa fa-search"></i>
                    搜索
                  </button>
                </a>
              </li>
              <li @click="toCenter">
                <a>
                  <span class="nav-text">个人中心</span>
                </a>
              </li>
              <li>
                <a @click="toShoppingCart">
                  <span class="uk-margin-small-right nav-text icon-cart" uk-icon="cart">
                    <span class="bage" v-if="$store.state.shopNum!==0">{{$store.state.shopNum}}</span>
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <a href="#modal-center" uk-toggle>
                    <span class="nav-text" v-if="!$store.state.id">
                      <span @click="displayEnter(true)">登录</span>&nbsp;/&nbsp;<span  @click="displayEnter(false)">注册</span>
                      
                    </span>
                  </a>
                  <span class="nav-text" v-if="$store.state.id">{{$store.state.name=='null'?'':$store.state.name}}</span>
                  <div class="personinfo-box">
                    <i class="fa fa-user-circle user-icon"></i>
                    <div class="personinfo" uk-dropdown v-if="$store.state.id">
                      <p @click="toMyOrder">我的订单</p>
                      <hr class="aline">
                      <p @click="loginOut">退出</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <div id="modal-center" class="uk-flex-top" uk-modal>
              <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical enter-box">
                <button class="uk-modal-close-default" type="button" uk-close></button>
                <div class="login" v-if="isEnter">
                  <p class="phone-login">手机号登录</p>
                  <form>
                    <div class="tp-margin">
                      <div class="uk-inline input-line">
                        <span class="uk-form-icon" uk-icon="icon: phone"></span>
                        <input class="uk-input" type="text" v-model="loginPhone" @blur="loginPhoneBlur" @focus="loginPhoneFocus" placeholder="请输入手机号" @keydown="loginKeyDown">
                      </div>
                    </div>
                    <div class="tp-margin">
                      <div class="uk-inline input-line">
                        <span class="uk-form-icon" uk-icon="icon: lock"></span>
                        <input class="uk-input" type="password" placeholder="请输入密码" v-model="loginPassword" @focus="loginPasswordFocus" @keydown="loginKeyDown">
                      </div>
                    </div>
                    <div class="tp-margin login-btn">
                      <span class="uk-width-1-2 uk-text-left error-massage" v-show="isLoginMessage">{{loginMessage}}</span>
                      <div class="uk-inline input-line">
                        <span class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" @click="login">登录</span>
                      </div>
                    </div>
                    <div class="uk-text-right">
                      <span class="hand go-register" @click="switchEnter">去注册 ></span>
                    </div>
                  </form>
                </div>
                <div class="login" v-if="!isEnter">
                  <p class="phone-login">手机号注册</p>
                  <form>
                    <div class="tp-margin">
                      <div class="uk-inline input-line">
                        <span class="uk-form-icon" uk-icon="icon: phone"></span>
                        <input class="uk-input" type="text" placeholder="请输入手机号" v-model="registerPhone" @blur="registerPhoneBlur" @focus="registerPhoneFocus" @keydown="registerKeyDown">
                      </div>
                    </div>
                    <div class="tp-margin">
                      <div class="uk-inline input-line yanzm">
                        <input class="uk-input input-lll" type="text" placeholder="请输入短信验证码" v-model="registerCode" @focus="registerCodeFocus" @keydown="registerKeyDown">
                        <div class="yanzhengma" v-on:click="getVerificationCode">{{verificationText}}</div>
                      </div>
                    </div>
                    <div class="tp-margin">
                      <div class="uk-inline input-line">
                        <span class="uk-form-icon" uk-icon="icon: user"></span>
                        <input class="uk-input" type="text" placeholder="请输入身份证号" v-model="idcard" @focus="registerIdFocus" @keydown="registerKeyDown">
                      </div>
                    </div>
                    <div class="tp-margin">
                      <div class="uk-inline input-line">
                        <span class="uk-form-icon" uk-icon="icon: lock"></span>
                        <input class="uk-input" type="password" placeholder="请输入密码" v-model="registerPassword" @focus="registerPasswordFocus" @keydown="registerKeyDown">
                      </div>
                    </div>
                    <div class="tp-margin">
                      <div class="uk-inline input-line">
                        <span class="uk-form-icon" uk-icon="icon: check"></span>
                        <input class="uk-input" type="password" placeholder="请输入确认密码" v-model="registerAffirmPassword" @focus="registerAffirmPasswordFocus" @keydown="registerKeyDown">
                      </div>
                    </div>
                    <div class="tp-margin login-btn">
                      <span class="uk-width-1-2 uk-text-left error-massage" v-show="isRegisterMessage">{{registerMessage}}</span>
                      <div class="uk-inline input-line">
                        <span class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" @click="register">注册</span>
                      </div>
                    </div>
                    <div class="uk-text-right">
                      <span class="hand go-register" @click="switchEnter">去登录 ></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  </div>
</template>
<script src='./tpheader.js'></script>
<style scoped>
#tpheater {
  position: fixed;
  top: 0px;
  z-index: 9999;
}
#tpheader .market {
  font-size: 22px;
  color: #2b78bc;
  position: relative;
  left: -2px;
  top: 7px;
}
header {
  position: relative;
}
.icon-cart {
  position: relative;
}
.icon-cart .bage {
  background-color: red;
  color: white;
  line-height: 15px;
  border-radius: 20px;
  padding: 0px 5px;
  position: absolute;
  left: 14px;
  top: -5px;
  z-index: 999;
}
#tpheader .uk-search-default {
  width: 250px;
}
#tpheader .tp-bgc {
  background-color: #fff;
}
.search .sousuo {
  height: 40px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding-left: 30px;
  font-size: 14px;
}
#tpheader .search button {
  padding: 0px 20px 0px 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 40px;
  border: 0px;
  font-size: 14px;
}
.tpnav-left .nav-text {
  color: black;
}
.tpnav-left .nav-text:hover {
  color: #1e87f0 !important;
}
.tpnav-left .user-icon {
  font-size: 30px;
  padding: 0px 20px 0px 10px;
}
.enter-box {
  width: 442px;
  padding: 30px 50px;
}
.login .input-line {
  width: 100%;
}
.yanzm {
  display: flex;
  flex-direction: row;
}
.input-lll {
  width: 70%;
}
.yanzhengma {
  margin-left: 20px;
  padding-top: 5px;
  text-align: center;
  color: #1e87f0;
  width: 30%;
  border: 1px solid #1e87f0;
}
#tpheader .uk-modal-body {
  padding: 40px;
}
.login .tp-margin {
  margin-top: 32px;
}
.login .go-register {
  color: #1e87f0;
  font-size: 14px;
}
.login .phone-login {
  font-size: 18px;
}
.login input {
  font-weight: bold;
}
.login input::-webkit-input-placeholder {
  font-size: 14px;
  font-weight: normal;
}
.login-btn {
  position: relative;
}
.login-btn .error-massage {
  text-decoration: none;
  color: red;
  position: absolute;
  font-size: 14px;
  top: -27px;
  left: 0px;
}
.personinfo-box {
  position: relative;
}
.personinfo {
  position: absolute;
  padding: 10px;
  background-color: #fff;
  width: 177px;
  box-sizing: border-box;
  border: 1px solid #dddddd;
  left: -127px !important;
  top: 37px !important;
  text-align: left;
  color: #666666;
  font-size: 12px;
  /* display: none; */
}
.personinfo > p {
  margin: 0px;
  width: 147px;
  padding: 12px 0px 12px 10px;
}
.personinfo > p:hover {
  background-color: #f3f4f6;
}
.personinfo .aline {
  margin: 0px;
}
.div-color {
  background-color: #1e87f0;
  color: #fff;
  border-radius: 7px;
}
.div1-position {
  position: absolute;
  right: 10px;
  top: 5px;
}
.div-position {
  position: relative;
}
.float-right {
  float: right;
  position: relative;
}
.uk-tab > * > a {
  color: #aeaeae;
}
.uk-tab > .uk-active > a {
  color: #434343;
  border-color: #1e87f0;
}
.margin35px {
  margin-left: 35px;
  margin-right: 35px;
}
.logo {
  height: 50px;
}
.personal-center:hover .text {
  display: block;
}
.personal-center {
  position: relative;
}
.text {
  display: none;
  position: absolute;
  padding-top: 3px;
  left: 3px;
  top: 60px;
  font-size: 14px;
  width: 80px;
  text-align: center;
  line-height: 30px;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
</style>
