export default {
    data() {
        return {
            //获取试题的id
            testID:'',
            //判断时长字段是否存在
            isRate:true,
            //学习按钮的字
            studyText:'',
            //我的订单的商品id
            orderGoodsId:'',
            //总课时
            sumClass:0,
            //已完成课时
            continueClass:{},
            finishedClass:0,
            classDetails: {
                period: '',
                image: '',
                name: '',
                price: '',
                onsale:'',
                teacher: ' ',
                desc: '',
                project_id:''
            },
            resources: [{
                name: '',
                items: [{
                    name: '',
                    resources: []
                }]
            }]
        }
    },
    methods: {
        mouseOver(index,i){
            this.$refs['btn'+index+i][0].style.background="#DCECFD";
            // console.log(123)
        },
        mouseLeave(index,i){
            this.$refs['btn'+index+i][0].style.background="#ffffff";   
        },
        //跳转查看视频
        toLearnVideo:function(resources,chapterIndex,classIndex,className,currentTime,allTime){
            if(currentTime&&currentTime/allTime==1){
                UIkit.modal(document.querySelector('#modal-no-enter')).show();
                return;
            }
            console.log('这个是什么的时间');
            console.log(currentTime);
            console.log('我拿不到资源呀');
            console.log(resources);
            let resources_url='' ;
            this.$post('resources/get',{id:resources[0],token:this.$store.state.id}).then(res=>{
                console.log(res.data.result.data);
                resources_url = res.data.result.data
                let address=this.$router.resolve({
                    path:'/learnvideo',
                    query:{
                        items_resources : resources_url,
                        id: this.classDetails.project_id,
                        goodsId:this.$route.query.id,
                        chapterIndex:chapterIndex,
                        classIndex:classIndex,
                        className:className,
                        classId:this.$route.query.id,
                        isRate:this.isRate,
                        isAuth:this.classDetails.is_auth,
                        orderGoodsId:this.orderGoodsId,
                        currentTime:currentTime
                    }         
                });
                window.open(address.href,'_blank')
            })
           
        },
        goIndex: function () {
            this.$router.push({
                path: '/'
            })
        },
        toStudy:function(){
            if(this.studyText==='进入学习'){
                UIkit.switcher(document.querySelector('#study-switcher')).show(1);
            }else if(this.studyText=='继续学习'){
                this.$router.push({
                    path:'/learnvideo',
                    query:{
                        items_resources : this.continueClass.items_resources,
                        id: this.classDetails.project_id,
                        goodsId:this.$route.query.id,
                        chapterIndex:this.continueClass.chapterIndex,
                        classIndex:this.continueClass.classIndex,
                        className:this.continueClass.className,
                        classId:this.$route.query.id,
                        isRate:this.isRate,
                        isAuth:this.classDetails.is_auth,
                        orderGoodsId:this.orderGoodsId,
                        currentTime:this.continueClass.currentTime
                    }         
                })
            }
        },
        //跳转课程搜索查出全部课程
        toAllClass:function(){
            this.$post('products/search',{name:'',shop_id:1,token: this.$store.state.id,offset:0,length:10}).then(res=>{
            // console.log(res.data);
            if(res.data.result.data.length!==0){
                this.$router.push({
                    path:'/classsearch',
                    query:{
                        data:JSON.stringify(res.data.result.data),
                        value:'classtext',
                        lableData:this.labels,
                        yue:true
                    }
                });
            }     
        })
        },
      
        goIndex: function () {
            this.$router.push({
                path: '/'
            })
        },
        //跳转考试页面
        toClassExam:function(){
            this.$router.push({
                path:'./classexam',
                query:{
                    id:this.testID,
                    goodsId:this.$route.query.id,
                }
            })
        },
        //获取课程学习页面的数据
        getData:function(){
            //获取到对应的产品id
            let id = this.$route.query.id;
            let me=this;
            //根据产品id请求对应的产品信息
            this.$post('products/get',{id:id,token:this.$store.state.id}).then(res=>{
                    // console.log(res.data)
                    console.log('我是产品信息');
                    console.log(res.data);
                    this.classDetails = res.data.result;
                    console.log(this.classDetails)
                    this.classDetails.project_id = id;
            })
            //请求章节目录信息
            this.$post('orders/search',{token: this.$store.state.id,offset:0,length:'999'}).then(res=>{
                return res.data.result.data;

            }).then(data=>{
                for(let val of data){
                    (function(val){            
                        
                        if(Number.parseInt(val.state)===2){
                             me.$post('purchased/search', {token: me.$store.state.id,order_id:val.id,offset:0,length:'10'}).then(res=>{              
                            for(let item of res.data.result.data){
                                
                                if(Number.parseInt(item.product_id)===Number.parseInt(id)){
                                    console.log('请求顶顶那');  
                                    console.log('时长字段是什么');
                                    if(!item.rate||item==null){
                                        console.log('我来原来的');
                                        me.studyText='进入学习';
                                        //根据产品id请求对应项目的章节目录详情
                                        me.$post('projects/search',{id:id,token:me.$store.state.id}).then(res=>{    
                                            me.isRate=false;            
                                            me.resources = JSON.parse(res.data.result.resources);
                                            me.testID=me.resources.pop().items.resources[0];
                                            me.orderGoodsId=item.id
                                            
                                        })
                                    }else{
                                        console.log('我来后来的');
                                        me.studyText='继续学习';
                                        console.log(JSON.parse(item.rate));
                                        me.testID=JSON.parse(item.rate).testId;
                                        me.orderGoodsId=JSON.parse(item.rate).orderGoodsId;
                                        me.resources = JSON.parse(item.rate).resources;
                                        me.continueClass=JSON.parse(item.rate).continueClass;
                                        console.log('我是他的资源我是他的资源我是他的资源');
                                        console.log(me.resources);
                                        me.sumPercentage(JSON.parse(item.rate).resources);
                                    }
                                }
                            }
                        })
                        } 
                       
                    })(val)
                }  
            })
        },
        //计算总课时的占比
        sumPercentage:function(resources){
            for(let val of resources){
                for(let item of val.items){
                    this.sumClass+=1;
                    if(item.allTime&&item.allTime===item.currentTime){
                        this.finishedClass+=1;
                    }
                }
            }
        },
        // 获取课程导航标签导航
        getL(){
                this.$post('labels/all').then(res => {
                console.log(res)
                // 获取头部课程类别标签
                let arr=res.data.result;
                this.labels=arr.splice(0,26);
                this.labels=this.labels.map(item=>{
                    let json={}
                    json.name=item.name;
                    return json;
                })
                console.log(this.labels)
           })
        }
        

    },
    created: function () {
        // this.$post('orders/search',{token: this.$store.state.id,offset:0,length:'9999'}).then(res=>{
        //     console.log('有东西返回码？？？？？');
        //     console.log(res.data);
        // })
        
    },
    mounted: function () {
        this.getData();
        this.getL();
    }
}

