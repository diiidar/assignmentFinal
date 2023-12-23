import FormContainer from "../components/FormsComponent.vue";

export default {
    title: 'FormContainer',
    component: FormContainer,
};

export const Default = {
    args: {
        needBorder: false,
    },
};

export const WithBorder = {
    args: {
        needBorder: true,
    },
};
