<template>
    <div id="editinfo">
        <div id="modal-close-default-two" uk-modal>
            <div class="uk-modal-dialog uk-modal-body">
                <button class="uk-modal-close-default" type="button" uk-close></button>
                <p>{{message}}</p>
            </div>
        </div>
        <div class="content uk-container">
            <div class="big-box">
                <p class="title uk-margin-remove">
                    <span id="set" class="text hand text-color" @click="switchTab(0)">修改密码</span>
   
                </p>
                <div v-if="index===0">
                     <div class="info-box">
                        <span class="text">修改密码</span>
                        <ul>
                            <li class="my-form">
                                <label for="name" class="left">旧密码：</label>
                                <input id="name" class="uk-input tp-input" type="password" placeholder="请输入原密码" v-model="oldPassword" @focus="OldPasswordFocus">
                            </li>
                            <li class="my-form">
                                <label for="email" class="left">新密码：</label>
                                <input id="email" class="uk-input tp-input" type="password" placeholder="请输入新密码" v-model="newPassword" @focus="PasswordFocus">
                            </li>
                            <li class="my-form">
                                <label for="idcard" class="left">确认新密码：</label>
                                <input id="idcard" class="uk-input tp-input" type="password" placeholder="请确认原密码" v-model="confirmPassword" @focus="AffirmPasswordFocus">
                            </li>
                        </ul>
                        <div v-if="isPersonageMessage" class="passMessage">{{personageMessage}}</div>
                    </div>
                    <p class="footer uk-margin-remove">
                        <span class="uk-button uk-button-primary save-btn" @click="savePersonal">保存</span>
                    </p>
                </div>
              
            </div>
        </div>
        <div style="height:250px"></div>
    </div>
</template>
<script src='./ChangePassword.js'></script>
<style scoped>
#editinfo{
    background-color: #f4f4f4;
}
#editinfo .tp-input{
    width: 250px;
}
#editinfo .big-box{
    box-shadow: 0px 0px 10px 1px #d9d9d9;
}
.content{
    padding-top: 50px;
}
.big-box .title{
    line-height: 44px;
    background-color: #fafafa;
    overflow: hidden;
    border: 1px solid #eaeaea;
}
.title .text{      
    color: black;
    padding:12px 30px;
}
 .title .text-color{
    color:white;
    background-color: #1e87f0;
}
.big-box .info-box{
    padding:20px 0px 20px 20px;
    background-color: #fff;
    position: relative;
}
.info-box .passMessage{
    position: absolute;
    left: 50px;
    bottom: 13px;
    color:red;
}
.info-box .text{
    font-size: 18px;
}
.info-box .left{
    width: 100px;
    display: inline-block;
}
.my-form{
    margin-bottom: 30px;
}
.footer{
    line-height: 80px;
    background-color: #fafafa;
    padding-left: 100px;
}
.footer .save-btn{
    background-color: #1e87f0;
    font-size: 18px;
}
</style>

