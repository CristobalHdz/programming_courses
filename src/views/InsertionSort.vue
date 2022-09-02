<template>
  <v-app>
    <v-main>
      <div class="d-flex flex-column align-center">
        <div class="text-h3">Insertion Sort</div>
        <v-text-field v-model="One" outlined></v-text-field>
        <v-text-field v-model="Two" outlined></v-text-field>
        <v-text-field v-model="Three" outlined></v-text-field>
        <v-text-field v-model="Four" outlined></v-text-field>
        <v-text-field v-model="Five" outlined></v-text-field>
        <v-text-field v-model="Six" outlined></v-text-field>
        <v-btn @click="handleSort">Sort</v-btn>
        <v-btn class="my-3" :to="{ name: 'main_view' }">Go Back</v-btn>
        <div class="text-h4">{{ numSort }}</div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "insertion_sort",
  data: () => ({
    One: 6,
    Two: 5,
    Three: 3,
    Four: 2,
    Five: 4,
    Six: 1,
    numSort: null,
  }),
  methods: {
    handleSort() {
      let array = [
        parseInt(this.One),
        parseInt(this.Two),
        parseInt(this.Three),
        parseInt(this.Four),
        parseInt(this.Five),
        parseInt(this.Six),
      ];

      // Outside checks the number (i)
      for (let i = 1; i < array.length; i++) {
        // Inside checks the position (j). Checks the last number in the array against
        // the next one until it is the biggest to the right
        for (let j = i; j > 0; j--) {
          if (array[j] < array[j - 1]) {
            const temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            // One line for the loop. Same thing just in one line
            // [array[j], array[j - 1]] = [array[j - 1], array[j]];
          } else {
            break;
          }
        }
      }
      this.numSort = array;
    },
  },
};
</script>
