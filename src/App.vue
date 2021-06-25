<template>
  <div id="app">
    <Loading
      v-show="isLoading"
      class="mainLoader" />
    <router-view v-show="!isLoading" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Loading from '@/components/Loading.vue'

export default {
  components: {
    Loading
  },
  computed: {
    ...mapGetters({
      isLoading: 'loadingState'
    })
  }
}
</script>

<style lang="scss">
@import "@/scss/reset.scss";
@import "@/scss/fonts.scss";
@import "@/scss/variables.scss";

html, body {
  background-color: $ui-bg-color;
  font-family: $primary-font;
  width: 100vw;
  height: 100vh;
  padding: 0 10px;
  display: flex;
  justify-content: center;
}

#app {
  max-width: 980px;
  width: 100%;
  height: 100%;
  margin: 40px 0;
  height: auto;
  position: relative;

  .mainLoader {
    position: fixed;
    top: 50%;
    left: 50%;
  }
}
</style>
