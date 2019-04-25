export default {
    data() {
        return {
            isNeed: '需要',
            hhhhhhlll: false,
            isele: '电子版',
            tishilll:'',
            invoice_title: '',
            tax_no: '',
            Mail_box:'',
            Mailing_address:'',
            productArr: [],
            commodityList: [
                // {
                //     id: '1',
                //     image: require('../../assets/images/avatar.jpg'),
                //     name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tat.',
                //     price: '344'
                // }
            ],
            totalprices: 0
        }
    },
    methods: {
        submitOrder(){
            window.onload = function () {
                window.onscroll = function () {
                    let scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
                    if (scrollTop >= 300) {
                        document.querySelector('#submitOrder').style.cssText =" width:100%";
                    } else {
                        document.querySelector('#submitOrder').style.cssText = 'position:fixed; bottom:0; width:100% ;';
                    }
                }
            }
        },
        payMoney: function () {
            // console.log(this.Mailing_address)
            // console.log(this.tax_no)
            if(this.tax_no.replace(/\s/g,'')===''){
                this.tishilll='税号不能为空'
                UIkit.modal(document.querySelector('#modal-tishilll')).show();
                return false
            }else if(this.invoice_title.replace(/\s/g,'')===''){
               this.tishilll='发票抬头不能为空'
               UIkit.modal(document.querySelector('#modal-tishilll')).show();
               return false
            }else if(this.Mail_box.replace(/\s/g,'')==='' && this.Mailing_address.replace(/\s/g,'')===''){
                console.log(this.Mail_box)
                this.tishilll= '电子邮箱不能为空'
                UIkit.modal(document.querySelector('#modal-tishilll')).show();
                return false
            }
            // else if(this.Mail_box.replace(/\s/g,'')===''){
            //     console.log(this.Mailing_address)
            //     this.tishilll= '邮箱不能为空'
            //     UIkit.modal(document.querySelector('#modal-tishilll')).show();
            //     return false
            // }
            
            this.tishilll = '发票信息填写后，需致电客服热线确认发票信息，4008-032-321'
            UIkit.modal(document.querySelector('#modal-tishilll')).show();

            
            let arr = this.$route.query.commodityList;
            console.log('下单时候的数组');
            let parseArr = '';
            if(this.$route.query.shopId){
                parseArr=JSON.parse(this.$route.query.shopId);
            }
            this.$post('orders/create', {
                pay_type: 1,
                token: this.$store.state.id,
                invoice_title: this.invoice_title,
                tax_no: this.tax_no,
                isele: this.isele,
                 Mail_box: this.Mail_box,
                 Mailing_address: this.Mailing_address,
                products: arr

            }).then(res => {
                let me=this;
                if (res.data.status === 'success') {
                   if(this.$route.query.shopId){
                    for (let val of parseArr) {
                        console.log(Number.parseFloat(val));
                        (function(){me.$post('shopping_cart/delete', { token: me.$store.state.id, id: Number.parseFloat(val) }).then(res => {
                            console.log('删除购物车的数据');
                            console.log(res.data);
                            me.$post('shopping_cart/search', { token: me.$store.state.id, offset: '0', length: 9999 }).then(res=>{
                                console.log(res.data.result.data.length);
                                me.$store.state.shopNum=res.data.result.data.length;
                              });
                        })})(val)
                    }
                   }
                    return res.data.result;
                }
            }).then(data => {
                this.$post('orders/get', { id: data, token: this.$store.state.id }).then(res => {
                    this.$router.push({
                        path: '/paycenter',
                        query: {
                            order_id: data,
                            commodityList: this.productArr,
                            code: res.data.result.code,
                        }
                    })
                })
            })
        },
        homePage: function () {
            this.$router.push({
                path: '/'
            })
        },
        //跳转商品详细页面
        commodityDetails: function (id) {
            this.$router.push({
                path: '/classdetails',
                query: {
                    id: id
                }
            });
        },
        //根据传来的id查找
        getGoods: function () {
            // this.commodityList = 
            let arr = JSON.parse(this.$route.query.commodityList);
            this.productArr = this.$route.query.commodityList;
            for (let id of arr) {
                this.$post('products/get', { id: id }).then(res => {
                    res.data.result.id = id;
                    this.commodityList.push(res.data.result);
                    this.totalprices += Number.parseFloat(res.data.result.price);
                });
            }
        }
    },


    created() {
        this.getGoods();
    },
    mounted: function () {
        // this.submitOrder();
    },
    updated () {
        console.log("===============")
        
    }
}

