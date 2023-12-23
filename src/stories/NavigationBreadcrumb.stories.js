import Breadcrumb from "../components/NavigationBreadcrumb.vue";

export default {
    title: 'Breadcrumb',
    component: Breadcrumb,
};

export const Default = {
    args: {
        items: ['Home', 'Category', 'Subcategory'],
        fontSize: '16px',
        color: '#000',
        backgroundColor: '#f5f5f5',
    },
};
