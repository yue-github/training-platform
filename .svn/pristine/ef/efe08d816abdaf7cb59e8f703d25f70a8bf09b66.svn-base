<template>
  <div id="learnvideo">
    <span class="back hand" @click="toClassStudy">
      <i class="fa fa-angle-left back-icon"></i>
      返回课程主页
    </span>
    <span class="catalog hand" uk-toggle="target: #offcanvas-push" @click="displayChapter">
      <i v-if="arrowIcon" class="fa fa-angle-double-left catalog-icon hand"></i>
      <i v-if="!arrowIcon" class="fa fa-angle-double-right catalog-icon hand"></i>
    </span>
    <!-- <span v-if="!arrowIcon" class="catalog hand" uk-toggle="target: #offcanvas-push" @click="displayChapter">
      <i class="fa fa-angle-double-right catalog-icon hand"></i>
    </span> -->
    <div class="class-title">
      <!-- <span @click="ttt">ttt</span> -->
      <span class="title-one">章节{{Number.parseInt(chapterIndex)+1}}</span>
      <span class="title-two">课时</span>
      <span class="title-three">
        <span class="three-text">{{Number.parseInt(classIndex)+1}}</span>
      </span>
      <span class="title-four">{{className}}</span>
    </div>
    <div class="learn-time">
      <div class="first-line">当前学习情况</div>
      <div class="second-line">要求学习时长：{{sumTime}}</div>
      <div class="third-line">已学时长：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{nowTime}}</div>
    </div>
    <div id='plv_1'></div>
    <div class="border-right1 enpty-div"> </div>
    <div class="div-width div-float border-right  uk-background-muted uk-margin-remove-bottom overflow">
      <div>
        <ul class="uk-nav">
          <ul class="uk-padding-remove uk-nav-parent-icon" uk-nav="multiple: true">
          </ul>
        </ul>
      </div>
    </div>
    <div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true" flip="true">
      <div class="uk-offcanvas-bar">
        <!-- 课程栏目顶部 -->
        <div class="TopOfCourseColumn">
          <div class="TopOfCourseColumn-column">
            <a href="#">{{classDetails.name}}</a>
            <p>教师：{{classDetails.teacher}}</p>
          </div>
          <div class="TopOfCourseColumn-img">
            <img :src="imgUrl+classDetails.image" width="120" height="66">
          </div>
        </div>
        <p class="Catalog">目录</p>
        <div class="CurriculumList">
          <ul class="uk-nav-default " uk-nav="multiple: true">
            <li v-for="(resources,index) in resources" class="uk-parent uk-open uk-text-truncate">
              <a class="chapter">
                <span>&nbsp;&nbsp;章节 {{index+1}}&nbsp;&nbsp;</span>{{resources.name}}</a>
              <ul class="uk-nav-sub" aria-hidden="false">
                <li v-for="(items,i) in resources.items" class="uk-text-truncate  curriculum">
                  <a @click="toLearnVideo(items.resources,index,i,items.name,items.currentTime)">{{items.name}}</a>
                </li>
              </ul>
            </li>
            <li class="uk-margin-remove exam hand" @click="toClassExam">
              <span @click="toClassExam">课后习题</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./learnvideo'></script>

<style scope>
/* html{
  background: #67686d;
} */

body{
   /* width: 100%; */
   transition: all 2s linear ;  
}

#learnvideo,#plv_1 {
  background: #67686d;
  height: 100%;
}
#learnvideo #plv_1 > object {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
  margin: 0px auto;
  width: 96% !important;
  /* height: 85% !important; */
}
.uk-offcanvas-bar {
  background-color: #f5f7fa;
  color: lime;
}
.back {
  position: absolute;
  left: -4px;
  top: 20px;
  background-color: #abadb0;
  color: #484848;
  line-height: 24px;
  font-size: 12px;
  padding: 0px 8px 0px 11px;
  border-radius: 5px;
}
.back .back-icon {
  margin-right: 7px;
  font-size: 17px;
}
.catalog {
  position: absolute;
  right: 0px;
  top: 20px;
  background-color: #abadb0;
  color: #484848;
  line-height: 24px;
}
.catalog .catalog-icon {
  padding: 0px 6px;
  font-size: 20px;
}
.class-title {
  /* background-color: #fff; */
  display: inline-block;
  position: absolute;
  left: 2%;
  top: 70px;
  font-size: 12px;
}
.learn-time{
  position: absolute;
  right: 3%;
  top: 20px;
  background-color:#8b8d92;
  color: black;
  padding:5px;
  border-radius: 10px;
  /* z-index: 300; */
}

.class-title .title-one {
  color: black;
  padding: 3px 30px 3px 16px;
  background-color: #8b8d92;
  border-radius: 20px;
}
.class-title .title-two {
  padding: 3px 30px 3px 10px;
  color: #999999;
  background-color: black;
  border-radius: 20px;
  position: relative;
  left: -20px;
}
.class-title .title-three {
  color: black;
  background-color: #2b78bc;
  border: 2px solid black;
  font-size: 14px;
  width: 25px;
  height: 25px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  position: relative;
  left: -40px;
  top: -2px;
}
.title-three .three-text {
  position: relative;
  top: 2px;
}
.class-title .title-four {
  color: #c6cccc;
  position: relative;
  left: -30px;
}
.CurriculumList {
  width: 320px;
  height: 325px;
  justify-content: space-around;
  align-content: center;
}

.CurriculumList a {
  color: #999999 !important;
}
.CurriculumList .chapter {
  color: #666666 !important;
}
.MajorCourse {
  display: flex;
}
.curriculum {
  width: 360px;
  height: 36px;
  color: #999999;
  font-size: 12px;
  box-sizing: border-box;
  padding: 0 0 0 8px;
  display: flex;
  /* justify-content: space-around;   */
  justify-content: flex-start;
}
.curriculum > a {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.Catalog {
  width: 100%;
  line-height: 45px;
  background: #d2d5da;
  color: #000;
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin: 0px 0px 20px 0px;
}
.uk-offcanvas-bar {
  padding: 0;
  /*background: #f5f7fa;*/
  box-sizing: border-box;
}

.TopOfCourseColumn {
  width: 100%;
  height: 97px;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 15px;
  background: #abadb0;
}
.TopOfCourseColumn-column {
  position: relative;
}
.TopOfCourseColumn-column > a {
  width: 165px;
  height: 19px;
  display: block;
  color: #666666;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.TopOfCourseColumn-column > p {
  width: 165px;
  height: 19px;
  color: #666666;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
  bottom: 0;
}
.TopOfCourseColumn-img > img {
  width: 120px;
  height: 66px;
}
.show-list {
  position: absolute;
  right: 0;
  top: 12px;
  width: 23px;
  height: 24px;
  cursor: pointer;
  z-index: 998;
  background-position: 0 -640px;
  background: url(http://s.stu.126.net/res/images/courseLearn.png?91dd8ac1f930a4e4930376ffeee48616)
    no-repeat 4449px 4449px;
}
.exam {
  color: black;
  font-size: bold;
  padding: 10px 0px 20px 8px;
}

/*.div-width {
  width: 240px;
}
.div-float {
  float: right;
}
.border-right {
  border-right: 1px solid rgb(209, 209, 209);
  height: 630px;
}

.enpty-div {
  float: left;
  margin-left: 122px;
  width: 148px;
}*/
/*.border-right1 {
  border-right: 1px solid rgb(209, 209, 209);
  height: 69.6px;
}
.overflow {
  overflow: auto;
}
.div-hight {
  height: 69.6px;
}
#learnvideo .uk-nav-parent-icon > .uk-parent.uk-open > a::after {
  background-image: url("../../assets/images/arrows-bottom.png");
  background-size: 15px 15px;
}
#learnvideo .uk-nav-parent-icon > .uk-parent > a::after {
  content: "";
  width: 1.5em;
  height: 1.5em;
  float: right;
  background-image: url("../../assets/images/arrows-right.png");
  background-repeat: no-repeat;
  background-position: 0% 0%;
  background-size: 15px 15px;
}*/
</style>
