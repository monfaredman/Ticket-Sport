<template>
  <div>
    <Header />
    <router-view> </router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./Pages/Shared/Header.vue";
import Footer from "./Pages/Shared/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
