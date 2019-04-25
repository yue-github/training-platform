<template>
  <div id="ClassDetails " class="uk-background-muted">
    <div id="modal-no-enter" uk-modal class="registerRemind">
      <div class="uk-modal-dialog uk-modal-body">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <p>该课时已经完成，请观看其他课时</p>
      </div>
    </div>
    <!-- <div id="modal-close-default" uk-modal class="shoppingCartRemind">
      <div class="uk-modal-dialog uk-modal-body">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <p>购物车已经存在该商品</p>
      </div>
    </div> -->
    <div class="uk-container uk-background-muted">
      <!-- 面包屑 -->
      <div class="page-address">
        <ul class="uk-flex uk-text-small uk-padding-remove">
          <li>
            <a class="uk-text-emphasis page-address-noUnderLine" @click="goIndex">首页&nbsp;</a>
          </li>
          <li>
            <span class="uk-text-muted">&nbsp;&gt;&nbsp;</span>
          </li>
          <li>
            <a class="uk-text-emphasis page-address-noUnderLine" @click='toAllClass'>&nbsp;全部课程&nbsp;</a>
          </li>
          <li>
            <span class="uk-text-muted">&nbsp;&gt;&nbsp;</span>
          </li>
          <li>
            <span class="uk-text-muted page-address-deatilTextColor">&nbsp;课程学习</span>
          </li>
        </ul>
      </div>
      <!-- 课程详情 -->
      <div class="uk-card  padding20 boxShadow uk-background-default">
        <div class="uk-text-center uk-flex">
          <div class="  uk-padding-remove boxShadow classdetails_img_size">
            <img class="classdetails_img_size" v-bind:src="imgUrl+classDetails.image" alt>
          </div>
          <div class=" uk-text-center uk-flex">
            <div class="uk-card uk-margin-left ">
              <div class="uk-flex uk-flex-column uk-width-expand uk-text-small">
                <div class="uk-text-large uk-text-center uk-text-middle ">
                  <span class="textColor">{{classDetails.name}}</span>
                </div>
                <div class="marginTop15  uk-text-left ">
                  <span>主讲老师：</span>
                  <span class="uk-text-small uk-margin-right ">{{classDetails.teacher}}</span>
                </div>
                <div class="marginTop15  uk-text-left ">
                  <span>学时：</span>
                  <span class="uk-text-small uk-margin-right ">{{classDetails.period}}</span>
                </div>
                <div class="marginTop15  uk-text-left ">
                  <span>年度：</span>
                  <span class="uk-text-small uk-margin-right ">{{classDetails.cer_year==null||classDetails.cer_year==''?'适用于所有年度': classDetails.cer_year.slice(0,4)+'年'}}</span>
                </div>
                <div class="marginTop15  uk-text-left ">
                  <span>课程类型：</span>
                  <span class="uk-text-small uk-margin-right ">{{classDetails.attr==null||classDetails.attr==''?'其他':classDetails.attr}}</span>
                </div>
                <div class="uk-text-right uk-text-large btnmargin uk-padding-remove uk-flex">
                  <div class="uk-margin-right uk-padding-remove ">
                    <span class="uk-button buttonStyle " @click="toStudy">
                      {{studyText}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 课程详情 -->
    <div class="uk-container ">
      <div class="uk-text-center boderTop">
        <!-- 课程详情与评价 -->
        <div class="uk-flex uk-flex-column uk-width-1-1 uk-padding-remove">
          <div class="">
            <ul class="uk-subnav uk-subnav-pill uk-card uk-card-default bgColor1 uk-text-middle uk-padding-remove" uk-switcher="connect: .switcher-container" id="study-switcher">
              <li class="liStyle uk-padding-remove">
                <a class="hoverColor">课程介绍</a>
              </li>
              <li class="liStyle uk-padding-remove">
                <a class="hoverColor ">课程大纲</a>
              </li>
              <li class="liStyle uk-padding-remove" @click="toClassExam">
                <a class="hoverColor">课后习题</a>
              </li>
            </ul>
            <!-- 课程详情 -->
            <ul class="uk-switcher switcher-container uk-margin uk-card uk-card-default ">
              <li>
                <div class="uk-comment-body uk-text-left class-desc">
                  <span class="classtitle ">课程概述</span>
                  <div class="uk-margin-small-top classdesc">{{classDetails.desc}}</div>
                </div>
                <div class="uk-comment-body uk-text-left class-desc1">
                  <span class="classtitle ">教师介绍</span>
                  <div class="uk-margin-small-top classdesc">{{classDetails.teacher_intro}}</div>
                </div>
              </li>
              <!-- 目录 -->
              <li>
                <div class="uk-child-width-3-4">
                  <div class="progress-class">
                    <div class="progressCount">
                      <progress id="js-progressbar" class="uk-progress" :value="finishedClass/sumClass*100" max="100"></progress>
                    </div>
                    <div class="uk-text-left">
                      <span class="countSize">目前已完成&nbsp;&nbsp;
                        <span class="countClass">{{finishedClass}}</span> &nbsp;课时 ,加油啊！</span>
                    </div>
                  </div>
                  <ul class="uk-card  uk-text-left uk-padding-remove uk-margin-remove">
                    <li class="shadow  ">
                      <h2 class="catalogueSize uk-margin-remove">目录</h2>
                    </li>
                  </ul>
                  <div class="uk-text-left">
                    <div class="bottom12">
                      <ul v-for="(catalogue,index) in resources" class="uk-padding-remove box">
                        <ul class="height38 uk-margin-remove chapter">
                          <li>
                            <span class=" chapter-text uk-text-center">章节</span>
                            <span class="index-text">
                              <span class="text">{{index+1}}</span>
                            </span>
                            <span class="chapter-name uk-text-truncate">{{catalogue.name}}</span>
                          </li>
                        </ul>
                        <ul v-for="(resources,i) in catalogue.items" @mouseover="mouseOver(index,i)" :ref="'btn'+index+i" @mouseleave="mouseLeave(index,i)" class="uk-margin-remove height36 btn uk-padding-remove " @click="toLearnVideo(resources.resources,index,i,resources.name,resources.currentTime,resources.allTime)">
                          <div class=" uk-flex ">
                            <div class=" detials-name uk-flex">
                              <div class="time"></div>
                              <div class="line"></div>
                              <div class="circle "> </div>
                              <div class="shangci">
                                <div :class="{timeText:true,height36:true,ukTextTruncate:true, mingzilll:true,yueChangeColor:index==continueClass.chapterIndex&&i==continueClass.classIndex?true:false}">{{resources.name}}</div>
                                <span class="xuedaozheli" v-if="index==continueClass.chapterIndex&&i==continueClass.classIndex">上次学到这里</span>
                              </div>
                            </div>
                            
                              <span class="percentage">{{resources.allTime?(resources.currentTime/resources.allTime*100).toFixed(2):0}}%</span>
                            
                            <div class="progress">
                              <progress id="js-progressbar" class="uk-progress" :value="resources.allTime?(resources.currentTime/resources.allTime*100).toFixed(2):0" max="100"></progress>
                            </div>
                            <div class="benBlock">
                              <div class="benBlockChild uk-text-center">开始学习</div>
                            </div>
                          </div>
                        </ul>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./classstudy.js'></script>
<style scoped>
/*第一块*/
.page-address {
  margin-top: 23px;
  margin-bottom: 23px;
  color: #666;
}

.page-address-noUnderLine {
  text-decoration: none;
}
.page-address-deatilTextColor {
  color: #999;
}

/*第二块*/
.padding20 {
  padding: 20px 0 20px 20px;
}
.boxShadow {
  box-shadow: 0px 1px 2px #bbb;
}
.classdetails_img_size {
  height: 250px;
  width: 450;
}
.textColor {
  color: #333;
}
.marginTop15 {
  margin-top: 9px;
}

/*第三块*/
.boderTop {
  background-color: #fafafa;
  border-top: 1px solid #fff;
}
.bgColor1 {
  padding-left: 8px;
  background-color: #fafafa;
  position: relative;
}
.liStyle {
  width: 73px;
  height: 36px;
}
.hoverColor {
  font-size: 14px;
  height: 28px;
  padding: 0;
  text-align: center;
  margin: 0 auto;
  padding-top: 8px;
}

.uk-subnav-pill > .uk-active > a {
  color: #fff;
}
.uk-subnav {
  margin-left: 0px;
}

/*第四块*/
.class-desc {
  padding: 20px 20px 10px 20px;
  /*margin-bottom: 50px;*/
  /*border-bottom: 1px solid black;*/
}
.class-desc1{
  padding: 10px 20px 20px 20px;
  margin-bottom: 100px;
}
.classtitle {
  line-height: 19px;
  font-size: 18px;
  color: #333;
  height: 20px;
}

#ClassDetails .uk-container {
  width: 1280px;
}
#ClassDetails .uk-background-muted {
  background-color: #eeeeee;
}

/*第五块*/
.progress-class {
  padding: 0px 20px;
  height: 80px;
}
.progress-class .progressCount {
  position: relative;
  top: 12px;
}
.progress-class .countSize {
  font-size: 12px;
}
.progress-class .countSize .countClass {
  font-size: 16px;
  font-weight: 600;
  color: #444;
}
/* .exam{
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #1e87f0;
  
} */
.exam > a {
  color: white;
}
.exam > a:hover {
  color: white;
  background-color: #1e87f0;
}
.chapter-text {
  display: inline-block;
  width: 55px;
  font-size: 14px;
}
.chapter-name {
  max-width: 458px;
  padding-left: 6px;
}
.index-text {
  border: 2px solid #7e838c;
  border-radius: 50%;
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
  left: -0px;
  top: 6px;
}
.index-text .text {
  position: relative;
  left: 8px;
  top: -6px;
  font-size: 16px;
}
.chapter {
  padding-left: 20px;
  font-weight: bold;
  color: #999999;
  font-size: 15px;
  background-color: #fafafa;
}
.box {
  margin: 0px 0px 10px 0px;
}
.detials-name {
  padding-left: 20px;
}
.detials-name .time {
  display: inline-block;
  width: 60px;
  color: #999999;
  font-size: 14px;
}
.circle {
  background-color: white;
  margin-top: 7px;
  border: 2px solid #8d9097;
  border-radius: 50%;
  display: inline-block;
  width: 15px;
  height: 15px;
  position: relative;
  left: -10px;
}

.detials-name .time-text {
  max-width: 458px;
  padding-left: 8px;
  color: #585c67;
  font-size: 15px;
}
.percentage {
  position: absolute;
  right: 190px;
}
.progress {
  padding-top: 10px;
  width: 200px;
  position: absolute;
  right: 250px;
}
/* .last-study{
  position: absolute;
  right: 470px;
  color: #0080c8;
} */
.classdesc {
  line-height: 23px;
  /* font-family: '微软雅黑'; */
  word-wrap: break-word;
  color: #666;
  font-size: 14px;
}
.bottom12 {
  padding-bottom: 12px;
}
.shadow {
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.08);
}
.shadow .catalogueSize {
  padding: 15px 0 15px 15px;
  font-size: 18px;
}
.height38 {
  line-height: 36px;
  height: 36px;
}
.height36 {
  line-height: 36px;
  height: 36px;
}

.btn :hover {
  cursor: pointer;
}
.btn :hover .benBlock {
  display: block;
}
/* .btn :hover .progress{
  display: block;
} */
.btn {
  position: relative;
}
.line {
  margin-left: 9px;
  float: left;
  width: 1px;
  height: 36px;
  background: darkgray;
}
.benBlock {
  display: none;
  position: absolute;
  margin: 1px;
  padding: 0;
  top: 0;
  right: 50px;
  height: 36px;
  color: #fff;
}

.benBlockChild {
  padding-top: 1px;
  padding-left: 10px;
  padding-right: 10px;
  background: #1e87f0;
  border-radius: 2px;
  height: 34px;
  width: 58px;
  font-size: 12px;
}
.benBlock :hover {
  height: 34px;
  opacity: 0.8;
  background: #1e87f0;
}
.btnmargin {
  margin-top: 50px;
}
.buttonStyle {
  background: #ff8000;
  color: white;
  font-size: 20px;
  line-height: 45px;
  width: 160px;
  height: 45px;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
}

.uk-card-default {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
}
.zitigeshi {
  margin: 0 20px 0 0;
}
.shangci{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.mingzilll{
  overflow:hidden;
  text-overflow:ellipsis;
}
.xuedaozheli{
  position: absolute;
  right: 500px;
  color: #0080c8;
}
</style>
