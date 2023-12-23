import RadioBox from "../components/FormRadioBox.vue";

export default {
    title: 'RadioBox',
    component: RadioBox,
};

export const Default = {
    args: {
        isChecked: false,
        label: 'Radio Button Label',
    },
};

export const SelectedOption = {
    args: {
        isChecked: true,
        label: 'Radio Button Label',
    },
};

export const CustomLabel = {
    args: {
        isChecked: false,
        label: 'Custom Radio Button Label',
    },
};

export const MultipleOptions = {
    args: {
        isChecked: false,
        label: 'Radio Button Label',
        rows: 3,
    },
};

export const SelectedWithCustomLabel = {
    args: {
        isChecked: true,
        label: 'Custom Checked Radio Button Label',
    },
};
