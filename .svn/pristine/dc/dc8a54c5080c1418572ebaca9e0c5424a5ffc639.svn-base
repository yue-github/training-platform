export default {
    data() {
        return {
            certificateNumber: '#8579837598428',
            title: '学时证明',
            unit: '',
            studentName: '',
            identityNumber: '',
            startTime: '',
            endTime: '',
            courseTitle: '',
            numberOfDays: '',
            period: '',
            trainingInstitution: '广州润沁教育科技有限公司',
            sealOfTheTime: '',
            startDate: '',
            classInfo: [],
            year: '',
        }
    },
    methods: {
        goWhere() {
            this.$router.push({
                path: 'personalcenter'
            })
        },

        getInfo: function () {

            this.year = this.$route.query.year.substr(0, 4);
            this.$post('users/profile', { token: this.$store.state.id }).then(res => {
                this.studentName = res.data.result.name;
                this.identityNumber = res.data.result.idcard;
                this.unit = res.data.result.company;
            });
            this.$post('products/get', { id: this.$route.query.goodId, offset: '0', length: '99' }).then(res => {
                console.log('证书商品信息');
                console.log(res.data.result);
                this.courseTitle = '《' + res.data.result.name + '》';
                this.period = res.data.result.period;
            });
            // me.$post('projects/search',{id:id,token:me.$store.state.id}).then(res=>{ 
            this.$post('projects/search', { id: this.$route.query.goodId, token: this.$store.state.id }).then(res => {
                console.log('章节目录');
                let arr = JSON.parse(res.data.result.resources);
                arr.pop();
                for (let val of arr) {
                    let obj = {};
                    obj.name = val.name;
                    obj.time = val.items.length;
                    this.classInfo.push(obj);
                }
            })
            this.$post('orders/get', { token: this.$store.state.id, id: this.$route.query.orderId }).then(res => {
                console.log('我是更新时间');
                let start_str = (res.data.result.pay_date).replace(/-/g, "/");
                let strArr = res.data.result.pay_date.substr(0, 10).split('-');
                this.startDate = new Date(start_str);
                this.startTime = strArr[0] + '年' + strArr[1] + '月' + strArr[2] + '日';
            });
            this.$post('purchased/search', { token: this.$store.state.id, order_id: this.$route.query.order_id, offset: 0, length: '10' }).then(res => {
                for (let val of res.data.result.data) {
                    if (Number.parseInt(val.product_id) === Number.parseInt(this.$route.query.goodId)) {
                        let end_str = (val.updated_at).replace(/-/g, "/");
                        let endDate = new Date(end_str);
                        let strArr = val.updated_at.substr(0, 10).split('-');
                        let num = (endDate - this.startDate) / (1000 * 3600 * 24);
                        let days = parseInt(Math.ceil(num));
                        this.endTime = strArr[0] + '年' + strArr[1] + '月' + strArr[2] + '日';
                        this.sealOfTheTime = strArr[0] + '年' + strArr[1] + '月' + strArr[2] + '日';
                        this.numberOfDays = days;
                    }
                }

            })
        },
    },
    created: function () {

    },
    mounted() {
        this.getInfo();
        var element = $("#html-content-holder"); 
        var getCanvas; 
        html2canvas(element, {
          onrendered: function(canvas) {
            $("#previewImage").append(canvas);
            getCanvas = canvas;
          }
        });
    
        $("#btn-Convert-Html2Image").on("click", function() {
          var imgageData = getCanvas.toDataURL("image/png");
          var newData = imgageData.replace(
            /^data:image\/png/,
            "data:application/octet-stream"
          );
          $("#btn-Convert-Html2Image")
            .attr("download", "your_pic_name.png")
            .attr("href", newData);
        });
      }
}