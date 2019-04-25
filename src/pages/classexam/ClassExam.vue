<template>
  <div id="classexam">
    <div id="modal-tishi" class="uk-flex-top" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <p id="tips-text"></p>
      </div>
    </div>
    <div id="modal-leave-tips" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">温馨提示</h2>
        <p>您尚未提交问卷，离开此页面将不会保存您的修改，确认离开？</p>
        <p class="uk-text-right">
          <span class="uk-button uk-button-default uk-modal-close">取消</span>
          <span class="uk-button uk-button-primary" @click="confirmLeave">确定</span>
        </p>
      </div>
    </div>
    <div class="uk-container uk-margin-bottom uk-margin-top">
      <div class="uk-width-1-1 uk-card uk-card-body uk-card-default">
        <h2 class="uk-text-center">{{testTitle}}</h2>
        <hr>
        <!-- 试卷卷头内容 -->
        <!-- <div class="uk-grid-divider uk-child-width-expand@s" uk-grid>
          <div class="uk-text-center">
            <dd>本试卷共有</dd>
            <dd>30&nbsp;题</dd>
          </div>
          <div class="uk-text-center">
            <dd>卷面总分</dd>
            <dd>100&nbsp;分</dd>
          </div>
          <div class="uk-text-center">
            <dd>答题时间</dd>
            <dd>120&nbsp;分钟</dd>
          </div>
          <div class="uk-text-center">
            <dd>您的得分</dd>
            <dd>95&nbsp;分</dd>
          </div>
        </div> -->
      </div>
      <!-- 判断题 -->
      <div class="tfChoice" v-if="tfChoice.length===0?false:true">
        <div class="uk-child-width-1-1 biaoti">
          <h3 class="xiaobiaoti">一、判断题</h3>
        </div>
        <div class="select-question uk-card uk-card-body uk-card-default neirong" v-for="(val,index) of tfChoice" v-if="val.options.length===2">
          <div class="uk-margin uk-grid-small uk-child-width-1-1 uk-grid">
            <h4 class="timu">
              <span class="badge">{{index+1}}</span>{{val.name}}
            </h4>
            <label class="tp-true daan" v-for="v of val.options">
              <input class="uk-radio tp-radio" type="radio" :name="val.name+index" v-model="val.value" :value="v">{{v}}
            </label>
          </div>
        </div>
      </div>

      <!-- 单项选择题 -->
      <div class="singleChoice" v-if="singleChoice.length===0?false:true">
        <div class="uk-child-width-1-1 biaoti">
          <h3 class="xiaobiaoti">二、单项选择题</h3>
        </div>
        <div class="select-question uk-card uk-card-body uk-card-default neirong" v-for="(val,index) of singleChoice">
          <div class="uk-grid-small uk-child-width-1-1 uk-grid">
            <h4 class="timu">
              <span class="badge">{{index+1}}</span>{{val.name}}
            </h4>
            <label class="option daan" v-for="v of val.options">
              <input class="uk-radio tp-radio" type="radio" :name="val.name+index" v-model="val.value" :value="v">{{v}}
            </label>

          </div>
        </div>
      </div>

      <!-- 多项选择题 -->
      <div class="singleChoice" v-if="singleChoice.length===0?false:true">
        <div class="uk-child-width-1-1 biaoti">
          <h3 class="xiaobiaoti">三、多项选择题</h3>
        </div>
        <div class="select-question uk-card uk-card-body uk-card-default neirong" v-for="(val,index) of multipleChoice">
          <div class="uk-margin uk-grid-small uk-child-width-1-1 uk-grid">
            <h4 class="timu">
              <span class="badge">{{index+1}}</span>{{val.name}}
            </h4>
            <label class="daan" v-for="(v,i) of val.options">
              <input class="uk-checkbox" type="checkbox" :name="val.name+i" v-model="val.value" :value="v">{{v}}
            </label>
          </div>
        </div>
      </div>

      <!-- 填空题 -->
      <div class="fill" v-if="fill.length===0?false:true">
        <div class="uk-child-width-1-1 biaoti">
          <h3 class="xiaobiaoti">四、填空题</h3>
        </div>
        <div class="select-question uk-card uk-card-body uk-card-default neirong" v-for="(val,index) of fill">
          <div class="uk-margin uk-grid-small uk-child-width-1-1 uk-grid">
            <h4 class="timu">
              <span class="badge">{{index+1}}</span>
              <span :class="'fill'+index" v-html="fillInput[index]['content'+index]">JAVA编程语言是在（）年发布的。</span>
            </h4>
            <!-- <textarea name id cols="30" rows="3" class="uk-width-large shuru"></textarea> -->
          </div>
        </div>
      </div>
      <!-- 主观题
      <div class="uk-child-width-1-1 biaoti">
        <h3 class="xiaobiaoti">五、主观题</h3>
      </div>
      <div class="select-question uk-card uk-card-body uk-card-default neirong">
        <div class="uk-margin uk-grid-small uk-child-width-1-1 uk-grid">
          <h4 class="timu">
            <span class="badge">1</span>JAVA相对于其他编程语言有什么优缺点？
          </h4>
          <textarea name id cols="30" rows="8" class="shuru"></textarea>
        </div>
      </div>
      <div class="select-question uk-card uk-card-body uk-card-default neirong">
        <div class="uk-margin uk-grid-small uk-child-width-1-1 uk-grid">
          <h4 class="timu">
            <span class="badge">2</span>JAVA相对于其他编程语言有什么优缺点？
          </h4>
          <textarea name id cols="30" rows="8" class="shuru"></textarea>
        </div>
      </div> -->
      <!-- 提交考试答案 -->

      <div class="uk-text-center anniu">
        <a @click="fillCommit" class="uk-text-default uk-button uk-button-primary tijiao" uk-toggle="target: #modal-exam">提交习题答案</a>
        <a @click="toClassStudy" class="uk-text-default uk-button uk-button-primary tijiao">返回课程主页</a>
        <div id="modal-exam" uk-modal>
          <div class="uk-modal-dialog uk-modal-body">
            <h3 class="uk-modal-title uk-text-center">请注意</h3>
            <p class="uk-text-center">是否要提交习题答案？一旦提交，将不可再进行更改！</p>
            <p class="uk-text-center">
              <button class="uk-button uk-button-default uk-modal-close uk-margin-right" type="button">取消</button>
              <button class="uk-button uk-button-primary uk-modal-close uk-margin-left" type="button" @click="goClassstudy">确定</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./classexam.js'></script>
<style scoped>
#classexam .timu {
  position: relative;
  padding-left: 66px;
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
.tijiao {
  font-size: 22px;
  border-right: 1px solid white;
}
</style>
