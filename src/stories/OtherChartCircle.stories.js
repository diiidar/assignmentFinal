import Circle from "../components/OtherChartCircle.vue";
export default {
    title: 'Circle',
    component: Circle,
    argTypes: {
        width: { control: 'text' },
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
        bold: { control: 'boolean' },
        height: { control: 'text' },
        margin: { control: 'text' },
        fontSize: { control: 'text' },
        border: { control: 'text' },
    },
};

export const Default = {
    args: {
        width: '20px',
        backgroundColor: '#007bff',
        color: '#fff',
        bold: true,
        height: '20px',
        margin: '5px',
        fontSize: '14px',
        border: '2px solid #007bff',
        text: 5
    },
};
