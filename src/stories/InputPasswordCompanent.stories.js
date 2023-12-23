import PasswordInput from "../components/InputPasswordComponent.vue";

export default {
    title: 'PasswordInput',
    component: PasswordInput,
};

export const Default = {
    args: {
        label: 'Enter your password',
        type: 'password',
        placeholder: 'Type your password',
        value: '',
        width: '300px',
        height: '40px',
    },
};
