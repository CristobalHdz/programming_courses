<template>
  <v-app>
    <v-main>
      <div class="d-flex flex-column align-center">
        <div class="text-h3">Bubble Sort</div>
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
  name: "bubble_sort",
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

      // Which iteration we are on. THe -1 is because we dont need to check the last number
      for (let i = 0; i < array.length - 1; i++) {
        console.log("number check:", array[i]);
        // Checks the next number. It is -1 -i because we already checked the second iteration, this makes it not to cycle itself
        for (let j = 0; j < array.length - 1 - i; j++) {
          console.log("swapped with:", array[j + 1]);
          if (array[j] > array[j + 1]) {
            // Swap method
            const temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }

      this.numSort = array;
    },
  },
  // How it works
  // [6, 5, 3, 2, 4, 1]

  //  v                 position
  // [6, 5, 3, 2, 4, 1]
  // Greater than next index? Yes
  // [5, 6, 3, 2, 4, 1]

  //     v              position
  // [5, 6, 3, 2, 4, 1]
  // Greater than next index? Yes
  // [5, 3, 6, 2, 4, 1]

  //        v           position
  // [5, 3, 6, 2, 4, 1]
  // Greater than next index? Yes
  // [5, 3, 2, 6, 4, 1]

  //           v        position
  // [5, 3, 2, 6, 4, 1]
  // Greater than next index? Yes
  // [5, 3, 2, 4, 6, 1]

  //              v     position
  // [5, 3, 2, 4, 6, 1]
  // Greater than next index? Yes
  // [5, 3, 2, 4, 1, 6]

  //  v                 position
  // [5, 3, 2, 4, 1, 6]
  // Greater than next index? Yes
  // [3, 5, 2, 4, 1, 6]

  //     v              position
  // [3, 5, 2, 4, 1, 6]
  // Greater than next index? Yes
  // [3, 2, 5, 4, 1, 6]

  //        v           position
  // [3, 2, 5, 4, 1, 6]
  // Greater than next index? Yes
  // [3, 2, 4, 5, 1, 6]

  //           v        position
  // [3, 2, 4, 5, 1, 6]
  // Greater than next index? Yes
  // [3, 2, 4, 1, 5, 6]

  //              v     position
  // [3, 2, 4, 1, 5, 6]
  // Greater than next index? No

  //  v                 position
  // [3, 2, 4, 1, 5, 6]
  // Greater than next index? Yes
  // [2, 3, 4, 1, 5, 6]

  //     v              position
  // [2, 3, 4, 1, 5, 6]
  // Greater than next index? No

  //        v           position
  // [2, 3, 4, 1, 5, 6]
  // Greater than next index? Yes
  // [2, 3, 1, 4, 5, 6]

  //           v        position
  // [2, 3, 1, 4, 5, 6]
  // Greater than next index? No

  //              v     position
  // [2, 3, 1, 4, 5, 6]
  // Greater than next index? No

  //  v                 position
  // [2, 3, 1, 4, 5, 6]
  // Greater than next index? No

  //     v              position
  // [2, 3, 1, 4, 5, 6]
  // Greater than next index? Yes
  // [2, 1, 3, 4, 5, 6]

  // ...

  //  v                 position
  // [2, 1, 3, 4, 5, 6]
  // Greater than next index? Yes
  // [1, 2, 3, 4, 5, 6]

  // ...

  // [1, 2, 3, 4, 5, 6]
};
</script>
