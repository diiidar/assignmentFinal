<template>
  <div class="toggle">
    <label class="switch">
      <input type="checkbox" v-model="featureEnabled" @change="handleToggleChange" />
      <span class="slider round"></span>
    </label>
    <div :style="{'font-size':fontsize}"
    >
      {{label}} {{ featureEnabled ? 'Enabled' : 'Disabled' }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featureEnabled: false,
    };
  },
  methods: {
    handleToggleChange() {
      // Handle toggle switch change event
      console.log('Feature Enabled:', this.featureEnabled);
    },
  },
  props: {
    height: String,
    width: String,
    fontsize: String,
    label: {
      type: String,
      default: 'Feature is'
    }
  }
};
</script>

<style scoped>
  .toggle {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .switch {
    position: relative;
    width: 24px;
  }
  .switch input {
     opacity: 0;
     width: 0;
     height: 0;
   }
  .slider {
    position: absolute;
    cursor: pointer;
    height: 15px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 0.2px;
    top: 0.2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  input:checked + .slider {
    background-color: #2196F3;
  }

  input:checked + .slider:before {
    transform: translateX(9.4px);
  }
  .slider.round {
    border-radius: 34px;
    margin-top: 5px;
    padding: 0;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
