<template>
  <v-app>
    <v-main>
      <div class="d-flex flex-column align-center">
        <div class="text-h3">SALUTATIONS</div>
        <div v-for="sortName in SortingRoutes" :key="sortName.name">
          <v-btn class="my-3" @click="handleRoute(sortName.name)">{{
            sortName.name
          }}</v-btn>
        </div>
      </div>
    </v-main></v-app
  >
</template>

<script>
export default {
  name: "main_view",
  data: () => ({
    SortingRoutes: [
      { name: "Insertion Sort" },
      { name: "Merge Sort" },
      { name: "Quick Sort" },
    ],
  }),
  methods: {
    handleRoute(name) {
      let newRoute = name.replace(/\s/g, "_").toLowerCase();
      this.$router.push({
        name: `${newRoute}`,
      });
    },
  },
};
</script>
