import NumberInput from "../components/InputNumberComponent.vue";

export default {
    title: 'NumberInput',
    component: NumberInput,
};

export const Default = {
    args: {
        label: 'Enter a number',
        type: 'number',
        placeholder: 'Type a number',
        value: '',
        width: '300px',
        height: '40px',
    },
};
