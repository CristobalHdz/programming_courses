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

      // leftArr and rightArr are sorted
      const merge = (leftArr, rightArr) => {
        const output = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
          const leftEl = leftArr[leftIndex];
          const rightEl = rightArr[rightIndex];

          if (leftEl < rightEl) {
            output.push(leftEl);
            leftIndex++;
          } else {
            output.push(rightEl);
            rightIndex++;
          }
        }
        return [
          ...output,
          ...leftArr.slice(leftIndex),
          ...rightArr.slice(rightIndex),
        ];
      };

      // Recursive. This is a helper which divides arrays into smaller ones
      const mergeSort = (array) => {
        if (array.length <= 1) {
          return array;
        }
        const middleIndex = Math.floor(array.length / 2);
        const leftArr = array.slice(0, middleIndex);
        const rightArr = array.slice(middleIndex);

        return merge(mergeSort(leftArr), mergeSort(rightArr));
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
