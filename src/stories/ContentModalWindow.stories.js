import Modal from "../components/ContentModalWindow.vue";

export default {
    title: 'Modal',
    component: Modal,
};
export const Default = {
    args: {
        text: 'Some text in the Modal',
    },
};
export const CustomTitle = {
    args: {
        text: 'Custom text in the Modal',
    },
};

