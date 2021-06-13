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
              <button
                @click="goToBuy()"
                class="btn btn-success btn-block w-100"
              >
                <i class="fas fa-angle-left"></i>خرید بلیط
              </button>
              <ul class="socials row">
                <li class="d-inline-block w-25">بازنشر کنید</li>
                <li class="d-inline-block w-50">
                  <a
                    href="https://www.instagram.com/"
                    class="fab fa-instagram"
                  ></a>
                  <a
                    href="https://www.facebook.com/"
                    class="fab fa-facebook"
                  ></a>
                  <a href="https://twitter.com" class="fab fa-twitter"></a>
                  <a href="https://telegram.org/" class="fab fa-telegram"></a>
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
              <li @click="showCommentsBo = !showCommentsBo" class="span3">
                <a href="">ثبت نام / وارد شوید</a>
              </li>
              <li class="span4"><i class="fas fa-angle-left"></i></li>
            </div>
            <div class="fans">
              <div class="fan-team">
                <span>۲.طرفدار کدام تیم هستید؟</span>
              </div>
              <div class="teams">
                <button
                  :class="{ selectTeamClass: selectPerspoliseBo }"
                  class="perspolisBtn"
                  @click="selectPerspolise()"
                >
                  <span>پرسپولیس</span>
                </button>
                <div></div>
                <button
                  :class="{ selectTeamClass: selectEsteghlalBo }"
                  class="esteghlalBtn"
                  @click="selectEsteghlal()"
                >
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
                      alt=""
                      coords="147,133,580,68"
                      shape=""
                      id="ga"
                      :class="{
                        perspolisLocationClassGa: perspolisLocation,
                        hoverOnGa: hoverGaBo,
                        displayN: displayRNB,
                      }"
                      @mouseover="mOverGaLocation()"
                      @mouseout="mOutGaLocation()"
                      @click="clickGaLocation()"
                    />
                    <area
                      target=""
                      alt="ga"
                      title="ga"
                      coords="149,135,59,380"
                      shape=""
                      id="ga"
                      :class="{
                        displayN: displayRNB,
                      }"
                      @mouseover="mOverGaLocation()"
                      @mouseout="mOutGaLocation()"
                      @click="clickGaLocation()"
                    />
                    <area
                      target=""
                      alt="ga"
                      title="ga"
                      coords="673,134,577,380"
                      shape=""
                      id="ga"
                      :class="{
                        displayN: displayRNB,
                      }"
                      @mouseover="mOverGaLocation()"
                      @mouseout="mOutGaLocation()"
                      @click="clickGaLocation()"
                    />
                    <area
                      target=""
                      alt="ga"
                      title="ga"
                      coords="104,452,59,451,59,381,149,380"
                      shape="poly"
                      id="ga"
                      :class="{
                        displayN: displayRNB,
                      }"
                      @mouseover="mOverGaLocation()"
                      @mouseout="mOutGaLocation()"
                      @click="clickGaLocation()"
                    />
                    <area
                      target=""
                      alt="ga"
                      title="ga"
                      coords="673,454,616,452,577,380,674,381"
                      shape="poly"
                      id="ga"
                      :class="{
                        displayN: displayRNB,
                      }"
                      @mouseover="mOverGaLocation()"
                      @mouseout="mOutGaLocation()"
                      @click="clickGaLocation()"
                    />
                    <area
                      target=""
                      alt="ga"
                      title="ga"
                      coords="675,126,576,137,576,67"
                      shape="poly"
                      id="ga"
                      :class="{
                        displayN: displayRNB,
                      }"
                      @mouseover="mOverGaLocation()"
                      @mouseout="mOutGaLocation()"
                      @click="clickGaLocation()"
                    />
                    <area
                      target=""
                      alt="ga"
                      title="ga"
                      coords="149,136,52,123,149,68"
                      shape="poly"
                      id="ga"
                      :class="{
                        displayN: displayRNB,
                      }"
                      @mouseover="mOverGaLocation()"
                      @mouseout="mOutGaLocation()"
                      @click="clickGaLocation()"
                    />
                    <area
                      target=""
                      alt="3"
                      title="3"
                      coords="325,452,399,452,399,384,374,383,373,402,353,402,355,385,326,384"
                      shape="poly"
                      id="three"
                      :class="{
                        perspolisLocationClass3: perspolisLocation,
                        hoverOn3: hover3Bo,
                        displayN: displayRNB,
                      }"
                      @mouseover="mOver3Location()"
                      @mouseout="mOut3Location()"
                      @click="click3Location()"
                    />
                    <area
                      target=""
                      alt="4"
                      title="4"
                      coords="272,453,324,453,324,389,286,389,287,382,272,383"
                      shape="poly"
                      id="four"
                      :class="{
                        perspolisLocationClass4: perspolisLocation,
                        hoverOn4: hover4Bo,
                        displayN: displayRNB,
                      }"
                      @mouseover="mOver4Location()"
                      @mouseout="mOut4Location()"
                      @click="click4Location()"
                    />
                    <area
                      target=""
                      alt="2"
                      title="2"
                      coords="399,453,456,453,455,382,441,380,443,387,399,388"
                      shape="poly"
                      id="two"
                      :class="{
                        perspolisLocationClass2: perspolisLocation,
                        hoverOn2: hover2Bo,
                        displayN: displayRNB,
                      }"
                      @mouseover="mOver2Location()"
                      @mouseout="mOut2Location()"
                      @click="click2Location()"
                    />
                    <area
                      target=""
                      alt="1"
                      title="1"
                      coords="455,454,514,456,514,383,455,383"
                      shape="poly"
                      id="one"
                      :class="{
                        esteghlalLocation1: esteghlalLocation,
                        hoverOn1: hover1Bo,
                        displayN: displayNB,
                      }"
                      @mouseover="mOver1Location()"
                      @mouseout="mOut1Location()"
                      @click="click1Location()"
                    />
                    <area
                      target=""
                      alt="5"
                      title="5"
                      coords="217,455,271,455,272,383,217,384"
                      shape="poly"
                      id="five"
                      :class="{
                        esteghlalLocation5: esteghlalLocation,
                        hoverOn5: hover5Bo,
                        displayN: displayNB,
                      }"
                      @mouseover="mOver5Location()"
                      @mouseout="mOut5Location()"
                      @click="click5Location()"
                    />
                    <area
                      target=""
                      alt="trW"
                      title="trW"
                      coords="163,453,217,453,218,381,163,382"
                      shape="poly"
                      id="trW"
                      :class="{
                        esteghlalLocationTrw: esteghlalLocation,
                        hoverOnTrW: hoverTrWBo,
                        displayN: displayNB,
                      }"
                      @mouseover="mOverTrWLocation()"
                      @mouseout="mOutTrWLocation()"
                      @click="clickTrWLocation()"
                    />
                    <area
                      target=""
                      alt="trS"
                      title="trS"
                      coords="513,454,567,454,568,382,513,383"
                      shape="poly"
                      id="trS"
                      :class="{
                        esteghlalLocationTrS: esteghlalLocation,
                        hoverOnTrS: hoverTrSBo,
                        displayN: displayNB,
                      }"
                      @mouseover="mOverTrSLocation()"
                      @mouseout="mOutTrSLocation()"
                      @click="clickTrSLocation()"
                    />
                  </map>
                </div>
                <div class="loacation-tooltips" v-if="selectPerspolisTeame">
                  <div class="loacation-tooltip1">
                    <div
                      class="loacation-tooltip mr-0"
                      style="margin: 0px 0px 10px 12px"
                      :class="{
                        mOverLocationClass: mOverGaLocationBo,
                        clickLocation: clickGaLocationBo,
                      }"
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
                      :class="{
                        mOverLocationClass: mOver2LocationBo,
                        clickLocation: click2LocationBo,
                      }"
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
                      :class="{
                        mOverLocationClass: mOver4LocationBo,
                        clickLocation: click4LocationBo,
                      }"
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
                      :class="{
                        mOverLocationClass: mOver3LocationBo,
                        clickLocation: click3LocationBo,
                      }"
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
                      :class="{
                        mOverLocationClass: mOver1LocationBo,
                        clickLocation: click1LocationBo,
                      }"
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
                      :class="{
                        mOverLocationClass: mOver5LocationBo,
                        clickLocation: click5LocationBo,
                      }"
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
                      :class="{
                        mOverLocationClass: mOverTrWLocationBo,
                        clickLocation: clickTrWLocationBo,
                      }"
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
                      :class="{
                        mOverLocationClass: mOverTrSLocationBo,
                        clickLocation: clickTrSLocationBo,
                      }"
                    >
                      <div id="span"><span>Tr</span></div>
                      <div class="text-section">
                        <li class="line-one">یال شرقی</li>
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

              <div class="seat-row">
                <li class="row">
                  <button class="bg-danger">
                    <img src="../../assets/Images/chair.png" />
                  </button>
                  <button
                    @click="clickSeat1(), totalPriceFu()"
                    :class="{ clickSeatClass: clickSeatBo1 }"
                  >
                    <img src="../../assets/Images/chair.png" />
                  </button>

                  <button
                    @click="clickSeat2(), totalPriceFu()"
                    :class="{ clickSeatClass: clickSeatBo2 }"
                  >
                    <img src="../../assets/Images/chair.png" />
                  </button>
                  <button
                    @click="clickSeat3(), totalPriceFu()"
                    :class="{ clickSeatClass: clickSeatBo3 }"
                  >
                    <img src="../../assets/Images/chair.png" />
                  </button>
                  <button
                    @click="clickSeat4(), totalPriceFu()"
                    :class="{ clickSeatClass: clickSeatBo4 }"
                  >
                    <img src="../../assets/Images/chair.png" />
                  </button>
                  <button
                    @click="clickSeat5(), totalPriceFu()"
                    :class="{ clickSeatClass: clickSeatBo5 }"
                  >
                    <img src="../../assets/Images/chair.png" />
                  </button>
                  <button
                    @click="clickSeat6(), totalPriceFu()"
                    :class="{ clickSeatClass: clickSeatBo6 }"
                  >
                    <img src="../../assets/Images/chair.png" />
                  </button>
                  <button
                    @click="clickSeat7(), totalPriceFu()"
                    :class="{ clickSeatClass: clickSeatBo7 }"
                  >
                    <img src="../../assets/Images/chair.png" />
                  </button>
                  <button class="bg-danger">
                    <img src="../../assets/Images/chair.png" />
                  </button>
                  <button class="bg-danger">
                    <img src="../../assets/Images/chair.png" />
                  </button>
                  <button
                    @click="clickSeat8(), totalPriceFu()"
                    :class="{ clickSeatClass: clickSeatBo8 }"
                  >
                    <img src="../../assets/Images/chair.png" />
                  </button>
                  <button
                    @click="clickSeat9(), totalPriceFu()"
                    :class="{ clickSeatClass: clickSeatBo9 }"
                  >
                    <img src="../../assets/Images/chair.png" />
                  </button>
                  <button
                    @click="clickSeat10(), totalPriceFu()"
                    :class="{ clickSeatClass: clickSeatBo10 }"
                  >
                    <img src="../../assets/Images/chair.png" />
                  </button>
                  <button
                    @click="clickSeat11(), totalPriceFu()"
                    :class="{ clickSeatClass: clickSeatBo11 }"
                  >
                    <img src="../../assets/Images/chair.png" />
                  </button>
                  <button
                    @click="clickSeat12(), totalPriceFu()"
                    :class="{ clickSeatClass: clickSeatBo12 }"
                  >
                    <img src="../../assets/Images/chair.png" />
                  </button>
                  <button class="bg-danger">
                    <img src="../../assets/Images/chair.png" />
                  </button>
                </li>
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
                <li>
                  تیم هوادار: <span>{{ favoriteTeam }}</span>
                </li>
                <li>
                  ناحیه ورزشگاه: <span>{{ favoriteLocation }} </span>
                </li>
                <li style="border: none">
                  تعداد و جایگاه ها:
                  <span>{{ favoriteSeatsFa }}</span>
                  <p>
                    {{ seatName1 }} {{ seatName2 }} {{ seatName3 }}
                    {{ seatName4 }} {{ seatName5 }} {{ seatName6 }}
                    {{ seatName7 }} {{ seatName8 }} {{ seatName9 }}
                    {{ seatName10 }} {{ seatName11 }} {{ seatName12 }}
                    {{ seatName13 }}
                  </p>
                </li>
              </div>
              <div class="price text-right">
                <li>
                  <span>محاسبه قیمت</span>
                  <p>
                    براساس جایگاه هر ناحیه <span class="pr-1">B</span>
                    <span style="padding-right: 43px"
                      >(هر نفر {{ locationPriceFa }} تومان)</span
                    >
                  </p>
                </li>
              </div>
            </div>
            <div class="payment-second-card-footer">
              <p>
                مجموع هزینه
                <span style="font-size: 25px">{{ totalPriceFa }}</span> تومان
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
      showCommentsBo: false,
      perspolisLocation: false,
      esteghlalLocation: false,
      mOverTrSLocationBo: false,
      mOverTrWLocationBo: false,
      mOver1LocationBo: false,
      mOver2LocationBo: false,
      mOver3LocationBo: false,
      mOver4LocationBo: false,
      mOver5LocationBo: false,
      mOverGaLocationBo: false,

      hoverGaBo: false,
      hover1Bo: false,
      hover2Bo: false,
      hover3Bo: false,
      hover4Bo: false,
      hover5Bo: false,
      hoverTrWBo: false,
      hoverTrSBo: false,

      displayNB: false,
      displayRNB: false,

      clickGaLocationBo: false,
      click1LocationBo: false,
      click2LocationBo: false,
      click3LocationBo: false,
      click4LocationBo: false,
      click5LocationBo: false,
      clickTrWLocationBo: false,
      clickTrSLocationBo: false,

      selectPerspoliseBo: false,
      selectEsteghlalBo: false,

      clickSeatBo1: false,
      clickSeatBo2: false,
      clickSeatBo3: false,
      clickSeatBo4: false,
      clickSeatBo5: false,
      clickSeatBo6: false,
      clickSeatBo7: false,
      clickSeatBo8: false,
      clickSeatBo9: false,
      clickSeatBo10: false,
      clickSeatBo11: false,
      clickSeatBo12: false,

      favoriteTeam: "",
      favoriteLocation: "",
      favoriteSeats: 0,
      locationPrice: 0,
      totalPrice: "",

      totalPriceFa: 0,
      favoriteSeatsFa: 0,
      locationPriceFa: 0,
      seatName1: "",
      seatName2: "",
      seatName3: "",
      seatName4: "",
      seatName5: "",
      seatName6: "",
      seatName7: "",
      seatName8: "",
      seatName9: "",
      seatName10: "",
      seatName11: "",
      seatName12: "",
      seatName13: "",
    };
  },
  methods: {
    selectPerspolise() {
      this.perspolisLocation = true;
      this.esteghlalLocation = false;

      this.selectPerspoliseBo = !this.selectPerspoliseBo;
      this.selectEsteghlalBo = false;

      this.favoriteSeatsFa = "";
      this.locationPriceFa = "";
      this.favoriteLocation = "";
      this.totalPriceFa = "";
      this.clickSeatBo1 = false;
      this.clickSeatBo2 = false;
      this.clickSeatBo3 = false;
      this.clickSeatBo4 = false;
      this.clickSeatBo5 = false;
      this.clickSeatBo6 = false;
      this.clickSeatBo7 = false;
      this.clickSeatBo8 = false;
      this.clickSeatBo9 = false;
      this.clickSeatBo10 = false;
      this.clickSeatBo11 = false;
      this.clickSeatBo12 = false;
      this.clickSeatBo13 = false;
      this.clickGaLocationBo = false;
      this.click1LocationBo = false;
      this.click2LocationBo = false;
      this.click3LocationBo = false;
      this.click4LocationBo = false;
      this.click5LocationBo = false;
      this.clickTrWLocationBo = false;
      this.clickTrSLocationBo = false;

      if (this.selectPerspoliseBo) {
        this.favoriteTeam = "پرسپولیس";
      } else {
        this.favoriteTeam = "";
      }
      if (this.favoriteTeam == "") {
        this.favoriteSeatsFa = "";
        this.locationPriceFa = "";
        this.favoriteLocation = "";
        this.totalPriceFa = "";
        this.clickSeatBo1 = false;
        this.clickGaLocationBo = false;
      }
      if (this.favoriteTeam == "پرسپولیس") {
        this.displayRNB = false;
        this.selectPerspolisTeame = true;
        this.selectEsteghlalTeame = false;
      } else {
        this.displayRNB = true;
        this.selectPerspolisTeame = false;
      }
    },
    selectEsteghlal() {
      this.perspolisLocation = false;
      this.esteghlalLocation = true;

      this.selectEsteghlalBo = !this.selectEsteghlalBo;
      this.selectPerspoliseBo = false;

      this.favoriteSeatsFa = "";
      this.locationPriceFa = "";
      this.favoriteLocation = "";
      this.totalPriceFa = "";
      this.clickSeatBo1 = false;
      this.clickGaLocationBo = false;

      if (this.selectEsteghlalBo) {
        this.favoriteTeam = "استقلال";
      } else {
        this.favoriteTeam = "";
      }
      if (this.favoriteTeam == "") {
        this.favoriteSeatsFa = "";
        this.locationPriceFa = "";
        this.favoriteLocation = "";
        this.totalPriceFa = "";
        this.clickSeatBo1 = false;
        this.clickGaLocationBo = false;
      }
      if (this.favoriteTeam == "استقلال") {
        this.displayNB = false;
        this.selectEsteghlalTeame = true;
        this.selectPerspolisTeame = false;
      } else {
        this.displayNB = true;
        this.selectEsteghlalTeame = false;
      }
    },
    goToBuy() {
      window.scrollTo(0, 580);
    },

    clickSeat1() {
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteLocation == "") {
        alert(" ناحیه ورزشگاه را انتخاب کنید !");
        window.scrollTo(0, 900);
      } else {
        this.clickSeatBo1 = !this.clickSeatBo1;
        if (this.clickSeatBo1) {
          this.favoriteSeats += 1;
          this.seatName1 = "A1";
        } else {
          this.favoriteSeats -= 1;
        }
        this.favoriteSeatsFa = this.favoriteSeats.toLocaleString("fa-IR");
      }
    },
    clickSeat2() {
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteLocation == "") {
        alert(" ناحیه ورزشگاه را انتخاب کنید !");
        window.scrollTo(0, 900);
      } else {
        this.clickSeatBo2 = !this.clickSeatBo2;
        if (this.clickSeatBo2) {
          this.favoriteSeats += 1;
          this.seatName2 = "A2";
        } else {
          this.favoriteSeats -= 1;
        }
        this.favoriteSeatsFa = this.favoriteSeats.toLocaleString("fa-IR");
      }
    },
    clickSeat3() {
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteLocation == "") {
        alert(" ناحیه ورزشگاه را انتخاب کنید !");
        window.scrollTo(0, 900);
      } else {
        this.clickSeatBo3 = !this.clickSeatBo3;
        if (this.clickSeatBo3) {
          this.favoriteSeats += 1;
          this.seatName3 = "A3";
        } else {
          this.favoriteSeats -= 1;
        }
        this.favoriteSeatsFa = this.favoriteSeats.toLocaleString("fa-IR");
      }
    },
    clickSeat4() {
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteLocation == "") {
        alert(" ناحیه ورزشگاه را انتخاب کنید !");
        window.scrollTo(0, 900);
      } else {
        this.clickSeatBo4 = !this.clickSeatBo4;
        if (this.clickSeatBo4) {
          this.favoriteSeats += 1;
          this.seatName4 = "A4";
        } else {
          this.favoriteSeats -= 1;
        }
        this.favoriteSeatsFa = this.favoriteSeats.toLocaleString("fa-IR");
      }
    },
    clickSeat5() {
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteLocation == "") {
        alert(" ناحیه ورزشگاه را انتخاب کنید !");
        window.scrollTo(0, 900);
      } else {
        this.clickSeatBo5 = !this.clickSeatBo5;
        if (this.clickSeatBo5) {
          this.favoriteSeats += 1;
          this.seatName5 = "A5";
        } else {
          this.favoriteSeats -= 1;
        }
        this.favoriteSeatsFa = this.favoriteSeats.toLocaleString("fa-IR");
      }
    },
    clickSeat6() {
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteLocation == "") {
        alert(" ناحیه ورزشگاه را انتخاب کنید !");
        window.scrollTo(0, 900);
      } else {
        this.clickSeatBo6 = !this.clickSeatBo6;
        if (this.clickSeatBo6) {
          this.favoriteSeats += 1;
          this.seatName6 = "A6";
        } else {
          this.favoriteSeats -= 1;
        }
        this.favoriteSeatsFa = this.favoriteSeats.toLocaleString("fa-IR");
      }
    },
    clickSeat8() {
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteLocation == "") {
        alert(" ناحیه ورزشگاه را انتخاب کنید !");
        window.scrollTo(0, 900);
      } else {
        this.clickSeatBo8 = !this.clickSeatBo8;
        if (this.clickSeatBo8) {
          this.favoriteSeats += 1;
          this.seatName8 = "B9";
        } else {
          this.favoriteSeats -= 1;
        }
        this.favoriteSeatsFa = this.favoriteSeats.toLocaleString("fa-IR");
      }
    },
    clickSeat9() {
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteLocation == "") {
        alert(" ناحیه ورزشگاه را انتخاب کنید !");
        window.scrollTo(0, 900);
      } else {
        this.clickSeatBo9 = !this.clickSeatBo9;
        if (this.clickSeatBo9) {
          this.favoriteSeats += 1;
          this.seatName9 = "B9";
        } else {
          this.favoriteSeats -= 1;
        }
        this.favoriteSeatsFa = this.favoriteSeats.toLocaleString("fa-IR");
      }
    },
    clickSeat10() {
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteLocation == "") {
        alert(" ناحیه ورزشگاه را انتخاب کنید !");
        window.scrollTo(0, 900);
      } else {
        this.clickSeatBo10 = !this.clickSeatBo10;
        if (this.clickSeatBo10) {
          this.favoriteSeats += 1;
          this.seatName10 = "B10";
        } else {
          this.favoriteSeats -= 1;
        }
        this.favoriteSeatsFa = this.favoriteSeats.toLocaleString("fa-IR");
      }
    },
    clickSeat11() {
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteLocation == "") {
        alert(" ناحیه ورزشگاه را انتخاب کنید !");
        window.scrollTo(0, 900);
      } else {
        this.clickSeatBo11 = !this.clickSeatBo11;
        if (this.clickSeatBo11) {
          this.favoriteSeats += 1;
          this.seatName11 = "B11";
        } else {
          this.favoriteSeats -= 1;
        }
        this.favoriteSeatsFa = this.favoriteSeats.toLocaleString("fa-IR");
      }
    },
    clickSeat12() {
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteLocation == "") {
        alert(" ناحیه ورزشگاه را انتخاب کنید !");
        window.scrollTo(0, 900);
      } else {
        this.clickSeatBo12 = !this.clickSeatBo12;
        if (this.clickSeatBo12) {
          this.favoriteSeats += 1;
          this.seatName12 = "B1";
        } else {
          this.favoriteSeats -= 1;
        }
        this.favoriteSeatsFa = this.favoriteSeats.toLocaleString("fa-IR");
      }
    },

    clickSeat7() {
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteLocation == "") {
        alert(" ناحیه ورزشگاه را انتخاب کنید !");
        window.scrollTo(0, 900);
      } else {
        this.clickSeatBo7 = !this.clickSeatBo7;
        if (this.clickSeatBo7) {
          this.favoriteSeats += 1;
          this.seatName7 = "A7";
        } else {
          this.favoriteSeats -= 1;
        }
        this.favoriteSeatsFa = this.favoriteSeats.toLocaleString("fa-IR");
      }
    },

    //Mouse Over Locations

    mOverGaLocation() {
      if (this.favoriteTeam == "پرسپولیس") {
        this.mOverGaLocationBo = true;
        this.hoverGaBo = true;
      } else {
        this.mOverGaLocationBo = false;
        this.hoverGaBo = false;
      }
    },
    mOver1Location() {
      if (this.favoriteTeam == "استقلال") {
        this.mOver1LocationBo = true;
        this.hover1Bo = true;
      } else {
        this.mOver1LocationBo = false;
        this.hover1Bo = false;
      }
    },
    mOver2Location() {
      if (this.favoriteTeam == "پرسپولیس") {
        this.mOver2LocationBo = true;
        this.hover2Bo = true;
      } else {
        this.mOver2LocationBo = false;
        this.hover2Bo = false;
      }
    },
    mOver3Location() {
      if (this.favoriteTeam == "پرسپولیس") {
        this.mOver3LocationBo = true;
        this.hover3Bo = true;
      } else {
        this.mOver3LocationBo = false;
        this.hover3Bo = false;
      }
    },
    mOver4Location() {
      if (this.favoriteTeam == "پرسپولیس") {
        this.mOver4LocationBo = true;
        this.hover4Bo = true;
      } else {
        this.mOver4LocationBo = false;
        this.hover4Bo = false;
      }
    },
    mOver5Location() {
      if (this.favoriteTeam == "استقلال") {
        this.mOver5LocationBo = true;
        this.hover5Bo = true;
      } else {
        this.mOver5LocationBo = false;
        this.hover5Bo = false;
      }
    },
    mOverTrSLocation() {
      if (this.favoriteTeam == "استقلال") {
        this.mOverTrSLocationBo = true;
        this.hoverTrSBo = true;
      } else {
        this.mOverTrSLocationBo = false;
        this.hoverTrSBo = false;
      }
    },
    mOverTrWLocation() {
      if (this.favoriteTeam == "استقلال") {
        this.mOverTrWLocationBo = true;
        this.hoverTrWBo = true;
      } else {
        this.mOverTrWLocationBo = false;
        this.hoverTrWBo = false;
      }
    },
    //Mouse Out Locations

    mOutGaLocation() {
      this.mOverGaLocationBo = false;
      this.hoverGaBo = false;
    },
    mOut1Location() {
      this.mOver1LocationBo = false;
      this.hover1Bo = false;
    },
    mOut2Location() {
      this.mOver2LocationBo = false;
      this.hover2Bo = false;
    },
    mOut3Location() {
      this.mOver3LocationBo = false;
      this.hover3Bo = false;
    },
    mOut4Location() {
      this.mOver4LocationBo = false;
      this.hover4Bo = false;
    },
    mOut5Location() {
      this.mOver5LocationBo = false;
      this.hover5Bo = false;
    },
    mOutTrSLocation() {
      this.mOverTrSLocationBo = false;
      this.hoverTrSBo = false;
    },
    mOutTrWLocation() {
      this.mOverTrWLocationBo = false;
      this.hoverTrWBo = false;
    },
    // Click Location
    clickGaLocation() {
      this.favoriteSeats = 0;
      this.favoriteSeatsFa = 0;
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteTeam == "پرسپولیس") {
        this.clickGaLocationBo = !this.clickGaLocationBo;
        this.click1LocationBo = false;
        this.click2LocationBo = false;
        this.click3LocationBo = false;
        this.click4LocationBo = false;
        this.click5LocationBo = false;
        this.clickTrSLocationBo = false;
        this.clickTrWLocationBo = false;
        // if (this.clickGaLocationBo) {
        // }
        this.totalPriceFa = "";

        this.seatName1 = "";
        this.seatName2 = "";
        this.seatName3 = "";
        this.seatName4 = "";
        this.seatName5 = "";
        this.seatName6 = "";
        this.seatName7 = "";
        this.seatName8 = "";
        this.seatName9 = "";
        this.seatName10 = "";
        this.seatName11 = "";
        this.seatName12 = "";
        this.seatName13 = "";
        this.clickSeatBo1 = false;
        this.clickSeatBo2 = false;
        this.clickSeatBo3 = false;
        this.clickSeatBo4 = false;
        this.clickSeatBo5 = false;
        this.clickSeatBo6 = false;
        this.clickSeatBo7 = false;
        this.clickSeatBo8 = false;
        this.clickSeatBo9 = false;
        this.clickSeatBo10 = false;
        this.clickSeatBo11 = false;
        this.clickSeatBo12 = false;
        this.clickSeatBo13 = false;
      }
      if (this.clickGaLocationBo) {
        this.favoriteLocation = "ناحیه Ga";
        this.locationPrice = 10000;
        this.locationPriceFa = this.locationPrice.toLocaleString("fa-IR");
      } else {
        this.favoriteLocation = "";
        this.locationPrice = 0;
        this.locationPriceFa = this.locationPrice.toLocaleString("fa-IR");
      }
    },
    click1Location() {
      this.favoriteSeats = 0;
      this.favoriteSeatsFa = 0;
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteTeam == "استقلال") {
        this.click1LocationBo = !this.click1LocationBo;
        this.clickGaLocationBo = false;
        this.click2LocationBo = false;
        this.click3LocationBo = false;
        this.click4LocationBo = false;
        this.click5LocationBo = false;
        this.clickTrSLocationBo = false;
        this.clickTrWLocationBo = false;

        this.totalPriceFa = "";
        this.favoriteSeatsFa = "";
        this.seatName1 = "";
        this.seatName2 = "";
        this.seatName3 = "";
        this.seatName4 = "";
        this.seatName5 = "";
        this.seatName6 = "";
        this.seatName7 = "";
        this.seatName8 = "";
        this.seatName9 = "";
        this.seatName10 = "";
        this.seatName11 = "";
        this.seatName12 = "";
        this.seatName13 = "";
        this.clickSeatBo1 = false;
        this.clickSeatBo2 = false;
        this.clickSeatBo3 = false;
        this.clickSeatBo4 = false;
        this.clickSeatBo5 = false;
        this.clickSeatBo6 = false;
        this.clickSeatBo7 = false;
        this.clickSeatBo8 = false;
        this.clickSeatBo9 = false;
        this.clickSeatBo10 = false;
        this.clickSeatBo11 = false;
        this.clickSeatBo12 = false;
        this.clickSeatBo13 = false;
      }
      if (this.click1LocationBo) {
        this.favoriteLocation = "ناحیه 1";
        this.locationPrice = 20000;
        this.locationPriceFa = this.locationPrice.toLocaleString("fa-IR");
      } else {
        this.favoriteLocation = "";
        this.locationPrice = 0;
        this.locationPriceFa = this.locationPrice.toLocaleString("fa-IR");
      }
    },
    click2Location() {
      this.favoriteSeats = 0;
      this.favoriteSeatsFa = 0;
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteTeam == "پرسپولیس") {
        this.click2LocationBo = !this.click2LocationBo;
        this.click1LocationBo = false;
        this.clickGaLocationBo = false;
        this.click3LocationBo = false;
        this.click4LocationBo = false;
        this.click5LocationBo = false;
        this.clickTrSLocationBo = false;
        this.clickTrWLocationBo = false;

        this.totalPriceFa = "";
        this.favoriteSeatsFa = "";
        this.seatName1 = "";
        this.seatName2 = "";
        this.seatName3 = "";
        this.seatName4 = "";
        this.seatName5 = "";
        this.seatName6 = "";
        this.seatName7 = "";
        this.seatName8 = "";
        this.seatName9 = "";
        this.seatName10 = "";
        this.seatName11 = "";
        this.seatName12 = "";
        this.seatName13 = "";
        this.clickSeatBo1 = false;
        this.clickSeatBo2 = false;
        this.clickSeatBo3 = false;
        this.clickSeatBo4 = false;
        this.clickSeatBo5 = false;
        this.clickSeatBo6 = false;
        this.clickSeatBo7 = false;
        this.clickSeatBo8 = false;
        this.clickSeatBo9 = false;
        this.clickSeatBo10 = false;
        this.clickSeatBo11 = false;
        this.clickSeatBo12 = false;
        this.clickSeatBo13 = false;
      }
      if (this.click2LocationBo) {
        this.favoriteLocation = "ناحیه 2";
        this.locationPrice = 30000;
        this.locationPriceFa = this.locationPrice.toLocaleString("fa-IR");
      } else {
        this.favoriteLocation = "";
        this.locationPrice = 0;
        this.locationPriceFa = this.locationPrice.toLocaleString("fa-IR");
      }
    },
    click3Location() {
      this.favoriteSeats = 0;
      this.favoriteSeatsFa = 0;
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteTeam == "پرسپولیس") {
        this.click3LocationBo = !this.click3LocationBo;
        this.click1LocationBo = false;
        this.click2LocationBo = false;
        this.clickGaLocationBo = false;
        this.click4LocationBo = false;
        this.click5LocationBo = false;
        this.clickTrSLocationBo = false;
        this.clickTrWLocationBo = false;

        this.totalPriceFa = "";
        this.favoriteSeatsFa = "";
        this.seatName1 = "";
        this.seatName2 = "";
        this.seatName3 = "";
        this.seatName4 = "";
        this.seatName5 = "";
        this.seatName6 = "";
        this.seatName7 = "";
        this.seatName8 = "";
        this.seatName9 = "";
        this.seatName10 = "";
        this.seatName11 = "";
        this.seatName12 = "";
        this.seatName13 = "";
        this.clickSeatBo1 = false;
        this.clickSeatBo2 = false;
        this.clickSeatBo3 = false;
        this.clickSeatBo4 = false;
        this.clickSeatBo5 = false;
        this.clickSeatBo6 = false;
        this.clickSeatBo7 = false;
        this.clickSeatBo8 = false;
        this.clickSeatBo9 = false;
        this.clickSeatBo10 = false;
        this.clickSeatBo11 = false;
        this.clickSeatBo12 = false;
        this.clickSeatBo13 = false;
      }
      if (this.click3LocationBo) {
        this.favoriteLocation = "ناحیه 3";
        this.locationPrice = 50000;
        this.locationPriceFa = this.locationPrice.toLocaleString("fa-IR");
      } else {
        this.favoriteLocation = "";
        this.locationPrice = 0;
        this.locationPriceFa = this.locationPrice.toLocaleString("fa-IR");
      }
    },
    click4Location() {
      this.favoriteSeats = 0;
      this.favoriteSeatsFa = 0;
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteTeam == "پرسپولیس") {
        this.click4LocationBo = !this.click4LocationBo;
        this.click1LocationBo = false;
        this.click2LocationBo = false;
        this.click3LocationBo = false;
        this.clickGaLocationBo = false;
        this.click5LocationBo = false;
        this.clickTrSLocationBo = false;
        this.clickTrWLocationBo = false;

        this.totalPriceFa = "";
        this.favoriteSeatsFa = "";
        this.seatName1 = "";
        this.seatName2 = "";
        this.seatName3 = "";
        this.seatName4 = "";
        this.seatName5 = "";
        this.seatName6 = "";
        this.seatName7 = "";
        this.seatName8 = "";
        this.seatName9 = "";
        this.seatName10 = "";
        this.seatName11 = "";
        this.seatName12 = "";
        this.seatName13 = "";
        this.clickSeatBo1 = false;
        this.clickSeatBo2 = false;
        this.clickSeatBo3 = false;
        this.clickSeatBo4 = false;
        this.clickSeatBo5 = false;
        this.clickSeatBo6 = false;
        this.clickSeatBo7 = false;
        this.clickSeatBo8 = false;
        this.clickSeatBo9 = false;
        this.clickSeatBo10 = false;
        this.clickSeatBo11 = false;
        this.clickSeatBo12 = false;
        this.clickSeatBo13 = false;
      }
      if (this.click4LocationBo) {
        this.favoriteLocation = "ناحیه 4";
        this.locationPrice = 30000;
        this.locationPriceFa = this.locationPrice.toLocaleString("fa-IR");
      } else {
        this.favoriteLocation = "";
        this.locationPrice = 0;
        this.locationPriceFa = this.locationPrice.toLocaleString("fa-IR");
      }
    },
    click5Location() {
      this.favoriteSeats = 0;
      this.favoriteSeatsFa = 0;
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteTeam == "استقلال") {
        this.click5LocationBo = !this.click5LocationBo;
        this.click1LocationBo = false;
        this.click2LocationBo = false;
        this.click3LocationBo = false;
        this.click4LocationBo = false;
        this.clickGaLocationBo = false;
        this.clickTrSLocationBo = false;
        this.clickTrWLocationBo = false;

        this.totalPriceFa = "";
        this.favoriteSeatsFa = "";
        this.seatName1 = "";
        this.seatName2 = "";
        this.seatName3 = "";
        this.seatName4 = "";
        this.seatName5 = "";
        this.seatName6 = "";
        this.seatName7 = "";
        this.seatName8 = "";
        this.seatName9 = "";
        this.seatName10 = "";
        this.seatName11 = "";
        this.seatName12 = "";
        this.seatName13 = "";
        this.clickSeatBo1 = false;
        this.clickSeatBo2 = false;
        this.clickSeatBo3 = false;
        this.clickSeatBo4 = false;
        this.clickSeatBo5 = false;
        this.clickSeatBo6 = false;
        this.clickSeatBo7 = false;
        this.clickSeatBo8 = false;
        this.clickSeatBo9 = false;
        this.clickSeatBo10 = false;
        this.clickSeatBo11 = false;
        this.clickSeatBo12 = false;
        this.clickSeatBo13 = false;
      }
      if (this.click5LocationBo) {
        this.favoriteLocation = "ناحیه 5";
        this.locationPrice = 20000;
        this.locationPriceFa = this.locationPrice.toLocaleString("fa-IR");
      } else {
        this.favoriteLocation = "";
        this.locationPrice = 0;
        this.locationPriceFa = this.locationPrice.toLocaleString("fa-IR");
      }
    },
    clickTrWLocation() {
      this.favoriteSeats = 0;
      this.favoriteSeatsFa = 0;
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteTeam == "استقلال") {
        this.clickTrWLocationBo = !this.clickTrWLocationBo;
        this.click1LocationBo = false;
        this.click2LocationBo = false;
        this.click3LocationBo = false;
        this.click4LocationBo = false;
        this.click5LocationBo = false;
        this.clickTrSLocationBo = false;
        this.clickGaLocationBo = false;

        this.totalPriceFa = "";
        this.favoriteSeatsFa = "";
        this.seatName1 = "";
        this.seatName2 = "";
        this.seatName3 = "";
        this.seatName4 = "";
        this.seatName5 = "";
        this.seatName6 = "";
        this.seatName7 = "";
        this.seatName8 = "";
        this.seatName9 = "";
        this.seatName10 = "";
        this.seatName11 = "";
        this.seatName12 = "";
        this.seatName13 = "";
        this.clickSeatBo1 = false;
        this.clickSeatBo2 = false;
        this.clickSeatBo3 = false;
        this.clickSeatBo4 = false;
        this.clickSeatBo5 = false;
        this.clickSeatBo6 = false;
        this.clickSeatBo7 = false;
        this.clickSeatBo8 = false;
        this.clickSeatBo9 = false;
        this.clickSeatBo10 = false;
        this.clickSeatBo11 = false;
        this.clickSeatBo12 = false;
        this.clickSeatBo13 = false;
      }
      if (this.clickTrWLocationBo) {
        this.favoriteLocation = "ناحیه TrW";
        this.locationPrice = 15000;
        this.locationPriceFa = this.locationPrice.toLocaleString("fa-IR");
      } else {
        this.favoriteLocation = "";
        this.locationPrice = 0;
        this.locationPriceFa = this.locationPrice.toLocaleString("fa-IR");
      }
    },
    clickTrSLocation() {
      this.favoriteSeats = 0;
      this.favoriteSeatsFa = 0;
      if (this.favoriteTeam == "") {
        alert("تیم را انتخاب کنید !");
        window.scrollTo(0, 600);
      } else if (this.favoriteTeam == "استقلال") {
        this.clickTrSLocationBo = !this.clickTrSLocationBo;
        this.click1LocationBo = false;
        this.click2LocationBo = false;
        this.click3LocationBo = false;
        this.click4LocationBo = false;
        this.click5LocationBo = false;
        this.clickGaLocationBo = false;
        this.clickTrWLocationBo = false;

        this.totalPriceFa = "";
        this.favoriteSeatsFa = "";
        this.seatName1 = "";
        this.seatName2 = "";
        this.seatName3 = "";
        this.seatName4 = "";
        this.seatName5 = "";
        this.seatName6 = "";
        this.seatName7 = "";
        this.seatName8 = "";
        this.seatName9 = "";
        this.seatName10 = "";
        this.seatName11 = "";
        this.seatName12 = "";
        this.seatName13 = "";
        this.clickSeatBo1 = false;
        this.clickSeatBo2 = false;
        this.clickSeatBo3 = false;
        this.clickSeatBo4 = false;
        this.clickSeatBo5 = false;
        this.clickSeatBo6 = false;
        this.clickSeatBo7 = false;
        this.clickSeatBo8 = false;
        this.clickSeatBo9 = false;
        this.clickSeatBo10 = false;
        this.clickSeatBo11 = false;
        this.clickSeatBo12 = false;
        this.clickSeatBo13 = false;
      }
      if (this.clickTrSLocationBo) {
        this.favoriteLocation = "ناحیه TrS";
        this.locationPrice = 15000;
        this.locationPriceFa = this.locationPrice.toLocaleString("fa-IR");
      } else {
        this.favoriteLocation = "";
        this.locationPrice = 0;
        this.locationPriceFa = this.locationPrice.toLocaleString("fa-IR");
      }
    },
    totalPriceFu() {
      this.totalPrice = this.favoriteSeats * this.locationPrice;
      this.totalPriceFa = this.totalPrice.toLocaleString("fa-IR");
    },
  },
};
</script>
<style scoped>
.mOverFiveClass {
  background-color: rgba(116, 49, 49, 0.849) !important;
}
.perspolisLocationClassGa {
  background-color: #ff70703b;
  width: 430px;
  height: 66px;
  box-shadow: 0 0 11px 1px #f6a5a5;
  top: 1015px;
  border: 1px solid #efefef00;
  position: absolute;
  right: 283px;
}
.perspolisLocationClass2 {
  border: 1px solid #efefef00;
  position: absolute;
  right: 406px;
  background-color: #ff70703b;
  top: 1320px;
  box-shadow: 0 0 11px 1px #f6a5a5;
  width: 54px;
  height: 74px;
}
.perspolisLocationClass3 {
  border: 1px solid #efefef00;
  position: absolute;
  right: 462px;
  background-color: #ff70703b;
  top: 1323px;
  box-shadow: 0 0 11px 1px #f6a5a5;
  width: 72px;
  height: 69px;
}
.perspolisLocationClass4 {
  border: 1px solid #efefef00;
  position: absolute;
  right: 536px;
  background-color: #ff70703b;
  top: 1320px;
  box-shadow: 0 0 11px 1px #f6a5a5;
  width: 50px;
  height: 71px;
}
.esteghlalLocation1 {
  border: 1px solid #74a0d157;
  position: absolute;
  right: 350px;
  background-color: #6086e24f;
  top: 1318px;
  box-shadow: 0 0 11px 1px #003cff45;
  width: 54px;
  height: 74px;
}
.esteghlalLocation5 {
  border: 1px solid #74a0d157;
  position: absolute;
  right: 587px;
  background-color: #6086e24f;
  top: 1318px;
  box-shadow: 0 0 11px 1px #003cff45;
  width: 54px;
  height: 74px;
}
.esteghlalLocationTrw {
  border: 1px solid #74a0d157;
  position: absolute;
  right: 641px;
  background-color: #6086e24f;
  top: 1319px;
  box-shadow: 0 0 11px 1px #003cff45;
  width: 54px;
  height: 74px;
}
.esteghlalLocationTrS {
  border: 1px solid #74a0d157;
  position: absolute;
  right: 296px;
  background-color: #6086e24f;
  top: 1320px;
  box-shadow: 0 0 11px 1px #003cff45;
  width: 54px;
  height: 74px;
}
.mOverLocationClass {
  background-color: #0080003d !important;
  color: #0d870d !important;
}

.hoverOnGa {
  border: 1px solid #efefef00;
  position: absolute;
  right: 283px;
  background-color: #ff797987;
  top: 1015px;
  box-shadow: 0 0 11px 1px #ff0000;
  width: 430px;
  height: 66px;
}
.hoverOn3 {
  border: 1px solid #efefef00;
  position: absolute;
  right: 462px;
  background-color: #ff797987;
  top: 1323px;
  box-shadow: 0 0 11px 1px #ff0000;
  width: 72px;
  height: 69px;
}
.hoverOn4 {
  border: 1px solid #efefef00;
  position: absolute;
  right: 536px;
  background-color: #ff797987;
  top: 1320px;
  box-shadow: 0 0 11px 1px #ff0000;
  width: 50px;
  height: 71px;
}
.hoverOn2 {
  border: 1px solid #efefef00;
  position: absolute;
  right: 406px;
  background-color: #ff797987;
  top: 1318px;
  box-shadow: 0 0 11px 1px #ff0000;
  width: 54px;
  height: 74px;
}
.hoverOn1 {
  border: 1px solid #74a0d157;
  position: absolute;
  right: 350px;
  background-color: #5f87e687;
  top: 1318px;
  box-shadow: 0 0 11px 1px #003dff;
  width: 54px;
  height: 74px;
}
.hoverOn5 {
  border: 1px solid #efefef00;
  position: absolute;
  right: 587px;
  background-color: #5f87e687;
  top: 1318px;
  box-shadow: 0 0 11px 1px #003dff;
  width: 54px;
  height: 74px;
}
.hoverOnTrW {
  border: 1px solid #efefef00;
  position: absolute;
  right: 641px;
  background-color: #5f87e687;
  top: 1319px;
  box-shadow: 0 0 11px 1px #003dff;
  width: 54px;
  height: 74px;
}
.hoverOnTrS {
  border: 1px solid #efefef00;
  border: 1px solid #efefef00;
  position: absolute;
  right: 296px;
  background-color: #5f87e687;
  top: 1320px;
  box-shadow: 0 0 11px 1px #003dff;
  width: 54px;
  height: 74px;
}
/* display */
.displayN {
  display: none;
}

.clickLocation {
  background-color: #0dd50dab !important;
  color: #093709c2 !important;
}
.selectTeamClass {
  color: #093709c2;
  background-color: #0dd50dab !important;
}
.clickSeatClass {
  background-color: #0dd50dab !important;
}
</style>
