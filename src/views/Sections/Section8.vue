<template>
  <div class="comments container">
    <div class="brand-comment">
      <h4>نظرات کاربران</h4>
      <p>آنچه کاربران با #مهربانه به اشتراک گذاشته اند</p>
    </div>
    <div class="comments-items row">
      <div class="comments-item col-3" v-for="item in 4" :key="item">
        <li><i class="fas fa-quote-right"></i></li>
        <li>
          <span
            >تجربه خرید راحت و بی دردسر بلیط ورزشگاه از
            <span class="text-success">#تیکت-اسپرت</span> به صورت آنلاین واقعا
            جذاب بود :</span
          >
        </li>
      </div>
    </div>
    <div class="user-comment row">
      <div class="comment-users row" v-for="item in 4" :key="item">
        <ul class="comment-user">
          <img class="img-fluid" src="../../assets/Images/img-16.jpg" alt="" />
        </ul>
        <ul class="comment-user">
          <li>
            <p>مسلم حسین پور</p>
          </li>
          <li>
            <p>۲۳ خرداد | توییتر</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
