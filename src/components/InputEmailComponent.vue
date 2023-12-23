<template>
  <div class="flex">
    <div class="email-input">
      <label>{{ label }}</label>
      <input
          class="emailInput"
          :type="type"
          :placeholder = "placeholder"
          :value="value"
          :width="width"
          :height="height"
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
      default: "email",
    },
    label: String,
    placeholder: String,
    value: String,
    width: String,
    height: String,
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
  border-bottom: 1px solid #757575;
  width: fit-content;
}

.emailInput {
  margin-left: 47px;
  border-radius: 20px;
  padding: 2px 18px;
  border: none;
  font-size: 20px;
  outline: none;
}
</style>