<template>
  <div id="classexamanswer">
    <div class="uk-container uk-margin-bottom uk-margin-top">
      <div class="uk-width-1-1 uk-card uk-card-body uk-card-default hhh">
        <h2 class="uk-text-center">答案</h2>
        <hr>
        <div class="fenshu">您的分数为：{{fenshuzhi}}  分</div>
      </div>
      <!-- 判断题 -->
      <div class="tfChoiceanswer" v-if="tfChoiceanswer.length===0?false:true">
        <div class="uk-child-width-1-1 biaoti">
          <h3 class="xiaobiaoti">一、判断题</h3>
        </div>
        <div class="select-question uk-card uk-card-body uk-card-default neirong" v-for="(val,index) of tfChoiceanswer" v-if="val.options.length===2">
          <div class="uk-margin uk-grid-small uk-child-width-1-1 uk-grid">
            <h4 class="timu">
              <span class="badge">{{index+1}}</span>{{val.name}}
            </h4>
            <label class="tp-true daan" v-for="v of val.options">
              <input class="uk-radio tp-radio" type="radio" :name="val.name+index" v-model="val.value" :value="v" disabled>{{v}}
            </label>
            <div class="daan-lll" v-if="!val.isRight">正确答案:{{val.answer}}</div>
          </div>
        </div>
      </div>

      <!-- 单项选择题 -->
      <div class="singleChoiceanswer" v-if="singleChoiceanswer.length===0?false:true">
        <div class="uk-child-width-1-1 biaoti">
          <h3 class="xiaobiaoti">二、单项选择题</h3>
        </div>
        <div class="select-question uk-card uk-card-body uk-card-default neirong" v-for="(val,index) of singleChoiceanswer">
          <div class="uk-grid-small uk-child-width-1-1 uk-grid">
            <h4 class="timu">
              <span class="badge">{{index+1}}</span>{{val.name}}
            </h4>
            <label class="option daan" v-for="v of val.options">
              <input class="uk-radio tp-radio" type="radio" :name="val.name+index" v-model="val.value" :value="v" disabled>{{v}}
            </label>
            <div class="daan-lll" v-if="!val.isRight">正确答案:{{val.answer}}</div> 
          </div>
        </div>
      </div>
      
      <!-- 多项选择题 -->
      <div class="singleChoiceanswer" v-if="singleChoiceanswer.length===0?false:true">
        <div class="uk-child-width-1-1 biaoti">
        <h3 class="xiaobiaoti">三、多项选择题</h3>
        </div>
        <div class="select-question uk-card uk-card-body uk-card-default neirong" v-for="(val,index) of multipleChoiceanswer">
          <div class="uk-margin uk-grid-small uk-child-width-1-1 uk-grid">
            <h4 class="timu">
              <span class="badge">{{index+1}}</span>{{val.name}}
            </h4>
            <label class="daan" v-for="(v,i) of val.options">
              <input class="uk-checkbox" type="checkbox" :name="val.name+i" v-model="val.value" :value="v" disabled>{{v}}
            </label>
            <div class="daan-lll" v-if="!val.isRight">正确答案:{{val.answer}}</div> 
          </div>
        </div>
      </div>
      
      
      <!-- 填空题 -->
      <div class="fillanswer" v-if="fillanswer.length===0?false:true">
        <div class="uk-child-width-1-1 biaoti">
          <h3 class="xiaobiaoti">四、填空题</h3>
        </div>
        <div class="select-question uk-card uk-card-body uk-card-default neirong" v-for="(val,index) of fillanswer">
          <div class="uk-margin uk-grid-small uk-child-width-1-1 uk-grid">
            <h4 class="timu">
              <span class="badge">{{index+1}}</span><span :class="'fillanswer'+index" v-html="fillanswerInput[index]['content'+index]">JAVA编程语言是在（）年发布的。</span>
            </h4>
            <!-- <textarea name id cols="30" rows="3" class="uk-width-large shuru"></textarea> -->
          </div>
        </div>
      </div>

      <!-- 点击返回首页 -->
      <div class="uk-text-center anniu">
        <a @click="returnclick" class="uk-text-default uk-button uk-button-primary tijiao" uk-toggle="target: #modal-example">返回个人中心</a>
      </div>
    </div>
  </div>
</template>


<script src='./classexamanswer.js'></script>


<style scoped>
#classexamanswer .timu{
  position: relative;
  padding-left: 66px;
}
.hhh{
  height: 145px;
}
.badge {
  position: absolute;
  left: 10px;
  color: white;
  width: 50px;
  line-height: 25px;
  display: inline-block;
  border-radius: 35px;
  background-color: #1e87f0;
  text-align: center;
}
.biaoti {
  margin-top: 25px;
  background-color: #2b78bc;
}
.xiaobiaoti {
  color: white;
  margin-left: 35px;
  padding-top: 25px;
  padding-bottom: 25px;
}
.neirong {
  padding: 35px 35px 35px 35px;
  margin-top: 15px;
}
.tp-radio {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.uk-checkbox {
  margin-right: 2px;
}
.daan {
  margin-left: 60px;
  margin-top: 10px;
}
.shuru {
  margin-left: 60px;
  margin-right: 46px;
  margin-top: 15px;
  resize: none;
}
.anniu {
  margin-top: 35px;
  margin-bottom: 15px;
}
.daan-lll{
    margin-top: 20px;
    color: red;
}
.fenshu{
  position: absolute;
  height: 40px;
  color: red;
  font-size: 24px;
}
</style>
