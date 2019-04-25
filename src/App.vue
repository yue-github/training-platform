<template>
  <div id="app" ref="app">
    <div id="nav">
      <tpheader v-if="$route.meta.showHeader" ref="tpheader" ></tpheader>
    </div>
    <router-view/>
    <tpfooter v-if="$route.meta.showFooter" ref='tpfooter'></tpfooter>
  </div>
</template>

<script>
import router from "./router.js";
export default {
  created: function() {
    if (!this.$store.state.id && sessionStorage.getItem("tpid")) {
      this.$store.state.id = sessionStorage.getItem("tpid");
      this.$store.state.name = sessionStorage.getItem("tpname");
    }
    window.addEventListener("beforeunload", () => {
      if (this.$store.state.id) {
        sessionStorage.setItem("tpid", this.$store.state.id);
        sessionStorage.setItem("tpname", this.$store.state.name);
      }
    });

    // sessionStorage.removeItem("tpid");
  },
  mounted: function() {
    if (this.$store.state.id) {
      this.$post("shopping_cart/search", {
        token: this.$store.state.id,
        offset: "0",
        length: 9999
      }).then(res => {
        // console.log(res.data.result.data.length);
        this.$store.state.shopNum = res.data.result.data.length;
      });
    }

    // this.$refs.tpheader.toLogin();
    // let token=this.$store.state.id;
    // console.log(token)
    // this.$post('projects/search',{offset:'1',length:'3',token:token}).then(res=>{
    //   console.log(res);
    // })
    // this.$post('sections/search').then(res=>{
    //   console.log(res);
    // })
  }
};
</script>



<style>
.hand {
  cursor: pointer;
}
html,
body,
#app {
  height: 100%;
}
</style>
