<template>
  <div class="flex">
    <div class="text-input">
      <label>{{ label }}</label>
      <input
          class="textInput"
          :type="type"
          :placeholder = "placeholder"
          :value="value"
          :width="width"
          :height="height"
          :style="{'border-bottom':borderBottom ? '1px solid #757575' : 'none', 'font-size':fontSize, 'margin':margin, 'padding':padding, 'color':color}"
          @input="handleInput"

      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    label: String,
    placeholder: String,
    value: String,
    width: String,
    height: String,
    borderBottom: {
      type: Boolean,
      default: false
    },
    fontSize: String,
    margin: String,
    padding: {
      type: String,
      default: '2px 18px'
    },
    color: String,
  },
  computed: {

  },
  methods: {
    handleInput(event) {
      this.$emit("update:value", event.target.value);
    },
  },
};
</script>

<style scoped>
  .flex {
    display: flex;
    gap: 10px;
    font-size: 20px;
    width: fit-content;
  }

  .textInput {
    border: none;
    outline: none;
  }
</style>