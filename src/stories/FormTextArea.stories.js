import TextArea from "../components/FormTextArea.vue";

export default {
    title: 'TextArea',
    component: TextArea,
};

export const Default = {
    args: {
        width: '300px',
        height: '100px',
        fontSize: '16px',
        resize: 'none',
        padding: '5px 10px',
    },
};
export const LargeFontSize = {
    args: {
        width: '300px',
        height: '100px',
        fontSize: '20px',
        resize: 'none',
        padding: '5px 10px',
    },
};

export const CustomPadding = {
    args: {
        width: '300px',
        height: '100px',
        fontSize: '16px',
        resize: 'none',
        padding: '10px 15px',
    },
};
