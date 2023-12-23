<template>
  <div class="card" :style="{'width': width, 'height': height}">
    <img :src="imageSrc" alt="Card Image" class="card-image" />
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    width: String,
    height: String,
  },
};
</script>

<style scoped>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 20px;
    width: 300px;
  }

  .card-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .card-content {
    padding: 16px;
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 8px 0;
    color: #555;
  }
</style>
