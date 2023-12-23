<template>
  <div class="progress-bar" :style="{'width': width, 'height': height, 'border-radius': rounded ? '4px' : '0', 'background-color': backgroundColor}" >
    <div class="progress" :style="{ 'width': `${percentage}%`, 'background-color':color}"></div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor:{
      type: String,
      default: "#f3f3f3"
    },
    color: {
      type: String,
      default: "#000"
    },
    percentage: {
      type: Number,
      required: true,
      default: 0,
    },
    width:{
      type: String,
      default: "100%"
    },
    height: String,
    rounded: {
        type: Boolean,
        default: false
    }
  },
};
</script>

<style scoped>
.progress-bar {
  height: 20px;
  background-color: #f0f0f0;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #4caf50;
  transition: width 0.3s ease-in-out;
}
</style>
