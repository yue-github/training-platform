<template>
  <div id="index">
    <div class="uk-container">
      <ul class="uk-margin-small uk-margin-small-top uk-padding-remove uk-flex">
        <li class="uk-margin-right hand" @click="toIndex">
          <span class="fontsize uk-text-center nav-title-name">首页</span>
        </li>
        <!-- <li v-for="(course,index) in sections" class="uk-margin-right hand"> -->
        <li class="uk-margin-right hand" @click="toSearch">
          <!-- 下面时要跳到分类网页不  是锚点   原： -->
          <!-- <a :href="'#'+course.name" class="fontsize uk-text-center nav-title-name">{{course.name}}</a> -->
          <a class="fontsize uk-text-center nav-title-name">全部课程</a>
        </li>
        <li class="uk-margin-right hand" @click="secondLable(labels[0].children,12,'继续教育','轻工业',11)">
          <a class="fontsize uk-text-center nav-title-name">推荐课程</a>
        </li>
        <li class="uk-margin-right hand" @click="firstLabel(labels[0].children,'继续教育',31)">
          <a class="fontsize uk-text-center nav-title-name">继续教育</a>
        </li>
      </ul>
      <div>
      </div>
    </div>
    <!--轮播图  -->
    <div class="uk-section uk-section-default uk-padding-remove">
      <div class="uk-container uk-position-relative">
        <div class="uk-child-width-expand@s slideshow uk-margin-remove-left" uk-grid>
          <div class="uk-position-relative uk-width-1-6">
            <div class="uk-inline nav-box " style="backround:gray;">
                <ul class="uk-navbar-nav nav-column" style="">
                  <li v-for="(first,firstIndex) in labels.children" class="block-box">
                    <a class="nav-title uk-padding-remove" @click='firstLabel(first.children,first.name,first.id)'>{{first.name}}</a>
                    <div class="block uk-flex uk-flex-middle changeAuto">
                      <ul :class="first.isWidth=='true'?'uk-flex label-third-box uk-flex-wrap uk-padding-remove':'changeFlex'" v-for="(second,secondIndex) in first.children">
                        <li  class="label-title uk-width-1-6 uk-text-center changeLi" @click='secondLable(first.children,second.id,first.name,second.name,secondIndex)'><a>{{second.name}}</a></li>
                        <!-- <li v-if="first.isWidth!='true'"class="label-title uk-width-1-6 uk-text-center" @click='secondLable(first.children,second.id,first.name,second.name,secondIndex)'><a>{{second.name}}</a></li> -->
                        <li v-if="first.isWidth=='true'" class="uk-width-5-6 uk-flex uk-flex-wrap">
                          <div class="label-third" v-for="(third,thirdIndex) in second.children" @click='thirdLabel(first.children,third.id,first.name,second.name,third.name,secondIndex,thirdIndex)'><a>{{third.name}}</a></div>
                        </li>
                        <div class="line-su"></div>
                        <!-- first.isWidth==='true' -->
                      </ul>
                    </div>
                  </li>
                </ul>
            </div>
          </div>
          
          <div class=" uk-padding-remove-left uk-width-5-6">
            <div class="uk-position-relative uk-visible-toggle uk-light " tabindex="-1" uk-slideshow="min-height: 400; max-height: 400; animation: push; autoplay: true;autoplay-interval: 5000 ">
              <ul class="uk-slideshow-items">
                <li v-for="(val,index) in sliderImgs" @click="toSection(val.id)">
                  <img v-bind:src="imgUrl+val.image" uk-cover>
                </li>
              </ul>
              <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
              <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
              <div class="uk-position-bottom-center uk-position-small">
                <ul class="uk-dotnav">
                  <li v-for="(img,index) in sliderImgs" :uk-slideshow-item="index">
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   




<!-- transition -->
    <div class="Customer-service">
      <div class="Customer-service-but">
       <button  class="Customer-service-but-x uk-button uk-button-default " uk-tooltip='pos: left' :title="sese"><p>客服</p><p>信息</p></button>        
      </div>
      <hr>
      <div class="Customer-service-but">
       <a   uk-totop uk-scroll class="Customer-service-but-a" >   </a>
       <!-- <button class="uk-button uk-button-default "  ><i class="fa fa-chevron-circle-up"></i></button> -->
      </div>
    </div>


    <!-- 推荐课程 -->
    <div class='recommed-box'>
      <div class="uk-section uk-padding-remove  uk-margin-remove">
        <div class="uk-container uk-margin-remove-bottom marginTop45">
          <h3 class="uk-text-left recommend-class-text">推荐课程</h3>
          <div class="recommend uk-padding-remove ">
            <div class="box uk-container uk-container-center ">
              <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
                <ul class="uk-slider-items">
                  <li v-for="img in recommendCourseImg" @click="toSection(img.id)" class="recommend-class hand">
                    <div class="uk-card recommd-class">
                      <span class="certified" v-if="img.is_auth==='1'">已认定</span>
                      <div class="uk-card-media-top recommended-four">
                        <img class="recommended-img" v-bind:src="imgUrl+img.image" alt>
                      </div>
                    </div>
                    <div class=" uk-padding-remove uk-text-small uk-text-truncate uk-padding  uk-margin-small uk-margin-remove text-color text">
                      <span class="recommendTitleSize clasWidth-two uk-text-truncate  uk-margin-small-top">{{img.name}}</span>
                      <span class="recommendTitleSize-left clasWidth-two uk-text-truncate  uk-margin-small-top">{{img.attr}}</span>
                      <div class="marginPrice uk-flex uk-flex-bottom uk-flex-between">
                        <div class="right"> 
                          <span class="text-two">讲师：{{img.teacher}}</span>
                        </div>
                        <div class="left">
                          <!-- <span class="text-two"></span> -->
                          <i class="fa fa-clock-o uk-text-success icon"></i>
                          <span class="uk-text-success text-two">{{img.period}}学时</span>
                        </div>
                      </div>
                      <div class=" uk-panel uk-panel-box clasWidth uk-text-truncate">
                        <i class="fa fa-yen uk-text-danger icon"></i>
                        <span class="recommendDetailSize a1 uk-text-danger">{{img.price}}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 课程详细 -->
    <div class="uk-section uk-padding-remove">
      <div class="uk-container uk-margin-bottom marginTop45">
        <div class="">
          <div v-for="(course,index) in sections">
            <nav class="uk-navbar uk-margin-remove">
              <div>
                <ul class="uk-navbar-nav details-box">
                <!-- 跳转继续教育全部  个人思路：点击继续教育标题，向轮播图旁边的菜单栏一样跳到全部页面-->
                  <span class="uk-text-large block-class-text">{{course.name}}</span>
                  <!-- <span class="transparent-text"  :id="course.name"> </span> -->
                </ul>
              </div>
            </nav>
            <div class="uk-flex uk-flex-wrap">
              <div v-for="classDetails in course.classDetails" @click="toSection(classDetails.id,)" class="class-box uk-padding-remove uk-margin-right hand">
                <div>
                  <div class=" uk-background-default uk-margin-bottom uk-text-emphasis recommd-class ">
                      <div class="">
                        <span class="certified certified-two">已认定</span>
                        <div class="uk-card-media-top recommended1">
                          <img class="recommended" v-bind:src="imgUrl+classDetails.image" alt>
                        </div>
                      </div>
                      <div class="uk-margin-remove">
                        <div class="uk-panel uk-panel-box uk-text-truncate text-color marginTop12 clasWidth ">
                          <div class="zuoyouduiqi">
                            <span class=" font-size  recommendDetailSize1 ">{{classDetails.name}}</span>
                            <span class="kechengjieshao">{{classDetails.attr}}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div class="marginPrice uk-flex uk-flex-bottom uk-flex-between">
                        <div class="right"> 
                          <span class=" text">讲师：{{classDetails.teacher}}</span>
                        </div>
                        <div class="left">
                          <!-- <span class=" text">学时</span> -->
                          <i class="fa fa-clock-o uk-text-success icon"></i>
                          <span class="uk-text-success text">{{classDetails.period}}学时</span>
                        </div>
                      </div>
                      <!-- <div class="marginPrice uk-flex uk-flex-bottom uk-flex-between">
                        <div class="right"> 
                          <span class=" text"> {{classDetails.attr}}</span>
                        </div>
                      </div> -->
                      <div class=" uk-panel uk-panel-box clasWidth uk-text-truncate">
                        <i class="fa fa-yen uk-text-danger icon"></i>
                        <span class="recommendDetailSize a1 uk-text-danger">{{classDetails.price}}</span>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script src='./index.js'></script>

<style scope>
hr{
  padding: 0;
  margin: 0;
}
p{
  margin: 0;
  padding: 0;
}
ul,li{
  list-style: none;
  margin:0;
  padding:0;
}
a{
  display:block;
}
#index .ul-width{
  background: pink;

}
.Customer-service-but-a > svg:hover{
  color:white;

}
.Customer-service-but-a > svg{
   margin-top: 10px;
  width: 40px;
  height: 40px;
} 
.Customer-service-but-x:hover{

  color: white;
}

.Customer-service-but:hover{

  background: #1E87F0;
}
.Customer-service-but-x > p{
    margin-top:-8px;
 
    align-content: center;
    word-break:keep-all;
    white-space:nowrap; 
 ;
}
.Customer-service-but{
 width: 80px;
  display: flex;
  justify-content: space-around;
  align-content: center;
  height: 80px;
  box-sizing: border-box; 
    
 
}
.uk-tooltip{
  position: fixed;
  border: 1px solid #BFBFBF;
  background: white;
  font-size: 14px;
  color: #434343;
   border-radius: 5px;
   z-index: 100;
   top:0px;
}
.Customer-service{
  right: 3px;
  top: 350px;
  position: fixed;
  background: white;
  border: 1px solid #BFBFBF;
}

.color-DEDEE0 {
  color: #dedee0;
}
.recommend-class {
  width: 285px;
  margin-right: 20px;
}
#index .class-type-box {
  background-color: #fff;
  position: relative;
  top: 0px;
  left: 0px;
  font-size: 16px;
}
#index .nav-title-name:hover {
  color: #2b78bc;
}
.class-box {
  margin-right: 18px !important;
}
.class-box:nth-of-type(5n) {
  margin-right: 0px !important;
}
.recommend-class-text {
  margin-bottom: 15px;
}
.block-class-text {
  margin-bottom: 15px;
}
#index .nav-title-name {
  font-size: 16px;
  color: #343d42;
}
.recommend-class .text {
  padding: 0px 0px 2px 10px !important;

  border: 1px solid #eeeeee;
}
.clasWidth-two {
  width: 260px;
  /* margin-bottom: 5px; */
}
#index .nav-box{
  background-color: #303030;
  height: 400px;
  width: 200px;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 500;
}
#index .nav-box .class-type {
  background-color: #fff;
}
.nav-box .nav-column-box {
  padding: 0px;
  margin: 0px;
  border-radius: 3px;
}
.nav-box .nav-column {
  padding-left: 60px;
  position: relative;
  text-align: left;
}
.nav-box .uk-navbar-nav {
  display: block;
}
.nav-box .block {
  position: absolute;
  left: 200px !important;
  top: 0px !important;
  box-shadow: none;
  border-left: 1px solid #dddddd;
  width: 720px;
  min-height: 370px;
  padding-bottom: 0px;
  padding-top: 20px;
  padding-bottom: 10px;
  display: none;
  background-color: #fff;
}
.nav-box .block-two {
  width: 100px;
}
.block-box:hover .block {
  display: block;
}

.nav-box .other-block {
  width: 145px;
}
.nav-box .others-block {
  width: 120px;
  padding-bottom: 10px;
}
.nav-box .nav-title {
  display: inline-block;
  text-align: left;
  padding:15px 0px !important;
  text-decoration: none !important;
  width: 100%;
  min-height: 20px;
  color: #fff;
  font-size: 18px;
}
.nav-box .nav-title:hover {
  color: #898989;
  text-decoration: underline;
}
.nav-box .label-third-box {
  margin-bottom: 0px;
}
.nav-box .label-third {
  padding: 0px 15px;
  font-size: 12px;
  margin-bottom: 20px;
  border-left: 1px solid#d4d4d4;
  height: 15px;
  font-size: #666666;
  line-height: 15px;
}
.nav-box .label-title {
  height: 15px;
  line-height: 15px;
  font-size: 12px;
  color: black;
  font-weight: bold;
}
.LoginSize {
  width: 250px;
  float: right;
  position: absolute;
  top: 150px;
  left: 1300px;
  z-index: 50;
}
.fontsize {
  font-size: 16px;
  padding: 0px 10px;
}
a{
  color: #666;
}
a:hover {
  text-decoration: none;
  color: #1E87F0;
}
.a1 {
  text-decoration: none;
  color: #797979;
  font-size: 18px
}
.text-color {
  color: #666;
}
.margin18px {
  margin-top: 10px;
  margin-bottom: 5px;
}
.margin5px {
  margin-bottom: 5px;
}
.font-size {
  font-size: 14px;
}
.search {
  position: relative;
  left: -15px;
}
.type {
  position: relative;
  left: 0px;
}
.money-icon {
  margin: 0px 2px 0px 2px;
  font-size: 14px;
}
.nav-left {
  margin-right: 5px;
  width: 15px;
  position: relative;
  top: -5px;
}
.nav-right {
  display: inline-block;
  margin-left: 5px;
  width: 80px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.banner-left {
  padding-top: 23px;
  height: 24px;
}
.banner-left-box {
  padding-bottom: 23px;
}
.hand {
  cursor: pointer;
}
.class_name_course {
  width: 100%;
}
.first_adv_height {
  height: 100px;
}
.img_wechat {
  width: 60px;
  height: 60px;
}
.course_navigation {
  width: 120px;
}
.recommended {
  width: 100%;
}
.recommended-img {
  width: 100%;
}
.recommended1 {
  border-radius: 3px;
  overflow: hidden;
  height: 125px;
  width: 225px;
}
.recommended-four {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: 160px;
  overflow: hidden;
}
.recommended-four:hover {
  transform: scale(1.15);
  transition: all 2s;
}
.recommended1 :hover {
  transform: scale(1.15);
  transition: all 2s;
}
.linkstyle {
  color: inherit;
  width: 190px;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
}
.hand a:link {
  color: #666666;
}
.recommendTitleSize {
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
  display: inline-block;
  width: 60%;
}
.recommendTitleSize-left{
  font-size: 16px;
  margin-bottom: 8px;
  color: #797979;
  display: inline-block;
  width: 35%;
  text-align: right;
}
.recommendedText {
  color: inherit;
}
.clasWidth {
  width: 225px;
}
.iconfont {
  position: relative;
  bottom: 4px;
}
.recommd-class {
  position: relative;
  transition: all 2s;
  overflow: hidden;
}
.certified {
  position: absolute;
  left: 10px;
  top: 10px;
  background: #0079c3;
  color: white;
  padding: 3px 8px;
  font-size: 14px;
  border-radius: 5px;
  z-index: 400;
}
.certified-two {
  font-size: 12px;
  left: 8px;
  top: 8px;
}
.uk-dropdown {
  min-width: 90px;
  padding: 25px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
}
.btnLogin {
  width: 150px;
}
.uk-dropdown-nav {
  white-space: normal;
  font-size: 0.875rem;
  width: 800px;
}
.courseBtnSize {
  width: 120px;
}
.uk-button-default {
  border: 0px solid #e5e5e5;
}
.loginImgSize {
  height: 150px;
}
.uk-grid {
  margin-left: 0px;
}
.font-size-desc {
  font-size: 14px;
}
.marginTop12 {
  margin-top: 6px;
  margin-bottom: 2px;
}
.marginTop45 {
  margin-top: 29px;
}
.recommendDetailSize {
  font-size: 18px;
  height: 18px;
  line-height: 18px;
}
.zuoyouduiqi{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.recommendDetailSize1 {
  width: 70%;
  font-size: 14px;
  color: #333;
  overflow:hidden;
  text-overflow:ellipsis;
}
.kechengjieshao{
  font-size: 13px;
  color: #797979;
}
.recommed-box .marginPrice{
  margin-bottom: 7px;
  padding-right: 10px;
}
.recommed-box .clasWidth{
  padding-bottom: 5px;
}
.marginPrice {
  margin-bottom: 7px;
}
.marginPrice .text {
  font-size: 14px;
}
.marginPrice .left {
  padding-left: 1px;
}
.marginPrice .icon {
  margin-right: 3px;
}
.details-box{
  position: relative;
}
.details-box .transparent-text{
  position: absolute;
  top: -100px;
}
.changeFlex{
  display:flex;
  width:15%;
  align-items: center;
  justify-content: center;
  /*height:50px;*/
  /*background: red;*/
  box-sizing: border-box;
  white-space: nowrap;
  word-break: normal;
  float: left;
  margin-bottom:20px;

    
}
.changeAuto{
  display:block;
  overflow: auto;
}

</style>