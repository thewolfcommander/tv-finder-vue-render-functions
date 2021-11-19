<template>
  <div class="without">
    <h1>Showing TV Shows without Render Function</h1>
    <my-shows />
  </div>
</template>

<script>
import MyShows from '../components/without/MyShows.vue'
export default {
  components: {MyShows},
  data() {
    return {

    }
  }
}
</script>