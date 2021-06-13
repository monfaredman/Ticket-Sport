<template>
  <div class="acount-login">
    <div class="sign-in">
      <div class="input">
        <li class="title">
          <p>ورود</p>
        </li>
        <li class="input-email">
          <p class="lable">پست الکترونیکی یا شماره همراه</p>
          <input type="email" v-model="state.email" @blur="v$.email.$touch" />
          <p
            class="email-errors invalid"
            v-for="error in v$.email.$errors"
            :key="error"
          >
            * {{ error.$message }}
          </p>
        </li>
        <li class="input-password">
          <p class="lable">رمز عبور</p>
          <input
            type="password"
            v-model="state.password"
            @blur="v$.password.$touch"
          />
          <p
            class="email-errors invalid"
            v-for="error in v$.password.$errors"
            :key="error"
          >
            * {{ error.$message }}
          </p>
        </li>
        <li class="input-button">
          <button class="btn btn-success" :disabled="v$.$invalid">ورود</button>
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
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  helpers,
  minLength,
  maxLength,
} from "@vuelidate/validators";
import { computed, reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      password: "",
      email: "",
    });
    const rules = computed(() => {
      return {
        password: {
          required: helpers.withMessage(
            "لطفا کلمه عبور را وارد کنید",
            required
          ),
          minLength: helpers.withMessage(
            "رمز عبور باید بیش از ۶ کاراکتر باشد",
            minLength(6)
          ),
        },
        email: {
          required: helpers.withMessage("لطفا ایمیل را وارد کنید", required),
          email: helpers.withMessage("ایمیل معتبر نمی باشد", email),
          minLength: helpers.withMessage(
            "ایمیل  باید کمتر از ۲۰ کاراکتر باشد",
            maxLength(20)
          ),
        },
      };
    });
    const v$ = useVuelidate(rules, state);

    return { state, v$, rules };
  },
};
</script>
<style>
.invalid {
  color: red;
}
</style>
