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
            <li><a href="" class="">باشگاها</a></li>
            <li><a href="" class="">دسته بندی ها</a></li>
            <li><a href="" class="">وبلاگ ها</a></li>
            <li><a href="" class="">ارتباط با ما</a></li>
          </div>
          <div class="acount-box">
            <li href=""><i class="far fa-user-circle"></i></li>
            <li class="login">ورود |</li>
            <li href="" class="pl-2">ثبت نام</li>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
