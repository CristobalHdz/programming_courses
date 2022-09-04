<template>
  <v-app>
    <v-main>
      <div class="d-flex flex-column align-center">
        <div class="text-h3">Selection Sort</div>
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
  name: "SelectionSort",
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

      const selectionSort = (array) => {
        // Locks number position
        for (let i = 0; i < array.length - 1; i++) {
          let minIndex = i;
          console.log(array[minIndex], "in turn:", i + 1);
          // Checks for the lowest number in the array
          //   Checks for the next number from position i. If there is a smaller than the position i, it will choose that one as smallest
          for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
              minIndex = j;
              console.log("Min. number:", array[minIndex], ", in turn:", j);
            }
          }
          // NEXT 3 LINES OF CODE SWAPS THE LOWEST NUMBER AND THE ARRAY POSITION
          // Temporal store of array[i]
          const temp = array[i];
          //   Changes array[i] for the min number
          array[i] = array[minIndex];
          // Changes the new minIndex for the temp store of array[i]
          array[minIndex] = temp;
        }
        return array;
      };

      this.numSort = selectionSort(array);
    },
  },
};
// How it works
// [6, 5, 3, 2, 4, 1]
// Starts from left to right checking for the lowest

// INDEX 0
//  v                   Position
// [6, 5, 3, 2, 4, 1]
//     ^                Index check

//     v                Position
// [6, 5, 3, 2, 4, 1]
//        ^             Index check

//        v             Position
// [6, 5, 3, 2, 4, 1]
//           ^          Index check

//           v          Position
// [6, 5, 3, 2, 4, 1]
//              ^       Index check

//           v          Position
// [6, 5, 3, 2, 4, 1]
//                 ^    Index check

//                 v    Position
// [6, 5, 3, 2, 4, 1]
//                 ^    Index check

// At the end, it swaps the lowest number with the current position
// [1, 5, 3, 2, 4, 6]
// Repeat with the next index of the array until compelted

// INDEX 1
//     v                Position
// [1, 5, 3, 2, 4, 6]
//     ^                Index check

//        v             Position
// [1, 5, 3, 2, 4, 6]
//     ^                Index check

//           v          Position
// [1, 5, 3, 2, 4, 6]
//        ^             Index check

//              v       Position
// [1, 5, 3, 2, 4, 6]
//           ^          Index check

//                 v    Position
// [1, 5, 3, 2, 4, 6]
//           ^          Index check

// [1, 2, 3, 5, 4, 6]

// INDEX 2
//        v             Position
// [1, 2, 3, 5, 4, 6]
//        ^             Index check

//           v          Position
// [1, 2, 3, 5, 4, 6]
//        ^             Index check

//              v       Position
// [1, 2, 3, 5, 4, 6]
//        ^             Index check

//                 v   Position
// [1, 2, 3, 5, 4, 6]
//        ^             Index check

// [1, 2, 3, 5, 4, 6]

// INDEX 3
//           v          Position
// [1, 2, 3, 5, 4, 6]
//           ^          Index check

//              v       Position
// [1, 2, 3, 5, 4, 6]
//           ^          Index check

//                 v    Position
// [1, 2, 3, 5, 4, 6]
//              ^       Index check

// [1, 2, 3, 4, 5, 6]

// INDEX 4
//              v       Position
// [1, 2, 3, 4, 5, 6]
//              ^       Index check

//                 v    Position
// [1, 2, 3, 4, 5, 6]
//              ^       Index check

// [1, 2, 3, 4, 5, 6]
</script>
