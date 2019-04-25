export default {
    data() {
        return {
            all: 1, //总页数
            cur: 1,//当前页码
            orderId: '',
            goodId: '',
            shopId:'',
            isNeedYear:false,
            infoRemind: '请确认信息无误',
            finishedClassNum:0,
            studyingClassNum:0,
            annual:'',
            headImg: require('../../assets/images/avatar.jpg'),
            users: {},
            classList: [],
            certificateList: [

                //     {
                //     id: '1',
                //     name: '软件设计师职称',
                //     img: require('../../assets/images/avatar.jpg'),
                // }, {
                //     id: '2',
                //     name: '软件设计师职称',
                //     img: require('../../assets/images/avatar.jpg'),
                // }, {
                //     id: '3',
                //     name: '软件设计师职称',
                //     img: require('../../assets/images/avatar.jpg'),
                // }, {
                //     id: '4',
                //     name: '软件设计师职称',
                //     img: require('../../assets/images/avatar.jpg'),
                // }, {
                //     id: '5',
                //     name: '软件设计师职称',
                //     img: require('../../assets/images/avatar.jpg'),
                // }
            ],
            inputModel: [],
        }
    },
    methods: {
        //证书详情的判断
        isCertificate:function(id,orderId,goodId,year,classYear){
            this.shopId=id;
            console.log('年份'+year);
            console.log(year!=null&&year);
            if(year!=null&&year){
                this.goCertificate(orderId,goodId,year);
            }else{
                this.checkInfo(orderId,goodId,classYear);
            }

        },
        //证书详情
        goCertificate: function (orderId, goodId,year) {
            let address=this.$router.resolve({
                path: '/studyingcertificate',
                query: {
                    orderId: orderId,
                    goodId: goodId,
                    year:year
                }
            });
            window.open(address.href,'_blank');
        },
        //校验个人信息是否完整
        checkInfo: function (orderId, goodId,classYear) {
            console.log('=========');
           
            console.log(orderId);
            console.log(goodId);
            let str = '请填写';
            // classYear!=null&&classYear?this.isNeedYear=false:this.isNeedYear=true;
            if(classYear!=null&&classYear){
                this.isNeedYear=false;
                this.annual=classYear;
            }else{
                this.isNeedYear=true;
                // str+='申报年度，';
            }
            
            this.orderId = orderId;
            this.goodId = goodId;
            if (this.users.name && this.users.idcard && this.users.name && this.annual) {
                str = '请确认信息无误';
            } else {
                this.users.name == '' ? str += '姓名，' : str;
                this.users.idcard == '' ? str += '身份证号，' : str;
                this.users.company == '' ? str += '单位名称，' : str;
                this.annual == '' ? str += '申报年度，' : str;
                str = str.substr(0, str.length - 1);
            }
            this.infoRemind = str;
            UIkit.modal(document.querySelector('#modal-personalcenter')).show();
        },
        //修改个人信息
        savePersonal: function () {
            let me=this;
            if (this.users.name && this.users.idcard && this.users.company&&this.annual) {
                this.$post('users/edit', { token: this.$store.state.id, name: this.users.name, company: this.users.company, idcard: this.users.idcard }).then(res => {
                    if (res.data.status === 'fail') {
                        alert('修改失败')
                    } else {
                        console.log('传给后台数据');
                        console.log({token: this.$store.state.id,id: this.goodId,is_first:this.annual});
                        this.$post('purchased/updateCerYear',{token: this.$store.state.id,id: this.shopId,is_first:this.annual}).then(res=>{
                            console.log('保存页面成功');
                            console.log(res.data);
                            UIkit.modal(document.querySelector('#modal-personalcenter')).hide();
                            this.goCertificate(this.orderId, this.goodId,this.annual)
                        })
                        
                    }
                })
            } else {
                let str = '请填写';
                this.users.name == '' ? str += '姓名，' : str;
                this.users.idcard == '' ? str += '身份证号，' : str;
                this.users.company == '' ? str += '单位名称，' : str;
                this.annual==''?str+='申报年度,':str;
                str = str.substr(0, str.length - 1);
                this.infoRemind = str;
            }

        },
        //跳转首页
        goIndex: function () {
            this.$router.push({
                path: '/'
            })
        },
        //跳转课程详情
        classDetails: function (id) {
           let address= this.$router.resolve({
                path: '/classstudy',
                query: {
                    id: id
                }
            })
            window.open(address.href,'_blank');
        },
        //获取个人信息
        getusers: function () {
            this.$post('users/profile', { token: this.$store.state.id }).then(res => {
                this.users = res.data.result;
                this.users.name?document.querySelector('#name').setAttribute('disabled','disabled'):this.users.name;
                this.users.company?document.querySelector('#company').setAttribute('disabled','disabled'):this.users.company;
            })
        },
        //跳转编辑个人信息页面
        editInfo: function () {
            this.$router.push({
                path: '/editinfo'
            })
        },
        //跳转更改密码页面
        changepassword: function () {
            this.$router.push({
                path: '/changepassword'
            })
        },
        updateKeyDown: function () {

        },
        
        //获取课程信息
        getMyCourses: function () {
            let me = this;
            this.$post('orders/searchCourses', { token: this.$store.state.id, offset: this.cur - 1, length: '999', state: '2' }).then(res => {
                // console.log('kkkkkkkkkkkk');
                // console.log(res.data.result.data);
                return res.data.result.data;
            }).then(data => {
                for (let val of data) {
                    (function (val) {
                        me.$post('products/get', { id: val.product_id, offset: '0', length: '99' }).then(res => {
                            res.data.result.id = val.product_id;
                            return res.data.result;
                        }).then(item => {
                            (function (item) {
                                me.$post('orders/search', { token: me.$store.state.id, offset: 0, length: '999' }).then(res => {
                                    // console.log('order');
                                    // console.log(res.data.result.data);
                                    return res.data.result.data
                                }).then(data => {
                                    for (let val of data) {
                                        (function (val) {
                                            if (val.state == 2) {
                                                me.$post('purchased/search', { token: me.$store.state.id, order_id: val.id, offset: 0, length: '100' }).then(res => {
                                                    // console.log('rrrrrrr');
                                                    // console.log(res.data);
                                                    for (let v of res.data.result.data) {
                                                        if (v.product_id == item.id) {
                                                            if(!v.rate||v.rate==null){
                                                                item.progress=0;
                                                            }else{
                                                                item.progress = JSON.parse(v.rate).progress;
                                                                item.progress===1?me.finishedClassNum+=1:me.studyingClassNum+=1;
                                                            }
                                                            me.classList.push(item);
                                                        }
                                                    }
                                                })
                                            }
                                        })(val)
                                    }
                                })
                            })(item)
                        })
                    })(val)
                }
            });
        },
        //获取证书
        getMyCertificate: function () {
            let me=this;
            this.$post('orders/search', { token: this.$store.state.id, offset: 0, length: '9999' }).then(res=>{
                console.log(1111111111);
                console.log(res.data.result);
                return res.data.result.data;
            }).then(data=>{
                for(let val of data){
                    (function(val){
                        if(val.state==2){
                            me.$post('purchased/search',{token: me.$store.state.id, order_id: val.id, offset: 0, length: '10'}).then(res=>{
                                console.log(res.data.result.data);
                                for(let v of res.data.result.data){
                                    let flag=false;
                                    if(v.rate!=null&&v.rate){
                                        console.log('时间进度');
                                        console.log(JSON.parse(v.rate).progress);
                                        JSON.parse(v.rate).progress>0.0001?flag=true:flag;
                                    }
                                    //  flag=true;
                                    if(Number.parseInt(v.score)>=10&&flag){
                                        v.order_id=val.id;
                                        me.certificateList.push(v);
                                        console.log('我就是证书');
                                        console.log(v);
                                    }
                                    
                                }
                            })
                        }
                    })(val)
                }
            })
            // let me = this;
            // this.$post('orders/search', { token: this.$store.state.id, offset: 0, length: '9999' }).then(res => {
            //     let idArr = [];
            //     if (res.data.result.data.length !== 0) {
            //         for (let val of res.data.result.data) {
            //             if (Number.parseInt(val.state) === 2) {
            //                 idArr.push(val.id);
            //             }
            //         }
            //     }
            //     return idArr;
            // }).then(data => {
            //     for (let id of data) {
            //         (function () {
            //             me.$post('purchased/search', { token: me.$store.state.id, order_id: id, offset: 0, length: '10' }).then(res => {
            //                 for (let v of res.data.result.data) {
            //                     if (v.private !== null) {
            //                         v.order_id = id;
            //                         me.certificateList.push(v);
            //                     }
            //                 }
            //             })
            //         })(id)
            //     }

            // })
        },
    },
    created: function () {

    },
    mounted: function () {
        this.getusers();
        this.getMyCourses();
        this.getMyCertificate();


    }
}

