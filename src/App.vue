<template>
  <div>
    <Header />
    <Index />
    <AppSection1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Section8 />
    <Section9 />
    <Footer />
  </div>
</template>

<script>
import Header from "./Pages/Shared/Header.vue";
import Footer from "./Pages/Shared/Footer.vue";
import Index from "./views/Index.vue";
import AppSection1 from "./views/Sections/AppSection1";
import Section2 from "./views/Sections/Section2";
import Section3 from "./views/Sections/Section3";
import Section4 from "./views/Sections/Section4";
import Section5 from "./views/Sections/Section5";
import Section6 from "./views/Sections/Section6";
import Section7 from "./views/Sections/Section7";
import Section8 from "./views/Sections/Section8";
import Section9 from "./views/Sections/Section9";

export default {
  components: {
    Header,
    Footer,
    Index,
    AppSection1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
    Section9,
  },
};
</script>
