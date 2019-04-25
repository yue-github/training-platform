export default {
    data(){
        return{
            index:0,
            message:'',
            oldPassword:'',
            newPassword:'',
            confirmPassword:'',
            personageMessage:'',
            isPersonageMessage:false,
            users:{
                name:'',
                company:'',
                email:'',
                idcard:'',
            }
        }
    },
    methods:{
        //修改密码
        changePassword: function () {
            console.log('bbbbbbbbb');
            if (!this.oldPassword.trim()) {
                console.log('aaaaaaaaa');
                this.personageMessage = '旧密码不能为空';
                this.isPersonageMessage = true;
            }
            else if (!this.newPassword.trim()) {
                this.personageMessage = '密码不能为空';
                this.isPersonageMessage = true;
            } else if (!this.confirmPassword.trim()) {
                this.personageMessage = '确认密码不能为空';
                this.isPersonageMessage = true;
            } else if (this.newPassword.trim() !== this.confirmPassword.trim()) {
                this.personageMessage = '两次密码不匹配';
                this.isPersonageMessage = true;
            } else {
                this.$post('users/setpswd', { token: this.$store.state.id, opassword: this.oldPassword, password: this.newPassword }).then(res => {
                    if (res.data.status === 'fail') {
                        this.personageMessage = '旧密码不正确';
                        this.isPersonageMessage = true;
                    } else {
                        this.message='修改成功';
                        let model = document.querySelector('#modal-close-default-two');
                        UIkit.modal(model).show();
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
        },
        switchTab:function(val){
            let set=document.querySelector('#set');
            let password=document.querySelector('#password');
            if(val===0){
                this.index=0;
                set.setAttribute('class','text hand text-color');
                password.setAttribute('class','text hand');
            }else if(val===1){
                this.index=1;
                set.setAttribute('class','text hand');
                password.setAttribute('class','text hand text-color');
            }
        },
        getusers: function () {
            this.$post('users/profile', { token: this.$store.state.id }).then(res => {
                console.log('拿到数据');
                console.log(res.data);
                this.users.name = res.data.result.name;
                this.users.company = res.data.result.company;
                this.users.email = res.data.result.email;
                this.users.idcard = res.data.result.idcard;
                console.log(this.users);    
            })
        },
        savePersonal: function () {
            this.$post('users/edit', { token: this.$store.state.id, name: this.users.name, email: this.users.email, company: this.users.company, idcard: this.users.idcard }).then(res => {
                // console.log(res);
                if (res.data.status === 'fail') {
                    this.message='修改失败';
                    let model = document.querySelector('#modal-close-default-two');
                    UIkit.modal(model).show();
                } else {
                    this.message='修改成功';
                    let model = document.querySelector('#modal-close-default-two');
                    UIkit.modal(model).show();
                }
            })
        },
    },
    created(){
        this.getusers();
    }


    
}