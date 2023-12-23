<template>
  <div class="divider" :style="{'width':width, 'height':height, 'background-color':color, 'border-radius': rounded ? '20px' : 'none', 'transform':`rotate(${rotation})`}">
  </div>
</template>

<script>
export default {
  props: {
    width: String,
    height: {
      type: String,
      default: "1px"
    },
    color: {
      type: String,
      default: "#000"
    },
    rounded: {
      type: Boolean,
      default: false
    },
    rotation: {
      type: String,
      default: "0deg"
    }
  }
};
</script>

<style scoped>
.divider {
  border-top: 1px solid #ccc;
  margin: 10px 0;
}
</style>
