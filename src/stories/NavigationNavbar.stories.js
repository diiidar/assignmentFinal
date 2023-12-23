import Navbar from "../components/NavigationNavbar.vue";
export default {
    title: 'Navbar',
    component: Navbar,
};

export const Default = {
};

export const WithCustomItems = {
    args: {
        navItems: ['Dashboard', 'Profile', 'Settings'],
        logo: "fa-rocket",
        title: "custom-title"
    },
};
