<template style="width: 100%">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      isChecked: false,
      tableData: [
        { column1: 1, column2: 'column2', column3: 'column3', column4: 'column4',},
        { column1: 2, column2: 'column2', column3: 'column3', column4: 'column4',},
        { column1: 3, column2: 'column2', column3: 'column3', column4: 'column4',},
      ],
      listItems: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ],
      totalItems: 100,
      itemsPerPage: 10,
      currentPage: 1
    }
  },
  methods: {
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
  ul{
    margin: 0;
    padding: 0;
  }
</style>
