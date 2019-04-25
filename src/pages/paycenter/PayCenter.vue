<template>
  <div id="paycenter">
    <div id="modal-pay" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <p>请选择一种支付方式</p>
        </div>
    </div>
    <div class="paycenter uk-container">
      <div class="b-30"></div>
      <div class="paycenter-remind">
        确认订单信息&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="textSize">请在2小时内完成支付，否则订单会被自动取消</span>
      </div>

      <div class="paycenter-xinxi" v-show="paycenterXinxiisapprove">
        <span class="lll-text">单位:广州润沁教育科技有限公司</span>
        <span class="lll-text">帐号:654864436073</span>
        <span class="lll-text">开户行:中国银行广州先烈中路支行</span>
      </div>

      <div class="b-20"></div>
      <div class="paycenter-money">实付金额：
        <span class="total">￥{{totalprices}}</span>
      </div>
      <div></div>
      <div class="b-15"></div>
      <div class="order">
        <div class="order-1">
        <span @click="isDetailsBox">订单详情</span>
        <div class="fa fa-caret-down caret-down"></div>
        </div>
      </div>
      <div v-if="detailsBox">
        <div class="order-head">
        <div class="order-head-name">课程名称</div>
        <div class="order-head-time">学期或课程有效期</div>
        <div class="order-head-money">小计（元）</div>
      </div>
      <div class="order-cnt" v-for="item in commodityList">
        <div class="order-cut-cut">
          <div class="order-head-name">{{item.name}}</div>
          <div class="order-head-time">永久有效</div>
          <div class="order-head-money">{{item.price}}</div>
        </div>
      </div>
      </div>
      
      <div class="b-30"></div>
      <div class="payarea">
        <div class="payarea-1">
          <div class="payway">支付方式</div>
          <div class="paylist-1">
            <div class="zfb-pay" @click="changeBorder('zfb')" ref="zfb">
              <span class="pay-sjx" @click="changeBorder('zfb')" ref="zfbSjx"></span>
            </div>
            <div class="weixin-pay"  @click="changeBorder('wx')" ref="wx">
              <span class="pay-sjx" @click="changeBorder('wx')" ref="wxSjx"></span>
            </div>
            <div class="balance"  @click="changeBorder('balance')" ref="balance">
              <span class="pay-sjx"  @click="changeBorder('balance')" ref="balanceSjx"></span>
            </div>
            <div class="payer-xinxi" @click="changeBorder('payxinxi')" ref="payxinxi">
              <!-- <div class="pay-xinxi">汇款支付</div> -->
              <span class="pay-sjx"  ref="payxinxiSjx"></span>
              <!-- <ul><li>汇款账号</li></ul> -->
            </div>
          </div>
        </div>
        <div class="payarea-2">
          <div class="payarea-2-c">
          <a href="#" class="payarea-pay" @click="goOrderDetails">去支付</a>

          <div class="payarea-tip">下单后，请在24小时内完成支付。超出24小时再支付可能导致购买失败，需重新下单购买。
          </div>
          </div>
         <!--  <div class="payarea-help">
            <span class="payarea-help1">支付遇到问题？联系云课堂客服获得帮助。</span>
            <span class="payarea-zixun">
              <span class="fa fa-headphones headphones"></span>
              <span class="zixun">在线咨询</span>
            </span>
          </div> -->
        </div>
        <div class="payarea-3"></div>
      </div>
    </div>
  </div>
</template>
<script src='./paycenter.js'></script>
<style scoped>
.color-coral {
  color: coral;
}
.pic {
  position: relative;
  top: -1.8px;
}
.color-gray{
  color: #666666;
}
.dingdangaodu{
  min-height: 578px;
}
.paycenter{
  width: 100%;
  color: #FFFFFF;
  margin-bottom: 150px;
}
.b-30{
  width: 100%;
  height: 30px;
    /*border:1px solid #cccccc;*/
  /*background-color: red;*/
}
.paycenter-remind{
  width: 100%;
  height: 50px;
  margin: 0 auto;
  font-size: 20px;
  color: #333333;
    /*border:1px solid #cccccc;*/
}
.paycenter-remind .textSize{
  font-size: 14px;
  color: #666
}
.paycenter-xinxi{
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
}
.paycenter-xinxi .lll-text{
  padding-right: 50px;
  font-size: 12px;
  color: #666;
}
.paycenter-money{
  width: 100%;
  height: 24px;
  /*background-color: blue;*/
  color:#333;
  margin:0 auto;
  line-height: 1.2;
  font-size: 14px;
    /*border:1px solid #cccccc;*/
}
.b-15{
   width: 100%;
  height: 15px;
}
.total{
  font-size: 20px;
  color: #FF3A00;
}
.order{
  width: 100%;
  height: 25px;
  margin:0 auto;

/*  background-color: yellow;*/
    /*border:1px solid #cccccc;*/
}
.order-1{
  width: 70px;
  height: 20px;
  cursor: pointer;
  color:#666666;
  font-size: 12px;
  padding: 0 0 5px;
}
.payarea{
  /*width: 100%;*/
  height: 331px;
  margin:0 auto;
  background-color: #FFFCEF;
  border:1px solid #E4E4E4;
  padding: 30px 20px;
  border:1px solid #cccccc;
}
.payarea-1{
  width:100%;
  height: 170px;
  /*background-color: red;*/
  padding:0 0 30px;
  border-bottom: 1px solid #E4E4E4;
    /*border:1px solid #cccccc;*/
}
.payway{
  width: 100%;
  height: 19px;
  margin: 0 0 30px;
  color: #444444;
  font-size: 14px;
  font-family: "微软雅黑";
  /*background-color: red;*/
    /*border:1px solid #cccccc;*/
}
.paylist-1{
  width: 100%;
  height: 50px;
  /*background-color: yellow;*/
    /*border:1px solid #cccccc;*/
  display: flex;

}
.zfb-pay{
  width: 139px;
  height: 48px;
  border:1px solid #cccccc;
  margin:0 50px 0 0;
  background-image: url("../../assets/images/zfb-pay.png");
  background-size: 100% 100%;
  position: relative;
    cursor: pointer;
}
.pay-sjx{
    position: absolute;
    right: 0;
    width: 23px;
    height: 24px;
    background: url("../../assets/images/sjx.png") 0 -187px;
}
.weixin-pay{
  width: 139px;
  height: 48px;
  background-color: #FFFFFF;
  border:1px solid #cccccc;
  margin:0 50px 0 0;
  background-image: url("../../assets/images/weixin-pay.png" ) ;
  background-repeat: no-repeat;
  background-position:center center;
  position: relative;
  cursor: pointer;
}
.payer-xinxi{
    width: 139px;
  height: 48px;
  background-color: #FFFFFF;
  border:1px solid #cccccc;
  margin:0 50px 0 0;
  position: relative;
  cursor: pointer;
  color: #1E78F0;
  display: flex;
  background-image: url("../../assets/images/pay-xinxi.png" ) ;
    background-repeat: no-repeat;
  background-position:center center;
  /*align-items: center;*/
  /*justify-content: center;*/
  font-size: 20px;
  text-align:center;
}
.pay-xinxi{
  height: 30px;
  margin-top: 10px;
  margin-left: 30px;
  /*background-color: red;*/
  
}

.balance{
  display: none;
  /* width: 139px;
  height: 48px;
  background-color: #FFFFFF;
  border:1px solid #cccccc;
  margin:0 50px 0 0;
  background-color: #fff;
  background: url("../../assets/images/balance.png") no-repeat 20px 9px;
  background-size:35px 30px;
  position: relative;
  cursor: pointer; */
}
.payarea-2{
  width:100%;
  /*height: 49px;*/
  /*background-color: blue;*/
  /*border:1px solid #cccccc;*/
  margin:30px 0 0;
  display: flex;
  position: relative;
  /*background:#ccc;*/
  flex-wrap:wrap;
  /*justify-content: space-evenly;*/
  /*overflow:auto;*/

}
.payarea-pay{
    width: 136px;
    height: 49px;
    margin: 0px 12px 0 0;
    font-size: 16px;
    font-family: "微软雅黑";
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/images/payarea-pay1.png") ;
    background-size: 100% 100%;
    /*float: left;*/
}
.payarea-pay:hover{
  background-image: url("../../assets/images/payarea-pay2.png") ;
  text-decoration:none;
}
.payarea-tip{
  height: 20px;
  width: 482px; 
  margin:20px 0 0;
  padding: 5px 0 0 30px;
  background: url(//yktcdn.stu.126.net/so/res/images/ui/ui_sprite2.png?d20c957…) no-repeat -2px -48px;
  font-size: 12px;
  color: #666;
  /*background-color: blue;*/
    /*position: absolute;*/
  /*left: 148px;*/
}
.payarea-help{
  width: 316px;
  height: 23px;
  margin:20px 0 0;
  /*background-color: red;*/
  /*float: right;*/
  position: absolute;
  right: 0;
  
   
}
.payarea-help1{
  color: #666666;
  font-size: 12px;
  padding: 5px 0 0;

}
.payarea-zixun{
  /*width:83px;*/
  height: 21px;
  padding: 0 5px;
  border:1px solid #cccccc;

}
.headphones{
  font-size: 12px;
  color: #2CB060;
  margin-right: 3px;
}
.zixun{
  font-size: 12px;
  color: #444444;
  text-align: center;
}
.payarea-3{
  width:100%;
  height: 21px;
  /*background-color: green;*/
  margin:20px 0 0;
}
.payarea-2-c{
  width:700px;
  display: flex;
}
.order-head{
  /*width:100%;*/
  height:19px;
  padding: 10px 20px;
  background-color: #f8f8f8;
  display: flex;
  border:1px solid #cccccc;
  border-bottom: none;
}
.order-head-name{
  color:#666666;
  width: 30%;
  height: 16px;
  font-size: 12px;
  display: flex;
  justify-content: center;
}
.order-head-time{
  color:#666666;
  width: 21%;
  height: 16px;
  padding: 0 7%;
  font-size: 12px;
  display: flex;
  justify-content: center;

}
.order-head-money{
color:#666666;
  width: 9%;
  height: 16px;
  padding: 0 8%;
  font-size: 12px;
  display: flex;
  justify-content: center;
}
.order-cnt{
  padding: 20px;
  border:1px solid #cccccc;
  border-top: none;
}
.order-cut-cut{
  padding: 5px 0;
  height: 16px;
  /*background-color: blue;*/
  display: flex;
}
@media screen and (max-width:1088px){
  .payarea-2-c{
    width:100%;
  }
  .payarea-help{
    width: 100%;
    /*background:blue;*/
    /*float: right;*/
    /*position: absolute;*/
    /*right: 0;*/
  }

}
</style>

