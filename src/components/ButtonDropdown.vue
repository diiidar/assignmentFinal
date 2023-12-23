<template>
  <div class="dropdown">
    <button @click="toggleDropdown">Toggle Dropdown</button>
    <ul v-show="isDropdownOpen" @click="handleItemClick">
      <li v-for="item in dropdownItems" :key="item.id">{{ item.label }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    isDropdownOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dropdownItems: [
        { id: 1, label: 'Option 1' },
        { id: 2, label: 'Option 2' },
        { id: 3, label: 'Option 3' },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleItemClick(event) {
      this.isDropdownOpen = false;
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}
button{
  border: none;
  padding: 3px 5px;
}

ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  position: relative;
  border: 1px solid #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

li {
  padding: 10px;
  cursor: pointer;
  marker: none;
}

</style>
