<template>
  <div class="loader" :style="{'width':width, 'height':height, 'border-width':borderWidth, 'border-top-color':color}"></div>
</template>
<script>
  export default {
    props: {
      width: {
        type: String,
        default: "40px"
      },
      height: {
        type: String,
        default: "40px"
      },
      borderWidth: {
        type: String,
        default: "7px"
      },
      color:{
        type: String,
        default: "#3498db"
      }
    }
  }
</script>

<style>
  .loader {
    border-style: solid;
    border-color: #f3f3f3;
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>