<template>
  <div class="comments-main">
    <div class="comment-alert">
      <div class="payment-comments">
        <li class="span1">
          <i id="icon" class="far fa-comment-alt"></i>
        </li>
        <li class="span2">
          <span>فقط اعضای تیکت اسپرت میتوانند نظر دهند</span>
        </li>
        <li class="span3"><a href="">ثبت نام &nbsp; و &nbsp; ورود</a></li>
        <li class="span4"><i class="fas fa-angle-left"></i></li>
      </div>
      <div class="comment-point">
        <p>
          <i class="fas fa-star icon-fill" v-for="item in 3" :key="item"></i>
          <i class="fas fa-star icon-empty" v-for="item in 2" :key="item"></i>
        </p>
      </div>
      <div class="send-comment1">
        <div class="user-detail">
          <li>
            <span><img src="../../assets/Images/img-16.jpg" alt="" /> </span
            ><span id="name">مسلم حسین پور</span
            ><span id="text"
              >نظرات برامون مهمه.امتیاز و نظرات شما کیفیت بازی را مشخص
              میکند</span
            >
          </li>
        </div>
        <div class="user-text">
          <li>
            <span
              >با شیوع کرونا و توصیه به ماندن در خانه بسیاری از کسب و کارها
              تعطیل و عده‌ای نیز بیکار شدند، در این میان اقشار آسیب‌پذیری هستند
              که به صورت روزمزد کار می‌کردند و این وضعیت دشواری مضاعف برای آنها
              ایجاد کرده و خانواده‌هایشان با مشکل معیشتی مواجه شده اند. بنیاد
              خیرین مدرس از از دانشگاهیان می خواهد در این شرایط به یاری همنوعان
              بشتابند و در پویش همگانی "درخواست کسر حقوق" به صورت روزانه یا
              درصدی از حقوق این ماه برای تهیه بسته‌های معیشتی ویژه، شرکت کرده و
              مرهمی بر زخم آسیب دیدگان شرایط حاضر باشند.</span
            >
          </li>
        </div>
        <div class="submit">
          <button class="btn">ارسال دیدگاه</button>
        </div>
      </div>

      <div class="send-comment2" v-for="item in 2" :key="item">
        <div class="user-detail2">
          <li>
            <img src="../../assets/Images/img-16.jpg" alt="" /><span id="name2"
              >محمد کارت</span
            ><span id="text2">| ۲۲ اردیبهشت ۹۶</span>
          </li>
        </div>
        <div class="user-text2">
          <li>
            <span
              >بنیاد خیرین مدرس در شرایط وخیم شیوع ویروس کرونا در کشور و ناتوانی
              خانواده‌های کم‌درآمد و بی‌بضاعت در تأمین معیشت خود از دانشگاهیان
              خواست در پویش همگانی "درخواست کسر حقوق" برای کمک به اقشار آسیب
              دیده شرکت کنند. .</span
            >
          </li>
        </div>
        <div class="submit2">
          <li class="reply-icon">
            <span class="ml-2"><i class="fas fa-reply"></i></span
            ><span>پاسخ</span>
          </li>
          <li class="dislike-icon">
            <span class="ml-2"><i class="far fa-thumbs-down"></i></span
            ><span>۵</span>
          </li>
          <li class="like-icon">
            <span class="ml-2"><i class="far fa-thumbs-up"></i></span
            ><span>۲۳</span>
          </li>
          <li class="alert-icon">
            <span class="ml-2"><i class="fas fa-exclamation-circle"></i></span
            ><span>گزارش</span>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
