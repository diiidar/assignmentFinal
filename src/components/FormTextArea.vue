<template>
  <div>
    <textarea v-model="message" placeholder="Type something..."
              :style="{'height':height, 'width':width, 'font-size':fontSize, 'resize':resize, 'padding':padding}"

    ></textarea>
<!--    <div>
<strong>Typed Message:</strong> {{ message }}
</div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  props: {
    width: String,
    height: String,
    fontSize: {
      type: String,
      default: "16px"
    },
    resize: {
      type: String,
      default: "none"
    },
    padding: {
      type: String,
      default: "5px 10px"
    }
  }
};
</script>

<style scoped>
  textarea {
    //margin: 20px;
  }
</style>
