<template>
  <div class="about">
    <h1 class="text" @click="go">This is an about page</h1>
  </div>
</template>
<script>
export default {
  // path和name分别是对应query和params，然后query是可以看到路径的，而path是不回看到路径
  methods:{
    go:function(){
      console.log('揍你');
      this.$router.push({
        path:'/test',
        query:{
          name:'aboutname',
          sex:'aboutsex',
          school:{
            address:'guangzhou',
            money:3000,
          }
        }
      });
    }
  }
}
</script>

