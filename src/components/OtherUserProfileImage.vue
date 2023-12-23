<template>
  <img :src="src" :alt="alt" :width="width" :height="height" :style="{'margin':margin}"/>
  <slot></slot>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "/assets/profile.jpg"
    },
    alt: {
      type: String,
      default: 'Image',
    },
    width:{
      type: String,
      default: "auto"
    },
    margin:{
      type: String,
      default: "0"
    },
    height:{
      type: String,
      default: "auto"
    },
  },
};
</script>

<style scoped>
img {
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  aspect-ratio: 1/1;
}
</style>