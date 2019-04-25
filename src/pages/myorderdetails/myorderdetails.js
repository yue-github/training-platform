export default {
    data() {
        return {
            orderDetails: {
                // code: '1903181831316181',
                // pay_type: '支付宝',
                // total: '3000',
                // invoice_title: '非常厉害公司',
                // tax_no: '3847422772',
                // pay_date: '2019-03-08 01:23:34',
                // commodityInfo: [{
                //     product_name: ' 玩转数据结构',
                //     price: '300'
                // }, {
                //     name: ' 玩转数据结构',
                //     price: '300'
                // }, {
                //     name: ' 玩转数据结构',
                //     price: '300'
                // }]
            }
        }
    },
    methods: {
        orderDetailsData: function () {
            let id=this.$route.query.order_id;
            this.$post('orders/get',{token:this.$store.state.id,id:id}).then(res=>{
                res.data.result.commodityInfo=[];
                this.orderDetails=res.data.result;
            }).then(()=>{
                console.log('meiyoumeyou');
                this.$post('purchased/search',{token:this.$store.state.id,order_id:id,offset:0,length:10}).then(res=>{
                    console.log(res.data.result.data);
                    this.orderDetails.commodityInfo=res.data.result.data;
                    console.log(this.orderDetails);
                })
            })
            
            
        },
        homePage: function () {
            this.$router.push({
                path: '/'
            })
        },
        goMyOrder: function () {
            this.$router.push({
                path: '/myorder'
            })
        },
    },


    created: function () {
        this.orderDetailsData();
    },
    mounted: function () {

    }
}

