import Card from "../components/ContainerCard.vue";

export default {
    title: 'Card',
    component: Card,
};
export const Default = {
    args: {
        imageSrc: "https://via.placeholder.com/300",
        title: "Default Card Title",
        description: "Default Card Description",
        width: "300px",
        height: "auto",
    },
};

export const CustomImage = {
    args: {
        imageSrc: "https://via.placeholder.com/400",
        title: "Card with Custom Image",
        description: "Description with a custom image.",
        width: "350px",
        height: "auto",
    },
};

export const LongDescription = {
    args: {
        imageSrc: "https://via.placeholder.com/300",
        title: "Card with Long Description",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum tellus vel odio venenatis vulputate.",
        width: "300px",
        height: "auto",
    },
};
