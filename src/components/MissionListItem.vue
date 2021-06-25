<template>
  <router-link
    class="c-MissionListItem"
    v-if="mission"
    :to="{
      name: 'SingleMissionView',
      params: { missionId: mission.id }
    }">
    <h2 class="c-MissionListItem__title">{{ mission.mission_name }}</h2>
    <p
      v-if="mission.details"
      class="c-MissionListItem__desc">{{ mission.details }}</p>
    <p
      v-else
      class="c-MissionListItem__desc--empty">No description available...</p>
    <span class="c-MissionListItem__date">{{ launchDate }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'MissionListItem',
  props: {
    mission: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  methods: {
    pad (num) {
      return num < 10 ? `0${num}` : num
    }
  },
  computed: {
    launchDate () {
      const date = new Date(this.mission.launch_date_local)
      return `${this.pad(date.getUTCDate())}/${this.pad(date.getUTCMonth() + 1)}/${this.pad(date.getUTCFullYear())}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.c-MissionListItem {
  width: 100%;
  display: block;
  border: 1px solid $mission-list-item-border-color;
  background-color: $mission-list-item-bg-color;
  margin-bottom: 30px;
  padding: 20px;
  cursor: pointer;
  transition: box-shadow $default-time $default-easing;

  &:hover {
    box-shadow: 0 0 6px $mission-list-item-border-color;
  }

  &__title {
    font-weight: 700;
    font-size: 18px;
    color: $main-font-color;
    margin-bottom: 30px;
  }
  &__desc {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: $main-font-color;
    margin-bottom: 30px;

    &--empty {
      font-weight: 300;
      font-style: italic;
      color: $main-font-color;
      margin-bottom: 30px;
    }
  }
  &__date {
    font-weight: 400px;
    font-style: italic;
    color: $main-font-color;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
