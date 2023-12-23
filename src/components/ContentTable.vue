<template>
  <div class="table-container" :style="{'width': width}">
    <table>
      <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
        <th>Column 4</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in data" :key="item.column1">
        <td>{{ item.column1 }}</td>
        <td>{{ item.column2 }}</td>
        <td>{{ item.column3 }}</td>
        <td>{{ item.column4 }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
    width: String,
  },
};
</script>

<style scoped>
.table-container {
  width: 80%;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 0;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
