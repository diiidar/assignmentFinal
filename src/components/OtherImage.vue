<template>
  <img :src="src" :alt="alt" :width="width" :style="{'margin':margin}"/>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
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
    }
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>
