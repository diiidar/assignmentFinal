import EmailInput from "../components/InputEmailComponent.vue";

export default {
    title: 'EmailInput',
    component: EmailInput,
};

export const Default = {
    args: {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        value: '',
        width: '300px',
        height: '40px',
    },
};

export const CustomPlaceholder = {
    args: {
        type: 'email',
        label: 'Email',
        placeholder: 'Custom placeholder',
        value: '',
        width: '300px',
        height: '40px',
    },
};

export const PreFilledValue = {
    args: {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        value: 'example@email.com',
        width: '300px',
        height: '40px',
    },
};

export const CustomWidthAndHeight = {
    args: {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        value: '',
        width: '400px',
        height: '50px',
    },
};
