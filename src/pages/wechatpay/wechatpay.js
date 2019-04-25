import QRCode from 'qrcodejs2'
export default {
    data() {
        return {
            data(){
                return {
                    time:'',
                }
            }
        }
    },
    methods: {
        qrCode: function (url) {
            let qrcode = new QRCode('qrcode', {
                width: 400, //图像宽度
                height: 400, //图像高度
                colorDark: "#000000", //前景色
                colorLight: "#ffffff", //背景色
                typeNumber: 4,
                correctLevel: QRCode.CorrectLevel.H //容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
            })
            qrcode.clear() //清除二维码 
            qrcode.makeCode(url) //生成另一个新的二维码
        },
        
        isPay:function(){
            let me=this;
            this.time=setInterval(function(){
                me.$post('orders/get',{token: me.$store.state.id,id:me.$route.params.order_id}).then(res=>{
                    console.log(res);
                    console.log(res.data.result.state);
                   if(Number.parseFloat(res.data.result.state)===2){
                       console.log('我进来拉');
                       me.$router.push({
                           path:'/myorderdetails',
                           query:{
                            order_id:me.$route.params.order_id
                           }
                       });
                       clearInterval(this.time);
                   }
               })
            },3000)
        }
    },
    beforeRouteLeave(to,from,next){
            clearInterval(this.time);
            next();   
    },
    mounted() {
        console.log('我是微信获取的订单id');
        console.log(this.$route.query.order_id)
        this.qrCode(this.$route.params.wechatpay);
        this.isPay();
    }
}