import TextInput from "../components/InputTextComponent.vue";

export default {
    title: 'TextInput',
    component: TextInput,
};
export const Default = {
    args: {
        type: 'text',
        label: 'Input Label',
        placeholder: 'Type something...',
        value: '',
        width: '300px',
        height: '40px',
        borderBottom: false,
        fontSize: '20px',
        margin: '0',
        padding: '2px 18px',
        color: '#000',
    },
};
