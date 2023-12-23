<template>
  <div class="tabs">
    <div class="tab-buttons">
      <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="changeTab(index)"
          :class="{ active: index === activeTab }"
      >
        {{ tab.title }}
      </button>
    </div>

    <div class="tab-content">
      <slot :activeTab="tabs[activeTab]">
        {{ tabs[activeTab].content }}
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
    };
  },
  props: {
    tabs: {
      type: Array,
      default: [
        { title: 'Tab 1', content: 'Content for Tab 1' },
        { title: 'Tab 2', content: 'Content for Tab 2' },
        { title: 'Tab 3', content: 'Content for Tab 3' }
      ]
    }
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
    }
  }
};
</script>

<style scoped>
.tabs {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.tab-buttons {
  display: flex;
}

.tab-buttons button {
  padding: 10px;
  flex: 1;
  cursor: pointer;
  border: none;
  background-color: #eee;
}

.tab-buttons button.active {
  background-color: #fff;
}

.tab-content {
  margin-top: 10px;
}
</style>
