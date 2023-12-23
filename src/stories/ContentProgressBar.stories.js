import ProgressBar from "../components/ContentProgressBar.vue";

export default {
    title: 'ProgressBar',
    component: ProgressBar,
};
export const Default = {
    args: {
        backgroundColor: '#f3f3f3',
        color: '#000',
        percentage: 50,
        width: '100%',
        height: '20px',
        rounded: false,
    },
};

export const CustomPercentage = {
    args: {
        backgroundColor: '#f3f3f3',
        color: '#000',
        percentage: 75,
        width: '100%',
        height: '20px',
        rounded: false,
    },
};

export const RoundedProgressBar = {
    args: {
        backgroundColor: '#f3f3f3',
        color: '#000',
        percentage: 60,
        width: '100%',
        height: '20px',
        rounded: true,
    },
};

export const ColoredProgressBar = {
    args: {
        backgroundColor: '#f3f3f3',
        color: '#ff5722',
        percentage: 40,
        width: '100%',
        height: '20px',
        rounded: false,
    },
};
