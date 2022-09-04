<template>
  <v-app>
    <v-main>
      <div class="d-flex flex-column align-center">
        <div class="text-h3">Merge Sort</div>
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
  name: "MergeSort",
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

      // Recursive. This is a helper which divides arrays into smaller ones
      const mergeSort = (array) => {
        // Check if array can be split
        if (array.length < 2) {
          return array;
        }
        // Get middle index
        const middleIndex = Math.floor(array.length / 2);
        // Split array into two sides
        const leftSide = array.slice(0, middleIndex);
        const rightSide = array.slice(middleIndex);

        // Use recursion to continue splitting
        console.log("split:", leftSide, rightSide);
        return merge(mergeSort(leftSide), mergeSort(rightSide));
      };

      // leftSide and rightSide are sorted
      const merge = (left, right) => {
        // Create New Array
        const output = [];

        // Check if either array is empty
        while (left.length && right.length) {
          // Find lower value between 2 arrays
          if (left[0] <= right[0]) {
            // Add left value
            output.push(left.shift());
          } else {
            // Add right value
            output.push(right.shift());
          }
        }

        // Merge left array when right array is finished
        while (left.length) output.push(left.shift());

        // Merge right array when left array is finished
        while (right.length) output.push(right.shift());

        // Return result array
        console.log("result:", output);
        return output;
      };

      this.numSort = mergeSort(array);
    },
  },
};
// How it works
//    [1, 4, 2, 8, 345]
// [1, 4, 2]       [8, 345] mergeSort slice
// [1, 4]     [2]  [8] [345] mergeSort slice
// [1] [4]    [2]  [8] [345] mergeSort slice
//  [1, 4]     [2, 8]  [345] merge left and middle
//   [1, 2, 4, 8]     [345] merge left and middle
//    [1, 2, 4, 8, 345] merge right and return
</script>
