<template>
    <div id="blank"></div>
</template>

<script>
export default {
  created: function() {
      console.log('什么东西');
      console.log(this.$route.query.data);
    this.$router.push({
      path: "/classsearch",
      query: {
        data: this.$route.query.data,
        value: this.$route.query.value
      }
    });
  },
  mounted:function(){

  }
};
</script>

