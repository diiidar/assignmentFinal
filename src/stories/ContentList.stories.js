import ListContainer from "../components/ContentList.vue";
export default {
title: 'ListContainer',
component: ListContainer,
};

export const Default = {
args: {
items: [
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' },
],
width: "300px",
liHeight: "auto",
},
};
export const LongerList = {
args: {
items: [
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' },
{ id: 4, name: 'Item 4' },
{ id: 5, name: 'Item 5' },
],
width: "400px",
liHeight: "auto",
},
};
export const CustomItemHeight = {
args: {
items: [
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' },
],
width: "350px",
liHeight: "50px",
},
};
