<template>
  <div >
    <div class="uk-container font-family">
      <h3 class=" margin-top">学时证明</h3>
      <!-- <div class="uk-card uk-card-default uk-padding-large uk-margin-large-bottom"> -->
      <a href="#" id="btn-Convert-Html2Image">下载</a>
      <div id="html-content-holder" style="background-color: #fff;">
        <div class="border uk-margin-xlarge-left uk-margin-xlarge-right uk-padding-small" >
          <!-- <div class="text-align-right uk-margin-small-bottom">{{certificateNumber}}</div> -->
          <div class="text-align-center uk-margin-small-bottom">广东省专业技术人员继续教育证明</div>
          <div class="uk-margin-small-bottom letter-spacing line-height">
            &nbsp;&nbsp;&nbsp;
            <!-- <u>{{unit}}</u> 单位学员 -->
            <u>{{studentName}}</u><!-- （
            <u>{{identityNumber}}</u>） -->于
            <u>{{startTime}}</u>至
            <u>{{endTime}}</u>参加我单位举办的专业技术人员继续教育
  <!--         </div>
          <div class="margin-left1 uk-margin-small-bottom"> --><!-- <u>{{courseTitle}}</u> -->
            <!-- 算下总科目的学时就行了 -->
            <!-- 《{{tab.name}}》{{index+1===classInfo.length?"("+tab.time+"学时)":"("+tab.time+"学时)、"}} -->
          <u>{{courseTitle}}</u>科目<u v-for="(tab,index) in classInfo">
            《{{tab.name}}》{{index+1===classInfo.length?"(共计"+tab.time+"学时)":""}}
          </u>

          <!-- <u>{{numberOfDays}}</u>天，共<u>{{period}}</u>学时。 -->
          课程培训，考核合格（良好）。按照《广东省专业技术人员继续教育条例》要求，此课程已报<u>广东省</u>人力资源和社会保障部门备案，可按<u>{{period}}</u>学时载入个人<u>{{year}}</u>年度专业技术档案和继续教育证书。
          </div>
          <div class="margin-left uk-margin-large-bottom">特此证明。</div>
          <div class="text-align-right uk-margin-small-bottom">培训机构：<u>{{trainingInstitution}}</u></div>
          <div class="text-align-right uk-margin-small-bottom">（盖章）</div>
          <div class="text-align-right ">时间：<u>{{sealOfTheTime}}</u></div>
          <div class="float-right img-opacity"><img src="../../assets/images/stamp.png" alt="" width="120"></div>
        </div>
      </div>
      <div class="return">
        <button class="uk-button uk-button-primary uk-button-large return-button" @click="goWhere">返回</button>
      </div>
      <!-- </div> -->
    </div>
    <div style="height:100px;"></div>
  </div>
</template>
<script src='./studyingcertificate.js'></script>
<style>
.font-family {
  font-family: serif;
  color: #000;
}
.border {
  border: 1px solid #666666;
  box-shadow: 4px 4px 4px  #C9C9C9;
}
.text-align-right {
  text-align: right;
}
.text-align-center {
  text-align: center;
}
.text-indent {
  text-indent: 25px；;
}
.margin-top {
  margin-top: 20px;
}
.margin-top1 {
  margin-top: 100px;
}
.margin-left1 {
  margin-left: 57px;
}
.margin-left {
  margin-left: 65px;
}
.letter-spacing {
  letter-spacing: 3px;
}
.line-height {
  line-height: 35px;
}
.float-right {
  float: right;
  position: relative;
  bottom: 140px;
  right: 50px;
}
.img-opacity {
  opacity: 0.6;
}
.return{
  /*background:red;*/
  width: 100%;
  position: relative;
  margin-top:20px;
  /*text-align: center;*/

/*  position:absolute;*/
/*  display: flex;
  justify-content: center;
  align-items: center;*/
}
.return-button{
  position:absolute;
  left: 50%;
  transform: translate(-50%,0%);
}

</style>
