import ToggleSwitch from "../components/FormSwitchToggle.vue";

export default {
    title: 'ToggleSwitch',
    component: ToggleSwitch,
};
export const Default = {
    args: {
        height: '20px',
        width: '40px',
        fontsize: '14px',
        label: 'Feature is',
    },
};

export const LargeFontSize = {
    args: {
        height: '20px',
        width: '40px',
        fontsize: '18px',
        label: 'Feature is',
    },
};

export const CustomLabel = {
    args: {
        height: '20px',
        width: '40px',
        fontsize: '14px',
        label: 'Custom Label',
    },
};

export const LargeSizeWithCustomLabel = {
    args: {
        height: '30px',
        width: '60px',
        fontsize: '18px',
        label: 'Custom Large Label',
    },
};
