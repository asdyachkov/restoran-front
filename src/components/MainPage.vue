<template>
  <my-default>
    <div class="container">
      <div class="right-block">
        <h1 class="main-h1">Ресторан с авторской кухней, широкой барной картой и кальянами</h1>
        <p><b>Стильное и уютное место</b> для отдыха в Москве на 100 персон с атмосферой, в которй будет комфортно каждому</p>
        <div class="main-buttons">
          <a href="/rent_a_table">
            <div class="btn rent-button">
              <span>Забронировать стол</span>
            </div>
          </a>
          <a href="/about">
            <div class="btn about-button">
              <span>Подробнее о ресторане</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </my-default>
</template>

<script>
import MyDefault from "@/components/layouts/MyDefault";
export default {
  components: {MyDefault},

  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style src="@/assets/css/MainPage.css">

</style>