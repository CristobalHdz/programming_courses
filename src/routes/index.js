import InsertionSort from "../views/InsertionSort.vue";
import MergeSort from "../views/MergeSort.vue";
import MainView from "../views/MainView.vue";
import QuickSort from "../views/QuickSort.vue";
import SelectionSort from "../views/SelectionSort.vue";

export default [
  { path: "/", name: "main_view", component: MainView },
  { path: "/insertion_sort", name: "insertion_sort", component: InsertionSort },
  { path: "/merge_sort", name: "merge_sort", component: MergeSort },
  { path: "/quick_sort", name: "quick_sort", component: QuickSort },
  { path: "/selection_sort", name: "selection_sort", component: SelectionSort },
];
