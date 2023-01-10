<template>
  <my-default>
    <template v-slot:content>
      <div class="container">
        <div class="row row-cols-2" style="margin-top: 15%; margin-left: 7%;">
          <div class="col text-col">
            <h1>Забронируйте место в зале прямо сейчас!</h1>
            <p>Уютные зоны с игровой приставкой PS5, самые рейтинговые игры, множество разнообразных настольных игр,
              в том числе и нарды, для весёлого времяпрепровождения вместе с друзьями, а так же трансляции самых
              топовых спортивных событий в мире.</p>
            <a href="/menu">
              <div class="btn rent-button">
                <span>Просмотреть наше меню</span>
              </div>
            </a>
          </div>
        <div class="row">
          <form method="post" class="form-style">
            <h5>Введите Ваше имя*</h5>
            <input type="text" class="text-input" placeholder="Например: Иван/Ольга">
            <h5>Выберите количество гостей*</h5>

            <input type="range" id="rangevalue" v-model="value" min="1" max="16" step="1">
            <output id="rangevalue">{{this.value}}</output>

            <h5>Выберите дату посещения*</h5>
            <input type="date" class="text-input" placeholder="Например: 25.12.2022">
            <h5>Напишите примерное время посещения*</h5>
            <input type="time" class="text-input" placeholder="Например: 16:00">
            <h5>Введите Ваш номер телефона*</h5>
            <input type="text" class="text-input phone" placeholder="+7(999)999-99-99">
            <button class="btn rent-button" type="submit">
              <span>Забронировать</span>
            </button>
            <span></span>
          </form>
        </div>
      </div>
      </div>
    </template>
  </my-default>
</template>


<script>
import MyDefault from "@/components/layouts/MyDefault";
export default {
  components: {MyDefault},

  data() {
    return {
      value: 1,
    }
  },
  methods: {

  }
}
</script>

<style scoped src="@/assets/css/RentATable.css">

</style>