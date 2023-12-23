import Dropdown from "../components/ButtonDropdown.vue";
export default {
    title: 'Dropdown',
    component: Dropdown,
};
export const Default = {
    args: {
        dropdownItems: [
            { id: 1, label: 'Option 1' },
            { id: 2, label: 'Option 2' },
            { id: 3, label: 'Option 3' },
        ],
    },
};

export const OpenDropdown = {
    args: {
        isDropdownOpen: true,
    },
};
