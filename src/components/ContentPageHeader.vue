<template>
  <header class="page-header" :style="{'background-color':backgroundColor, 'height':height}" style="width: 100%">
    <h1>{{ title }}</h1>
    <slot></slot>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: "#f2f2f2"
    },
    height: {
      type: String,
      default: "200px"
    }
  },
};
</script>

<style scoped>
.page-header {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
