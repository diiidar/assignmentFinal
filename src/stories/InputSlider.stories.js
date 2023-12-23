import Slider from "../components/InputSlider.vue";

export default {
    title: 'Slider',
    component: Slider,
};

export const Default = {
    args: {
        value: 50,
        min: 0,
        max: 100,
        width: '300px',
    },
};
export const CustomMinMax = {
    args: {
        value: 50,
        min: 0,
        max: 100,
        width: '300px',
    },
};
