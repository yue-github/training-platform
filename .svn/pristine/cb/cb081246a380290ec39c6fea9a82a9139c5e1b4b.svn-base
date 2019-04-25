<template>
  <div id="PersonalCenter">
    <div id="modal-personalcenter" class="uk-flex-top" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical enter-box">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="login">
          <p class="phone-login">{{infoRemind}}</p>
          <form>
            <div class="tp-margin">
              <div class="uk-inline uk-flex uk-flex-middle">
                <span>姓名</span>
                <input id="name" class="uk-input" type="text" v-model="users.name" placeholder="请输入姓名" @keydown="updateKeyDown" >
                <!-- <input v-if="users.name" class="uk-input" type="text" v-model="users.name" placeholder="请输入姓名" @keydown="updateKeyDown" disabled> -->
              </div>
            </div> 
            <div class="tp-margin">
              <div class="uk-inline uk-flex uk-flex-middle">
                <span >身份证号</span>
                <input disabled class="uk-input" type="text" placeholder="请输入身份证号" v-model="users.idcard" @keydown="updateKeyDown">
                 <!-- <input v-if="users.idcard" class="uk-input" type="text" placeholder="请输入身份证号" v-model="users.idcard" @keydown="updateKeyDown" disabled> -->
              </div>
            </div>
            <div class="tp-margin">
              <div class="uk-inline uk-flex uk-flex-middle">
                <span >单位名称</span>
                <input id="company"  class="uk-input" type="text" placeholder="请输入单位名称" v-model="users.company"  @keydown="updateKeyDown">
                 <!-- <input v-if="users.company" class="uk-input" type="text" placeholder="请输入单位名称" v-model="users.company"  @keydown="updateKeyDown" disabled> -->
              </div>
            </div>
            <div class="tp-margin" v-if="isNeedYear">
              <div class="uk-inline uk-flex uk-flex-middle">
                <span>申报年度</span>
                <input class="uk-input" type="text" placeholder="请输入申报年度" v-model="annual"  @keydown="updateKeyDown">
              </div>
            </div>
            
            <div class="tp-margin login-btn">
              <div class="input-line">
                <span class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" @click="savePersonal">保存</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="page">

    </div> 
    <div class="uk-background-secondary">
    </div>
    <div class="header">
      <div class="uk-container header-box uk-flex uk-flex-middle">
           <div class="uk-flex uk-flex-middle uk-width-expand">
            <div class="uk-width-auto uk-flex uk-flex-middle">
              <div class="page-address">
                <ul class="uk-flex uk-text-small uk-padding-remove">
                  <li>
                      <a class="uk-text-emphasis page-address-noUnderLine"@click="goIndex">首页&nbsp;</a>
                  </li>
                  <li>
                      <span class="uk-text-muted">&nbsp;&gt;&nbsp;</span>
                  </li>
                  <li >
                      <span class="uk-text-muted page-address-deatilTextColor">&nbsp;个人中心</span>
                  </li>
                </ul>
              </div>


              <img class="uk-border-circle my-head" v-bind:src="this.headImg" width="85" height="85" alt="Border circle">
                <div class="header-msg ">
                <li class="name">{{users.name}}</li>
                  <ul class="hand">

                    
                    <li class="edit-info  " @click="editInfo">
                      <i class="fa fa-edit fa-lg  "></i>
                      编辑个人信息
                    </li>
                    <li class="edit-info hand-li" @click="changepassword">
                      <i class="fa fa-key"></i>
                      修改密码
                    </li>
                  </ul>
                </div>


            </div>
              <div class="uk-width-expand uk-flex uk-flex-right	">
                <ul class="uk-margin-remove">
                  <li class="balance">我的余额：￥{{users.balance}}</li>
                </ul>
              </div>
            </div>
      </div>
    </div>
    <div class="content-box">
      <hr>
      <div class="uk-container content">
        <ul uk-tab uk-switcher="animation: uk-animation-fade; toggle: > *">
          <li class="uk-active">
            <a href="#">全部课程</a>
          </li>
          <li class="uk-active">
            <a href="#">在读课程</a>
          </li>
          <li class="uk-active">
            <a href="#">已完成课程</a>
          </li>
          <li>
            <a href="#">证书</a>
          </li>
        </ul>
        <ul class="uk-switcher uk-margin">
          <!-- 全部课程 -->
          <li>
            <p class="uk-margin-remove">我的全部课程数量：{{classList.length}}</p>
            <div class="myclass uk-grid-small uk-flex uk-flex-wrap">
              <p class='blank-class' v-if="classList.length===0">我的课程为空</p>
              <div class="uk-width-1-5 class-content" v-for="item in classList" @click="classDetails(item.id)">
                <div class="box">
                  <div class="img-box">
                    <img :src="imgUrl+item.image" alt="" class="img">
                  </div>
                  <div class="title">{{item.name}}</div>
                  <div class="btn-box uk-text-center" v-if="item.progress===0">
                    <button class="uk-button uk-button-default uk-button-small btn">未开始</button>
                  </div>
                  <div class="btn-box uk-text-center" v-if="item.progress===1">
                    <button class="uk-button uk-button-default uk-button-small btn">已完成</button>
                  </div>
                  <div class="btn-box uk-text-center" v-if="item.progress!==1&&item.progress!==0">
                    <button class="uk-button uk-button-default uk-button-small btn">{{(item.progress*100).toFixed(2)+'%'}}</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <!-- 在读课程 -->
          <li>
            <p class="uk-margin-remove">我的在读课程数量：{{studyingClassNum}}</p>
            <div class="myclass uk-grid-small uk-flex uk-flex-wrap">
              <p class='blank-class' v-if="studyingClassNum===0">在读课程为空</p>
              <div class="uk-width-1-5 class-content" v-for="item in classList" @click="classDetails(item.id)" v-if="item.progress!==1&&item.progress!==0">
                <div class="box">
                  <div class="img-box">
                    <img :src="imgUrl+item.image" alt="" class="img">
                  </div>
                  <div class="title">{{item.name}}</div>
                  <div class="btn-box uk-text-center" v-if="item.progress===0">
                    <button class="uk-button uk-button-default uk-button-small btn">未开始</button>
                  </div>
                  <div class="btn-box uk-text-center" v-if="item.progress===1">
                    <button class="uk-button uk-button-default uk-button-small btn">已完成</button>
                  </div>
                  <div class="btn-box uk-text-center" v-if="item.progress!==1&&item.progress!==0">
                    <button class="uk-button uk-button-default uk-button-small btn">{{(item.progress*100).toFixed(2)+'%'}}</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <!-- 已完成课程 -->
          <li>
            <p class="uk-margin-remove">我的已完成课程数量：{{finishedClassNum}}</p>
            <div class="myclass uk-grid-small uk-flex uk-flex-wrap">
              <p class='blank-class' v-if="finishedClassNum===0">已完成课程为空</p>
              <div class="uk-width-1-5 class-content" v-for="item in classList" @click="classDetails(item.id)" v-if="item.progress===1">
                <div class="box">
                  <div class="img-box">
                    <img :src="imgUrl+item.image" alt="" class="img">
                  </div>
                  <div class="title">{{item.name}}</div>
                  <!-- <div class="class-progress">未开始</div> -->
                  <div class="btn-box uk-text-center" v-if="item.progress===0">
                    <button class="uk-button uk-button-default uk-button-small btn">未开始</button>
                  </div>
                  <div class="btn-box uk-text-center" v-if="item.progress===1">
                    <button class="uk-button uk-button-default uk-button-small btn">已完成</button>
                  </div>
                  <div class="btn-box uk-text-center" v-if="item.progress!==1&&item.progress!==0">
                    <button class="uk-button uk-button-default uk-button-small btn">{{(item.progress*100).toFixed(2)+'%'}}</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <!-- 证书 -->
          <li>
            <div class="myclass uk-grid-small" uk-grid>
              <p class='blank-class' v-if="certificateList.length===0">我的证书为空</p>
              <div class="uk-width-1-5" v-for="item in certificateList" @click="isCertificate(item.id,item.order_id,item.product_id,item.is_first,item.cer_year)">
                <div class="box">
                  <div class="certificate-img-box">
                    <img :src="imgUrl+item.image" alt="" class="certificate-img">
                  </div>
                  <div class="btn-box uk-text-center">
                    <button class="uk-button uk-button-default uk-button-small btn">我的证书</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div style="height:200px"></div>
      </div>
    </div>

  </div>
</template>
<script src='./personalcenter.js'></script>

<style scoped>
.header {
  background: url(../../assets/images/personbg.png);
  color: white;
}
li{
  list-style-type:none;
}
.page{
   
  height:30px;
  width: 100%;
  /*background: red;*/
}
.page-address{
    margin-top:-210px; 
    
   
  }
.header-msg{
  margin-left: -10px;
   margin-top: 35px;
}
.hand {
  display: flex;
   
   
  
}
.hand-li{
  margin-left: 15px;
}
.class-content {
  margin-top: 20px;
}
.header .header-box {
  height: 190px;
}
.header .my-head {
  margin-left: -115px;
}
.header .name {
  font-size: 20px;
  margin-bottom: 10px;
  margin-left:30px;
}
.header .edit-info {
  font-size: 16px;
}
.header .balance {
  font-size: 20px;
}
.content-box {
  position: relative;
  background-color: #f4f4f4;
}
.content-box hr {
  position: absolute;
  top: 62px;
  width: 100%;
}
.content .uk-tab > .uk-active > a {
  color: #2b78bc;
  border-bottom: 3px solid #1e87f0;
  font-size: 18px;
  line-height: 50px;
}
.content .uk-tab > * > a {
  font-size: 18px;
  line-height: 50px;
}
.content .myclass .box {
  padding-bottom: 17px;
  background-color: #fff;
  cursor: pointer;
}
.content .myclass .img {
  width: 100%;
  position: relative;
  top: -15px;
}
.content .myclass .img-box {
  height: 110px;
  overflow: hidden;
}
.content .myclass .img:hover {
  transform: scale(1.1);
}
.content .myclass .title {
  padding: 10px 10px 0px;
  font-size: 16px;
  height: 48px;
  /* white-space:nowrap; 
  text-overflow:ellipsis; */
  overflow: hidden;
  margin-bottom: 10px;
}
/* .content .myclass .class-progress{
  padding-left: 10px;
  margin-bottom: 5px;
} */
.myclass .btn-box {
  padding-top: 8px;
}
.myclass .btn-box .btn {
  box-sizing: border-box;
  padding: 0px 55px;
  border-radius: 20px;
  color: #1e87f0;
  border: 2px solid #1e87f0;
  font-size: 14px;
}
.myclass .btn-box .btn:hover {
  background-color: #1e87f0;
  color: white;
}
.content .myclass .certificate-img-box {
  height: 150px;
  margin-bottom: 10px;
}
.content .myclass .certificate-img {
  height: 150px;
  width: 100%;
}
.blank-class {
  font-size: 40px;
  color: #999999;
  margin: 0px auto;
  line-height: 300px;
}
.enter-box {
  width: 442px;
  padding: 30px 50px;
}
.login .uk-inline>span {
  width: 100px;
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
  color:red;
}
.login input {
  font-weight: bold;
}
.login input::-webkit-input-placeholder {
  font-size: 14px;
  font-weight: normal;
}
.login .tp-margin {
  margin-top: 32px;
}
</style>

