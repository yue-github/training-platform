<template>
  <div id="myorderdetails">
    <div class="uk-container">
      <hr class="uk-margin-remove">
      <div class="text-middle dingdanxiangqinggaodu">
        <ul>
          <ul class="uk-margin-xlarge-left">
            <ul>
              <li class="uk-text-bold text-color-red">订单详情</li>
            </ul>
            <ul>
              <li class>
                <span class="text-color-black">订单号：</span>
                <span class="text-color-LightGray">{{orderDetails.code}}</span>
              </li>
            </ul>
            <ul>
              <li>
                <div class="overflow">
                  <p class="float-left uk-margin-remove-bottom">
                    <span class="text-color-black uk-margin-small-right">商品信息:</span>
                  </p>
                  <ul class="float-left uk-margin-remove-top uk-margin-remove-bottom uk-padding-remove-left">
                    <li v-for="commodityInfo in orderDetails.commodityInfo">
                      <span>{{commodityInfo.product_name}}</span>
                      <span class="uk-margin-small-left">{{commodityInfo.price}}元</span>
                      <!-- <span class="text-color-LightGray text-color-black">CSS从入门到进阶</span> -->
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <ul>
              <li class>
                <span class="text-color-black">支付方式：</span>
                <span class="text-color-LightGray">{{orderDetails.pay_type==1?'微信支付':'支付宝支付'}}</span>
              </li>
            </ul>
            <ul>
              <li class>
                <span class="text-color-black">应付总金额：</span>
                <span class="text-color-LightGray">￥{{orderDetails.total}}</span>
              </li>
            </ul>
            <!-- <ul>
              <li class>
                <span class="text-color-black">是否需要开发票：</span>
                <span class="text-color-LightGray">{{orderDetails.invoice}}</span>
              </li>
            </ul> -->
            <ul>
              <li class>
                <span class="text-color-black">发票抬头：</span>
                <span class="text-color-LightGray">{{orderDetails.invoice_title}}</span>
              </li>
            </ul>
            <ul>
              <li class>
                <span class="text-color-black">税号：</span>
                <span class="text-color-LightGray">{{orderDetails.tax_no}}</span>
              </li>
            </ul>
            <ul>
              <li class>
                <span class="text-color-black">付款时间：</span>
                <span class="text-color-LightGray">{{orderDetails.pay_date}}</span>
              </li>
            </ul>
          </ul>
        </ul>
      </div>
      <p class="float-right hand" @click="goMyOrder"><img class="pic" src="../../assets/images/return.png" width="20" height="20"> 返回订单页</p>
    </div>
    <div style="height:100px"></div>
  </div>
</template>
<script src ='./myorderdetails.js'></script>
<style  scoped>
#dingdanxiangqing .uk-container {
  width: 1280px;
}
.dingdanxiangqinggaodu{
  min-height: 534px;
}
.text-middle {
  margin-top: 50px;
}
.text-size {
  font-size: 13px;
}
.text-color-red {
  color: #ff0000;
}
.text-color-black {
  color: #000;
}
.text-color-LightGray {
  color: rgb(163, 163, 163);
}
.div-width {
  width: -100;
}
.float-left {
  float: left;
}
.float-right {
  float: right;
  position: relative;
  bottom: 64px;
  right: 250px;
}
.overflow {
  overflow: hidden;
}
.pic {
  position: relative;
  top: -1.8px;
}
</style>

