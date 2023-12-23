<template>
  <div :style="{'border-radius': rounded ? '4px' : '0', 'border': border ? '1px solid #0f0' : 'none', 'width':width, 'height':height, 'background-color': backgroundColor}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: ''
    };
  },
  props: {
    border: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    width: String,
    height: String,
    backgroundColor: String,
    placeholder: {
      type: String,
      default: "Search..."
    }
  },
  methods: {
    updateSearch() {
      console.log('Search Query:', this.searchInput);
    },
  }
};
</script>

<style scoped>
div {
  margin: 15px 20px 15px 20px;
  padding: 4px 5px;
}
input {
  padding: 8px;
  font-size: 13px;
}
button {
  padding: 9px 18px;
  cursor: pointer;
}
</style>
