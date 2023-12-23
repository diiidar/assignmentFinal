<template>
  <nav class="navbar">
    <div class="brand">{{ title }}<content-icon :icon-name="logo" font-size="40px" color="#fff"></content-icon></div>
    <ul class="nav-list">
      <li v-for="(item, index) in navItems" :key="index" @click="handleItemClick(item)">
        {{ item }}
      </li>
    </ul>
  </nav>
</template>

<script>
import ContentIcon from "../components/ContentIcon.vue";
export default {
  components:{
    ContentIcon
  },
  props: {
    navItems: {
      type: Array,
      default: ['Home', 'About', 'Contact']
    },
    logo: {
      type: String,
      default: "fa-youtube"
    },
    title: {
      type: String,
      default: "Logo"
    }
  },
  methods: {
    handleItemClick(item) {
      console.log(`Clicked on ${item}`)
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #333;
  color: white;
}

.brand {
  margin-left: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  gap: 20px;
}

.nav-list {
  list-style-type: none;
  display: flex;
}

.nav-list li {
  margin-right: 15px;
  cursor: pointer;
}

.nav-list li:hover {
  text-decoration: underline;
}
</style>
