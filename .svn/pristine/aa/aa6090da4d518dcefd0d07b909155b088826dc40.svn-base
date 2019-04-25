export default {
    name: 'classsearch',
    data() {
        return {
            labels: [],
            searchResult:'搜索结果',
            bread: '',
            allText: '全部',
            firstBread: {},
            secondBread: {},
            thirdBread: {},
            allClassText: 'color: #999',
            isApprove: false,
            isApprove1: false,
            // classNav: [
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            //     {
            //         fa: 'fa fa-book btn-fa',
            //         content: '教育'
            //     },
            // ],
            labelsId: 1,
            mianbaoxie: '',
            nowIndex: 0,
            classNum: '200',
            products: [
                //     {
                //     period: '111',
                //     image: require('../../assets/images/1c5bd4a03b70492e8477ccd579ddf33d.jpg'),
                //     name: 'Python语言程序设计国家精品',
                //     store: '小鱼店铺',
                //     badge: '国家精选',
                //     price: '15分00秒',
                //     desc: '计算机是运算工具，更是创新平台，高效有趣地利用计算机需要更简洁实用的编程语言。Python简洁却强大、简单却专业，它是当今世界最受欢迎的编程语言，学好它终身受用。请跟随我们，学习并掌握Python语言',
                // }
            ],
            copyProducts: [],
            // courseNavFa: {
            //     fa0: 'iconfont icon-xueshimao',
            //     fa1: 'iconfont icon-dianzixinxi',
            //     fa2: 'iconfont icon-guanli',
            //     fa3: 'iconfont icon-yishushejichuanmei',
            //     fa4: 'iconfont icon-zhizao',
            //     fa5: 'iconfont icon-diannao',
            //     fa6: 'iconfont icon-jiaotongyunshu',
            //     fa7: 'iconfont icon-icon-test',
            //     fa8: 'iconfont icon-jingji',
            //     fa9: 'iconfont icon-lvyou',
            //     fa10: 'iconfont icon-nongye',
            //     fa11: 'iconfont icon-gongxue',
            //     fa12: 'iconfont icon-huayanguan',
            //     fa13: 'iconfont icon-shuili',
            //     fa14: 'iconfont icon-shu',
            //     fa15: 'iconfont icon-yishu',
            //     fa16: 'iconfont icon-news',
            //     fa17: 'iconfont icon-gongchengkuangchanyucaikuang',
            //     fa18: 'iconfont icon-yixue',
            //     fa19: 'iconfont icon-tujian',
            //     fa20: 'iconfont icon-yingwen',
            //     fa21: 'iconfont icon-tongxun',
            //     fa22: 'iconfont icon-nonglinmuyu',
            //     fa23: 'iconfont icon-huanbaoqixiangyuanquan',
            //     fa24: 'iconfont icon-yishuxiuxianyundong',
            //     fa25: 'iconfont icon-dianpu',
            // }
        }
    },
    methods: {
        changeColor(index) {

            //这一段负责改变对应必修课/选修课文字颜色
            for (let i in this.$refs) {

                if (i.indexOf('lesson') >= 0) {

                    this.$refs[i].style.color = "";
                }
            }
            this.$refs['lesson' + index].style.color = "#1E87F0";
            //筛选必修课/选修课课程显示出来
            let type = '';
            let newProducts = [];
            index == 0 ? type = '专业课' : type = '选修课';
            for (let val of this.copyProducts) {
                if (val.attr == type) {
                    newProducts.push(val);
                }
            }
            this.products = newProducts;
        },
        change(index) {
            //改成认证/非认证文字颜色
            if (index == 0) {
                this.isApprove1 = true;
            } else if (index == 1) {
                this.isApprove1 = false;
            }

            for (let i in this.$refs) {

                if (i.indexOf('attribute') >= 0) {

                    this.$refs[i].style.color = "";
                }
            }
            this.$refs['attribute' + index].style.color = "#1E87F0";
            //筛选认证/非认证
            let newProducts = [];
            for (let val of this.copyProducts) {
                if (index == 0 && val.is_auth == '1') {
                    newProducts.push(val);
                } else if (index == 1 && val.is_auth != '1') {
                    newProducts.push(val);
                }
            }
            this.products = newProducts;
        },
        ch(index) {
            for (let i in this.$refs) {

                if (i.indexOf('year') >= 0) {

                    this.$refs[i].style.color = "";
                }
            }

            this.$refs['year' + index].style.color = "#1E87F0";
        },

        //点击课程跳转学习或详情
        classDetail: function (id) {
            if (this.$store.state.id) {
                this.$post('users/isPay', { product_id: id, token: this.$store.state.id }).then(res => {
                    if (!res.data.result) {
                        let address = this.$router.resolve({
                            path: '/classstudy',
                            query: {
                                id: id
                            }
                        });
                        window.open(address.href, '_blank')
                    } else {
                        let address = this.$router.resolve({
                            path: '/classdetails',
                            query: {
                                id: id
                            }
                        });
                        window.open(address.href, '_blank')
                    }
                })
            } else {
                let address = this.$router.resolve({
                    path: '/classdetails',
                    query: {
                        id: id
                    }
                });
                window.open(address.href, '_blank')
            }
        },
        //点击顶部标签展示相应数据和去除相应标签颜色
        getTopLabeslData: function (id, index) {
            if (index == 1) {
                this.secondBread = '';
                this.thirdBread = '';
                for (let index in this.labels) {
                    this.labels[index].color = false;
                    for (let i in this.labels[index].children) {
                        this.labels[index].children[i].color = false;
                    }
                }
            } else if (index == 2) {
                this.thirdBread = '';
                for (let index in this.labels) {
                    for (let i in this.labels[index].children) {
                        this.labels[index].children[i].color = false;
                    }
                }
            }
        },
        // console.log(id);
        // for(let val of this.labels){
        //     if(val.id==id){
        //         console.log(id);
        //         val.color=false;
        //     }else{
        //         val.color=false;
        //     }
        //     for(let v of val.children){
        //         if(v.id==id){
        //             v.color=false;
        //         }else{
        //             v.color=false;
        //         }
        //     }
        // }

        //点击相应的类别显示
        relationClick: function (secondId, thirdId, secondName, thirdName, seconIndex, thirdIndex) {
            console.log(123333)
            if (thirdName) {
                this.getresources(thirdId);
                let secondBreads = {};
                let thirdBreads = {};
                secondBreads.text = `> ` + secondName;
                secondBreads.id = secondId;
                thirdBreads.text = `> ` + thirdName;
                thirdBreads.id = thirdId;
                this.secondBread = secondBreads;
                this.thirdBread = thirdBreads;
                for (let val of this.labels) {
                    val.color = false;
                    for (let v of val.children) {
                        v.color = false;
                    }
                }
                this.labels[seconIndex].color = true;
                this.labels[seconIndex].children[thirdIndex].color = true;
            } else {
                this.getresources(secondId);
                let secondBread = {};
                let thirdBread = {};
                secondBread.text = `> ` + secondName;
                secondBread.id = secondId;
                thirdBread.text = '';
                thirdBread.id = '';
                this.secondBread = secondBread;
                this.thirdBread = thirdBread;
                console.log('改变二级文字');
                console.log(this.secondBread.text);
                console.log(this.secondBread)
                for (let val of this.labels) {
                    val.color = false;
                    if (val.children) {
                        for (let v of val.children) {
                            v.color = false;
                        }
                    }

                }
                this.labels[seconIndex].color = true;
            }


        },
        //跳转回首页
        goIndex: function () {
            this.$router.push({
                path: '/'
            })
        },
        //获取课程搜索类别标签
        getLabels: function () {
            let me = this;
            //传过来的标签数组是否有数据
            this.$route.query.lableData
            if (this.$route.query.lableData) {
                console.log()
                this.labels = JSON.parse(this.$route.query.lableData);
                if (this.labels) {
                    //给每一个二三级标签给一个区分变色的布尔值
                    for (let val of this.labels) {
                        val.color = false;
                        if (val.children) {
                            for (let v of val.children) {
                                v.color = false;
                            }
                        }
                    }
                }
                //判断在首页点击哪一级的标签传来的
                switch (me.$route.query.lableType) {
                    case 'firstLable':
                        me.firstBread.text = `> ${me.$route.query.firstName}`;
                        me.firstBread.id = me.$route.query.firstId;
                        break;
                    case 'secondLable':
                        me.firstBread.text = `> ${me.$route.query.firstName}`;
                        me.firstBread.id = me.$route.query.firstId;
                        me.secondBread.text = `> ${me.$route.query.secondName}`;
                        me.secondBread.id = me.$route.query.secondId;
                        me.labels[me.$route.query.secondIndex].color = true;
                        break;
                    case 'thirdLable':
                        me.firstBread.text = `> ${me.$route.query.firstName}`;
                        me.firstBread.id = me.$route.query.firstId;
                        me.secondBread.text = `> ${me.$route.query.secondName}`;
                        me.firstBread.id = me.$route.query.secondId;
                        me.thirdBread.text = `> ${me.$route.query.thirdName}`;
                        me.firstBread.id = me.$route.query.thirdId;
                        me.labels[me.$route.query.secondIndex].color = true;
                        me.labels[me.$route.query.secondIndex].children[me.$route.query.thirdIndex].color = true;
                        break;
                    default:
                        console.log('炸啦');

                }
            }



        },
        //获取相应的课程
        getresources: function (labelId) {
            console.log('id是什么');
            console.log(labelId);
            this.$post('product_labels/listProducts', { offset: '0', length: '999', label_id: labelId }).then(res => {
                console.log('产品列表出来');
                console.log(res.data);
                this.products = [];
                this.copyProducts = [];
                return res.data.result.data;
            }).then(data => {
                for (let val of data) {
                    this.$post('products/get', { id: val.product_id }).then(res => {
                        res.data.result.id = val.product_id;
                        this.products.push(res.data.result);
                        this.copyProducts.push(res.data.result);
                    })
                }
            });
        },
        //获取所有课程
        getAllClass: function () {
            this.$post('products/search', { name: '', shop_id: 1, token: this.$store.state.id, offset: 0, length: 10 }).then(res => {
                if (res.data.result.data.length !== 0) {
                    this.products = [];
                    this.products = res.data.result.data;
                }
            })
        },
        changeSearchResult(){
            if(this.$route.query.yue){
                // this.labels=this.$route.query.lableData;
                this.searchResult='全部课程'
            }
        }
    },
    created: function () {

            if (this.$route.query.value === 'classtext') {
                this.allText = '';

                this.products = [];
                 
                this.products = JSON.parse(this.$route.query.data);
              
                
            } else {
                this.getLabels();
                console.log('名字是什么')
                console.log(this.$route.query.lableType);
                switch (this.$route.query.lableType) {
                    case "firstLable":
                        this.getresources(this.$route.query.firstId);
                        break;
                    case "secondLable":
                        this.getresources(this.$route.query.secondId);
                        break;
                    case "thirdLable":
                        this.getresources(this.$route.query.thirdId);
                        break;
                    default:
                        console.log('炸裂');
                }
            }
        
    },
    mounted: function () {
        this.changeSearchResult();
    }

}

