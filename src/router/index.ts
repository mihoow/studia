import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FractionsPowersRoots from "../views/FractionsPowersRoots.vue";
import LinearQuadraticFunction from "../views/LinearQuadraticFunction.vue";
import PolynomialsRationalFunction from "../views/PolynomialsRationalFunction.vue";
import Trigonometry from "../views/Trigonometry.vue";
import ExponentialFunction from "../views/ExponentialFunction.vue";
import LogarithmicFunction from "../views/LogarithmicFunction.vue";
import Vectors from "../views/Vectors.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/ulamek-potegi-pierwiastki", component: FractionsPowersRoots },
  { path: "/funkcja-liniowa-kwadratowa", component: LinearQuadraticFunction },
  {
    path: "/wielomiany-funkcja-wymierna",
    component: PolynomialsRationalFunction,
  },
  { path: "/trygonometria", component: Trigonometry },
  { path: "/funkcja-wykladnicza", component: ExponentialFunction },
  { path: "/funkcja-logarytmiczna", component: LogarithmicFunction },
  { path: "/wektory", component: Vectors },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
