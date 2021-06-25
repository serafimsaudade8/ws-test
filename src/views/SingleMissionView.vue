<template>
  <div class="l-SingleMissionView">
    <router-link
      class="l-SingleMissionView__backLink"
      :to="{ name: 'MissionsListView' }">
      &larr; Back to last launches
    </router-link>
    <SingleMissionCard
      v-if="hasDataLoaded"
      :singleMission="launch"
      @imgLoaded="handleImgLoaded" />
  </div>
</template>

<script>
import { SingleMissionQuery } from '@/graphQl/spaceXQueries.js'
import SingleMissionCard from '@/components/SingleMissionCard.vue'

export default {
  name: 'SingleMissionView',
  components: {
    SingleMissionCard
  },
  data () {
    return {
      launch: {},
      dataLoading: 0
    }
  },
  apollo: {
    launch: {
      loadingKey: 'dataLoading',
      query: SingleMissionQuery,
      variables () {
        return {
          id: this.$route.params.missionId
        }
      },
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
  computed: {
    hasDataLoaded () {
      return Object.keys(this.launch).length
    }
  },
  methods: {
    handleImgLoaded () {
      this.$store.dispatch('setGlobalLoading', false)
    }
  },
  mounted () {
    this.$store.dispatch('setGlobalLoading', true)
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.l-SingleMissionView {
  width: 100%;

  &__backLink {
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 18px;
    color: $main-font-color;
    display: flex;
    justify-content: flex-end;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
