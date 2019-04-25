export default {
    data() {
        return {
            // inject:['reload'],
            all: 0, //总页数
            cur: 1,//当前页码
            payLenth:0,
            completedLenth:0,
            expiredLenth:0,
            orders: [
                // {
                //     id: '1',
                //     code: '2564878935156456',
                //     orderDate: '2018-11-20 21:22:06',
                //     state: '去支付',
                //     pay_type: '支付宝',
                //     total: '2300',
                //     invoice_title:'发票抬头',
                //     tax_no:'税号',
                //     original: '3000',
                //     discount: '700',
                
                //     purchased: [{
                //         id: '1',
                //         image: require('../../assets/images/shopimg.jpg'),
                //         product_name: '玩转数据结构 从入门到进阶为阿佛为暗黑风看咯按揭放',
                //         price: '2300',
                //         store: '小鱼家店铺'

                //     }]
                // },
            ]
        }
    },
    methods: {
        orderFinished: function () {
            // alert('展示已经完成订单数据拉');
            
        },
        orderNoPay: function () {
            // alert('展示未完成订单数据拉');
        },
        orderCancel: function () {
            // alert('展示失效得订单数据拉');
        },
        goIndex: function () {
            // alert('跳转到首页');
            this.$router.push({
                path: '/'
            })
        },
        goPersonalcenter: function () {
            this.$router.push({
                path: '/personalcenter'
            })
        },
        //去支付，跳转支付中心
        goPaycenter: function (val) {
            let code=val.code;
            let arr=[];
            let id=val.id;
            for(let v of val.purchased){
                arr.push(v.product_id);
            }
            this.$router.push({
                path:'/paycenter',
                query:{
                    code:code,
                    commodityList:JSON.stringify(arr),
                    order_id:id
                }
            });
        },
        //取消订单
        cancelOrder:function(id){
            this.$post('orders/cancel',{id:id,token: this.$store.state.id,state:'5'}).then(res=>{
                // console.log('取消订单');
                // console.log(res);
                this.getMyorder();
            })
        },
        classDetails: function (id) {
            // console.log(id);
            this.$post('orders/searchCourses', { token: this.$store.state.id, offset: '0', length: '6', state: '2' }).then(res => {
                let arr=[];
                for(let val of res.data.result.data){
                    arr.push(Number.parseFloat(val.product_id));
                }
                // console.log(arr);
                return arr;
            }).then(data => {
                if(data.indexOf(Number.parseFloat(id))===-1){
                    this.$router.push({
                        path: '/classdetails',
                        query:{
                            id: id
                        }
                    })
                }else{
                    this.$router.push({
                        path: '/classstudy',
                        query:{
                            id: id
                        }
                    })
                }
            })
        },
        //获取订单数据
        getMyorder:function(){
            this.$post('orders/search',{token: this.$store.state.id,offset:this.cur-1,length:'5'}).then(res=>{
                this.orders=[];
                res.data.result.total%5===0?this.all=res.data.result.total/5:this.all=res.data.result.total/5+1;
                this.all=parseInt(this.all);
                this.orders.code=res.data.result.data.code;
                // console.log('我是订单的');
                // console.log(res.data.result.data);
                return res.data.result.data;
            }).then(data=>{
                let me = this;
                for (let val of data) {
                    -function (val) {
                        me.$post('purchased/search', {token: me.$store.state.id,order_id: val.id,offset:0,length:'10'}).then(res1 => {
                                console.log('我是商品信息');
                                console.log(val);
                            let obj ={
                                id:val.id,
                                created_at:val.created_at,
                                code:val.code,
                                invoice_title: val.invoice_title,
                                owner_id: val.owner_id,
                                state: val.state,
                                pay_type:val.pay_type,
                                tax_no:val.tax_no,
                                total:val.total,
                                purchased:res1.data.result.data,
                            }
                            // console.log(obj);
                            me.orders.push(obj);
                            for(let val of me.orders){
                                if(Number.parseInt(val.state)===0){
                                    me.payLenth='1';
                                }else if(Number.parseInt(val.state)===2){
                                    me.completedLenth='1';
                                }else{
                                    me.expiredLenth='1';
                                }
                        }
                    })
                }(val)
            }
            });
            
        },
        btnClick: function(data){//页码点击事件
            if(data != this.cur){
                this.cur = data;
                this.orders=[]; 
            }
            this.getMyorder();
        },
        pageClick: function(){
            this.orders=[];
            this.getMyorder();
        },
    },
    watch: {
        cur: function(oldValue , newValue){
            // console.log(arguments);
        }
    }, 
    computed: {
        indexs: function(){
          var left = 1;
          var right = this.all;
          var ar = [];
          if(this.all>= 5){
            if(this.cur > 3 && this.cur < this.all-2){
                    left = this.cur - 2
                    right = this.cur + 2
            }else{
                if(this.cur<=3){
                    left = 1
                    right = 5
                }else{
                    right = this.all
                    left = this.all -4
                }
            }
         }
        while (left <= right){
            ar.push(left)
            left ++
        }
        return ar
       }
         
    },
    created: function () {
        this.getMyorder();
        
        // this.$post('orders/create',{token: this.$store.state.id,
        //     pay_type:1,
        //     invoice_title:'我的发票抬头',
        //     tax_no:'税号3283823',
        //     total:'4000',
        //     products:"[1,2,6]"
        // }).then(res=>{
        // console.log(222222222);
        // console.log(res);
        // })

    },
    mounted: function () {

    }
}

