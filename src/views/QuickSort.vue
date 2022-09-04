<template>
  <v-app>
    <v-main>
      <div class="d-flex flex-column align-center">
        <div class="text-h3">Quick Sort</div>
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
  name: "QuickSort",
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

      const quickSort = (array) => {
        // Return if array is less or equals to 1
        if (array.length <= 1) {
          return array;
        }

        // The pivot is taken as the right most number. This can be changed to whatever the user wants
        const pivot = array[array.length - 1];
        const leftArr = [];
        const rightArr = [];

        // For loop that checks if the number is greater or less than the pivot.
        // Less than pivot goes to the left array and more than pivot goes to the right array
        for (let i = 0; i < array.length - 1; i++) {
          if (array[i] < pivot) {
            leftArr.push(array[i]);
          } else {
            rightArr.push(array[i]);
          }
        }

        // Adds the two arrays and the pivot together
        if (leftArr.length > 0 && rightArr.length > 0) {
          return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
        } else if (leftArr.length > 0) {
          // If there is no right array(numbers greater than the pivot) this triggers
          return [...quickSort(leftArr), pivot];
        } else {
          // If there is no left array(numbers less than the pivot) this triggers
          return [pivot, ...quickSort(rightArr)];
        }
      };
      this.numSort = quickSort(array);
    },
  },
};
// How it works
// [7, 8, 7 ,4 ,10, 3, 5]
// Pivot: 5. It is supposed to be better when the pivot is at the middle, but in large arrays is complicated.
// This time we got the right most number
//  [4, 3] [5] [7, 8, 7, 10]
//  4 pivot for left and 10 pivot for right
//  [3] [4] [5] [7, 8, 7] [10]
//  Pivot: 7
// [3] [4] [5] [7] [7] [8] [10]
// Put them together
// [3, 4, 5, 7, 7, 8, 10]
</script>
