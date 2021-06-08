<template>
  <div class="special-match">
    <div class="special-back container">
      <div class="text-right text-nowrap brand-special">
        <h5 class="text-light">ویژه ها</h5>
        <li class="text-light"><span>بلیط های بازی های لیگ برتر</span></li>
      </div>
      <div class="row">
        <div class="card-match col-4" v-for="item in 2" :key="item">
          <div class="card-header">
            <img
              src="../../assets/Images/img-12.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="card-body row">
            <div class="m-auto text-center">
              <img
                src="../../assets/Images/img-14.png"
                class="img-fluid"
                alt=""
              />
              <p class="pt-3">پرسپولیس</p>
              <span>PERSPOLISE</span>
            </div>
            <div class="m-auto text-center">
              <img
                src="../../assets/Images/img-14.png"
                class="img-fluid"
                alt=""
              />
              <p class="pt-3">استقلال</p>
              <span>ESTEGHLAL</span>
            </div>
          </div>
          <div class="card-footer">
            <div class="footer-in row">
              <div>
                <p>ورزشگاه آزادی تهران</p>
              </div>
              <div class="date-topsite">
                <span>۲۷ دی</span>
              </div>
              <div>
                <span>۱۵:۳۰</span>
              </div>
            </div>
            <div class="button-topsite">
              <li>
                <a href="" class="btn btn-success btn-block text-center">
                  خرید بلیط

                  <i class="fas fa-angle-left"></i>
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
