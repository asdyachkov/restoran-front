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
            <input type="text" class="text-input" placeholder="Например: Иван/Ольга" v-model="v$.form.visitorName.$model">
            <div class="input-errors" v-for="(error, index) of v$.form.visitorName.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>

            <h5>Выберите количество гостей*</h5>

            <input type="range" id="rangevalue" v-model="form.peopleCount" min="1" max="16" step="1">
            <output id="rangevalue">{{this.form.peopleCount}}</output>

            <h5>Выберите дату посещения*</h5>
            <input type="date" class="text-input" placeholder="Например: 25.12.2022"  v-model="v$.form.visitorDate.$model">
            <div class="input-errors" v-for="(error, index) of v$.form.visitorDate.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>

            <h5>Напишите примерное время посещения*</h5>
            <input type="time" class="text-input" placeholder="Например: 16:00"  v-model="v$.form.visitorTime.$model">
            <div class="input-errors" v-for="(error, index) of v$.form.visitorTime.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>

            <h5>Введите Ваш номер телефона*</h5>
            <input type="text" class="text-input phone" placeholder="+7(999)999-99-99"  v-model="v$.form.visitorPhone.$model">
            <div class="input-errors" v-for="(error, index) of v$.form.visitorPhone.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>

            <button class="btn rent-button" type="submit">
              <span>Забронировать</span>
            </button>

          </form>
        </div>
      </div>
      </div>
    </template>
  </my-default>
</template>


<script>
import MyDefault from "@/components/layouts/MyDefault";
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

export function validPhone(phone) {
  let validNamePattern = new RegExp("\\+7\\s?[\\(]{0,1}9[0-9]{2}[\\)]{0,1}\\s?\\d{3}[-]{0,1}\\d{2}[-]{0,1}\\d{2}");
  if (validNamePattern.test(phone)){
    return true;
  }
  return false;
}
export function validName(name) {
  let validNamePattern = new RegExp("[A-Za-zА-Яа-яЁё]");
  if (validNamePattern.test(name)){
    return true;
  }
  return false;
}

export default {
  components: {MyDefault},
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      form: {
        peopleCount: 1,
        visitorName: '',
        visitorDate: '',
        visitorTime: '',
        visitorPhone: '',
      }
    }
  },
  validations() {
    return {
      form: {
        visitorName: {
          required,
          min: minLength(5),
          name_validation: {
            required,
            $validator: validName,
            $message: 'The name can contain only letters of the Russian and Latin alphabet'
          }
        },
          visitorDate: {required},
          visitorTime: {required},
          visitorPhone: {
            required,
            phone_validation: {
              $validator: validPhone,
              $message: 'The phone number should fit the following template +7(903)888-88-88'
            }
          },
      }
    }
  },
  methods: {

  },

}
</script>

<style scoped src="@/assets/css/RentATable.css">

</style>