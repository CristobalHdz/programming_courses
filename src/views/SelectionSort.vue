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

      this.numSort = array;
    },
  },
};
// How it works
</script>
