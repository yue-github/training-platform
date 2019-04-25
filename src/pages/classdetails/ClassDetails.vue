<template>
  <div id="ClassDetails" class="uk-background-muted">
    <div id="modal-buy" uk-modal class="registerRemind">
      <div class="uk-modal-dialog uk-modal-body">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <p>{{tips}}</p>
      </div>
    </div>
    <!-- <div id="modal-haved" uk-modal  >
      <div class="uk-modal-dialog uk-modal-body">
          <button class="uk-modal-close-default" type="button" uk-close></button>
          <p>购物车已经存在该商品</p>
      </div>
    </div>
    <div id="modal-add" uk-modal  >
      <div class="uk-modal-dialog uk-modal-body">
          <button class="uk-modal-close-default" type="button" uk-close></button>
          <p>商品添加成功</p>
      </div>
    </div> -->
    <div class="uk-container uk-background-muted">
      <!-- 面包屑 -->
      <div class="dangqianyedizhi">
        <ul class="uk-flex uk-text-small uk-padding-remove">
          <li>
            <a class="uk-text-emphasis noUnderLine" @click="goIndex">首页&nbsp;</a>
          </li>
          <li>
            <span class="uk-text-muted">&nbsp;&gt;&nbsp;</span>
          </li>
          <li>
            <a class="uk-text-emphasis noUnderLine" @click="toAllClass">&nbsp;全部课程&nbsp;</a>
          </li>
          <li>
            <span class="uk-text-muted">&nbsp;&gt;&nbsp;</span>
          </li>
          <li >
            <span class="uk-text-muted deatilTextColor">&nbsp;课程详情</span>
          </li>
        </ul>
      </div>
      <!-- 课程详情 -->
      <div class="uk-card  padding20 boxShadow uk-background-default">
        <div class="uk-text-center uk-flex" >
          <div  class="  uk-padding-remove boxShadow classdetails_img_size">
            <img class="classdetails_img_size" v-bind:src="imgUrl+classDetails.image" alt>
          </div>
            <div class=" uk-text-center uk-flex" >
              <div class="uk-card uk-margin-left ">
                <div class="uk-flex uk-flex-column uk-width-expand uk-text-small">
                  <div class="text-int uk-text-large ">
                    <span class="textColor">{{classDetails.name}}</span>
                  </div>
                  <div class="marginTop15  uk-text-left ">
                        <span>主讲老师:</span>
                        <span class="uk-text-small  ">{{classDetails.teacher}}</span>
                  </div>
                  <div class="marginTop14 uk-text-left">
                      <span class="classPriceStyle">￥{{classDetails.price}}</span>
                  </div>
                    <div class="uk-text-right uk-text-large btnmargin uk-padding-remove uk-flex" >
                      <div class="uk-margin-right uk-padding-remove ">
                        <span class="uk-button buttonStyle " @click="byNow(classDetails.project_id,classDetails.price)">
                          立即购买
                        </span>
                      </div>
                      <div class="uk-padding-remove ">
                        <a class="textAddShoppingCart " @click="addShoppingCart(classDetails.project_id,classDetails.image,classDetails.name,classDetails.price)">
                          <i class="fa fa-briefcase"></i>
                          加入购物车
                        </a>
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
            <ul class="uk-subnav uk-subnav-pill uk-card uk-card-default bgColor1 uk-text-middle uk-padding-remove" uk-switcher="connect: .switcher-container">
              <li class="liStyle uk-padding-remove">
                <a class="hoverColor">课程介绍</a>
              </li>
              <li class="liStyle uk-padding-remove">
                <a class="hoverColor ">课程大纲</a>
              </li>
            </ul>
            
            <!-- 课程详情 -->
            <ul class="uk-switcher switcher-container uk-margin uk-card uk-card-default ">
              <li>
                <div class="uk-comment-body uk-text-left class-desc">
                  
                  <span class="classtitle ">课程概述</span>
                  <div class="uk-margin-small-top classdesc">{{classDetails.desc}}</div>
                </div>
              </li>
              <!-- 目录 -->
              <li>
                <div class="uk-child-width-3-4">
                  <ul class="uk-card  uk-text-left uk-padding-remove uk-margin-remove">
                    <li class="shadow">
                      <h2 class="catalogueSize uk-margin-remove" >目录</h2>
                    </li>
                  </ul>
                  <div class="uk-text-left">
                    <div class="bottom12" >
                      <ul v-for="(catalogue,index) in resources" class="uk-padding-remove box">
                        <ul class="height38 uk-margin-remove chapter">
                          <li >
                            <span class="chapter-text uk-text-center">章节</span>
                            <span class="index-text"><span class="text">{{index+1}}</span></span>
                            <span class="chapter-name uk-text-truncate">{{catalogue.name}}</span>
                          </li>
                        </ul>
                        <!-- <li>{{catalogue.items}}</li> -->
                        <div v-for="(resources,i) in catalogue.className" @mouseover="mouseOver(index,i)" :ref="'btn'+index+i" @mouseleave="mouseLeave(index,i)"  class="uk-margin-remove height36 btn uk-padding-remove ">
                          <div class="uk-flex">
                              <div class=" detials-name uk-flex">
                                <div class="time"></div>
                                <div class="line"></div>
                                <div class="circle "> </div>
                                <div class="time-text height36 uk-text-truncate">{{resources.name}}</div>
                              </div>
                            <div class="benBlock"  >
                              <div class="benBlockChild uk-text-center" @click="byNow(classDetails.project_id,classDetails.image,classDetails.name,classDetails.price)">需要购买</div>
                            </div>
                          </div> 
                        </div>
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
<script src='./classdetails.js'></script>
<style scoped>
#ClassDetails .uk-container {
  width: 1280px;
}
.chapter{ 
  padding-left: 20px;
  font-weight: bold;
  color: #999999;
  font-size: 15px;
  background-color: #fafafa;
}
.box{
  margin:0px 0px 10px 0px;
}
.detials-name{
  padding-left: 20px;
}
.detials-name .time{
  display: inline-block;
  width: 60px;
  color: #999999;
  font-size: 14px;
}
.detials-name .line{
  margin-left: 9px;
  float:left;
  width: 1px;
  height: 36px; 
  background: darkgray
}
.detials-name .circle{
  background-color: white;
  margin-top: 7px;
  border:2px solid #8d9097;
  border-radius: 50%;
  display: inline-block;
  width: 15px;
  height: 15px;
  position: relative;
  left: -10px;
}
.detials-name .time-text{
  max-width: 458px;
  padding-left: 8px;
  color: #585c67;
  font-size: 15px;
}
.dangqianyedizhi{
  margin-top: 23px;
  margin-bottom: 23px;
  color: #666;
}
.noUnderLine{
  text-decoration: none;
}
.deatilTextColor{
  color: #999
}
.padding20{
  padding: 20px 0 20px 20px;
}
.boxShadow{
  box-shadow: 0px 1px 2px #bbb;
}
.classdetails_img_size {
  height: 250px;
  width: 450;
}
.classtitle {
  line-height: 19px;
  font-size: 18px;
  color: #333;
  height: 20px;
}
.marginTop15{
  margin-top: 15px;
}
.marginTop14{
  margin-top: 14px;
}
.classPriceStyle{
  color: #333;
  font-size: 28px;
  font-family: '微软雅黑';
  line-height: 30px;
}
.buttonStyle{
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
.boderTop{
  background-color: #fafafa;
  border-top: 1px solid #fff;
}
.hoverColor {
  font-size: 14px;
  height: 28px;
  padding: 0;
  text-align: center;
  margin: 0 auto;
  padding-top: 8px;
}
.uk-subnav-pill>.uk-active>a {
    color: #fff;
}
.bgColor1{
  padding-left: 8px;
  background-color: #fafafa;
}
.liStyle{
    width: 73px;
    height: 36px;
}
.resourcesBlock{
  font-size: 16px;
}
.btnmargin{
  margin-top: 88px
}
.classdesc{
      line-height: 23px;
    font-family: '微软雅黑';
    word-wrap: break-word;
    color: #666;
    font-size: 14px;
}
.class-desc{
  padding:20px;
  margin-bottom: 300px;
}
.uk-card-default{
  box-shadow:0 2px 5px rgba(0,0,0,.08)
}
.uk-subnav{
  margin-left: 0px
}
.catalogueSize{
  padding: 15px 0 15px 15px;
  font-size: 18px
}
.bottom12{
  padding-bottom: 12px;
}
.height36{
  line-height: 36px;
  height: 36px;
}
.btn :hover{
  background-color: #DCECFD;
}
.btn :hover .benBlock{
  display: block;
  color: #1E87F0;
}

.benBlock{
  display: none  ;
  position: absolute;
  margin:1px;
  padding:0;
  top:0;
  right: 50px;
  height: 36px;
  color: #fff;
}
.benBlockChild{
  color:white;
  padding-top: 1px;
  padding-left: 10px;
  padding-right: 10px;
  background:#1e87f0;
  border-radius:2px;
  height:34px;
  width: 58px;
  font-size: 12px;
}
.text-int{
  box-sizing: border-box;
  display: flex;
  left: 0;
}
.textColor{
  color: #333;
   
  /* margin-left:-210px; */
}
.textAddShoppingCart{
  font-size: 14px;
  color: #0a9a3d;
  text-decoration: none;
  padding-left: 25px;
}
.height38{
  line-height: 36px;
  height: 36px;
}
.chapter-text{
  display: inline-block;
  width: 55px;
  font-size: 14px;
}
.index-text{
  border:2px solid #7e838c;
  border-radius: 50%;
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
  left: -0px;
  top: 6px;
}
.index-text .text{
  position: relative;
  left: 8px;
  top: -6px;
  font-size: 16px;
}
.chapter-name{
  max-width: 458px;
  padding-left: 6px;
}
.btn{
  position: relative;
}
.btn :hover{
  cursor: pointer;
}
.btn :hover .benBlock{
  display: block;
}
.benBlock :hover{
   height:34px;
   opacity: 0.8;  
   background:#1e87f0;
   
 }

</style>
