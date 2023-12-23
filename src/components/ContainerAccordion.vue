<template>
  <div class="accordion" :style="{'width': width}">
    <div v-for="(panel, index) in panels" :key="index">
      <div class="accordion-header" @click="togglePanel(index)">
        {{ panel.title }}
      </div>
      <div v-show="panel.open" class="accordion-content">
        <p>{{ panelItems[index] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panels: [
        { title: 'Panel 1', open: false },
        { title: 'Panel 2', open: false },
        { title: 'Panel 3', open: false },
      ],
      panelItems: [
        'Text for Panel 1',
        'Text for Panel 2',
        'Text for Panel 3'
      ]
    };
  },
  props: {
    width: {
      type: String,
      default: "300px"
    },
  },
  methods: {
    togglePanel(index) {
      this.panels[index].open = !this.panels[index].open;
    },
  },
};
</script>

<style scoped>
.accordion {
  border: 1px solid #ccc;
  overflow: hidden;
  margin: 16px 0;
}

.accordion-header {
  padding: 10px;
  background-color: #f0f0f0;
  cursor: pointer;
}

.accordion-content {
  padding: 10px;
  border-top: 1px solid #ccc;
}
</style>
