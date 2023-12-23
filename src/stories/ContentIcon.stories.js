import Icon from "../components/ContentIcon.vue";
export default {
    title: 'Icon',
    component: Icon,
};
export const Default = {
    args: {
        iconName: "fa-tree",
        fontSize: "20px",
        color: "",
        margin: "",
    },
};

export const CustomIcon = {
    args: {
        iconName: "fa-star",
        fontSize: "24px",
        color: "blue",
        margin: "5px",
    },
};

export const LargerSize = {
    args: {
        iconName: "fa-heart",
        fontSize: "30px",
        color: "red",
        margin: "10px",
    },
};
