<template>
  <nav class="breadcrumb" :style="{'background-color':backgroundColor}">
    <ul>
      <li v-for="(item, index) in items" :key="index" :style="{'font-size': fontSize}">
        <a href="#" :style="{'color':color}">{{ item }}</a>
        <span v-if="index < items.length - 1" :style="{'color':color}"> / </span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    fontSize: {
      type: String,
      default: "16px"
    },
    color: String,
    backgroundColor: String
  },
};
</script>

<style scoped>
.breadcrumb {
  background-color: #f5f5f5;
  padding: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  margin-right: 5px;
}
a{
  text-decoration: none;
  color: black;
}
a:hover{
  text-decoration: underline;
  cursor: pointer;
}
</style>
