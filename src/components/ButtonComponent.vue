<template>
    <button :style="{'height':height, 'width':width, 'border': border, 'border-radius': borderRadius, 'background-color':backgroundColor,
    'font-size':fontSize, 'margin': margin, 'padding':padding,}">
      <slot>{{value}}</slot>
    </button>
</template>
<script>
export default {
  props: {
    height: {
      type: String,
      default: '50px',
    },
    width: {
      type: String,
      default: '120px',
    },
    border: {
      type: String,
      default: 'none',
    },
    borderRadius: String,
    backgroundColor: {
      type: String,
      default: 'blue',
    },
    value: {
      type: String,
      default: ''
    },
    fontSize: String,
    margin: String,
    padding: String
  }
}
</script>

<style scoped>

  button{
    min-height: 40px;
    position: relative;
    font-weight: bold;
  }
</style>
