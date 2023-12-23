import ImageCarousel from "../components/ContentImageCarousel.vue";

export default {
    title: 'ImageCarousel',
    component: ImageCarousel,
};

export const Default = {
    args: {
        height: "200px",
        width: "400px",
        margin: "10px",
        padding: "",
    },
};

export const LargerDimensions = {
    args: {
        height: "300px",
        width: "600px",
        margin: "20px",
        padding: "5px",
    },
};

