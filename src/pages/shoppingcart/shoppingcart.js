export default {
    data() {
        return {
            aa:'44',
            chooseCount: 0,
            allChecked: false,
            order: [
                //     {
                //     id: '1',
                //     name: '[ 课程项目实战 ] 掌握Taro多端框架 快速上手小程序/H5开发/支付宝/字节条动发放和空间按法律咖啡和骄傲和会计法哈借款方哈尽快回复发福建卡减肥会计法',
                //     image: require('../../assets/images/dark.jpg'),
                //     price: '100.00',
                //     selected: false,
                // }, {
                //     id: '2',
                //     name: '[ 课程项目实战 ] 掌握Taro多端框架 快速上手小程序/H5开发/支付宝/字节条动',
                //     image: require('../../assets/images/avatar.jpg'),
                //     price: '100',
                //     selected: true,
                // }, {
                //     id: '3',
                //     name: '[ 课程项目实战 ] 掌握Taro多端框架 快速上手小程序/H5开发/支付宝/字节条动',
                //     image: require('../../assets/images/avatar.jpg'),
                //     price: '100',
                //     selected: false,
                // }, {
                //     id: '4',
                //     name: '[ 课程项目实战 ] 掌握Taro多端框架 快速上手小程序/H5开发/支付宝/字节条动',
                //     image: require('../../assets/images/avatar.jpg'),
                //     price: '100',
                //     selected: false,
                // }, {
                //     id: '5',
                //     name: '[ 课程项目实战 ] 掌握Taro多端框架 快速上手小程序/H5开发/支付宝/字节条动',
                //     image: require('../../assets/images/avatar.jpg'),
                //     price: '100',
                //     selected: false,
                // }
            ],
            totalprices: 0,

        }
    },
    methods: {
        //获取购物车商品信息
        getShoppingCartData: function () {
            this.order=[];
            this.totalprices=0;
            // this.chooseCount=0;
            console.log('删除时候');
            this.$post('shopping_cart/search', { token: this.$store.state.id, offset: '0', length: 9999 }).then(res => {           

                return res.data.result.data;

            }).then(data => {
                this.$store.state.shopNum=data.length;
                let arr = [];
                let me = this;
                console.log(data)
                for (let val of data) {
                    console.log(val);
                    (function (val) {
                        me.$post('products/get', { id: val.product_id }).then(res => {
                            let obj = {
                                id: val.id,
                                product_id: val.product_id,
                                selected: val.selected,
                                name: res.data.result.name,
                                image: res.data.result.image,
                                price: res.data.result.price
                            };
                            //累加总价
                            if(val.selected){
                                me.totalprices+=Number.parseFloat(res.data.result.price);
                                // me.chooseCount+=1;
                            }
                            arr.push(obj);
                            me.order = arr;
                            // this.$store.state.shopNum=res.data.result.data.length;
                        })
                    })(val)
                }

            })
           
        },
        //全选按钮
        allChoose: function () {
            if (this.allChecked) {
                document.getElementById('closeAnAccount').style.background="rgb(201, 201, 201)";
                for (let val of this.order) {
                    val.selected = false;
                    this.chooseCount = 0;
                }
                this.totalprices = 0;
                this.selectedOrder = ""
            } else {
                this.totalprices = 0;
                document.getElementById('closeAnAccount').style.background="rgb(255,128,0)";
                for (let val of this.order) {
                    val.selected = true;
                    this.chooseCount = this.order.length;
                    this.totalprices += Number.parseFloat(val.price);

                }

            }
        },
        //多选框按钮
        choose: function (id) {
            this.chooseCount = 0;
            this.totalprices = 0;
            let select='';
            for (let val of this.order) {  
                if (val.selected) {
                    this.allChecked = true;
                } else {       
                    this.allChecked = false;
                    break;
                }
            }
            for (let val of this.order) {
                if (val.selected) { 
                    ++this.chooseCount;
                    this.totalprices += Number.parseFloat(val.price);
                }
                console.log(id);
                console.log('对比的id'+val.id);
                if(val.id===id){
                    console.log('id的东西')
                    console.log(val.selected);
                    if(val.selected===false){
                        select=0;
                    }else if(val.selected===true){
                        select=1;
                    }else{
                        select=val.select;
                    }
                }
            }
            if(this.chooseCount!==0){
                document.getElementById('closeAnAccount').style.background="rgb(255,128,0)";
            }else{
                document.getElementById('closeAnAccount').style.background="rgb(201, 201, 201)";
            }
            console.log('发送数据');
            console.log({id:id,token: this.$store.state.id,selected:select});
            // this.$post('shopping_cart/edit',{id:id,token: this.$store.state.id,selected:select}).then(res=>{
            //     console.log('我是购物车的编辑呀');
            //     console.log(res.data);
            // })
        },
        //跳转商品详情
        commodityDetails: function (id) {
            this.$router.push({
                path: '/classdetails',
                query:{
                    id:id
                }
            });
        },
        //删除商品
        deleteCommodity: function (product_id) {

            this.$post('shopping_cart/delete', {token: this.$store.state.id,id:product_id}).then(res => {
                console.log('调用下面的方法');
                this.getShoppingCartData();
                // return this.$store.state.shopNum-1;
            })     
        },
        closeAccount: function () {
            let selectedOrder = [];
            let falseArr=[];
            let shopId=[];
            for (let val of this.order) {
                if (val.selected) {
                    selectedOrder.push(val.product_id);
                    shopId.push(val.id);
                }else{
                    falseArr.push(false);
                }
            }
            if(falseArr.length===this.order.length){
                let model=document.querySelector('.shoppingRemind');
                UIkit.modal(model).show();
                return;
            }
            
            this.$router.push({
                path: '/pay',
                query: {
                    commodityList:JSON.stringify(selectedOrder),
                    shopId:JSON.stringify(shopId)
                    // order: JSON.stringify(selectedOrder)
                }
            })

        },

    },

    created: function () {
        this.getShoppingCartData();
        // this.$post('shopping_cart/create',{
        //     token:this.$store.state.id,product_id:1,selected:0
        // }).then(res=>{
        //     console.log(res);
        // })
    },
    mounted: function () {
        
            
            console.log('???????');
        //加载进来时候累加价格
        
    },
}

