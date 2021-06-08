<template>
  <div class="table-matches container">
    <div class="table-brand">
      <h4 class="text-right">جدول بازی های لیگ برتر</h4>
    </div>
    <table class="table table-light">
      <tbody>
        <tr v-for="item in 4" :key="item">
          <td class="img-first">
            <li>
              <img
                src="../../assets/Images/img-13.png"
                class="img-fluid"
                alt=""
              />
            </li>
          </td>
          <td class="team-first">
            <li><span>پیکان تهران</span></li>
          </td>
          <td class="space">
            <li><span>2-2</span></li>
          </td>
          <td class="team-second">
            <li><span>پدیده خراسان</span></li>
          </td>
          <td class="img-second">
            <li>
              <img
                src="../../assets/Images/img-13.png"
                class="img-fluid"
                alt=""
              />
            </li>
          </td>
          <td class="date-match">
            <li><span>۱۳۹۶/۰۵/۰۶</span></li>
          </td>
          <td class="time-match">
            <li><span>۲۰:۴۵</span></li>
          </td>
          <td class="buy-ticket">
            <li class="mx-3 text-left">
              <a href="" class="text-left">
                دریافت بلیط بازی

                <span class=""><i class="fas fa-angle-left"></i></span>
              </a>
            </li>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
