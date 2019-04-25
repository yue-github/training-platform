<template>
  <div id="dianpukechengsousuo">
    <div >
      <div class="uk-container">
        <!-- 面包屑 -->
        <div class="dangqianyedizhi move-left">
          <ul class="uk-flex uk-padding-small uk-margin-remove uk-text-small uk-padding-small uk-padding-remove-left">
            <li>
              <a class="uk-text-emphasis" @click="goIndex">首页</a>
            </li>
            <li>
              <span class="uk-text-muted">&nbsp;</span>
            </li>
            <li class="hand" v-if="allText===''">
              <a class="uk-disabled bianjv" style="color: #999">>{{searchResult}}</a>
            </li>
            <li class="hand" @click="getTopLabeslData(firstBread.id,1)">
              <a class="uk-disabled bianjv" style="color: #999">{{firstBread.text}}</a>
            </li>
            <li class="hand" @click="getTopLabeslData(secondBread.id,2)">
              <span class="uk-text-muted">{{secondBread.text}}</span>
            </li>
            <li class="hand" @click="getTopLabeslData(thirdBread.id,3)">
              <span class="uk-text-muted">{{thirdBread.text}}</span>
            </li>
          </ul>
        </div>

        <nav class="uk-navbar-container navClass" uk-navbar="">

          <div class="navClass-main " ref='navBtnMain'>
            <ul class="uk-navbar-nav navClass-main-ul">
               <li class="navBtn-li">
                <span >&nbsp;{{allText}}</span>
              </li>
              <li class="navBtn-li " v-for="(coursename,index) in labels" @click="relationClick(coursename.id,undefined,coursename.name,undefined,index)" v-bind:ref="'btn'+index">
                <span :class="coursename.color==false?'xx':'selected-color'">&nbsp;{{coursename.name}}</span>
                <div class="uk-navbar-dropdown class-dropdown" v-if='coursename.children'>
                  <ul class="uk-flex uk-flex-wrap alert-label class-dropdown-ul">
                    <li v-for='(labelname,i) in coursename.children' @click.stop="relationClick(coursename.id,labelname.id,coursename.name,labelname.name,index,i)">
                      <span :class="labelname.color==false?'xx':'selected-color'">{{labelname.name}}</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <!-- 二级导航栏 -->
        <!-- <ul class="move-upshow uk-subnav uk-subnav-pill move-left " uk-switcher> -->
          <!-- <li class="uk-active">
            <a href="#">全部({{products.length}})</a>
          </li> -->
        <!-- </ul> -->
        <div class="attribute">
          <div class="class-attribute">
            <div class="attribute-1">课程属性：</div>
            <ul class="attribute-2">
              <li class="attribute-2-1" @click="changeColor(0)" ref="lesson0">专业课</li>
              <li class="attribute-2-1" @click="changeColor(1)" ref="lesson1">选修课</li>
            </ul>
          </div>
          <div class="class-attestation">
            <div class="attribute-1">是否认证：</div>
            <ul class="attribute-2">
              <li class="attribute-2-1" @click="change(0)" ref="attribute0">认证</li>
              <li class="attribute-2-1" @click="change(1)" ref="attribute1">非认证</li>
            </ul>
          </div>
          <div class="class-year" v-show="isApprove1">
            <div class="attribute-1">认证年度：</div>
            <ul class="attribute-2">
              <li class="attribute-2-1" @click="ch(0)" ref="year0">2017</li>
              <li class="attribute-2-1" @click="ch(1)" ref="year1">2018</li>
              <li class="attribute-2-1" @click="ch(2)" ref="year2">2019</li>
              <li class="attribute-2-1" @click="ch(3)" ref="year3">全年度</li>
            </ul>
          </div>
        </div>

        <!-- 全部 -->
        <p class="blank-type" v-if="products.length===0">
          <span class="blank-text">该类别课程为空</span>
        </p>
        <div class="uk-flex uk-flex-wrap">
          <div v-for="classDetails in products" @click="classDetail(classDetails.id)" class="class-box uk-padding-remove uk-margin-right hand">
            <div>
              <div class=" uk-background-default uk-margin-bottom uk-text-emphasis recommd-class ">
                <div class="">
                  <span v-if="classDetails.is_auth=='1'" class="certified certified-two">已认定</span>
                  <div class="uk-card-media-top recommended1">
                    <img class="recommended" v-bind:src="imgUrl+classDetails.image" alt>
                  </div>
                </div>
                <div class="uk-margin-remove">
                  <div class="uk-panel uk-panel-box uk-text-truncate text-color marginTop12 clasWidth">
                    <div class="zuoyouduiqi2">
                      <span class=" font-size  recommendDetailSize1 ">{{classDetails.name}}</span>
                      <span class="kechengjieshao2">{{classDetails.attr}}</span>
                    </div>
                  </div>
                </div>
                <div class="marginPrice uk-flex uk-flex-bottom uk-flex-between">
                  <div class="right">
                    <span class=" text">老师：{{classDetails.teacher}}</span>
                  </div>
                  <div class="left">
                    <!-- <span class="text">学时</span> -->
                    <i class="fa fa-clock-o uk-text-success icon"></i>
                    <span class="uk-text-success text">{{classDetails.period}}学时</span>
                  </div>
                </div>
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
    <div style="height:350px;"></div>
  </div>
</template>
<!-- js -->
<script src='./classsearch.js'></script>
<!-- css -->
<style scoped>
#dianpukechengsousuo .uk-navbar-dropdown{
  padding:0px;
}
#dianpukechengsousuo .selected-color{
  color:#1e87f0;
}
.products-box {
  height: 250px;
  margin-right: 15px;
}
.recommd-class {
  position: relative;
  transition: all 2s;
  overflow: hidden;
}
.approve {
  display: none;
}
.class-dropdown {
  width: 100%;
  /* height: 10px; */
  margin-top: 0px;
  left: 0px !important;
}
.class-dropdown-ul {
  box-shadow: 0px 0px 1px 0px #ebebeb;
  padding: 20px 0px;
  background-color:white;
  width: 1150px;
}
.class-dropdown-ul > li {
       margin-left: 10px;
    font-size: 15px;
    line-height: 16px;
    padding-right: 5px;
    border-right: 1px solid black;
}
.class-dropdown-nav {
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-content: center;
  width: 500px;

  top: 10px;
  left: -25px;
  font-size: 14px;
  line-height: 21px;
  color: #343d42;
}
.move-upshow {
  position: relative;
  top: -10px;
}
.move-upp {
  position: relative;
  top: -21px;
}
.move-left {
  position: relative;
  left: 0px;
}
.daohang {
  margin-top: 10px;
  margin-bottom: 12px;
  margin-left: 17px;
  margin-right: 17px;
}
.font-size-a1 {
  color: #333333;
  position: relative;
  font-size: 14px;
}
.font-size-teacher {
  font-size: 12px;
  color: #797979;
  position: relative;
  top: -22px;
}
.money-icon {
  font-size: 16px;
}
.priceTextSize {
  color: #f0506e;
  position: relative;
  top: -30px;
  font-size: 24px;
}
#dianpukechengsousuo .kecheng {
  color: #666;
  padding-left: 10px;
  padding-right: 10px;
  min-height: 0px;
  height: 40px;
  font-size: 18px;
  width: 115px;
  text-align: left;
  justify-content: left;
}
.kecheng2 {
  padding-left: 10px;
  padding-right: 10px;
  color: rgb(7, 204, 7);
  min-height: 0px;
  height: 40px;
  font-size: 18px;
  width: 115px;
  text-align: left;
  justify-content: left;
}
.img-sousuoye {
  height: 145px;
  width: 245px;
}
.fa {
  margin-top: 1px;
}
.miaosu {
  font-size: 15px;
  width: 930px;
}
.dianpu {
  font-size: 15px;
}
.shichang {
  font-size: 15px;
}
.hiubiao {
  margin-right: 960px;
}
.xiala {
  padding: 10px;
}
#dianpukechengsousuo .checked {
  background: #1e87f0;
}
#dianpukechengsousuo .kecheng:focus {
  color: white;
}
#dianpukechengsousuo .kecheng:hover {
  color: rgb(24, 23, 23);
}
.hand {
  cursor: pointer;
}
.bianjv {
  margin-right: 5px;
}
.height {
  min-height: 351px;
}
.navClass {
  background: white;
}
.navClass-main {
  width: 100%;
  background: #fff;
  margin-left: -8px;
}
.btn-fa {
  margin-right: 5px;
}
.navClass-main-ul {
  position: relative;
  display: flex;
  background: #ffffff;
  width: 100%;
  flex-wrap: wrap;
  top: -4px;
}
.navBtn-li {
  padding: 0 8px;
  word-break: keep-all;
  white-space: nowrap;
  height: 35px;
  font-size: 14px;
  color: #666666;
  display: flex;
  margin-right: 10px;
  justify-content: center;
  cursor: pointer;
}
.navBtn-li .alert-label {
  left: -17px;
  top: 28px;
  width: 800px;
  position: absolute;
  left: 0px;
  top: 0px;
}
.navBtn-li:first-child {
  box-sizing: border-box;
  padding-left: 6.5px;
  justify-content: flex-start;
}
.navBtn-li:hover {
  color: #1e87f0;
}
.main {
  width: 100%;
  background: red;
}
.iconSiez {
  position: relative;
  top: 1px;
}
.blank-type {
  text-align: center;
  margin-bottom: 300px;
}
.blank-text {
  font-size: 30px;
  position: relative;
  top: 100px;
}
.uk-dropdown {
  min-width: 90px;
  padding: 25px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
}
.class-box {
  margin-right: 18px !important;
}
.class-box:nth-of-type(5n) {
  margin-right: 0px !important;
}
.uk-grid {
  margin-left: 0px;
}
.recommended {
  width: 100%;
}
.recommended1 {
  height: 125px;
  width: 225px;
  border-radius: 3px;
  overflow: hidden;
}
.recommended1 :hover {
  transform: scale(1.15);
  transition: all 2s;
}
.a1 {
  text-decoration: none;
  color: #797979;
  font-size: 18px;
}
.classDesc {
  width: 205px;
  margin-top: 12px;
  margin-bottom: 22px;
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
.courseTextSize {
  padding: 0 0 0 0px;
  top: -8px;
  position: relative;
}
.btnWidth {
  text-align: left;
  width: 88px;
}
.marginPrice {
  margin-bottom: 7px;
}
.marginPrice .text {
  font-size: 14px;
  text-decoration: none !important;
}
.marginPrice .left {
  padding-left: 1px;
}
.marginPrice .icon {
  margin-right: 3px;
}
.text-color {
  color: #666;
}
.marginTop12 {
  margin-top: 6px;
  margin-bottom: 2px;
}
.clasWidth {
  width: 225px;
}
.fontsize {
  font-size: 16px;
  padding: 0px 10px;
}
.zuoyouduiqi2{
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
.kechengjieshao2{
  font-size: 13px;
  color: #797979;
}
.attribute {
  width: 100%;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  margin-top: -10px;
  margin-bottom: 20px;
  display: flex;
}
.class-attribute {
  border-right: 1px dashed #e8e8e8;
  display: flex;
}
.attribute-1 {
  height: 20px;
  display: flex;
  font-size: 14px;
  margin: 10px 0 10px 0px;
}
.attribute-2 {
  margin: 0 0 0 0px;
  padding: 0;
  display: flex;
  font-size: 14px;
}
.attribute-2-1 {
  width: 50px;
  padding: 0 20px;
  margin: 10px 0;
}
.attribute-2-1:hover {
  cursor: pointer;
}
.class-attestation {
  display: flex;
}
.class-year {
  border-left: 1px dashed #e8e8e8;
  display: flex;
}
</style>

