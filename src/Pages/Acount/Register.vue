<template>
  <div class="acount-register">
    <div class="sign-up">
      <div class="input">
        <li class="title">
          <p>ثبت نام</p>
        </li>
        <li class="input-name">
          <p>نام</p>
          <input type="text" />
        </li>
        <li class="input-lastName">
          <p>نام خانوادگی</p>
          <input type="text" />
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
          <button class="btn btn-success">ثبت نام</button>
        </li>
        <li class="input-underB">
          <p>
            با ثبت نام پذیرش
            <span> قوانین شرایط استفاده و محرمانگی </span>
            را اعلام می کنید
          </p>
        </li>
      </div>

      <div class="title">
        <li class="head-title">
          <p>تیکت اسپرت</p>
        </li>
        <li class="head-text">
          <p>اگر در تیکت اسپرت ثبت نام کرده اید <br />از اینجا وارد شوید</p>
        </li>
        <li class="head-enter">
          <router-link to="/login" class="btn btn-dark"
            >ورود به سایت</router-link
          >
        </li>
        <li class="head-enter2">
          <button class="btn btn-light">ثبت نام با گوگل</button>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
