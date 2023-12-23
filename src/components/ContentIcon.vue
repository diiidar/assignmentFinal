<template>
    <i class="fa" :class="[iconName]" :style="{'font-size':fontSize, 'color': color, 'margin':margin}"></i>
</template>
<script>
  export default {
    props:{
      iconName: {
        type: String,
        default: "fa-rocket"
      },
      fontSize:{
        type: String,
        default: '20px'
      },
      color: String,
      margin: String,
    }
  }
</script>

<style scoped>
  @import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);
</style>