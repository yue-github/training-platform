export default {
    data(){
        return{
            code:'',
            payType:'',
            commodityList:[],
            totalprices:0,
            detailsBox:true,
            paycenterXinxiisapprove:false
        }
    },
    methods:{
        //显示商品详情
        isDetailsBox:function(){
            this.detailsBox=!this.detailsBox;
        },
        //嵌入支付宝页面
        isPay:function(data,id){
            let end=data.indexOf('{"status"');
            let block=data.substring(0,end);
            let div=document.createElement('div');
            div.innerHTML=block;
            document.querySelector('#paycenter').appendChild(div);
            document.forms['alipaysubmit'].submit();
            // this.time=setInterval(function(){
            //     me.$post('orders/get',{token: me.$store.state.id,id:me.$route.params.order_id}).then(res=>{
            //         console.log(res);
            //         console.log(res.data.result.state);
            //        if(Number.parseFloat(res.data.result.state)===2){
            //            console.log('我支付宝进来拉');
            //            me.$router.push({
            //                path:'/myorderdetails',
            //                query:{
            //                 order_id:me.$route.params.order_id
            //                }
            //            });
            //            clearInterval(this.time);
            //        }
            //    })
            // },3000)
    },
        //支付中心获取相应数据
        getMyorder:function(){
            this.code=this.$route.query.code;
            let arr=JSON.parse(this.$route.query.commodityList);
            console.log(arr);
            for(let id of arr){
                this.$post('products/get',{id:id}).then(res=>{
                    res.data.result.id=id;
                    this.commodityList.push(res.data.result);
                    console.log(res.data.result);
                    this.totalprices+=Number.parseFloat(res.data.result.price);
                });
            }
        },
        //选择不同支付方式
        goOrderDetails:function(){
            let order_id=this.$route.query.order_id;
            if(this.payType==='alipay'){
                this.$post('orders/alipay',{id:order_id,token: this.$store.state.id}).then(res=>{
                    // console.log(res.data);
                    // const {href}  = this.$router.resolve({
                    //      path: '/alipay', 
                    //      query: { 
                    //          htmls: res.data 
                    //         }
                    //     });
                    // window.open(href, '_blank');
                        this.isPay(res.data,order_id);
                    // this.$router.push({
                    //     name:'alipay',
                    //     params:{
                    //         alipay:res.data,
                    //         order_id:order_id
                    //     }
                    // });
                })

            }else if(this.payType==='wxpay'){
                this.$post('orders/wxpay',{id:order_id,token: this.$store.state.id}).then(res=>{
                    this.$router.push({
                        name:'wechatpay',
                        params:{
                            wechatpay:res.data.result,
                            order_id:order_id
                        }
                    });
                })

            }else if(this.payType==='mypay'){

            }else{
                let model = document.querySelector('#modal-pay');
                UIkit.modal(model).show();
            }
        },
        changeBorder(who){
            switch(who){
                case 'zfb':
                this.payType='alipay';
                this.$refs.zfb.style.border="1px solid #21a557";
                this.$refs.wx.style.border="1px solid #cccccc";
                this.$refs.payxinxi.style.border="1px solid #cccccc";

                this.$refs.zfbSjx.style.backgroundPosition="0 -161px";
                this.$refs.wxSjx.style.backgroundPosition="0 -187px";
                this.$refs.payxinxiSjx.style.backgroundPosition="0 -187px";
                this.paycenterXinxiisapprove=false;
                break;

                case 'wx':
                this.payType='wxpay';
                this.$refs.zfb.style.border="1px solid #cccccc"
                this.$refs.wx.style.border="1px solid #21a557"
                this.$refs.payxinxi.style.border="1px solid #cccccc"
                this.$refs.zfbSjx.style.backgroundPosition="0 -187px"
                this.$refs.wxSjx.style.backgroundPosition="0 -161px"
                this.$refs.payxinxiSjx.style.backgroundPosition="0 -187px"
                this.paycenterXinxiisapprove=false;
                break;

                case 'payxinxi':
                this.$refs.zfb.style.border="1px solid #cccccc"
                this.$refs.wx.style.border="1px solid #cccccc"
                this.$refs.payxinxi.style.border="1px solid #21a557"
                 this.$refs.zfbSjx.style.backgroundPosition="0 -187px"
                this.$refs.wxSjx.style.backgroundPosition="0 -187px"
                this.$refs.payxinxiSjx.style.backgroundPosition="0 -161px"
                this.paycenterXinxiisapprove=true;
                break;
            }
        },
        //跳转商品页面
        commodityDetails:function (id) {
            this.$router.push({
                path: '/classdetails',
                query:{
                    id:id
                }
            });
           
        },
        mounted(){
            this.$refs.changeBorder.style['border']='1px solid #21a557';
        },
    },
    created(){
        this.getMyorder();
        // let order_id=this.$route.query.order_id;
        // this.lastAddress='?id='+order_id+'&token?';
    },
}