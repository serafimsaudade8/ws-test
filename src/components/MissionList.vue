<template>
  <ul class="c-MissionList">
    <li v-for="(mission, index) in missions" :key="index">
      <MissionListItem :mission="mission" />
    </li>
  </ul>
</template>

<script>
import MissionListItem from '@/components/MissionListItem.vue'

export default {
  name: 'MissionList',
  components: {
    MissionListItem
  },
  props: {
    missions: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.c-MissionList {
  width: 100%;
  padding-bottom: 30px;
}
</style>
