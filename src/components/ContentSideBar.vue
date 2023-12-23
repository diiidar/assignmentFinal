<template>
    <nav class="main-menu" :style="{'background-color': backgroundColor, 'width':width, 'padding':padding, 'color':color}">
      <slot>{{ text }}</slot>
    </nav>
</template>
<script>
  export default {
    data(){
      return{}
    },
    props:{
      backgroundColor: {
        type: String,
        default: "#2b2b2b"
      },
      color: {
        type: String,
        default: "#fff"
      },
      width: {
        type: String,
        required: true
      },
      padding: String,
      text: {
        type: String,
        default: "Text in Sidebar Menu"
      }
    },
  }
</script>
<style scoped>

</style>