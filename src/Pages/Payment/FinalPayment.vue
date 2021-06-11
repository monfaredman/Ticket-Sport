<template>
  <div>
    <div class="final-main">
      <div class="owner-comments">
        <div class="final-comments text-success">
          <li class="span2">
            <span>برای خرید بایط باید ثبت نام کنید</span>
          </li>
          <li class="span3"><a href="">ثبت نام کنید</a></li>
          <li class="span4"><i class="fas fa-angle-left"></i></li>
        </div>
        <div class="cash">
          <li class="price-string">
            <i class="far fa-money-bill-alt"></i>
            <span>مبلغ قابل پرداخت</span>
          </li>

          <li class="price-number">
            <span class="adad">۶۰۰.۰۰۰</span><span class="rial">ریال</span>
            <p>معادل شصت هزار تومان</p>
          </li>
        </div>
        <div class="biling">
          <div class="price-string">
            <i class="far fa-money-bill-alt"></i>
            <span>انتخاب شیوه پرداخت</span>
          </div>
          <div class="pay-factory">
            <li>
              <img src="../../assets/Images/img-32.png" alt="" />
              <p class="icon-way">پرداخت از</p>
              <p class="icon-factory">کیف پول</p>
              <router-link to="/unsuccesspayment" class="btn btn-success"
                >پرداخت</router-link
              >
            </li>
            <li>
              <img src="../../assets/Images/img-25.png" alt="" />

              <p class="icon-way">درگاه بانک</p>
              <p class="icon-factory">سامان</p>
              <button class="btn btn-gray disabled">پرداخت</button>
            </li>
            <li>
              <img src="../../assets/Images/img-26.png" alt="" />

              <p class="icon-way">درگاه</p>
              <p class="icon-factory">زرین پال</p>
              <button class="btn disabled">پرداخت</button>
            </li>
            <li class="unfound">
              <img src="../../assets/Images/img-32.png" alt="" />

              <p class="icon-way">پرداخت از</p>
              <p class="icon-factory">کیف پول</p>
              <button class="btn btn-success disabled">افزایش موجودی</button>
            </li>
          </div>
        </div>
      </div>

      <div class="final-card col-4">
        <div class="final-card-header">
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
        <div class="final-card-body">
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
                <span style="padding-right: 50px">(هر نفر ۱۰/۰۰۰ تومان)</span>
              </p>
            </li>
          </div>
        </div>
        <div class="final-card-footer">
          <p>
            مجموع هزینه
            <span style="font-size: 25px">۶۰/۰۰۰</span> تومان
          </p>
          <li class="text-center">
            <router-link
              to="/successpayment"
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
</template>
<script>
export default {};
</script>
