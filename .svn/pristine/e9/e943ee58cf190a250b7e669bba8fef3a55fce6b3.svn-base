<template>
  <div id="placeanorder">
    <div id="modal-tishilll" class="uk-flex-top" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button class="uk-modal-close-default" type="button" uk-close></button>
          <p>{{tishilll}}</p>
      </div>
    </div>
    <main class="uk-container">
      <div class="margin-top-30px" >
        <img src="../../assets/images/warn.png" class="warn-img">
        <span class="font-size-14px">购买后不支持退款、转让，请确认开课时间或有效期后再提交订单</span>
      </div>
      <div class="margin-top-20px"><span class=" color-gray font-size-14px">确认订单信息</span></div>
      <div class="div-father div-border-top-238px font-size-12px-bold">
        <div class="div-child-1">课程名称</div>
        <div class="div-child-2">单价（元）</div>
      </div>

      <div class=" " v-for="commodityList in commodityList">
        <div class="div-father div-border-248px ">
          <div class="c">

            <div class="top">
              <img class="uk-align-left uk-margin-remove-bottom img-chanpin hand" v-bind:src="imgUrl+commodityList.image" alt="Example image" @click="commodityDetails(commodityList.id)">
              <p class="uk-margin-remove-top hand uk-text-nowrap font-size-14px" @click="commodityDetails(commodityList.id)">{{commodityList.name}}</p>
            </div>
          </div>
          <div class="div-child-2 font-size-12px-bold">
             
            <span class="price-1 uk-text-danger">￥{{commodityList.price}}</span>
          </div>

        </div>
        <div class="uk-padding-remove empty-box div-border-238px"></div>
      </div>
        <div class="bottom">
          <div class="uk-margin">
            <div class="uk-margin uk-child-width-auto uk-grid">
              <label class="uk-form-label uk-padding-remove" for="form-horizontal-select">是否需要开发票</label>
              <label>
                <input v-model="isNeed" class="uk-radio" type="radio" name="radio1" value="需要" checked>&nbsp;需要
              </label>
              <label>
                <input v-model="isNeed" class="uk-radio" type="radio" name="radio1" value="不需要">&nbsp;不需要
              </label>
            </div>
            <div v-if="isNeed==='需要'?true:false">
               
                <div class="uk-margin uk-child-width-auto uk-grid">
              <label class="uk-form-label uk-padding-remove" for="form-horizontal-select">请选择发票类型</label>
              <label>
                <input v-model="isele" class="uk-radio" type="radio" name="radio" value="电子版" checked>&nbsp;电子版
              </label>
              <label>
                <input v-model="isele" class="uk-radio" type="radio" name="radio" value="纸质版">&nbsp;纸质版
              </label>
            </div>
            <div v-if="isele==='电子版'?true:false">
              <div class="uk-margin uk-child-width-auto uk-grid">
                <label class="uk-form-label text-middle uk-padding-remove" for="form-horizontal-text">税&nbsp;&nbsp;号</label>
                <div class="uk-form-controls uk-margin-left">
                  <input class="uk-input" id="form-horizontal-text" type="text" placeholder="请填写税号" v-model='tax_no'>
                </div>
              </div>
              <div class="uk-margin uk-child-width-auto uk-grid">
                <label class="uk-form-label text-middle uk-padding-remove" for="form-horizontal-text-two">发票抬头</label>
                <div class="uk-form-controls">
                  <input class="uk-input" id="form-horizontal-text-two" type="text" placeholder="请填写发票抬头" v-model="invoice_title">
                </div>
              </div>

              <div class="uk-margin uk-child-width-auto uk-grid">
                <label class="uk-form-label text-middle uk-padding-remove" for="form-horizontal-text-two">电子邮箱</label>
                <div class="uk-form-controls">
                  <input class="uk-input" id="form-horizontal-text-two" type="text" placeholder="请填写电子邮箱" v-model="Mail_box">
                </div>
              </div>
            </div>

             <div v-else>
              <div class="uk-margin uk-child-width-auto uk-grid">
                <label class="uk-form-label text-middle uk-padding-remove" for="form-horizontal-text">税&nbsp;&nbsp;号</label>
                <div class="uk-form-controls uk-margin-left">
                  <input class="uk-input" id="form-horizontal-text" type="text" placeholder="请填写税号" v-model='tax_no'>
                  <!-- <p class="red" v-show="hhhhhhlll">{{tishilll}}</p> -->
                </div>
              </div>
              <div class="uk-margin uk-child-width-auto uk-grid">
                <label class="uk-form-label text-middle uk-padding-remove" for="form-horizontal-text-two">发票抬头</label>
                <div class="uk-form-controls">
                  <input class="uk-input" id="form-horizontal-text-two" type="text" placeholder="请填写发票抬头" v-model="invoice_title">
                </div>
              </div>

              <div class="uk-margin uk-child-width-auto uk-grid">
                <label class="uk-form-label text-middle uk-padding-remove" for="form-horizontal-text-two">邮寄地址</label>
                <div class="uk-form-controls">
                  <input class="uk-input" id="form-horizontal-text-two" type="text" placeholder="请填写邮寄地址" v-model="Mailing_address">
                </div>
              </div>
            </div>




            <!--   <div class="uk-margin uk-child-width-auto uk-grid">
                <label class="uk-form-label text-middle uk-padding-remove" for="form-horizontal-text">税&nbsp;&nbsp;号</label>
                <div class="uk-form-controls uk-margin-left">
                  <input class="uk-input" id="form-horizontal-text" type="text" placeholder="请填写税号" v-model='tax_no'>
                </div>
              </div>
              <div class="uk-margin uk-child-width-auto uk-grid">
                <label class="uk-form-label text-middle uk-padding-remove" for="form-horizontal-text-two">发票抬头</label>
                <div class="uk-form-controls">
                  <input class="uk-input" id="form-horizontal-text-two" type="text" placeholder="请填写发票抬头" v-model="invoice_title">
                </div>
              </div> -->
            </div>
          </div>
        </div>
      <!-- <div class="uk-card uk-card-default uk-padding">
        <div class="top" v-for="commodityList in commodityList">
          <div class="uk-flex">
            <div class="uk-width-1-2">
              <div class="uk-panel">
                <img class="uk-align-left uk-margin-remove-bottom img-chanpin hand" v-bind:src="imgUrl+commodityList.image" alt="Example image" @click="commodityDetails(commodityList.id)">
                <p class="uk-margin-remove-top hand" @click="commodityDetails(commodityList.id)">{{commodityList.name}}</p>
              </div>
            </div>
            <div class="uk-width-1-2 uk-position-relative">
              <span class="uk-position-center uk-overlay uk-overlay-default uk-padding-remove text-middle-shifujine uk-margin-remove-top">
                <span>实付金额：</span>
                <span class="uk-text-danger">￥{{commodityList.price}}</span>
              </span>
            </div>

          </div>
          <hr>
        </div>
        <div class="bottom">
          <div class="uk-margin">
            <div class="uk-margin uk-child-width-auto uk-grid">
              <label class="uk-form-label" for="form-horizontal-select">是否需要开发票</label>
              <label>
                <input v-model="isNeed" class="uk-radio" type="radio" name="radio2" value="需要" checked>&nbsp;需要
              </label>
              <label>
                <input v-model="isNeed" class="uk-radio" type="radio" name="radio2" value="不需要">&nbsp;不需要
              </label>
            </div>
            <div v-if="isNeed==='需要'?true:false">
              <div class="uk-margin uk-child-width-auto uk-grid">
                <label class="uk-form-label text-middle" for="form-horizontal-text">税&nbsp;&nbsp;号</label>
                <div class="uk-form-controls uk-margin-left">
                  <input class="uk-input" id="form-horizontal-text" type="text" placeholder="请填写税号" v-model='tax_no'>
                </div>
              </div>
              <div class="uk-margin uk-child-width-auto uk-grid">
                <label class="uk-form-label text-middle" for="form-horizontal-text-two">发票抬头</label>
                <div class="uk-form-controls">
                  <input class="uk-input" id="form-horizontal-text-two" type="text" placeholder="请填写发票抬头" v-model="invoice_title">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div uk-grid class="uk-flex div-maegin-left zhifugaodu">
          <div class="uk-text-right">
            <p>
              <span>应付金额</span>
              <span class="uk-text-danger uk-text-large uk-text-bold">￥{{totalprices}}</span>
            </p>
            <button class="uk-button uk-button-danger" @click="payMoney">立即下单</button>
          </div>
        </div>
      </div> -->
    </main>
    <div id="submitOrder" class="submit-order">
      <div class="div-father-submit-order uk-container">
        <p class="margin-left-1000px">
          <span class="font-size-14px">应付金额</span>
          <span class="uk-text-danger uk-text-large uk-text-bold">￥{{totalprices}}</span>
        </p>
        <div class="submit-order-btn">
          <a class="uk-button a" @click="payMoney">立即下单</a>
        </div>
      </div>
    </div>
    <div class="empty-box-350px"></div>
  </div>
</template>
<script src = './pay.js'></script>
<style scoped>
#placeanorder .uk-container {
  width: 1280px;
}
.text-middle {
  line-height: 40px;
}
.warn-img{
  margin-right: 5px;
  width: 18px;
  height: 18px;
  position: relative;
  top:-1px;
}
.text-middle-shifujine {
  margin-top: 130px;
}
.zhifugaodu {
  margin-top: 107px;
}
.text-middle-zhifu {
  line-height: 100px;
}
.text-middle-TheWholeContent {
  line-height: -140px;
}
.pic {
  position: relative;
  top: -1.8px;
}
.div-maegin-left {
  margin-left: 850px;
}
.color-gray {
  color: #666666;
}
.price-1{
  position: absolute;
  margin-top: -8px;
  margin-left: -55px;
   
}
.img-chanpin {
  width: 120px;
  height: 68px;
}
.div-father {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
}
.div-child-1 {
  margin-left: 250px;
}
.div-child-2 {
  margin-right: 250px;
}
.c {
  margin-left: 20px;
}
.div-border-248px {
  border: solid 1px rgb(224, 224, 224);
  background: rgb(248, 248, 248);
}
.div-border-238px {
  border: solid 1px rgb(224, 224, 224);
  background: rgb(238, 238, 238);
}
.div-border-top-238px {
  border-top: solid 2px rgb(224, 224, 224);
  margin-bottom: 20px;
  margin-top: 20px;
}
.empty-box {
  height: 53.6px;
  margin-bottom: 50px;
}
.empty-box-350px {
  margin-bottom: 148px;
}
.margin-top-30px {
  margin-top: 30px;
}
.margin-top-20px {
  margin-top: 20px;
}
.font-size-12px-bold {
  font-size: 12px;
  color: #333;
  font-weight: bold;
}
.font-size-12px {
  font-size: 12px;
  color: #666666;
}
.font-size-14px {
  font-size: 14px;
  color: #333333;
}
.submit-order {
  background: #fffcef;
  padding: 20px;
  height: 108px;
  border: solid 1px rgb(224, 224, 224);
  margin-top: 140px;
}
.div-father-submit-order {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.margin-left-1000px {
  float: left;
  position: absolute;
  margin-left: 870px;
  margin-top: 50px;
}
.submit-order-btn {
  float: left;
  position: absolute;
  width: 160px;
  height: 60px;
  color: #fff;
  background: #ff8000;
  margin-top: 52px;
  margin-left: 1019px;
}
.a {
  font-size: 20px;
  padding-left: 40px;
  padding-top: 10px;
}
a:hover {
  color: #fff;
}
.bottom{
  padding-left: 3px;
}
.uk-input{
  height: 30px;
  margin-top: 5px;
  font-size: 12px;
}
.red{
  color: red;
}
</style>

