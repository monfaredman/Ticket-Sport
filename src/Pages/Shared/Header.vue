<template>
  <header>
    <div class="header container">
      <nav class="navbar">
        <div class="nav-item navbar-brand">
          <router-link to="/">تیکت اسپرت</router-link>
        </div>
        <button
          class="nav-item btn btn-primary d-lg-none d-xl-none"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <span class="navbar-icon">
            <i class="fas fa-bars"> </i>
          </span>
        </button>
        <div class="nav-item d-lg-grid collapse" id="collapseExample">
          <div class="search-box">
            <input type="serach" class="form-control" placeholder="جستجو" />
          </div>
          <div class="menu">
            <li>
              <router-link to="/login" href="" class="">باشگاها</router-link>
            </li>
            <li><a href="" class="">دسته بندی ها</a></li>
            <li><a href="" class="">وبلاگ ها</a></li>
            <li><a href="" class="">ارتباط با ما</a></li>
          </div>
          <div
            class="acount-box"
            :class="{ headerStylePaynent: paymentRouteBo }"
          >
            <router-link to="/login">
              <li href=""><i class="far fa-user-circle"></i></li>
              <li class="login">ورود |</li>
              <li href="">ثبت نام</li>
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      paymentRouteBo: false,
    };
  },
  methods: {},
  beforeEnter() {
    if (window.location.href == "http://localhost:8080/payment") {
      this.paymentRouteBo = true;
      console.log("paymentRouteBo");
    } else {
      this.paymentRouteBo = false;
      console.log("noooooooo");
    }
  },
};
</script>

<style scoped>
.headerStylePaynent {
  background-color: #000000c0 !important;
  opacity: 0.8 !important;
}
</style>
