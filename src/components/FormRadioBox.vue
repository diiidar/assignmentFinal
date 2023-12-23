<template>
  <div>
    <div class="inputs" v-for="option in options" :key="option.value">
      <input type="radio" :checked="isChecked" @change="handleChange" name="current"  v-model="selectedOption"/>
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selectedOption: null,
      options: [
        { label: 'Option 1', value: 'option1'},
        { label: 'Option 2', value: 'option2'},
        { label: 'Option 3', value: 'option3'},
      ],
    }
  },
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: 'Radio Button Label',
    },
    rows: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleChange() {
      this.$emit('change');
    },
  },
};
</script>

<style scoped>
  .inputs {
    display: flex;
    flex-direction: row;
    text-align: center;
    gap: 10px;
  }
</style>
