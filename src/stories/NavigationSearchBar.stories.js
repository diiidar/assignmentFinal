import SearchBar from "../components/NavigationSearchBar.vue";
export default {
    title: 'SearchBar',
    component: SearchBar,
};

export const Default = {
    args: {
        border: false,
        rounded: false,
        width: "300px",
        height: "30px",
        backgroundColor: "#f0f0f0"
    },
};

export const Rounded = {
    args: {
        border: false,
        rounded: true,
        width: "250px",
        height: "30px",
        backgroundColor: "#f0f0f0",
    },
};

export const WithBorder = {
    args: {
        border: true,
        rounded: false,
        width: "350px",
        height: "30px",
        backgroundColor: "#f0f0f0",
    },
};
