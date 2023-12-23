<template>
  <div class="slider-container">
    <input class="slider" type="range" v-model="sliderValue" @input="handleSliderChange" value="value" :min=min :max=max :style="{'width': width}"
    />
    <p>Selected Value: {{ sliderValue }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderValue: this.value,
      minSlider: this.min
    };
  },
  props: {
    value: Number,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    width: String,
  }
};
</script>

<style scoped>
  .slider-container {
    margin: 20px;
  }

  .slider {
    border-radius: 10px;
    height: 10px;
    margin-top: 10px;
    background-color: #ddd;
    border: none;
    outline: none;
    -webkit-appearance: none;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 50%;
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #4CAF50;
    cursor: pointer;
}
</style>
