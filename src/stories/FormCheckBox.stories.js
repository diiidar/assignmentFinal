import Checkbox from "../components/FormCheckBox.vue";

export default {
    title: 'Checkbox',
    component: Checkbox,
};

export const Default = {
    args: {
        isChecked: false,
        label: 'Checkbox Label',
    },
};

export const CheckedCheckbox = {
    args: {
        isChecked: true,
        label: 'Checked Checkbox',
    },
};

export const CustomLabel = {
    args: {
        isChecked: false,
        label: 'Custom Checkbox Label',
    },
};

export const CheckedWithCustomLabel = {
    args: {
        isChecked: true,
        label: 'Custom Checked Checkbox Label',
    },
};
