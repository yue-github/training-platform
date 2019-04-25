<template>
  <div id="shoppingcart">
    <main class="hezi">
      <p class="blank-type" v-if="order.length===0"><span class="blank-text">购物车为空</span></p>

      <div class="uk-container ">
        <p class="uk-margin-remove-bottom uk-margin-top">
          <span class="text-color">我的购物车</span>
          <span class=" text-size">
            共
            <span>{{order.length}}&nbsp;</span>门，
            已经选择
            <span>{{chooseCount}}&nbsp;</span>门
          </span>
        </p>
        <p>
        </p>
        <div class="div-border-248px div-padding22 " v-if="order.length!==0">
          <div class="position10 font-12px">
            <div class="div-float-width10 ">
              <input class="uk-checkbox input-checkbox " type="checkbox" name="checkall" v-model="allChecked" v-on:click="allChoose">&nbsp;&nbsp;全选
            </div>
            <div class="div-float-width70">课程</div>
            <div class="div-float-width10">金额</div>
            <div class="div-float-width10 div-align-right">操作</div>
          </div>
        </div>

          <div class=" div-margin85" v-for="checkb in order">
            <div class="  div-border-248px div-padding55">
              <div class="div-float-width10 position35"><input class="uk-checkbox input-checkbox " type="checkbox" name="checkboxinput" v-model="checkb.selected" @change='choose(checkb.id)'></div>
              <div class="div-float-width70 uk-flex position35">
                <img class="img-chanpin " v-bind:src="imgUrl+checkb.image" alt @click="commodityDetails(checkb.product_id)">
                <p class="biaoti uk-text-emphasis uk-margin-remove-top " @click="commodityDetails(checkb.product_id)">{{checkb.name}}</p>
              </div>
              <div class="div-float-width10 uk-text-danger position35">￥{{checkb.price}}</div>
              <div class="div-float-width10 div-align-right position35 "><span class="hand" uk-icon="trash" type="button" @click="deleteCommodity(checkb.id)"></span></div>
            </div>
            <div class="uk-padding-remove empty-box div-border-238px"></div>
          </div>

        <div class="div-margin " v-if="order.length!==0">
          <div class="uk-flex uk-card uk-card-default div-border-238px  div-margin-55" uk-grid>
            <div class="div-width130 uk-padding-remove font-12px ">
              <span class=""><input class="uk-checkbox input-checkbox " type="checkbox" name="checkall" v-model="allChecked" v-on:click="allChoose">&nbsp;&nbsp;全选</span>
            </div>
            <!-- <div class="uk-padding-remove-left float-and-szie">删除所选课程</div> -->
            <div class="width891px uk-text-right">
              <span class="font-14px text-color">总金额：</span>
              <span class="uk-text-danger font-20px">￥{{ totalprices}}</span>
            </div>

            <div class="uk-padding-remove uk-margin-remove-top uk-width-expand uk-text-right" >
              <div class="uk-button uk-button-default btn-bg "id='closeAnAccount'>
                <span class="btn-color font-20px" @click="closeAccount">去结算</span>
              </div>
            </div>

          </div>
        </div>
        <div style="height:200px;">
        </div>

        <!-- <div>
          <div class="uk-width-auto">123</div>
          <div class="uk-expand">
          <div class="">123</div>
          <div class="uk-flex uk-flex-left">123</div>
          </div>
        </div> -->

        <!-- <div class="div-margin125">
          <div class="div-border div-padding18 ">
            <div class="">
              <div class="div-float-width80 ">
                <input class="uk-checkbox input-checkbox" type="checkbox" name="checkall" v-model="allChecked" v-on:click="allChoose">&nbsp;&nbsp;全选
              </div>
              <div class="div-float-width20 div-align-right">
                <span>总金额：</span>
                <span class="uk-text-danger">￥{{ totalprices}}</span>
              </div>
            </div>
          </div>
          <div class="div-border-deepen div-align-center div-float-width9  div-padding5">
            <span @click="closeAccount" class="div-padding-closeAnAccount">去结算</span>
          </div>
        </div> -->
      </div>
    </main>
    <!-- <div style="height: 100px;"></div>
    <div class="pay uk-position-fixed uk-width-1-1 uk-card uk-card-secondary uk-small-padding" style="bottom:0px">
      <div class="uk-container uk-text-right">
        <span>总金额：</span>
        <span class="uk-text-danger">￥{{ totalprices}}</span>
        <button class="uk-button uk-button-danger uk-button-large uk-margin-large-left" @click="closeAccount">去结算</button>
      </div>
    </div>
    <div id="modal-close-default" uk-modal class="shoppingRemind">
      <div class="uk-modal-dialog uk-modal-body">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h2 class="uk-modal-title">提示</h2>
        <p>您还没有选择商品，不能去结算</p>
      </div>
    </div> -->
    <div style="height:100px"></div>
    <div class="empty-box" v-if="order.length===0">

    </div>
  </div>
</template>

<script src="jquery-1.6.2.min.js"></script>
<script src='./shoppingcart.js'></script>

<style scoped>
.empty-box {
  height: 53.6px;
}
.float-and-szie {
  float: left;
  position: absolute;
  left: 134px;
  top: 17px;
  font-size: 12px;
  color: #666666;
}
.margin-top {
  margin-top: 18px;
}
.text-size {
  font-size: 12px;
  color: #999999;
}
.text-color {
  color: #444444;
}
.font-14px {
  font-size: 14px;
}
.font-20px {
  font-size: 20px;
}
.font-12px {
  font-size: 12px;
}
.btn-bg {
  background-color: #cccccc;
}
.btn-color {
  color: rgb(255, 255, 255);
  line-height: 55px;
}
.width891px {
  width: 860px;
  margin-top: 15px;
  margin-right: 40px;
}
.div-width130 {
  width: 120px;
  margin-left: 16px;
  margin-top: 18px;
}
.div-margin125 {
  margin-bottom: 90px;
}
.div-margin85{
  margin-bottom: 45px;
}
.div-margin-55{
  margin-top: -20.5px;
}
.div-margin{
  margin-bottom: 100px;
}
.position35 {
  position: relative;
  bottom: 35px;
}
.position10 {
  position: relative;
  bottom: 10px;
}
.position15 {
  position: relative;
  bottom: 15px;
}
.div-padding22 {
  padding: 22px;
  margin-bottom: 25.5px;
}
.div-padding5 {
  padding-top: 5px;
  padding-bottom: 5px;
}
.div-padding18 {
  padding-top: 18px;
  padding-bottom: 18px;
}
.div-padding55 {
  padding-top: 55px;
  padding-bottom: 55px;
  padding-left: 19px;
  padding-right: 19px;
}
.div-align-right {
  text-align: right;
}
.div-align-center {
  text-align: center;
  height: 50px;
}
.div-float-width90 {
  width: 90%;
  float: left;
}
.div-float-width80 {
  width: 80%;
  float: left;
}
.div-float-width70 {
  width: 70%;
  float: left;
}
.div-float-width10 {
  width: 10%;
  float: left;
}
.div-float-width9 {
  width: 9%;
  float: left;
}
.div-border-248px {
  border: solid 1px rgb(224, 224, 224);
  background: rgb(248, 248, 248);
}
.div-border-238px {
  border: solid 1px rgb(224, 224, 224);
  background: rgb(238, 238, 238);
}
#shoppingcart .uk-container {
  width: 1280px;
}
.duoxuan {
  width: 60px;
}
.jine {
  width: 120px;
}
.caozuo {
  width: 30px;
}
.text-middle {
  margin-top: 20px;
}
.img-chanpin {
  width: 120px;
  height: 68px;
}
.biaoti {
  width: 700px;
  margin-left: 10px;
}
.blank-text {
  font-size: 30px;
  position: absolute;
  top: 350px;
  left: 50%;
  transform: translate(-50%, 0);
}
/* .orange {
  color: rgb(255, 102, 0);
} */
.uk-grid {
  margin-left: 0px;
}
.empty-box {
  padding-bottom: 600px;
}
.hand{
  cursor: pointer;
}
</style>
