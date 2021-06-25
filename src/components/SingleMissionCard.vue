<template>
  <div
    class="c-SingleMissionCard">
    <img
      class="c-SingleMissionCard__coverImg"
      alt="Mission cover image"
      :src="coverImageLink"
      @load="imgLoaded" />
    <div class="c-SingleMissionCard__infoContainer">
      <h2 class="c-SingleMissionCard__title">{{ singleMission.mission_name }}</h2>
      <p
        v-if="singleMission.details"
        class="c-SingleMissionCard__desc">{{ singleMission.details }}</p>
      <p
        v-else
        class="c-SingleMissionCard__desc--empty">No description available...</p>
      <a
        class="c-SingleMissionCard__seeMore"
        v-if="articleLink"
        :href="articleLink"
        target="_blank"
        rel="noopener noreferrer">
        <span>See more</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleMissionCard',
  props: {
    singleMission: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  computed: {
    coverImageLink () {
      return this.singleMission?.links?.flickr_images[0] || '/SpaceX-Logo.png'
    },
    articleLink () {
      return this.singleMission?.links?.article_link
    }
  },
  methods: {
    imgLoaded () {
      this.$emit('imgLoaded')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.c-SingleMissionCard {
  width: 100%;

  &__coverImg {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-top: 1px solid $mission-list-item-border-color;
    border-left: 1px solid $mission-list-item-border-color;
    border-right: 1px solid $mission-list-item-border-color;
  }

  &__infoContainer {
    border: 1px solid $mission-list-item-border-color;
    background-color: $mission-list-item-bg-color;
    padding: 20px;
    margin-top: -4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__title {
    font-weight: 700;
    font-size: 18px;
    color: $main-font-color;
    margin-bottom: 30px;
    text-align: center;
  }
  &__desc {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: $main-font-color;
    margin-bottom: 30px;
    text-align: center;

    &--empty {
      font-weight: 300;
      font-style: italic;
      color: $main-font-color;
      margin-bottom: 30px;
      text-align: center;
    }
  }

  &__seeMore {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: $button-bg-color;
    display: block;
    margin: 0 auto 10px auto;

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      color: $main-font-color;
      text-align: center;
    }

    &:hover span {
      text-decoration: underline;
    }
  }
}
</style>
