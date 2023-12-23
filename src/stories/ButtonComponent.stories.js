import ButtonComponent from "../components/ButtonComponent.vue";

export default{
    title: 'ButtonComponent',
    component: ButtonComponent,
};

export const Default = {
    args: {
        value: 'Default Button'
    },
}
export const Large = {
    args: {
        width: "190px",
        height: "100px",
        value: "Large Button"
    },
};

export const Small = {
    args: {
        width: "70px",
        height: "20px",
        value: "Small Button"
    },
};

