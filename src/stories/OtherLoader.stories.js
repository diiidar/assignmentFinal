import Loader from "../components/OtherLoader.vue";
export default {
    title: 'Loader',
    component: Loader,
    argTypes: {
        width: { control: 'text' },
        height: { control: 'text' },
        borderWidth: { control: 'text' },
    },
};

export const Default = {
    args: {
        width: '40px',
        height: '40px',
        borderWidth: '7px',
    },
};
export const Larger = {
    args: {
        width: '100px',
        height: '100px',
        borderWidth: '10px',
    },
};
export const Smaller = {
    args: {
        width: '20px',
        height: '20px',
        borderWidth: '5px',
    },
};
export const red = {
    args: {
        width: '20px',
        height: '20px',
        borderWidth: '5px',
        color: "#ba2222"
    },
};

