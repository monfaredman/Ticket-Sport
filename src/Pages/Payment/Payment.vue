<template>
  <div class="payment">
    <div class="payment-main w-100">
      <div class="top-main w-100">
        <div class="container">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
            data-bs-touch="false"
            data-bs-interval="false"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../../assets/Images/img-52.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../../assets/Images/img-52.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../../assets/Images/img-52.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>

          <div class="payment-first-card col-3">
            <div class="payment-first-card-header">
              <p class="stadium">ورزشگاه آزادی تهران</p>
              <p class="teams">پرسپولیس / استقلال</p>
              <p class="brand">شهرآورد دی ماه ۱۴۰۰</p>
              <li class="date row">
                <p class="d-inline-block w-50">تاریخ:۲۷ دی ماه</p>
                <p class="d-inline-block w-50">ساعت:۱۵:۳۰</p>
              </li>
            </div>
            <div class="payment-first-card-body">
              <div class="stars row">
                <li class="star d-inline-block w-50">
                  <p>
                    <i class="fas fa-star" v-for="item in 3" :key="item"></i>
                    <i
                      class="far fa-star text-dark"
                      v-for="item in 2"
                      :key="item"
                    ></i>
                  </p>
                  <p>شما به همراه ۳۲ نفر رای داده ید</p>
                </li>
                <li class="comments-star d-inline-block w-50">
                  <p>۲۵</p>
                  <p>نظر برای این مسابقه</p>
                </li>
              </div>
            </div>
            <div class="payment-first-card-footer">
              <button class="btn btn-success btn-block w-100">
                <i class="fas fa-angle-left"></i>خرید بلیط
              </button>
              <ul class="socials row">
                <li class="d-inline-block w-25">بازنشر کنید</li>
                <li class="d-inline-block w-50">
                  <i class="fab fa-instagram"></i>
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-telegram"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="color-back">
        <div class="payment-main2 container">
          <div class="right-section">
            <div class="payment-comments">
              <li class="span1">
                <i id="icon" class="far fa-comment-alt"></i>
              </li>
              <li class="span2">
                <span
                  >فقط اعضای تیکت اسپرت میتوانند از خدمات سایت بهره مند
                  شوند</span
                >
              </li>
              <li @click="showComments()" class="span3">
                <a href="">ثبت نام / وارد شوید</a>
              </li>
              <li class="span4"><i class="fas fa-angle-left"></i></li>
            </div>
            <div class="fans">
              <div class="fan-team">
                <span>۲.طرفدار کدام تیم هستید؟</span>
              </div>
              <div class="teams">
                <button class="perspolisBtn" @click="selectPerspolise()">
                  <span>پرسپولیس</span>
                </button>
                <div></div>
                <button class="esteghlalBtn" @click="selectEsteghlal()">
                  <span>استقلال</span>
                </button>
              </div>
            </div>
            <div class="stadium-location">
              <div class="location-question">
                <span>۲. کدام ناحیه از ورزشگاه؟</span>
              </div>
              <div class="location-main" style="">
                <div class="location-map">
                  <img
                    src="../../assets/Images/img-23.jpg"
                    usemap="#image-map"
                  />

                  <map name="image-map">
                    <area
                      target=""
                      alt=""
                      title=""
                      href=""
                      coords="147,133,580,68"
                      shape=""
                      id="ga"
                    />
                    <area
                      target=""
                      alt=""
                      title=""
                      href=""
                      coords="149,135,59,380"
                      shape=""
                      id="ga"
                    />
                    <area
                      target=""
                      alt=""
                      title=""
                      href=""
                      coords="673,134,577,380"
                      shape=""
                      id="ga"
                    />
                    <area
                      target=""
                      alt=""
                      title=""
                      href=""
                      coords="104,452,59,451,59,381,149,380"
                      shape="poly"
                      id="ga"
                    />
                    <area
                      target=""
                      alt=""
                      title=""
                      href=""
                      coords="673,454,616,452,577,380,674,381"
                      shape="poly"
                      id="ga"
                    />
                    <area
                      target=""
                      alt=""
                      title=""
                      href=""
                      coords="675,126,576,137,576,67"
                      shape="poly"
                      id="ga"
                    />
                    <area
                      target=""
                      alt=""
                      title=""
                      href=""
                      coords="149,136,52,123,149,68"
                      shape="poly"
                      id="ga"
                    />
                    <area
                      target=""
                      alt="3"
                      title="3"
                      href="#"
                      coords="325,452,399,452,399,384,374,383,373,402,353,402,355,385,326,384"
                      shape="poly"
                      id="three"
                    />
                    <area
                      target=""
                      alt="4"
                      title="4"
                      href="#"
                      coords="272,453,324,453,324,389,286,389,287,382,272,383"
                      shape="poly"
                      id="four"
                    />
                    <area
                      target=""
                      alt="2"
                      title="2"
                      href="#"
                      coords="399,453,456,453,455,382,441,380,443,387,399,388"
                      shape="poly"
                      id="two"
                    />
                    <area
                      target=""
                      alt="1"
                      title="1"
                      href="#"
                      coords="455,454,514,456,514,383,455,383"
                      shape="poly"
                      id="one"
                    />
                    <area
                      target=""
                      alt="5"
                      title="5"
                      href="#"
                      coords="217,455,271,455,272,383,217,384"
                      shape="poly"
                      id="five"
                      @mouseover="mOverFive()"
                      @click="mOverFive()"
                    />
                    <area
                      target=""
                      alt="3"
                      title="3"
                      href="#"
                      coords="163,453,217,453,218,381,163,382"
                      shape="poly"
                      id="trW"
                    />
                    <area
                      target=""
                      alt="3"
                      title="3"
                      href="#"
                      coords="513,454,567,454,568,382,513,383"
                      shape="poly"
                      id="trS"
                    />
                  </map>
                </div>
                <div class="loacation-tooltips" v-if="selectPerspolisTeame">
                  <div class="loacation-tooltip1">
                    <div
                      class="loacation-tooltip mr-0"
                      style="margin: 0px 0px 10px 12px"
                    >
                      <div id="span"><span>GA</span></div>
                      <div class="text-section">
                        <li class="line-one">یال شمالی</li>
                        <li class="line-two">ویژه طرفداران پرسپولیس</li>
                      </div>
                    </div>
                    <div
                      class="loacation-tooltip mr-0"
                      style="margin: 0px 0px 10px 12px"
                    >
                      <div id="span"><span>2</span></div>
                      <div class="text-section">
                        <li class="line-one">یال جنوبی</li>
                        <li class="line-two">ویژه طرفداران پرسپولیس</li>
                      </div>
                    </div>
                  </div>
                  <div class="loacation-tooltip1">
                    <div
                      class="loacation-tooltip ml-0"
                      style="margin: 0px 17px 10px 12px"
                    >
                      <div id="span"><span>4</span></div>
                      <div class="text-section">
                        <li class="line-one">یال جنوبی</li>
                        <li class="line-two">ویژه طرفداران پرسپولیس</li>
                      </div>
                    </div>
                    <div
                      class="loacation-tooltip ml-0"
                      style="margin: 0px 17px 10px 12px"
                    >
                      <div id="span"><span>3</span></div>
                      <div class="text-section">
                        <li class="line-one">VIP</li>
                        <li class="line-two">ویژه طرفداران پرسپولیس</li>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="loacation-tooltips" v-if="selectEsteghlalTeame">
                  <div class="loacation-tooltip1">
                    <div
                      class="loacation-tooltip mr-0"
                      style="margin: 0px 0px 10px 12px"
                    >
                      <div id="span"><span>1</span></div>
                      <div class="text-section">
                        <li class="line-one">یال جنوبی</li>
                        <li class="line-two">ویژه طرفداران استقلال</li>
                      </div>
                    </div>
                    <div
                      class="loacation-tooltip mr-0"
                      style="margin: 0px 0px 10px 12px"
                      :class="{ mOverFiveClass: mOverFiveBolean }"
                    >
                      <div id="span"><span>5</span></div>
                      <div class="text-section">
                        <li class="line-one">یال جنوبی</li>
                        <li class="line-two">ویژه طرفداران استقلال</li>
                      </div>
                    </div>
                  </div>
                  <div class="loacation-tooltip1">
                    <div
                      class="loacation-tooltip ml-0"
                      style="margin: 0px 17px 10px 12px"
                    >
                      <div id="span"><span>Tr</span></div>
                      <div class="text-section">
                        <li class="line-one">یال غربی</li>
                        <li class="line-two">ویژه طرفداران استقلال</li>
                      </div>
                    </div>
                    <div
                      class="loacation-tooltip ml-0"
                      style="margin: 0px 17px 10px 12px"
                    >
                      <div id="span"><span>Tr</span></div>
                      <div class="text-section">
                        <li class="line-one">یال شرغی</li>
                        <li class="line-two">ویژه طرفداران استقلال</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="seats">
              <div class="seat-selection">
                <span>۳.تعداد صندلی و انتخاب جایگاه؟</span>
              </div>
              <div class="seat-row row">
                <li>
                  <img
                    src="../../assets/Images/chair.png"
                    class="d-inline-block"
                    style="background-color: red; border-radius: 50%"
                    alt=""
                  />
                </li>
                <li v-for="item in 17" :key="item">
                  <img
                    src="../../assets/Images/chair.png"
                    class="d-inline-block"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    v-for="item in 3"
                    :key="item"
                    src="../../assets/Images/chair.png"
                    class="d-inline-block"
                    style="background-color: red; border-radius: 50%"
                    alt=""
                  />
                </li>
                <li v-for="item in 22" :key="item">
                  <img
                    src="../../assets/Images/chair.png"
                    class="d-inline-block"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="../../assets/Images/chair.png"
                    class="d-inline-block"
                    style="background-color: red; border-radius: 50%"
                    alt=""
                  />
                </li>
                <div style="text-align: center">
                  <li v-for="item in 7" :key="item">
                    <img
                      src="../../assets/Images/chair.png"
                      class="d-inline-block m-0"
                      alt=""
                    />
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div class="payment-second-card col-4">
            <div class="payment-second-card-header">
              <div class="text-center">
                <img src="../../assets/Images/img-14.png" alt="" />
                <h4>پرسپولیس</h4>
                <p>PERSPOLISE</p>
              </div>
              <div class="text-center">
                <img src="../../assets/Images/img-13.png" alt="" />
                <h4 class="">استقلال</h4>
                <p>ESTEGHLAL</p>
              </div>
            </div>
            <div class="payment-second-card-body">
              <div class="footer-in row">
                <li class="varzeshgah">
                  <span>ورزشگاه آزادی تهران</span>
                </li>
                <li class="date">
                  <span>۲۷ دی</span>
                </li>
                <li class="time">
                  <span>۱۵:۳۰</span>
                </li>
              </div>
              <div class="text-right match-card-detail">
                <li>تیم هوادار: <span>پرسپولیس</span></li>
                <li>ناحیه ورزشگاه: <span>ناحیه B</span></li>
                <li style="border: none">
                  تعداد و جایگاه ها:
                  <span>۶</span>
                  <p>B6 - B7</p>
                </li>
              </div>
              <div class="price text-right">
                <li>
                  <span>محاسبه قیمت</span>
                  <p>
                    براساس جایگاه هر ناحیه <span class="pr-1">B</span>
                    <span style="padding-right: 50px"
                      >(هر نفر ۱۰/۰۰۰ تومان)</span
                    >
                  </p>
                </li>
              </div>
            </div>
            <div class="payment-second-card-footer">
              <p>
                مجموع هزینه
                <span style="font-size: 25px">۶۰/۰۰۰</span> تومان
              </p>
              <li class="text-center">
                <router-link
                  to="/finalpayment"
                  href=""
                  class="btn btn-success btn-block text-center"
                >
                  پرداخت
                  <i class="fas fa-angle-left"></i>
                </router-link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CommentPayment v-if="showCommentsBo" />
</template>
<script>
import CommentPayment from "./CommentPayment.vue";
export default {
  components: {
    CommentPayment,
  },
  data() {
    return {
      selectPerspolisTeame: false,
      selectEsteghlalTeame: false,
      mOverFiveBolean: false,
      showCommentsBo: false,
    };
  },
  methods: {
    selectPerspolise() {
      this.selectPerspolisTeame = true;
      this.selectEsteghlalTeame = false;
    },
    selectEsteghlal() {
      this.selectEsteghlalTeame = true;
      this.selectPerspolisTeame = false;
    },
    mOverFive() {
      this.mOverFiveBolean = true;
    },
    showComments() {
      this.showCommentsBo = !this.showCommentsBo;
    },
  },
};
</script>
<style>
.mOverFiveClass {
  background-color: rgba(116, 49, 49, 0.849) !important;
}
</style>
