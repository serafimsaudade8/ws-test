<template>
  <div class="l-MissionListView">
    <h1 class="l-MissionListView__title">Last Launches &#128640;</h1>
    <MissionList :missions="launchesPast" />
  </div>
</template>

<script>
import { LastTenMissionsQuery } from '@/graphQl/spaceXQueries.js'
import MissionList from '@/components/MissionList.vue'

export default {
  name: 'MissionListView',
  components: {
    MissionList
  },
  data () {
    return {
      launchesPast: [],
      loading: 0
    }
  },
  apollo: {
    launchesPast: {
      loadingKey: 'loading',
      query: LastTenMissionsQuery,
      result ({ data }) {
        // we can grab the results here and write to the Vuex Store if needed
        console.log('result', data)
      },
      error (error) {
        // we can handle errors here (via store, individual view error state, toast notifications, etc)
        console.log('error', error)
      }
    }
  },
  watch: {
    loading (newVal) {
      this.$store.dispatch('setGlobalLoading', newVal === 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";
.l-MissionListView {
  width: 100%;

  &__title {
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 24px;
    color: $main-font-color;
  }
}
</style>
