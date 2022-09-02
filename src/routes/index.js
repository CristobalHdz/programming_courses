import InsertionSort from "../views/InsertionSort.vue";
import MergeSort from "../views/MergeSort.vue";
import MainView from "../views/MainView.vue";

export default [
  { path: "/", name: "main_view", component: MainView },
  { path: "/insertion_sort", name: "insertion_sort", component: InsertionSort },
  { path: "/merge_sort", name: "merge_sort", component: MergeSort },
];
