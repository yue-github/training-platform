export default {
    data() {
        return {
            sese: '客服信息:<br>4008-032-321<br>周一~周五 08:30-17:30<br>13535300254<br>周一~周五 17:30-22:00',
            isWidth: '',
            courseNavigation: [{
                id: '',
                parent_id: '',
                name: '',
            }
            ],
            labels: {
                id: '0'
            },
            courseType: [{
                id: '1',
                name: '专技继教'
            },
            {
                id: '2',
                name: '精品课程'
            },
            {
                id: '3',
                name: '热门课程'
            },
            {
                id: '4',
                name: '名师课程'
            },
            {
                id: '5',
                name: '选修课程'
            },
            ],
            sliderImgs: [],
            recommendCourseImg: [],
            // sections:[{
            //     id: '',
            //     name: "1233",
            //     page: '',
            //     shop_id: '',
            //     sort: '',
            //     template: '',
            //     classDetails: [{
            //         period: '123',
            //         image: '',
            //         name: '1111',
            //         price: '',
            //         onsale:'',
            //         teacher: ' ',
            //         desc: '',
            //         section_id:'',
            //     }]
            // }]
            sections: [],
            classDetails: {
                period: '',
                image: '',
                name: '',//
                price: '',
                onsale: '',
                teacher: ' ',
                desc: '',
                project_id: '',
            },
            courseNavFa: {
                fa0: 'iconfont icon-xueshimao',
                fa1: 'iconfont icon-dianzixinxi',
                fa1: 'iconfont icon-dianzixinxi',
                fa2: 'iconfont icon-guanli',
                fa3: 'iconfont icon-yishushejichuanmei',
                fa4: 'iconfont icon-zhizao',
                fa5: 'iconfont icon-diannao',
                fa6: 'iconfont icon-jiaotongyunshu',
                fa7: 'iconfont icon-icon-qita',
            }
        }
    },
    methods: {
        //返回首页
        toIndex:function(){
            this.$router.push({
                path:'/'
            });
        },
        //点击一级标签
        firstLabel: function (lableData, firstName, firstId) {
            this.$router.push({
                path: '/classsearch',
                query: {
                    firstName: firstName,
                    firstId: firstId,
                    lableData: JSON.stringify(lableData),
                    lableType: 'firstLable',
                }
            });
        },
        //点击二级标签
        secondLable: function (lableData, secondId, firstName, secondName, secondIndex) {
        
            console.log('==============');
            console.log(secondId);
            console.log(firstName);
            console.log(secondName);
            console.log(secondIndex);
            console.log(lableData)
            console.log('===============');
            
            this.$router.push({
                path: '/classsearch',
                query: {
                    firstName: firstName,
                    secondName: secondName,
                    lableData: JSON.stringify(lableData),
                    secondId: secondId,
                    secondIndex: secondIndex,
                    lableType: 'secondLable',
                }
            });

        },
        //点击三级标签
        thirdLabel: function (lableData, thirdId, firstName, secondName, thirdName, secondIndex, thirdIndex) {
            this.$router.push({
                path: '/classsearch',
                query: {
                    firstName: firstName,
                    secondName: secondName,
                    thirdName: thirdName,
                    lableData: JSON.stringify(lableData),
                    thirdId: thirdId,
                    secondIndex: secondIndex,
                    thirdIndex: thirdIndex,
                    lableType: 'thirdLable',
                }
            });

        },
        toSearch: function () {
            this.$post('products/search', { name: '', shop_id: 1, token: this.$store.state.id, offset: 0, length: 999 }).then(res => {
                if (res.data.result.data.length !== 0) {
                    this.$router.push({
                        path: '/blank',
                        query: {
                            data: JSON.stringify(res.data.result.data),
                            value: 'classtext'
                        }
                    });
                }
            })
        },
        //点击类别跳转相应的页面
        // toProductType: function (id, index) {
        //     this.$router.push({
        //         path: '/classsearch',
        //         query: {
        //             courseNavigation_id: id,
        //             index: index,
        //             isHome: true
        //         }
        //     });
        // },
        //点击跳转到继续教育全部课程
        // toProductType: function () {
        //     this.$router.push({
        //         path: '/classsearch',
        //         query: {
        //         }
        //     });
        // },
        //点击课程跳转到课程详情
        toSection: function (id) {
            if (this.$store.state.id) {
                this.$post('users/isPay', { product_id: id, token: this.$store.state.id }).then(res => {
                    console.log('我是判断的结果');
                    console.log(res.data.result);
                    if (!res.data.result) {
                        // let address = 
                        this.$router.push({
                            path: '/classstudy',
                            query: {
                                id: id
                            }
                        });
                        // window.open(address.href, '_blank')
                    } else {
                        // let address = 
                        this.$router.push({
                            path: '/classdetails',
                            query: {
                                id: id
                            }
                        });
                        // window.open(address.href, '_blank')
                    }
                })
            } else {
                // let address =
                this.$router.push({
                    path: '/classdetails',
                    query: {
                        id: id
                    }
                });
                // window.open(address.href, '_blank')
            }


        },
        //
        //获取类别标签
        getLabel() {
            this.$post('labels/all').then(res => {
                let data = res.data.result;
                this.allLabel(data, this.labels);
                console.log('打印一下');
                console.log(this.labels);
                for (let one of this.labels.children) {
                    if (one.children) {
                        innter:
                        for (let two of one.children) {
                            if (two.children) {
                                for (let three of two.children) {
                                    if (three) {
                                        one.isWidth = 'true';
                                        break innter;
                                    }

                                }
                            }
                        }
                    }
                }
            })
        },
        //递归处理返回的标签
        allLabel(data, labelObj) {
            for (let i in data) {
                if (data[i].parent_id === labelObj.id) {
                    if (!labelObj.children) {
                        labelObj.children = [];
                    }
                    labelObj.children.push(data[i]);
                    this.allLabel(data, data[i]);
                }

            }
        },

        //获取首页数据
        getdata() {
            //课程
            this.$post('sections/search', { shop_id: '1' }).then(res => {
                return res.data.result;
            })
                .then(data => {
                    let me = this;
                    for (let val of data) {
                        -function (val) {
                            // console.log(val);
                            me.$post('section_products/search', { section_id: val.id }).then(res1 => {
                                console.log('我是课程详情');
                                console.log(res1.data.result);
                                let obj = {
                                    id: val.id,
                                    name: val.name,
                                    page: val.page,
                                    shop_id: val.shop_id,
                                    sort: val.sort,
                                    template: val.template,
                                    classDetails: res1.data.result,
                                }
                                me.sections.push(obj);
                            })
                        }(val)
                    }
                })
            // 轮播图数据
            for (let i = 1; i <= 4; i++) {
                this.$post('products/get', { id: i }).then(res => {
                    res.data.result.id = i;
                    this.sliderImgs.push(res.data.result);
                    this.recommendCourseImg.push(res.data.result);
                })
            }
        },
    },
    ttt() {
        console.log(this.sections)
    },
    created: function () {
        // console.log('wojfsdoi');

    },
    mounted: function () {
        this.getLabel();
        this.getdata();
        // console.log('DOM已经加载完成');
    }
}


