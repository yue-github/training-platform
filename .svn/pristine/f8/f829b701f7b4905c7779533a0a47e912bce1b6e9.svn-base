export default {
    data() {
        return {
            isEnter:true,
            classSreach:'',
            loginMessage: '',
            isLoginMessage: false,
            loginPhone: '',
            loginPassword: '',
            registerMessage: '',
            isRegisterMessage: false,
            registerPhone: '',
            registerCode: '',
            registerPassword: '',
            registerAffirmPassword: '',
            idcard: '',
            personageMessage: '',
            isPersonageMessage: false,
            oldPassword: '',
            newPassword: '',
            affirmPassword: '',
            verificationText:'获取验证码'
        }
    },
    methods: {
        displayEnter:function(val){
            this.isEnter=val;
        },
        // enter键登录
        loginKeyDown:function(e){
            if(e.key==='Enter'){
                this.login();
            }
        },
        // enter键注册
        registerKeyDown:function(e){
            if(e.key==='Enter'){
                this.register();
            }
        },
        //enter键搜索课程
        searchKeyDown:function(e){
            if(e.key==='Enter'){
                this.toProductList();
            }
        },
        //切换登录注册
        switchEnter:function(){
            this.isEnter=!this.isEnter;
        },
        //课程搜索
        toProductList: function () {
            this.$post('products/search',{name:this.classSreach,shop_id:1,token: this.$store.state.id,offset:0,length:10}).then(res=>{
                this.classSreach='';
                if(res.data.result.data.length!==0){
                    console.log('搜索数据');
                    console.log(res.data.result.data);
                    this.$router.push({
                        path:'/blank',
                        query:{
                            data:JSON.stringify(res.data.result.data),
                            value:'classtext'
                        }
                    });
                }           
            }) 
        },
        // toProductType:function(){
        //     this.$post('products/search',{offset:0,length:999}).then(res=>{
        //         console.log(res.data.result.data.length);
        //         if(res.data.result.data.length!==0){
        //             this.$router.push({
        //                 path:'/blank',
        //                 query:{
        //                     data:res.data.result.data,
        //                     value:'classtext'
        //                 }
        //             });
        //         }      
        //     })
        // },
        //跳转首页
        goIndex: function () {
            this.$router.push({
                path: '/'
            })
        },
        //跳转个人中心
        toCenter: function () {
            // let address=
            this.$router.push({
                path: '/personalcenter'
            });
            // window.open(address.href,'_blank');
        },
        //跳转购物车
        toShoppingCart: function () {
            this.$router.push({
                path: '/shoppingcart'
            })
        },
        //登录
        login: function () {
            let reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
            let me = this;
            if (!me.loginPhone.trim()) {
                me.loginMessage = '手机号不能为空';
                me.isLoginMessage = true;
            } else if (!reg.test(me.loginPhone)) {
                me.loginMessage = '手机号格式错误';
                me.isLoginMessage = true;
            } else if (!me.loginPassword.trim()) {
                me.loginMessage = '密码不能为空';
                me.isLoginMessage = true;
            } else {
                let obj = {
                    phone: me.loginPhone,
                    password: me.loginPassword,
                }
                me.$post('users/login', obj).then(res => {
                    if (res.data.result) {
                        me.$store.state.id = res.data.result;
                        let model = document.querySelector('#modal-center');
                        UIkit.modal(model).hide();
                        this.$post('users/profile', { token: this.$store.state.id }).then(res => {
                            me.$store.state.name=res.data.result.name;
                        }).then(()=>{
                            this.$post("shopping_cart/search", {
                                token: this.$store.state.id,
                                offset: "0",
                                length: 9999
                              }).then(res => {
                                sessionStorage.setItem("tpid", this.$store.state.id);
                                sessionStorage.setItem("tpname", this.$store.state.name);
                                // console.log(res.data.result.data.length);
                                this.$store.state.shopNum = res.data.result.data.length;
                                this.$router.push({
                                    path:'/personalcenter',
                                })
                              });
                        });
                    }else if(res.data.errorMsg==='用户名或密码错误'){
                        me.loginMessage='手机号或密码错误';
                        me.isLoginMessage=true;
                    }
                })
            }
        },
        //跳转去我的订单
        toMyOrder:function(){
            this.$router.push({
                path:'/myorder'
            });
        },
        //退出登录
        loginOut: function () {
            sessionStorage.removeItem("tpid");
            this.$store.state.id = null;
            this.$store.state.shopNum = 0;
            this.$router.push({
                path: '/'
            })
        },
        //登录时手机号输入框失去焦点
        loginPhoneBlur: function () {
            let reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
            let me = this;
            if (me.loginPhone.trim()) {
                if (reg.test(me.loginPhone)) {
                    me.isLoginMessage = false;
                } else {
                    me.loginMessage = '手机号格式错误',
                        me.isLoginMessage = true;
                }
            }
        },
        //登录时手机号输入框获取焦点
        loginPhoneFocus: function () {
            if (this.loginMessage === '手机号不能为空' || this.loginMessage === '手机号格式错误' || this.loginMessage==='手机号或密码错误') {
                this.isLoginMessage = false;
            }
        },
        //登录时密码框获取焦点
        loginPasswordFocus: function () {
            if (this.loginMessage === '密码不能为空'||this.loginMessage==='手机号或密码错误') {
                this.isLoginMessage = false;
            }
        },
        //注册
        register: function () {
            let reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
            let me = this;
            if (!me.registerPhone.trim()) {
                me.registerMessage = '手机号不能为空';
                me.isRegisterMessage = true;
            } else if (!reg.test(me.registerPhone)) {
                me.registerMessage = '手机号格式错误';
                me.isRegisterMessage = true;
            } else if (!me.registerCode.trim()) {
                me.registerMessage = '验证码不能为空';
                me.isRegisterMessage = true;
            } else if (!me.idcard.trim()) {
                me.registerMessage = '身份证不能为空';
                me.isRegisterMessage = true;
            } else if (!me.registerPassword.trim()) {
                me.registerMessage = '密码不能为空';
                me.isRegisterMessage = true;
            } else if (!me.registerAffirmPassword.trim()) {
                me.registerMessage = '确认密码不能为空';
                me.isRegisterMessage = true;
            } else if (me.registerPassword.trim() !== me.registerAffirmPassword.trim()) {
                me.registerMessage = '两次密码不匹配';
                me.isRegisterMessage = true;
            } else {
                let obj = {
                    phone: this.registerPhone,
                    password: this.registerPassword,
                    idcard: this.idcard,
                    code :this.registerMessage
                }
                this.$post('users/register', obj).then(res => {
                    if(res.data.status==='success'){
                        let model = document.querySelector('#modal-center');
                        UIkit.modal(model).hide();
                        let modeltwo=document.querySelector('.registerRemind');
                        UIkit.modal(modeltwo).show(); 
                    }else if(res.data.errorMsg==='该用户已注册'){
                        this.registerMessage='该用户已注册';
                        this.isRegisterMessage=true;
                    }
                })

            }
        },
        //注册时手机号输入框失去焦点
        registerPhoneBlur: function () {
            let reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
            let me = this;
            if (me.registerPhone.trim()) {
                if (reg.test(me.registerPhone)) {
                    me.isRegisterMessage = false;
                } else {
                    me.registerMessage = '手机号格式错误',
                        me.isRegisterMessage = true;
                }
            }
        },
        //注册时手机号输入框获取焦点
        registerPhoneFocus: function () {
            if (this.registerMessage === '手机号不能为空' || this.registerMessage === '手机号格式错误' ||this.registerMessage==='该用户已注册') {
                this.isRegisterMessage = false;
            }
        },
        //注册身份证号输入框获取焦点
        registerIdFocus:function(){
            if (this.registerMessage === '身份证不能为空'|| this.registerMessage==='该用户已注册') {
                this.isRegisterMessage = false;
            }
        },
        //注册时验证码框获取焦点
        registerCodeFocus:function(){
            if (this.registerMessage === '验证码不能为空') {
                this.isRegisterMessage = false;
            }
        },
        //获取手机验证码
        getVerificationCode: function () {
            let me = this;
            if (me.verificationText === '获取验证码') {
                alert('发送请求');
                let time = 60;
                let timego = setInterval(function () {
                    me.verificationText = time + '秒后重发';
                    --time;
                    if (time < 0) {
                        clearInterval(timego);
                        me.verificationText = '获取验证码';
                    }
                }, 1000);
            }
        },
        //注册时密码框获取焦点
        registerPasswordFocus: function () {
            if (this.registerMessage === '密码不能为空' || this.registerMessage === '两次密码不匹配') {
                this.isRegisterMessage = false;
            }
        },
        //注册时密码框获取焦点
        registerAffirmPasswordFocus: function () {
            if (this.registerMessage === '确认密码不能为空' || this.registerMessage === '两次密码不匹配') {
                this.isRegisterMessage = false;
            }
        },
        //修改密码
        changePassword: function () {
            if (!this.oldPassword.trim()) {
                this.personageMessage = '旧密码不能为空';
                this.isPersonageMessage = true;
            }
            else if (!this.newPassword.trim()) {
                this.personageMessage = '密码不能为空';
                this.isPersonageMessage = true;
            } else if (!this.affirmPassword.trim()) {
                this.personageMessage = '确认密码不能为空';
                this.isPersonageMessage = true;
            } else if (this.newPassword.trim() !== this.affirmPassword.trim()) {
                this.personageMessage = '两次密码不匹配';
                this.isPersonageMessage = true;
            } else {
                this.$post('users/setpswd', { token: this.$store.state.id, opassword: this.oldPassword, password: this.newPassword }).then(res => {
                    if (res.data.status === 'fail') {
                        this.personageMessage = '旧密码不正确';
                        this.isPersonageMessage = true;
                    } else {
                        let model = document.querySelector('#modal-example-3');
                        // console.log(model);
                        UIkit.modal(model).hide();
                        UIkit.modal.alert('修改密码成功!')
                    }
                })
            }
        },
        //旧密码框获取焦点
        OldPasswordFocus: function () {
            if (this.personageMessage === '旧密码不能为空' || this.personageMessage === '旧密码不正确') {
                this.isPersonageMessage = false;
            }
        },
        //密码框获取焦点
        PasswordFocus: function () {
            if (this.personageMessage === '密码不能为空' || this.personageMessage === '两次密码不匹配') {
                this.isPersonageMessage = false;
            }
        },
        //确认密码框获取焦点
        AffirmPasswordFocus: function () {
            if (this.personageMessage === '确认密码不能为空' || this.personageMessage === '两次密码不匹配') {
                this.isPersonageMessage = false;
            }
        }
    },
    created: function () {

    },
    mounted: function () {
        let model = document.querySelector('#modal-example-1');
        let me = this;
        UIkit.util.on(model, 'hidden', function () {
            me.toLogin();
        });
    },
}