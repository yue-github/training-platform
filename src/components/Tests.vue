<template>
    <div id="test">
        <div @click="add">{{count}}</div>
        <h1>haishikeyi</h1>
    </div>
</template>
<script>
export default {
    data(){
        return {
            count:0
        }
    },
    methods:{
        add(){
            this.count++;
        }
    }
}
</script>

