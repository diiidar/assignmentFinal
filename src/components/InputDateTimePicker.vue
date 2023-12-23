<template>
  <div class="dateTimeInput">
    <label>{{ label }}</label>
    <input
      type="date"
      id="datepicker"
      v-model="selectedDate"
      :width="width"
      @input="updateDateTime"
    />
    <input
      type="time"
      id="timepicker"
      v-model="selectedTime"
      @input="updateDateTime"
    />

    <!--<p>Selected Date & Time: {{ selectedDateTime }}</p>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: '',
      selectedTime: '',
    };
  },
  props: {
      width: String,
      label: String,
  },
  computed: {
    selectedDateTime() {
      if (this.selectedDate && this.selectedTime) {
        return `${this.selectedDate} ${this.selectedTime}`;
      }
      return 'No date and time selected';
    },
  },
  methods: {
    updateDateTime() {
      // Handle any additional logic when date or time changes
      // You can access selectedDate and selectedTime here
      console.log('Date:', this.selectedDate);
      console.log('Time:', this.selectedTime);
    },
  },
};
</script>

<style scoped>
  .dateTimeInput{
    display: flex;
    gap: 20px;
  }
</style>
