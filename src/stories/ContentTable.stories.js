import TableContainer from "../components/ContentTable.vue";
export default {
    title: 'TableContainer',
    component: TableContainer,
};
export const Default = {
    args: {
        data: [
            { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4' },
            { column1: 'Data 5', column2: 'Data 6', column3: 'Data 7', column4: 'Data 8' },
            { column1: 'Data 9', column2: 'Data 10', column3: 'Data 11', column4: 'Data 12' },
        ],
        width: '80%',
    },
};

export const CustomData = {
    args: {
        data: [
            { column1: 'Custom 1', column2: 'Custom 2', column3: 'Custom 3', column4: 'Custom 4' },
            { column1: 'Custom 5', column2: 'Custom 6', column3: 'Custom 7', column4: 'Custom 8' },
            { column1: 'Custom 9', column2: 'Custom 10', column3: 'Custom 11', column4: 'Custom 12' },
        ],
        width: '80%',
    },
};

export const NarrowWidth = {
    args: {
        data: [
            { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4' },
            { column1: 'Data 5', column2: 'Data 6', column3: 'Data 7', column4: 'Data 8' },
            { column1: 'Data 9', column2: 'Data 10', column3: 'Data 11', column4: 'Data 12' },
        ],
        width: '60%',
    },
};