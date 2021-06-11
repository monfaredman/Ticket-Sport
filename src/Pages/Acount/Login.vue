<template>
  <div class="acount-login">
    <div class="sign-in">
      <div class="input">
        <li class="title">
          <p>ورود</p>
        </li>
        <li class="input-email">
          <p>پست الکترونیکی یا شماره همراه</p>
          <input type="email" />
        </li>
        <li class="input-password">
          <p>رمز عبور</p>
          <input type="password" />
          <p></p>
        </li>
        <li class="input-button">
          <button class="btn btn-success">ورود</button>
        </li>
        <li class="input-button2">
          <button class="btn btn-success">
            رمز عبور یا نام کاربری خود را فراموش کرده اید؟
          </button>
        </li>
      </div>

      <div class="title">
        <li class="head-title">
          <p>تیکت اسپرت</p>
        </li>
        <li class="head-text">
          <p>اگر هنوز در تیکت اسپرت عضو نیستید <br />از اینجا وارد شوید</p>
        </li>
        <li class="head-enter">
          <router-link to="/register" class="btn">ثبت نام</router-link>
        </li>
        <li class="head-enter2">
          <button class="btn btn-light">ورود با گوگل</button>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
