import DateTimeInput from "../components/InputDateTimePicker.vue";

export default {
    title: 'DateTimeInput',
    component: DateTimeInput,
};

export const Default = {
    args: {
        width: '200px',
        label: 'Select Date and Time',
    },
};

export const CustomLabel = {
    args: {
        width: '200px',
        label: 'Pick your moment',
    },
};

