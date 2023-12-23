<template>
  <div>
    <input type="checkbox" :checked="isChecked" @change="handleChange"/>
    {{ label }}
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: 'Checkbox Label',
    },
  },
  methods: {
    handleChange(event) {
      this.$emit('change', event.target.checked);
    },
  },
};
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: row;
    text-align: center;
    gap: 10px;
  }
</style>
