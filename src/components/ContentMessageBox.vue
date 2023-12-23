<template>
  <button-component @click="openMessage">Open Message Box</button-component>

  <div class="message" ref="message" :style="{'background-color': backgroundColor, 'width': width}">
    <span class="closeBtn" @click="closeMessage">&times;</span>
      {{ text }}
  </div>
</template>

<script>

import ButtonComponent from "../components/ButtonComponent.vue";
  export default{
    components:{
      ButtonComponent
    },
    props: {
      backgroundColor: {
        type: String,
        default: '#46a8f5'
      },
      width: {
        type: String,
        default: "300px"
      },
      text:{
        type: String,
        default: "This is an message box"
      }
    },
    methods:{
      openMessage(){
          this.$refs.message.style.display = "block";
      },
      closeMessage(){
        this.$refs.message.style.display = "none";
      }
    }
  }
</script>

<style scoped>
  .message {
    display: none;
    position: fixed;
    left: 40%;
    top: 45%;
    padding: 20px;
    color: white;
  }

  .closeBtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }
</style>