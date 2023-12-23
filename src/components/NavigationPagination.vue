<template>
  <nav>
    <ul class="pagination">
      <li :class="{ disabled: current === 1 }" @click="goToPage(current - 1)">
        <content-icon icon-name="fa-caret-left" font-size="24px"></content-icon>
      </li>

      <li v-for="page in totalPages" :key="page" :class="{ active: page === current }" :style="{'border': border ? '1px solid #ccc' : 'none'}" @click="goToPage(page)">
        <span>{{ page }}</span>
      </li>

      <li :class="{ disabled: current === totalPages }" @click="goToPage(current + 1)">
        <content-icon icon-name="fa-caret-right" font-size="24px"></content-icon>
      </li>
    </ul>
  </nav>
</template>

<script>
import ContentIcon from "../components/ContentIcon.vue";
export default {
  components: {
    ContentIcon
  },
  data(){
    return{
      current: this.currentPage
    }
  },
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    }
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages && page !== this.current) {
        this.current = page;
      }
    }
  }
};
</script>

<style scoped>
/* Add your styling for the pagination here */
nav {
  margin-top: 15px;
}

ul.pagination {
  display: flex;
  list-style-type: none;
  padding: 0;
}

li {
  margin-right: 5px;
  cursor: pointer;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
}

li.active {
  background-color: #007bff;
  color: #fff;
}

li.disabled {
  cursor: not-allowed;
  color: #ccc;
}

span {
  vertical-align: middle;
}
</style>
