<template>
  <div class="hottest-match container">
    <div class="brand-hottest text-right">
      <h4>داغ ترین بازی ها</h4>
    </div>
    <div class="two-matches">
      <div class="card col-6" v-for="item in 2" :key="item">
        <div class="card-header">
          <div>
            <img
              src="../../assets/Images/img-1.jpeg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="footer-in2 mr-3">
            <li class="text-right mt-2 mr-3">
              <p>ورزشگاه آزادی تهران</p>
            </li>
            <li class="mr-3 mt-3">
              <h6 class="text-nowrap"><b>۲۷</b> دی ماه ۱۳۹۶</h6>
            </li>
            <li class="mt-3 mr-4 ml-2">
              <h6>ساعت <b>۱۵:۳۰</b></h6>
            </li>
          </div>
        </div>
        <div class="card-body text-center row">
          <div class="m-auto text-center">
            <img
              src="../../assets/Images/img-14.png"
              class="img-fluid"
              alt=""
            />
            <h4 class="pt-3">پرسپولیس</h4>
            <p>PERSPOLISE</p>
          </div>
          <div class="m-auto text-center">
            <img
              src="../../assets/Images/img-14.png"
              class="img-fluid"
              alt=""
            />
            <h4 class="pt-3">استقلال</h4>
            <p>ESTEGHLAL</p>
          </div>
        </div>
        <div class="card-footer mt-2">
          <div class="firts-footer row">
            <div class="seat">
              <li>
                <h5 class="mr-3">۵۳۵ صندلی</h5>
              </li>
              <li>
                <span class="mr-2">از ۸۰۰ صندلی ورزشگاه پر شده است</span>
              </li>
            </div>
            <div class="seat">
              <li>
                <h5 class="mr-5 text-dark">۸ روز</h5>
              </li>
              <li><span h5 class="ml-5">زمان باقی مانده</span></li>
            </div>
          </div>
          <div class="second-footer row">
            <div class="social-icons">
              <li class="d-inline-block text-right text-nowrap mr-2">
                <span>بازنشر کنید</span>
              </li>
              <li class="d-inline-block mr-5">
                <span><i class="fab fa-telegram-plane fa-1x"></i></span>
              </li>
              <li class="d-inline-block">
                <span><i class="fab fa-twitter fa-1x"></i></span>
              </li>
              <li class="d-inline-block">
                <span><i class="fab fa-instagram fa-1x"></i></span>
              </li>
              <li class="d-inline-block">
                <span><i class="fab fa-facebook-square fa-1x"></i></span>
              </li>
            </div>
            <div class="hottest-button">
              <li class="mx-3 text-center">
                <a href="" class="btn btn-success btn-block text-center">
                  <div>
                    <div>خرید بلیط</div>
                    <div>
                      <span><i class="fas fa-angle-left"></i></span>
                    </div>
                  </div>
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
