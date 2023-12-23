<template>
  <div class="circle" :style="{'width':width, 'background-color':backgroundColor, 'color':color,
  'font-weight': bold ? 'bold' : 'normal', 'height':height, 'margin':margin, 'font-size':fontSize, 'border':border}">
    <slot>{{ text }}</slot>
  </div>
</template>

<script>
  export default{
    props: {
      width: {
        type: String,
        default: "20px"
      },
      backgroundColor: String,
      color: String,
      bold: {
        type: Boolean,
        default: true
      },
      height: String,
      margin: String,
      fontSize: String,
      border: String,
      text: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style>
  .circle{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
  }
</style>