<template>
  <div class="intro">
    <h1>{{ msg }}</h1>
    <p>
      This is a demo of how same application can be made using different approaches in vue.
    </p>
  </div>
</template>

<script>
export default {
  name: "HomePageIntro",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
