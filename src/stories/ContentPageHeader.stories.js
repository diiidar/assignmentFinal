import PageHeader from "../components/ContentPageHeader.vue";

export default {
    title: 'PageHeader',
    component: PageHeader,
};

export const Default = {
    // Args to customize the component in the story
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
export const TallerHeader = {
    args: {
        title: 'Taller Page Header',
        backgroundColor: '#f2f2f2',
        height: '300px',
    },
};
