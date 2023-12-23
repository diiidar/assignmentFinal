import Divider from "../components/OtherDivider.vue";
export default {
    title: 'Divider',
    component: Divider,
    argTypes: {
        width: { control: 'text' },
        height: { control: 'text' },
        color: { control: 'color' },
        rounded: { control: 'boolean' },
        rotation: { control: 'text' },
    },
};

export const Default = {
    args: {
        width: '100%',
        height: '1px',
        color: '#000',
        rounded: false,
        rotation: '0deg',
    },
};
export const RotatedTo90degrees = {
    args: {
        width: '100%',
        height: '1px',
        color: '#000',
        rounded: false,
        rotation: '90deg',
    },
};
