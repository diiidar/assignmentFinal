<template>
    <div>
      <ul :style="{'gap':gap}" style="padding: 0; margin: 0">
        <li v-for="i in liLength" :key="i">
          <button-component>button</button-component>
        </li>
      </ul>
    </div>
</template>

<script>
import ButtonComponent from "../components/ButtonComponent.vue";
export default {
  data(){
    return {
      liLength: this.length
    }
  },
  components: {
    ButtonComponent
  },
  props: {
    length: {
      type: Number,
      default: 3
    },
    gap: {
      type: String,
      default: "10px"
    },
  }
};
</script>

<style scoped>
  ul{
    position: relative;
    width: fit-content;
    background-color: #fff;
    border: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    marker: none;
  }
  li::marker{
    color: #ffffff00;
  }
</style>