<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="go">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <City/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import City from '@/pages/City/City.vue'

export default {
  methods:{
    go(){
      this.$router.push({
        path:'/about'
      })
    }
  },
  name: 'home',
  components: {
    HelloWorld,
    // City
  }
}
</script>
