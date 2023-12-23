<template>
  <div class="list-container" :style="{'width': width}">
    <ul>
      <li v-for="item in items" :key="item.id" :style="{'height': liHeight}">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    width: String,
    liHeight: String
  },
};
</script>

<style scoped>
.list-container {
  width: 80%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  border: 1px solid #ddd;
  padding: 8px;
  margin-bottom: 5px;
}
</style>
