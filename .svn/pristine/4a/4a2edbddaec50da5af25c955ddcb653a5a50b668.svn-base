<template>
    <div id="myhead">
        <h1 @click="testClick">我是引入的组件化问题</h1>
    </div>
</template>
<script>
export default {
    props: ['cData'],
    data(){
        return{
            myname:'',
        }
    },
    methods:{
        testClick:function(){
            alert(this.myname);
        },
    },
    mounted:function(){
        this.myname=this.cData
    }
}
</script>
