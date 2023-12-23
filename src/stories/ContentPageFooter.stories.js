// Import the PageHeader component
import PageFooter from "../components/ContentPageFooter.vue";

export default {
    title: 'PageFooter',
    component: PageFooter,
};

export const Default = {
    args: {
        title: 'Page Title',
        backgroundColor: '#f2f2f2',
        height: '200px',
    },
};


export const ColoredBackground = {
    args: {
        title: 'Page Title with Colored Background',
        backgroundColor: '#a5d8ff',
        height: '200px',
    },
};
export const TallerFooter = {
    args: {
        title: 'Taller Page Footer',
        backgroundColor: '#f2f2f2',
        height: '300px',
    },
};
