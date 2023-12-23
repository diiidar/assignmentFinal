<template>
  <div class="flex">
    <div class="file-input">
      <label>{{ label }}</label>
      <input  type="file" @change="handleFileChange" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
    }
  },
  props: {
    label: String,
    width: String,
    height: String,
  },
  computed: {

  },
  methods: {
    handleFileChange(event) {
      const fileInput = event.target;

      if (fileInput.files.length > 0) {
        this.selectedFile = fileInput.files[0];
      } else {
        this.selectedFile = null;
      }
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
  padding-bottom: 10px;
  width: fit-content;
}

.file-input {
  display: flex;
  gap: 10px;
  align-items: baseline;
  border: none;
}
</style>