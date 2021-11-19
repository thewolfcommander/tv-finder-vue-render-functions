<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HomePageIntro msg="Welcome to TV Finder Demo" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePageIntro from "@/components/HomePageIntro.vue";

export default {
  name: "Home",
  components: {
    HomePageIntro,
  },
};
</script>
