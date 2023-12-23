import Tabs from "../components/NavigationTabs.vue";

export default {
    title: 'Tabs',
    component: Tabs,
};

export const Default = {
    args: {
        activeTab: 0,
        tabs: [
            { title: 'Tab 1', content: 'Content for Tab 1' },
            { title: 'Tab 2', content: 'Content for Tab 2' },
            { title: 'Tab 3', content: 'Content for Tab 3' }
        ],
    },
};
