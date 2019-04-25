<template>
  <div id="MyOrder">
    <div class="uk-background-default">
    </div>
    <div class="uk-container uk-container-center">
      <!-- 面包屑 -->
      <div class="dangqianyedizhi">
        <ul class="uk-flex uk-padding-small uk-margin-remove uk-text-small uk-padding-remove-left">
          <li>
            <a class="uk-text-emphasis" @click="goIndex">首页</a>
          </li>
          <li>
            <span class="uk-text-muted">&nbsp;&gt;&nbsp;</span>
          </li>
          <li>
            <a class="uk-text-emphasis" @click="goPersonalcenter">个人中心</a>
          </li>
          <li>
            <span class="uk-text-muted">&nbsp;&gt;&nbsp;</span>
          </li>
          <li>
            <span class="uk-text-muted">我的订单</span>
          </li>
        </ul>
      </div>
      <!-- 导航栏 -->
      <ul class="uk-subnav uk-subnav-pill uk-margin-remove-left uk-margin-remove-top" uk-switcher>
        <li class="uk-disabled uk-padding-remove-left uk-margin-small-left">
          <a href="#">我的订单</a>
        </li>
        <li class="uk-active">
          <a href>全部</a>
        </li>
        <li>
          <a @click="orderFinished" href="#">未支付</a>
        </li>
        <li>
          <a @click="orderNoPay" href="#">已完成</a>
        </li>
        <li>
          <a @click="orderCancel" href="#">已失效</a>
        </li>
      </ul>
      <ul class="uk-switcher uk-margin uk-margin-large-bottom">
        <li></li>
        <!-- 全部订单 -->
        <li class="hight">
          <div v-if="orders.length===0">
            <h5 class="uk-margin-large-left uk-margin-large-top">您还没有相关订单，可以去看看有哪些想买的。</h5>
          </div>
          <div v-for="(val,index) in orders" class="uk-width-1-1 uk-card uk-card-body uk-card-default uk-margin-small-top">
            <div class="dingdan">
              <a href uk-icon="triangle-right"></a>
              <a href class="uk-disabled uk-text-emphasis">订单编号：{{val.code}}</a>
              <a href class="uk-margin-left uk-disabled uk-text-emphasis">{{val.created_at}}</a>
            </div>
            <hr class="uk-margin-remove-bottom">
            <div class="uk-child-width-expand uk-grid-small uk-grid-collapse fu" uk-grid>
              <ul v-if="Number.parseFloat(val.state)===2">
                <div v-for="(v,index) in val.purchased" class="uk-flex uk-card-large uk-flex-middle touxiang hand" @click="classDetails(v.product_id)">
                  <div class>
                    <img class="img-chanpin" v-bind:src="imgUrl+v.image" width height alt>
                  </div>
                  <div class="uk-padding-small">
                    <dl class="uk-margin-remove">
                      <dt class="uk-align-right uk-margin-remove biaoti">{{v.product_name}}</dt>
                      <dd class="uk-text-muted"><i class="fa fa-shopping-bag"></i>
                        &nbsp;{{v.shop_name}}</dd>
                      <!-- <dd class>
                        实付
                        <a href class="uk-text-danger uk-disabled">¥{{val.price}}</a>
                      </dd> -->
                    </dl>
                  </div>
                </div>
              </ul>
              <ul v-if="Number.parseFloat(val.state)===0">
                <div v-for="(v,index) in val.purchased" class="uk-flex uk-card-large uk-flex-middle touxiang hand" @click="classDetails(v.product_id)">
                  <div class>
                    <img class="img-chanpin" v-bind:src="imgUrl+v.image" width height alt>
                  </div>
                  <div class="uk-padding-small">
                    <dl class="uk-margin-remove">
                      <dt class="uk-align-right uk-margin-remove biaoti">{{v.product_name}}</dt>
                      <dd class="uk-text-muted"><i class="fa fa-shopping-bag"></i>
                        &nbsp;{{v.shop_name}}</dd>
                      <!-- <dd class>
                        实付
                        <a href class="uk-text-danger uk-disabled">¥{{val.price}}</a>
                      </dd> -->
                    </dl>
                  </div>
                </div>
              </ul>

              <ul v-if="Number.parseFloat(val.state)===5">
                <div v-for="(v,index) in val.purchased" class="uk-flex uk-card-large uk-flex-middle touxiang hand" @click="classDetails(v.product_id)">
                  <div class>
                    <img class="img-chanpin" v-bind:src="imgUrl+v.image" width height alt>
                  </div>
                  <div class="uk-padding-small">
                    <dl class="uk-margin-remove">
                      <dt class="uk-align-right uk-margin-remove biaoti">{{v.product_name}}</dt>
                      <dd class="uk-text-muted"><i class="fa fa-shopping-bag"></i>
                        &nbsp;{{v.shop_name}}</dd>
                    </dl>
                  </div>
                </div>
              </ul>



              <div class="uk-width-1-5 uk-text-center biankuang">
                <div class="touxiang1">
                  <ul class="uk-padding-remove-left">
                    <!-- <s>
                      <li>
                        <a href></a>
                        原价 ¥{{val.total}}
                      </li>
                    </s> -->
                    <li>
                      实付
                      <a href class="uk-text-danger uk-disabled">¥{{val.total}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="uk-width-1-5 uk-text-center">
                <div class="uk-text-center touxiang3">
                  <span v-if="Number.parseFloat(val.state)===0">
                    <a class="uk-text-default uk-button uk-button-primary touxiang2" @click="goPaycenter(val)">去支付</a>
                    <p>
                      <a href class="uk-text-default uk-button uk-button-primary touxiang4" uk-toggle="target: #modal-example">取消</a>
                      <div class="uk-text-center anniu">
                        <div id="modal-example" uk-modal>
                          <div class="uk-modal-dialog uk-modal-body">
                            <h3 class="uk-modal-title uk-text-center">是否取消订单？</h3>
                            <p class="uk-text-center">
                              <button class="uk-button uk-button-primary uk-modal-close uk-margin-right" type="button">取消</button>
                              <button class="uk-button uk-button-default uk-modal-close uk-margin-left" type="button" @click="cancelOrder(val.id)">确定</button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </p>
                  </span>
                  <span v-if="Number.parseFloat(val.state)===2">
                    <a href class="uk-text-muted uk-disabled">已完成</a><br>
                    <a class="uk-text-muted uk-disabled">{{Number.parseInt(val.pay_type)===1?'微信支付':'支付宝'}}</a>
                  </span>
                  <span v-if="Number.parseFloat(val.state)===5">
                    <a href class="uk-text-muted uk-disabled">已失效</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <!-- 未支付订单 -->
        <li class="hight">
          <div v-if="payLenth===0">
            <h5 class="uk-margin-large-left uk-margin-large-top">您还没有相关订单，可以去看看有哪些想买的。</h5>
          </div>
          <div v-if="Number.parseFloat(val.state)===0" v-for="(val,index) in orders" class="uk-width-1-1 uk-card uk-card-body uk-card-default uk-margin-small-top">
            <div class="dingdan">
              <a href uk-icon="triangle-right"></a>
              <a href class="uk-disabled uk-text-emphasis">订单编号：{{val.code}}</a>
              <a href class="uk-margin-left uk-disabled uk-text-emphasis">{{val.created_at}}</a>
            </div>
            <hr class="uk-margin-remove-bottom">
            <div class="uk-child-width-expand uk-grid-small uk-grid-collapse fu" uk-grid>
              <ul>
                <div v-for="(val,index) in val.purchased" class="uk-flex uk-card-large uk-flex-middle touxiang hand" @click="classDetails(val.product_id)">
                  <div class>
                    <img class="img-chanpin" v-bind:src="imgUrl+val.image" width height alt>
                  </div>
                  <div class="uk-padding-small">
                    <dl class="uk-margin-remove">
                      <dt class="uk-align-right uk-margin-remove biaoti">{{val.product_name}}</dt>
                      <dd class="uk-text-muted"><i class="fa fa-shopping-bag"></i>
                        &nbsp;{{val.shop_name}}</dd>
                      <!-- <dd class>
                        实付
                        <a href class="uk-text-danger uk-disabled">¥{{val.price}}</a>
                      </dd> -->
                    </dl>
                  </div>
                </div>
              </ul>
              <div class="uk-width-1-5 uk-text-center biankuang">
                <div class="touxiang1">
                  <ul class="uk-padding-remove-left">
                    <!-- <s>
                      <li>
                        <a href></a>
                        原价 ¥{{val.total}}
                      </li>
                    </s> -->
                    <li>
                      实付
                      <a href class="uk-text-danger uk-disabled">¥{{val.total}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="uk-width-1-5 uk-text-center">
                <div class="uk-text-center touxiang3">
                  <span v-if="Number.parseFloat(val.state)===0">
                    <a href class="uk-text-default uk-button uk-button-primary touxiang2">去支付</a>
                    <p>
                      <a href class="uk-text-default uk-button uk-button-primary touxiang2" uk-toggle="target: #modal-example">取消</a>
                      <div class="uk-text-center anniu">
                        <div id="modal-example" uk-modal>
                          <div class="uk-modal-dialog uk-modal-body">
                            <h3 class="uk-modal-title uk-text-center">是否取消订单？</h3>
                            <p class="uk-text-center">
                              <button class="uk-button uk-button-primary uk-modal-close uk-margin-right" type="button">取消</button>
                              <button class="uk-button uk-button-default uk-modal-close uk-margin-left" type="button">确定</button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </p>
                  </span>
                  <span v-if="val.state===1">
                    <a href class="uk-text-muted uk-disabled">已完成,{{val.pay_type}}<span v-if="val.pay_type===1">支付宝</span><span v-if="val.pay_type===0">微信</span></a>
                  </span>
                  <span v-if="val.state===10">
                    <a href class="uk-text-muted uk-disabled">已失效</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <!-- 已完成订单 -->
        <li class="hight">
          <div v-if="completedLenth===0">
            <h5 class="uk-margin-large-left uk-margin-large-top">您还没有相关订单，可以去看看有哪些想买的。</h5>
          </div>
          <div v-if="Number.parseFloat(val.state)===2" v-for="(val,index) in orders" class="uk-width-1-1 uk-card uk-card-body uk-card-default uk-margin-small-top">
            <div class="dingdan">
              <a href uk-icon="triangle-right"></a>
              <a href class="uk-disabled uk-text-emphasis">订单编号：{{val.code}}</a>
              <a href class="uk-margin-left uk-disabled uk-text-emphasis">{{val.created_at}}</a>
            </div>
            <hr class="uk-margin-remove-bottom">
            <div class="uk-child-width-expand uk-grid-small uk-grid-collapse fu" uk-grid>
              <ul>
                <div v-for="(val,index) in val.purchased" class="uk-flex uk-card-large uk-flex-middle touxiang hand" @click="classDetails(val.product_id)">
                  <div class>
                    <img class="img-chanpin" v-bind:src="imgUrl+val.image" width height alt>
                  </div>
                  <div class="uk-padding-small">
                    <dl class="uk-margin-remove">
                      <dt class="uk-align-right uk-margin-remove biaoti">{{val.product_name}}</dt>
                      <dd class="uk-text-muted"><i class="fa fa-shopping-bag"></i>
                        &nbsp;{{val.shop_name}}</dd>
                      <!-- <dd class>
                        实付
                        <a href class="uk-text-danger uk-disabled">¥{{val.price}}</a>
                      </dd> -->
                    </dl>
                  </div>
                </div>
              </ul>
              <div class="uk-width-1-5 uk-text-center biankuang">
                <div class="touxiang1">
                  <ul class="uk-padding-remove-left">
                    <!-- <s>
                      <li>
                        <a href></a>
                        原价 ¥{{val.total}}
                      </li>
                    </s> -->
                    <li>
                      实付
                      <a href class="uk-text-danger uk-disabled">¥{{val.total}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="uk-width-1-5 uk-text-center">
                <div class="uk-text-center touxiang3">
                  <span v-if="val.state===0">
                    <a href class="uk-text-default uk-button uk-button-primary touxiang2">去支付</a>
                  </span>
                  <span v-if="Number.parseInt(val.state)===2">
                    <a href class="uk-text-muted uk-disabled">已完成</a><br>
                    <a class="uk-text-muted uk-disabled">{{Number.parseInt(val.pay_type)===1?'微信支付':'支付宝'}}</a>

                  </span>
                  <span v-if="val.state===10">
                    <a href class="uk-text-muted uk-disabled">已失效</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <!-- 已失效订单 -->
        <li class="hight">
          <div v-if="expiredLenth===0">
            <h5 class="uk-margin-large-left uk-margin-large-top">您还没有相关订单，可以去看看有哪些想买的。</h5>
          </div>
          <div v-if="Number.parseFloat(val.state)===5" v-for="(val,index) in orders" class="uk-width-1-1 uk-card uk-card-body uk-card-default uk-margin-small-top">
            <div class="dingdan1">
              <a href uk-icon="triangle-right"></a>
              <a href class="uk-disabled uk-text-emphasis">订单编号：{{val.code}}</a>
              <a href class="uk-margin-left uk-disabled uk-text-emphasis">{{val.created_at}}</a>
            </div>
            <hr class="uk-margin-remove-bottom">
            <div class="uk-child-width-expand uk-grid-small uk-grid-collapse fu" uk-grid>
              <ul>
                <div v-for="(val,index) in val.purchased" class="uk-flex uk-card-large uk-flex-middle touxiang hand" @click="classDetails(val.product_id)">
                  <div class>
                    <img class="img-chanpin" v-bind:src="imgUrl+val.image" width height alt>
                  </div>
                  <div class="uk-padding-small">
                    <dl class="uk-margin-remove">
                      <dt class="uk-align-right uk-margin-remove biaoti">{{val.product_name}}</dt>
                      <dd class="uk-text-muted"><i class="fa fa-shopping-bag"></i>
                        &nbsp;{{val.shop_name}}</dd>
                      <!-- <dd class>
                        实付
                        <a href class="uk-text-danger uk-disabled">¥{{val.price}}</a>
                      </dd> -->
                    </dl>
                  </div>
                </div>
              </ul>
              <div class="uk-width-1-5 uk-text-center biankuang">
                <div class="touxiang1">
                  <ul class="uk-padding-remove-left">
                    <!-- <s>
                      <li>
                        <a href></a>
                        原价 ¥{{val.total}}
                      </li>
                    </s> -->
                    <li>
                      <span v-if="Number.parseFloat(val.state)===5">
                        <a href class="uk-text-muted uk-disabled">已失效</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="uk-width-1-5 uk-text-center">
                <div class="uk-text-center touxiang3">
                  <span v-if="val.state===0">
                    <a href class="uk-text-default uk-button uk-button-primary touxiang2">去支付</a>
                  </span>
                  <span v-if="val.state===1">
                    <a href class="uk-text-muted uk-disabled">已完成,{{val.pay_type}}</a>
                  </span>
                  <span v-if="val.state===10">
                    <a href class="uk-text-muted uk-disabled">已失效</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!-- 页码 -->
      <!-- <ul class="uk-pagination uk-flex-center uk-margin-bottom" uk-margin>
        <li v-if="cur>1"><a v-on:click="cur--,pageClick()"><span uk-pagination-previous></span></a></li>
        <li v-if="cur==1"><a class="banclick"><span uk-pagination-previous></span></a></li>
        <li v-for="index in indexs" v-bind:class="{ 'uk-active': cur == index}">
          <a v-on:click="btnClick(index)">{{ index }}</a>
        </li>
        <li v-if="cur!=all"><a v-on:click="cur++,pageClick()"><span uk-pagination-next></span></a></li>
        <li v-if="cur == all"><a class="banclick"><span uk-pagination-next></span></a></li>
        <li><a>共<i>{{all}}</i>页</a></li> -->
        <!-- <li>
          <a href="#">
            <span uk-pagination-previous></span>
          </a>
        </li>
        <li class="uk-active">
          <span>1</span>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li class="uk-disabled">
          <span>...</span>
        </li>
        <li>
          <a href="#">
            <span uk-pagination-next></span>
          </a>
        </li> -->
      <!-- </ul> -->
    </div>
  </div>
</template>
<!-- js -->
<script src='./myorder.js'></script>
<!-- css -->
<style scoped>
.img-chanpin {
  height: 125px;
  width: 222px;
}
.biaoti {
  width: 420px;
}
#MyOrder .uk-container {
  width: 1280px;
}
.dingdan {
  margin-top: -4px;
}
.dingdan1 {
  margin-top: -4px;
}
.touxiang {
  margin-top: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #d9dde1;
}
.touxiang1 {
  margin-top: 45px;
}
.biankuang {
  margin-top: 35px;
  border-left: 1px solid #d9dde1;
  border-right: 1px solid #d9dde1;
}
.touxiang2 {
  width: 105px;
  margin-top: -48px;
}
.touxiang3 {
  margin-top: 77px;
}
.touxiang4{
  width: 105px;
}
.fu .touxiang:last-child {
  padding-bottom: 0px;
  border-bottom: 0px;
}
.hight {
  min-height: 483px;
}
.hand {
  cursor: pointer;
}
</style>


