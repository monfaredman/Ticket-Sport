import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/Routes";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");

//components
import Header from "./Pages/Shared/Header.vue";
import Footer from "./Pages/Shared/Footer.vue";
import Index from "./views/Index.vue";
import AppSection1 from "./views/Sections/AppSection1.vue";
import Section2 from "./views/Sections/Section2.vue";
import Section3 from "./views/Sections/Section3.vue";
import Section4 from "./views/Sections/Section4.vue";
import Section5 from "./views/Sections/Section5.vue";
import Section6 from "./views/Sections/Section6.vue";
import Section7 from "./views/Sections/Section7.vue";
import Section8 from "./views/Sections/Section8.vue";
import Section9 from "./views/Sections/Section9.vue";

App.component(Header);
App.component(Footer);
App.component(Index);
App.component(AppSection1);
App.component(Section2);
App.component(Section3);
App.component(Section4);
App.component(Section5);
App.component(Section6);
App.component(Section7);
App.component(Section8);
App.component(Section9);

//css
import "./assets/css/main.css";
import "./assets/Font Icons/fontawesome-free-5.15.3-web/css/fontawesome.min.css";
import "./assets/Font Icons/fontawesome-free-5.15.3-web/css//all.min.css";

//bootstrap
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
