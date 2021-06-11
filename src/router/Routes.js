import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import payment from "../Pages/Payment/Payment.vue";
import FinalPayment from "../Pages/Payment/FinalPayment.vue";
import SuccessPayment from "../Pages/Payment/SuccessPayment.vue";
import UnsuccessPayment from "../Pages/Payment/UnsuccessPayment.vue";
import Register from "../Pages/Acount/Register.vue";
import Login from "../Pages/Acount/Login.vue";
const routes = [
  { path: "/", component: Index },
  { path: "/payment", component: payment },
  { path: "/finalpayment", component: FinalPayment },
  { path: "/successpayment", component: SuccessPayment },
  { path: "/unsuccesspayment", component: UnsuccessPayment },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
