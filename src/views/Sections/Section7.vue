<template>
  <div class="sport-magazine container">
    <div class="magazine-brand">
      <h4>مجله ورزشی</h4>

      <span>بریده هایی از وبلاگ و اخبار ورزشی تیکت اسپرت</span>
    </div>
    <div>
      <div class="row">
        <div class="card-match col-4" v-for="item in 3" :key="item">
          <div class="card-header">
            <img
              src="../../assets/Images/img-15.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="card-body">
            <li>
              <span>اسکوچیچ: گربه سیاه تیم ملی را شکست دادیم</span>
            </li>
            <li class="date-magazine text-center">
              <p>00:15 - 1400/3/18</p>
            </li>
            <li>
              <span
                >اسکوچیچ در پاسخ به این سوال که انتظار چنین بازی را داشتید؟گفت:
                قبلا هم گفته بودم که تیم بحرین قابل احترام است و ما تلاش خیلی
                زیادی کردیم که برای دیدار آماده شویم. نباید فراموش کنیم که تیم
                ملی ایران در رده بندی فیفا در جایگاه خوبی قرار دارد و تیم قابل
                احترامی است.</span
              >
            </li>
          </div>
          <div class="card-footer">
            <div class="button-topsite">
              <li>
                <a href="" class="btn btn-success btn-block text-center">
                  ادامه مطلب

                  <i class="fas fa-angle-left"></i>
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="social-icons row">
      <div class="social-icons-magazine row" v-for="item in 3" :key="item">
        <li class="text-nowrap ml-3"><span>بازنشر کنید</span></li>
        <li class="">
          <span><i class="fab fa-telegram-plane fa-1x"></i></span>
        </li>
        <li class="">
          <span><i class="fab fa-twitter fa-1x"></i></span>
        </li>
        <li class="">
          <span><i class="fab fa-instagram fa-1x"></i></span>
        </li>
        <li class="">
          <span><i class="fab fa-facebook-square fa-1x"></i></span>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
