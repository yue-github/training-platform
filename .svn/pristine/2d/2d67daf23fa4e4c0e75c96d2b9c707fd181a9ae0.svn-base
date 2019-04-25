export default {

    data() {
        return {
            //看完后保存一个时间
            endingTime:0,
            nowTime:0,
            sumTime:0,
            isImg: true,
            arrowIcon:true,
            testId: '',
            chapterIndex: '',
            classIndex: '',
            className: '',
            classDetails: {},
            timer:null,
            videoUrl:'',
            //视频对象
            videoObj: '',
            //视频的vid
            url: '',
            resources: [{
                id: '',
                name: '',
                items: [{
                    name: '',
                    resources: []
                }]

            }],
            src: require('../../assets/images/arrows-right.png'),
        }

    },
    methods: {
        //弹出章节目录
        displayChapter:function(){
            console.log('是否触发');
            console.log(document.body.offsetWidth);
            let percent=((document.body.offsetWidth-350)/document.body.offsetWidth)*100;
            console.log(percent);
            document.querySelector('body').style.cssText=`width:${percent}%;position:relative;left:0.001%;transition: all 350ms;`;
        },

        //回课程学习页面
        toClassStudy: function () {
            // console.log(3232323232323);
            this.$router.push({
                path: '/classstudy',
                query: {
                    id: this.$route.query.id
                }
            })
        },
        //去课后习题页面
        toClassExam: function () {
            // let ele = document.querySelector('#offcanvas-push');
            UIkit.offcanvas(document.querySelector('#offcanvas-push')).hide();
            this.$router.push({
                path: '/classexam',
                query: {
                    id: this.testId,
                    goodsId: this.$route.query.goodsId
                }
            })
        },
        //获取视频页面的数据
        getData: function () {
            this.chapterIndex = this.$route.query.chapterIndex;
            this.classIndex = this.$route.query.classIndex;
            this.className = this.$route.query.className;
            let me = this;
            // console.log('我是判断有没有时间字段');
            // console.log(this.$route.query.isRate);
            //获取课程的视频章节信息
            if (this.$route.query.isRate=='true') {
                this.$post('orders/search', { token: this.$store.state.id, offset: 0, length: '999' }).then(res => {
                    // console.log('我是时间这边的所有订单');
                    return res.data.result.data;
                }).then(data => {
                    for (let val of data) {
                        (function () {
                            me.$post('purchased/search', { token: me.$store.state.id, order_id: val.id, offset: 0, length: '999' }).then(res => {
                            //    console.log('我根据订单的商品id搜索出了这个订单的所有商品');
                                for (let item of res.data.result.data) {
                                    if (Number.parseInt(me.$route.query.goodsId) === Number.parseInt(item.product_id)) {
                                        // item.rate
                                        console.log('我是进来时候的资源');
                                        console.log(me.resources);
                                        me.resources = JSON.parse(item.rate).resources;
                                        me.testId = JSON.parse(item.rate).testId;

                                    }
                                }

                            })
                        })(val)
                    }
                })
            } else {
                // console.log('我是获取章节目录信息的id');
                    console.log(this.$route.query.id);
                this.$post('projects/search', { id: this.$route.query.id, token: this.$store.state.id }).then(res => {
                
                    console.log('所有资源');
                    console.log(res.data);
                    this.resources = JSON.parse(res.data.result.resources);
                    // console.log(this.resources);     
                    this.testId = this.resources.pop().items.resources[0];
                    this.resources.id = this.$route.query.id;
                });
            }

            //获取课程的基本信息
            this.$post('products/get', { id: this.$route.query.classId }).then(res => {
                // console.log(res.data.result);
                this.classDetails = res.data.result;
            })
        },
        //点击视频章节切换不同视频
        toLearnVideo: function (resources, chapterIndex, classIndex, className,currentTime) {
            let time=0;
            let resources_url = '';
            currentTime?time=currentTime:time=0;
            this.chapterIndex = chapterIndex;
            this.classIndex = classIndex;
            this.className = className;
            // this.videoUrl=resources[0];
            this.$post('resources/get', { id: resources[0], token: this.$store.state.id }).then(res => {
                resources_url = res.data.result.data;
                this.videoPlay(resources_url,time);
                UIkit.offcanvas(document.querySelector('#offcanvas-push')).hide();
            })
        },
        ttt() {
            // console.log(this.videoObj.j2s_getDuration());
        },
        //创建保利威视的视频对象
        videoPlay: function (url,time) {
            console.log('打印url')
            console.log(url);
            // console.log('点击过来的时间是什么');
            // console.log(time);
            let currentTime = time;
            // let now=Number.parseInt(time);
            // let sum=0;
            let numVal = ((1 - 140 / document.body.offsetHeight));
            let eleHeight = document.body.offsetHeight * numVal;
            let isAuth = this.$route.query.isAuth;
            let isPlayer = 'on';
            let me=this;
            this.videoUrl=url;
            // console.log('我是url');
            // console.log(this.videoUrl);
            // console.log('===========');
            currentTime ? currentTime : currentTime = 0;
            // console.log('现在的时间是什么');
            // console.log(currentTime);
            isAuth == '1' ? isPlayer : isPlayer = 'off';
            console.log()
            var player = polyvObject(
                "#plv_1"
            ).videoPlayer({
                width: 800,
                height: [eleHeight],
                vid: url,
                'flashvars': { "watchStartTime":currentTime ,"ban_seek_by_limit_time": isPlayer,'ban_history_time':'on' }
            });
            this.videoObj = player;
            this.nowTime=this.timeResult(currentTime);
            this.timer=setInterval(function(){
               me.nowTime=me.timeResult(me.videoObj.j2s_getCurrentTime());
               me.sumTime=me.timeResult(me.videoObj.j2s_getDuration());
            },1000)
        },
        timeResult:function(time){
            let secondTime=Number.parseInt(time);
            let minuteTime=0;
            let hourTime=0;
            let result='';
            if(time>60){
                minuteTime=Number.parseInt(time/60);
                secondTime=Number.parseInt(time%60);
                if(minuteTime>60){
                    hourTime=Number.parseInt(minuteTime/60);
                    minuteTime=Number.parseInt(minuteTime%60);
                }
            }
            hourTime>=10?result+=hourTime+'时':result+='0'+hourTime+'时';
            minuteTime>=10?result+=minuteTime+'分':result+='0'+minuteTime+'分';
            secondTime>=10?result+=secondTime+'秒':result+='0'+secondTime+'秒';
            return result;
        }
    },
    //离开视频页面时候存储JSON信息到rate字段
    beforeRouteLeave: function (to, from, next) {
        //关掉视频时间的计时器
        // clearInterval(this.timer);
        //章节目录侧边栏隐藏
        UIkit.offcanvas(document.querySelector('#offcanvas-push')).hide();
        console.log('我是离开的资源第一步');
        console.log(this.resources);
        let obj = {};
        let resources = this.resources;
        let progress = 0;
        let chapter = resources.length;
        let sumClassTime = 0;
        let finishTime = 0;
        let nowTime=0;
        
        if(this.$route.query.currentTime){
            nowTime=Math.max(Number.parseInt(this.$route.query.currentTime),this.videoObj.j2s_getCurrentTime(),this.endingTime);
            // alert(nowTime);
        }else{
            nowTime= Math.max(this.videoObj.j2s_getCurrentTime(),this.endingTime);
        } 

        let continueClass={
            chapterIndex:this.chapterIndex,
            classIndex:this.classIndex,
            className:this.className,
            currentTime:nowTime,
            items_resources:this.videoUrl
        };

        for (let val of resources) {
            let joint = val.items.length;
            for (let v of val.items) {
                sumClassTime += 1;
                //判断如果是当前课程的话，就添加已经看的时间和总的时间
                if (v.name === this.className) {
                    v.currentTime=nowTime;       
                    v.allTime = this.videoObj.j2s_getDuration();
                }

                if (v.currentTime) {
                    v.currentTime === v.allTime ? finishTime += 1 : finishTime;
                    progress += (v.currentTime / v.allTime / joint / chapter);
                }
            }
        }
        console.log('我是离开的资源的第二步');
        console.log(resources);
        //总进度=》按章节课程时长
        obj.classProgress = finishTime / sumClassTime;
        //章节资源。里面有章节时长和章节总时间
        obj.resources = resources;
        //考试id
        obj.testId = this.testId;
        //订单的商品id
        obj.orderGoodsId = this.$route.query.orderGoodsId;
        //总进度=》按已看时长
        obj.progress = progress;
        //己住上传观看的课时
        obj.continueClass=continueClass;
        this.$post('purchased/sumbitRate', { id: obj.orderGoodsId, rate: JSON.stringify(obj), token: this.$store.state.id }).then(res => {
        })
        next();
    },
    mounted: function () {
        let me=this;
        this.videoPlay(this.$route.query.items_resources,this.$route.query.currentTime); 
        //关闭章节目录栏触发下面的方法使得视频大小恢复
        UIkit.util.on('#offcanvas-push', 'hide', function () {
            console.log('我是隐藏的触发');
            me.arrowIcon=!me.arrowIcon;
            document.querySelector('body').style.cssText='width:100%;transition: all 350ms;';
        });
        //打开章节目录改变箭头图标
        UIkit.util.on('#offcanvas-push', 'show', function () {
            console.log('我是打开的');
            me.arrowIcon=!me.arrowIcon;
            console.log(me.arrowIcon);
        });
        document.querySelector('body').style.cssText='width:100%;transition: all 350ms;';
        //如果视频播放结束就执行这行代码获取总时间
        window.s2j_onPlayOver=function(){
            // alert(me.videoObj.j2s_getDuration());
            me.endingTime=me.videoObj.j2s_getDuration();
        }
    },
    created: function () {
        // console.log('这是一个什么id');
        // console.log(this.$route.query.id);
        // 
       
        this.getData();
    },
}