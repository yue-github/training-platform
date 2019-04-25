<template>
          <div class="uk-child-width-1-5@m uk-flex uk-flex-middle " uk-grid>
            
          <div class="management-all  "  v-for="item in items">
           <img src="http://education.bayou-tech.cn/img/%E8%BD%BB%E5%B7%A5%E4%B8%9A02.jpg"> 
           <div class="uk-flex uk-flex-center">{{item.name}}</div>
           <div class="uk-margin-smal uk-flex uk-flex-center">
             
                <button class="uk-button-small uk-button uk-button-primary">修改</button>

                <button class="uk-button uk-button-small uk-button-danger button-jianxi" @click="delete1">删除</button>
           
            </div>
          </div>
          

            
 

            <div>
              <a href="#modal-example" uk-icon="icon: plus-circle; ratio: 5" uk-toggle></a>
              <div id="modal-example" uk-modal>
                <div class="uk-modal-dialog uk-modal-body">
                  <form class>
                    <fieldset class="uk-fieldset">
                      <div class="uk-margin">
                        <input
                          class="uk-input uk-margin-small-bottom"
                          type="text"
                          placeholder="请输入标题"
                        >
                        
                        <div class="js-upload" uk-form-custom>
                          <input type="file" multiple>
                          <button
                            class="uk-button uk-button-default"
                            type="button"
                            tabindex="-1"

                          >添加资源</button>
                        </div>
                        <p class="uk-text-right">
                          <button
                            class="uk-button uk-button-default uk-modal-close"
                            type="button"
                          >取消</button>
                          <button class="uk-button uk-button-primary" type="button">保存</button>
                        </p>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>



</template> 
<script src="./storemanagement.js">

</script>
 

<style scope>
  .management-all{
     

     
  }
  .button-jianxi{
     margin-left:10px; 
     
  }
</style>