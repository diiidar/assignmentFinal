import Pagination from "../components/NavigationPagination.vue";
export default {
    title: 'Pagination',
    component: Pagination,
};
export const Default = {
    args: {
        totalItems: 100,
        itemsPerPage: 10,
        currentPage: 1,
        border: false,
    },
};

export const WithBorder = {
    args: {
        totalItems: 150,
        itemsPerPage: 15,
        currentPage: 1,
        border: true,
    },
};
