<template>
  <div class="image-carousel" :style="{'margin': margin, 'padding': padding}">
    <button @click="prevImage"><img src="../assets/arrow_left.svg" width="40px" alt=""></button>
    <img :src="images[currentIndex]" :width="width" :height="height" alt="Carousel Image" />
    <button @click="nextImage"><img src="../assets/arrow_right.svg" width="40px" alt=""></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
        'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
        'https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w',
      ],
    };
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
  props:{
    height: {
      type: String,
      default: "200px"
    },
    width: {
      type: String,
      default: "400px"
    },
    margin: String,
    padding: String
  }
};
</script>

<style scoped>
.image-carousel {
  text-align: center;
  position: relative;
  width: fit-content;
  margin: 10px}

img {
  max-width: 80%;
  max-height: 50%;
}

button {
  position: absolute;
  margin: 8px;
  background-color: #ffffff00;
  border: none;
}
button:nth-of-type(2){
  top: 47%;
  right: 10%;
}
button:nth-of-type(1){
  top: 47%;
}
</style>
