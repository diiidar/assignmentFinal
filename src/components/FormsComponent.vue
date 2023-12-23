<template>
  <div class="container" :style="{'border': needBorder ? '1px solid #000' : 'none'}" style="width: fit-content">
    <input-text-component label="Name"></input-text-component>
    <input-email-component label="Email"></input-email-component>
    <input-password-component label="Password"></input-password-component>

    <form-check-box v-model="checkBoxValue" label="Checkbox Label"></form-check-box>

    <form-radio-box
        v-model="radioBoxValue"
        :options="radioBoxOptions"
        label="Radio Box Label"
    ></form-radio-box>

    <form-switch-toggle
        v-model="switchToggleValue"
        label="Switch Toggle Label"
    ></form-switch-toggle>
  </div>
</template>

<script>
import FormCheckBox from "../components/FormCheckBox.vue";
import FormRadioBox from "../components/FormRadioBox.vue";
import FormSwitchToggle from "../components/FormSwitchToggle.vue";
import InputTextComponent from "../components/InputTextComponent.vue";
import InputEmailComponent from "../components/InputEmailComponent.vue";
import InputPasswordComponent from "../components/InputPasswordComponent.vue";
export default {
  components: {
    FormCheckBox,
    FormRadioBox,
    FormSwitchToggle,
    InputTextComponent,
    InputEmailComponent,
    InputPasswordComponent
  },
  data() {
    return {
      textAreaValue: '',
      checkBoxValue: false,
      radioBoxValue: null,
      radioBoxOptions: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ],
      switchToggleValue: false,
    };
  },
  props: {
    needBorder: {
      type: Boolean,
      default: false
    }
  }
};
</script>
