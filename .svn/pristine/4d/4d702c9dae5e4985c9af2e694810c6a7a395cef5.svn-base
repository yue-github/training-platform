export default {
    data() {
        return {
            //是否离开考试页面
            isLeave:false,
            //离开考试页面的路径
            leaveRoad:'',
            //离开考试页面的参数
            leaveParams:'',
            //考试题目
            testTitle: '',
            //产品ID
            goodsId: '',
            topicLen: 0,
            //考试之后获取的分数
            fenshu: 0,
            topicAnswer: null,
            //每次就请求数据库的分数
            score:0,
            //提交试题的提示语
            tishi: '',
            //判断题
            tfChoice: [
                // {
                //     name: "单选题1",
                //     type: "单选题",
                //     options: ["选项1", "选项2"],
                //     value:'',
                // }, {
                //     name: "单选题1",
                //     type: "单选题",
                //     options: ["选项1", "选项2"],
                //     value:'',
                // }, {
                //     name: "单选题1",
                //     type: "单选题",
                //     options: ["选项1", "选项2"],
                //     value:'',
                // }, {
                //     name: "单选题1",
                //     type: "单选题",
                //     options: ["选项1", "选项2"],
                //     value:'',
                // }, {
                //     name: "单选题1",
                //     type: "单选题",
                //     options: ["选项1", "选项2"],
                //     value:'',
                // },
            ],
            //单选题
            singleChoice: [
                // {
                //     name: "单选题1",
                //     type: "单选题",
                //     options: ["选fdsfs", "fff323","ffff111", "fff3544",],
                //     value:'',
                // },{
                //     name: "单选题2",
                //     type: "单选题",
                //     options: ["dddd22", "ddd11","ddd434", "ddd111",],
                //     value:'',
                // },{
                //     name: "单选题3",
                //     type: "单选题",
                //     options: ["选项1", "选项2","选项32", "选项1111111",],
                //     value:'',
                // },{
                //     name: "单选题4342323",
                //     type: "单选题",
                //     options: ["选项1", "选项2","选项3", "选项4",],
                //     value:'',
                // },
            ],
            // 多选题
            multipleChoice: [
                // {
                //     name: "多选题1",
                //     type: "多选题",
                //     options: ["选项1", "选项2","选项3", "选项4","选项5", "选项6"],
                //     value:[]
                // }, {
                //     name: "多选题1",
                //     type: "多选题",
                //     options: ["选项1", "选项2","选项3", "选项4","选项5", "选项6"],
                //     value:[]
                // }, {
                //     name: "多选题1",
                //     type: "多选题",
                //     options: ["选项1", "选项2","选项3", "选项4","选项5", "选项6"],
                //     value:[]
                // }, {
                //     name: "多选题1",
                //     type: "多选题",
                //     options: ["选项1", "选项2","选项3", "选项4","选项5", "选项6"],
                //     value:[]
                // },

            ],
            //填空题
            fill: [
                // {
                //     name: "填空题1",
                //     type: "填空题",
                //     content: "今年$岁，性别是：$。",
                //     value:''
                // }, {
                //     name: "填空题2",
                //     type: "填空题",
                //     content: "今年$岁，性别是：$,考上的大学是$，限制是$",
                //     value:''
                // }, {
                //     name: "填空题3",
                //     type: "填空题",
                //     content: "今年$岁，性别是：$,年薪是$。",
                //     value:''
                // }, {
                //     name: "填空题4",
                //     type: "填空题",
                //     content: "今年$岁，性别是：$。",
                //     value:''
                // }, {
                //     name: "填空题5",
                //     type: "填空题",
                //     content: "今年$岁，性别是：$。",
                //     value:''
                // }

            ],
            fillInput: [
                // {
                //     content0:""
                // },{
                //     content1:''
                // },{
                //     content2:''
                // },{
                //     content3:''
                // },{
                //     content4:''
                // },
            ]
        }
    },
    methods: {

        ttt() {
            console.log(this.topicAnswer);
        },
        //返回课程主页
        toClassStudy:function(){
            this.$router.push({
                path:'/classstudy',
                query:{
                    id:this.goodsId
                }
            });
        },
        //获取数据库考试分数
        getScore: function (goodsId) {
            let me=this;
            this.$post('orders/search', { token: this.$store.state.id, offset: 0, length: '9999' }).then(res => {
                return res.data.result.data;
            }).then(data => {
                for (let val of data) {
                    (function (val) {
                        if (val.state == 2) {
                            me.$post('purchased/search', { token: me.$store.state.id, order_id: val.id, offset: 0, length: '10' }).then(res => {
                                console.log(res.data.result.data);
                                for (let v of res.data.result.data) {
                                    if(v.product_id==goodsId){
                                        me.score=v.score;
                                    }
                                }
                            })
                        }
                    })(val)
                }
            })
        },
        //提交答案
        goClassstudy: function () {
            let flag = true;
            this.tishi = '没有填写完整：<br>';
            console.log('我是把格式清空的了');
            console.log(this.tishi);
            // 判断判断题是否填写完整
            for (let i1 in this.tfChoice) {
                if (this.tfChoice[i1].value == '') {
                    console.log('判断题的循环');
                    let i=Number.parseInt(i1)+1;
                    // console.log('错了');
                    this.tishi += '判断题的第'+(i)+'道题目没有选择，<br>';
                    flag ? flag = false : flag;
                }
            }
            // 判断选择题是否完整
            for (let i2 in this.singleChoice) {
                let i=Number.parseInt(i2)+1;
                if (this.singleChoice[i2].value == '') {
                    // console.log('选择也错了');
                    this.tishi += '选择题的第'+(i)+'道题目没有选择，<br>';
                    flag ? flag = false : flag;
                    // break;
                }
            }
            // 判断多选题是否填写完整
            for (let i3 in this.multipleChoice) {
                let i=Number.parseInt(i3)+1;
                if (this.multipleChoice[i3].value == '' || this.multipleChoice[i3].value.length < 2) {
                    // console.log('我是多选题的');
                    this.tishi += '多选题第'+(i)+'道题目没有选择或者没有选择两个或以上，<br>';
                    flag ? flag = false : flag;
                    // break;
                }
            }
            if (!flag) {
                this.tishi += '请重新填写';
                document.querySelector('#tips-text').innerHTML=this.tishi;
                UIkit.modal(document.querySelector('#modal-tishi')).show();
                return;
            }
            // for (let i4 in this.fill) {
            //     if (this.fill[i4].value=='') {
            //         console.log('JFK但是');
            //         console.log(fill[i4]);
            //         this.can_submit.splice(this.can_submit.indexOf('4'),1)
            //         break
            //     }
            // }
            //console.log(this.can_submit)
            // if (this.can_submit.length == 4){
            //     alert("格式填写正确，提交成功")

            // }else if(!this.can_submit.includes('3')){
            //     alert("多选题必须选择两个或两个以上，请重新填写")
            //     this.can_submit = ['1','2','3','4']
            //     return false
            // }
            // else{
            //     alert("格式填写错误，每个空都要选择，请重新填写")
            //     this.can_submit = ['1','2','3','4']
            //     //console.log(this.can_submit)
            //     return false
            // }

            let me = this;
            let arr = [this.tfChoice, this.singleChoice, this.multipleChoice, this.fill];
            let privateJSON = [];
            let testId = '';
            this.$post('orders/search', { token: this.$store.state.id, offset: 0, length: '9999' }).then(res => {
                // console.log(454);
                let idArr = [];
                if (res.data.result.data.length !== 0) {
                    for (let val of res.data.result.data) {
                        if (Number.parseInt(val.state) === 2) {
                            idArr.push(val.id);
                        }
                    }
                }
                return idArr;
            }).then(data => {      
                for (let id of data) {
                    (function () {
                        me.$post('purchased/search', { token: me.$store.state.id, order_id: id, offset: 0, length: '10' }).then(res => {
                            for (let v of res.data.result.data) {
                                if (Number.parseInt(v.product_id) === Number.parseInt(me.goodsId)) {
                                    testId = v.id;
                                    console.log('是不是你呀');
                                    console.log(testId);
                                    return testId;
                                }
                            }
                        }).then((id) => {
                            if (me.fill.length !== 0) {
                                me.fillCommit()
                            }
                            for (let item of arr) {
                                if (arr.length !== 0) {
                                    for (let val of item) {
                                        privateJSON.push(val);
                                    }
                                }
                            }
                            if (id.toString() !== 'undefined') {
                                //计算提交的分数
                                for (let vall of me.topicAnswer) {
                                    inner:
                                    for (let itemm of privateJSON) {
                                        if (vall.name == itemm.name) {
                                            if (vall.type === '多选') {
                                                for (let v of itemm.value) {
                                                    if (vall.answer.indexOf(v) === -1) {
                                                        break inner;
                                                    }
                                                }
                                                me.fenhsu += 5;
                                            } else {
                                                console.log(vall.answer);
                                                vall.answer[0] == itemm.value ? me.fenshu += 5 : me.fenhsu;
                                                break;
                                            }
                                        }
                                    }
                                }
                                me.tishi = '提交成功,请查看正确答案，如想重新答题，请返回课程主页，点击课后习题重新答题'
                                UIkit.modal(document.querySelector('#modal-tishi')).show();
                                //判断是否考过试，如果考过并且及格，这次分数不及格，还是取上次分数
                                if(me.score>=60){
                                    me.fenhsu>=60?me.fenshu:me.fenhsu=me.score;
                                }
                                me.$post('purchased/sumbitResult', { id: id, private: JSON.stringify(privateJSON), token: me.$store.state.id, score: me.fenshu }).then(res => {
                                    me.$router.push({
                                        //跳转到考试答案页面
                                        path: '/classexamanswer',
                                        query: {
                                            examContent: JSON.stringify(privateJSON),
                                            fenshulll: me.fenshu,
                                            goodsId: me.goodsId

                                        }
                                    })
                                })
                            }

                        })
                    })(id)
                }

            })

        },
        //搞定填空题目的展示
        fillTopic: function () {
            for (let i = 0; i < this.fill.length; i++) {
                let str = this.fill[i].content;
                let index = 0;
                while (str.indexOf('$') !== -1) {
                    str = str.replace("$", `<input type='text' id='fill${i}${index}'>`);
                    index++;
                }
                this.fillInput[i]['content' + i] = str;
            }
        },
        //获取填空题目答案
        fillCommit: function () {
            for (let i = 0; i < this.fill.length; i++) {
                let str = this.fill[i].content;
                let index = 0;
                while (str.indexOf('$') !== -1) {
                    let id = '#fill' + i + index;
                    str = str.replace("$", document.querySelector([id]).value);
                    index++;
                }
                this.fill[i].value = str;
            }
        },

        //获取考试数据
        getTestData: function () {
            console.log("========")
            console.log(this.$route.query.id)
            let id = this.$route.query.id;
            this.goodsId = this.$route.query.goodsId;
            console.log('我是发送给后台获取视频资源的id');
            this.$post('resources/get', { id: id, token: this.$store.state.id }).then(res => {
                console.log('获取试题资源呀');
                console.log(res.data)
                this.testTitle = res.data.result.name;
                let topicArr = JSON.parse(res.data.result.data);
                this.topicLen = topicArr.length;
                this.topicAnswer = topicArr;
                console.log("获取正确答案")
                console.log(JSON.parse(res.data.result.data))

                for (let val of topicArr) {
                    // delete val.answer;
                    if (val.type === '判断' || val.options.length === 2) {
                        val.value = '';
                        this.tfChoice.push(val);
                    } else if (val.type === '单选' && val.options.length === 4) {
                        val.value = '';
                        this.singleChoice.push(val);
                    } else if (val.type === '多选') {
                        val.value = [];
                        this.multipleChoice.push(val);
                    } else if (val.type === '填空') {
                        val.value = '';
                        this.fill.push(val);
                    }
                }
            });
        },
        //确认离开该页面
        confirmLeave:function(){
            let road=this.leaveRoad;
            let params=this.leaveParams;
            console.log('我是点击确认');
            UIkit.modal(document.querySelector('#modal-leave-tips')).hide();  
            this.isLeave=true;
            this.$router.push({
                path:road,
                query:params
            })
        }

    },
    beforeRouteLeave: function (to, from, next){
        this.leaveRoad=to.path;
        this.leaveParams=to.query;
        if(to.path==='/classexamanswer'){
            UIkit.modal(document.querySelector('#modal-leave-tips')).hide();  
            next();
        }else{
            if(!this.isLeave){
                UIkit.modal(document.querySelector('#modal-leave-tips')).show();    
            }else{
                UIkit.modal(document.querySelector('#modal-leave-tips')).hide();  
                next();
            }
        }
    },
    created: function () {
        this.getTestData();
        this.getScore(this.$route.query.goodsId);
    },
    mounted: function () {
        this.fillTopic();

    },
    updated() {
        /* console.log(this.tfChoice)
        console.log(this.singleChoice)
        console.log(this.multipleChoice) */
    }
}