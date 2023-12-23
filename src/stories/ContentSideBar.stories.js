import SideBar from "../components/ContentSideBar.vue";

export default {
    title: 'Sidebar',
    component: SideBar,
};

export const Default = {
    args: {
        backgroundColor: '#2b2b2b',
        color: '#fff',
        width: '200px',
        padding: '10px',
    },
};

export const CustomWidth = {
    args: {
        backgroundColor: '#2b2b2b',
        color: '#fff',
        width: '300px',
        padding: '10px',
    },
};

export const StyledMenu = {
    args: {
        backgroundColor: '#333',
        color: '#fff',
        width: '250px',
        padding: '20px',
    },
};

export const ColoredText = {
    args: {
        backgroundColor: '#2b2b2b',
        color: '#00bcd4',
        width: '200px',
        padding: '10px',
    },
};
