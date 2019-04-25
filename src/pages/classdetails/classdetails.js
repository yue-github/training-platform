export default {
    data() {
        return {
            labels:null,
            tips: '',
            isContinue: true,
            isContinues: true,
            classDetails: {
                period: '',
                image: '',
                name: '',
                price: '',
                onsale: '',
                teacher: ' ',
                desc: '',
                project_id: '',
            },
            shoppingArr: [],
            resources: [
                // {
                //     name:'',
                //     className:[]
                // },
            ],
            // catalogue: {
            //     name: '',
            //     project_id: '',
            //     resources: [{
            //         name: '',
            //         items: [{
            //             name: '',
            //             resources: []
            //         }]
            //     }]
            // }
        }
    },
    methods: {
        mouseOver(index, i) {
            this.$refs['btn' + index + i][0].style.background = "#DCECFD";
            // console.log(123)
        },
        mouseLeave(index, i) {
            this.$refs['btn' + index + i][0].style.background = "#ffffff";
        },
        //判断是否已经购买过该课程

        byNow: function (productId, price) {
            // 购买的
            let commodityList = [];
            let totalprices = price;
            commodityList.push(productId)
            this.$router.push({
                path: '/pay',
                query: {
                    commodityList: JSON.stringify(commodityList),
                    totalprices: totalprices,
                }
            });

        },






        addShoppingCart: function (id) {
            this.$post('orders/search', { token: this.$store.state.id, offset: 0, length: '999', state: '2' }).then(res => {
                let projectArr = res.data.result.data;
                let me = this;
                console.log('不性？');
                console.log(projectArr.length);
                if (projectArr.length == 0) {
                    console.log('没买过东西就进来把');
                    if (this.shoppingArr.indexOf(Number.parseInt(id)) === -1) {
                        this.$post('shopping_cart/create', { product_id: id, token: this.$store.state.id }).then(res => {
                            if (res.data.status == 'success') {
                                me.$store.state.shopNum += 1;
                                this.tips = '商品添加成功';
                                UIkit.modal(document.querySelector('#modal-buy')).show();
                            }

                        })
                    } else {
                        this.tips = '购物车已经存在该商品';
                        UIkit.modal(document.querySelector('#modal-buy')).show();
                    }
                } else {
                    (function () {

                        let obj = new Promise(function (resolve) {
                            for (let val of projectArr) {
                                if (val.state == 2) {
                                    (function (val) {
                                        me.$post('purchased/search', { token: me.$store.state.id, order_id: val.id, offset: 0, length: '10' }).then(res => {
                                            for (let v of res.data.result.data) {
                                                if (id == v.product_id) {
                                                    console.log(me.isContinue);
                                                    me.isContinue = false;
                                                    console.log('否定他');
                                                    me.tips = '该商品您已经购买，请不要再添加进购物车';
                                                    UIkit.modal(document.querySelector('#modal-buy')).show();

                                                }
                                            }

                                        })
                                    })(val)
                                } else if (val.state == 0) {
                                    (function (val) {
                                        me.$post('purchased/search', { token: me.$store.state.id, order_id: val.id, offset: 0, length: '10' }).then(res => {
                                            for (let v of res.data.result.data) {
                                                if (id == v.product_id) {

                                                    me.isContinue = false;
                                                    me.tips = '该商品您已经下单，请去付款，或者取消订单再添加进购物车';
                                                    UIkit.modal(document.querySelector('#modal-buy')).show();
                                                    console.log('否定他');

                                                }
                                            }
                                        })
                                    })(val)
                                }
                            }
                            resolve();

                        })
                        return obj
                    })().then(() => {
                        console.log(me.isContinue);
                        if (me.isContinue) {
                            console.log('comehere');
                            if (me.shoppingArr.indexOf(Number.parseInt(id)) === -1) {
                                me.$post('shopping_cart/create', { product_id: id, token: me.$store.state.id }).then(res => {
                                    if (res.data.status == 'success') {
                                        console.log('我进来这里啦');
                                        me.$store.state.shopNum += 1;
                                        me.tips = '商品添加成功';
                                        UIkit.modal(document.querySelector('#modal-buy')).show();
                                    }

                                })
                            } else {
                                console.log('在拉');
                                me.tips = '购物车已经存在该商品';
                                UIkit.modal(document.querySelector('#modal-buy')).show();
                            }
                        }

                    })
                }


            })
        },


        //跳转到全部课程页面
        toAllClass: function () {
            this.$post('products/search', { name: '', shop_id: 1, token: this.$store.state.id, offset: 0, length: 10 }).then(res => {
                console.log(res.data);
                if (res.data.result.data.length !== 0) {
                    this.$router.push({
                        path: '/classsearch',
                        query: {
                            data: JSON.stringify(res.data.result.data),
                            value: 'classtext',
                            lableData:this.labels,
                            yue:true
                        }
                    });
                }
            })
        },

        //跳转回首页
        goIndex: function () {
            this.$router.push({
                path: '/'
            })
        },
        //获取购物车的商品数组
        getShoppingCart: function () {
            this.$post('shopping_cart/search', { token: this.$store.state.id, offset: '0', length: '999' }).then(res => {
                for (let val of res.data.result.data) {
                    this.shoppingArr.push(Number.parseInt(val.product_id));
                }
            })
        },
        //获取课程详情的数据
        getData: function () {
            //获取传参的id
            //product_id是商品id，id是什么id？
            let id = this.$route.query.id;
            //获取课程内容
            this.$post('products/get', { id: id }).then(res => {
                this.classDetails = res.data.result;
                console.log(this.classDetails);
                this.classDetails.project_id = id;
            })
            //获取课程章节
            this.$post('projects/search', { id: id }).then(res => {
                console.log('获取章节');
                console.log(res.data);
                let arr = JSON.parse(res.data.result.resources);
                let newArr = arr.slice(0, arr.length - 1);
                let classArr = [];
                for (let val of newArr) {
                    let obj = {
                        name: val.name,
                        className: val.items
                    };
                    classArr.push(obj)
                }
                this.resources = classArr;
            })

        }

    },
    created: function () {

    },
    mounted: function () {
        this.getData();
        this.getShoppingCart();
        // console.log('发起请求');
        // this.$post('shopping_cart/create', { product_id: this.$route.query.id, token: this.$store.state.id }).then(res=>{
        //     console.log(res.data);
        //     console.log('创建成功');
        // })

        this.$post('orders/searchCourses', { token: this.$store.state.id, offset: 0, length: '999', state: '2' }).then(res => {
            console.log('我的');
            console.log(res.data);
        })

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
    },
}


