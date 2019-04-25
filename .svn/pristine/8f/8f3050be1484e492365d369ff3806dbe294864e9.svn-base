export default {
    data() {
        return {
            tfChoiceanswer: [],
            singleChoiceanswer: [],
            multipleChoiceanswer: [],
            fillanswer: [],
            fillInputanswer: [],
            fenshuzhi: ''
        }
    },
    methods: {

        returnclick: function () {
            this.$router.push({
            path: '/personalcenter'
            })
        },

        //获取答案数据
        getAnswerData: function () {
                let topicArr = JSON.parse(this.$route.query.examContent);
                this.fenshuzhi = this.$route.query.fenshulll
                console.log("=============")
                console.log(this.$route.query.fenshulll)

                // this.answerTitle = res.data.result.name;
                // let topicArr = JSON.parse(res.data.result.data);
                // this.topicLen = topicArr.length;
                // this.topicAnswer = topicArr;


                for (let val of topicArr) {
                    // delete val.answer;
                    if (val.type === '判断' || val.options.length === 2) {
                       val.value===val.answer[0]?val.isRight=true:val.isRight=false;
                        this.tfChoiceanswer.push(val);
                    } else if (val.type === '单选' && val.options.length === 4) {
                        val.value===val.answer[0]?val.isRight=true:val.isRight=false;
                        this.singleChoiceanswer.push(val);
                    } else if (val.type === '多选') {
                        let flag=true;
                       for(let v of val.answer){
                            if(val.value.indexOf(v)===-1){
                                flag=false;
                                break;
                            }
                       }
                       flag===true?val.isRight=true:val.isRight=false;
                        this.multipleChoiceanswer.push(val);
                    } else if (val.type === '填空') {
                        this.fillanswer.push(val);
                    }
                }
                console.log("==========")
                console.log(this.tfChoiceanswer)
                console.log(this.singleChoiceanswer)
                console.log(this.multipleChoiceanswer)
       
        }
        
    },
    created: function () {
        this.getAnswerData();
    },
    mounted: function () {
        //this.fillAnswerTopic();
    },
    updated(){
    }
}