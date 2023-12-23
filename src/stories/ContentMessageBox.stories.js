import MessageBox from "../components/ContentMessageBox.vue";

export default {
    title: 'MessageBox',
    component: MessageBox,
};

export const Default = {
    args: {
        backgroundColor: '#46a8f5',
        width: '300px',
        text: 'This is a message box',
    },
};
