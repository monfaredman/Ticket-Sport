import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/Routes";
import { store } from "./store/store";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
//components

//Index
import Header from "./Pages/Shared/Header.vue";
import Footer from "./Pages/Shared/Footer.vue";
import Index from "./views/Index.vue";

app.component(Header);
app.component(Footer);
app.component(Index);

//pages
import Payment from "./Pages/Payment/Payment.vue";
import FinalPayment from "./Pages/Payment/FinalPayment.vue";
import SuccessPayment from "./Pages/Payment/SuccessPayment.vue";
import UnsuccessPayment from "./Pages/Payment/UnsuccessPayment.vue";
import Register from "./Pages/Acount/Register.vue";
import Login from "./Pages/Acount/Login.vue";

app.component(Payment);
app.component(FinalPayment);
app.component(SuccessPayment);
app.component(UnsuccessPayment);
app.component(Register);
app.component(Login);

//css
import "./assets/css/main.css";
import "./assets/Font Icons/fontawesome-free-5.15.1-web/css/all.min.css";
// import "./assets/Font Icons/fontawesome-free-5.15.1-web/js/all.min";

//bootstrap
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
