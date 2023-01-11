<template>
  <my-default>
    <template v-slot:first-section>
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
          </div>
        </div>
      </div>
    </template>

    <template v-slot:content>
      <div class="container my-5">

        <h1 class="secondary-h1">Мята Platinum — идеальное место для отдыха с качественным обслуживанием, едой и кальянами</h1>

        <div class="two-cols">
          <div class="col-item">
            <h2>Премиальные кальяны</h2>
            <p><b>Более 10 видов курительных смесей на любой вкус и крепость:</b> от Чабако до Танжирса.
              <b>Только премиальные марки кальянов</b> Hoob и Geometria.</p>
            <p>У каждого сотрудника нашей команды есть многолетний опыт в кальянном деле,
              мы точно сможем забить то, что вам хочется, необычные новинки или старую добрую классику.</p>
          </div>
          <div class="col-item">
            <img src="../../public/hookah.jpg" alt="hookah">
          </div>
        </div>

        <div class="two-cols">
          <div class="col-item">
            <img src="../../public/food.jpg" alt="food">
          </div>
          <div class="col-item">
            <h2>Блюда в авторском исполнении</h2>
            <p><b>Угодим любым гастрономическим предпочтениям</b></p>
            <p>Кухня предлагает итальянские пасты, салаты, бургеры, блюда японской кухни и многое другое.</p>
            <a href="/menu">
              <div class="btn rent-button">
                <span>Просмотреть наше меню</span>
              </div>
            </a>
          </div>
        </div>

        <div class="four-cols">
          <div class="four-cols-item">
            <img src="../../public/food-1.jpg" alt="food">
          </div>
          <div class="four-cols-item">
            <img src="../../public/food-2.jpg" alt="food">
          </div>
          <div class="four-cols-item">
            <img src="../../public/food-3.jpg" alt="food">
          </div>
          <div class="four-cols-item">
            <img src="../../public/food-4.jpg" alt="food">
          </div>
        </div>

        <div class="two-cols">
          <div class="col-item">
            <h2>Алкогольные напитки лучшего качества</h2>
            <p>Бар с авторскими коктейлями, чаями, фруктовыми смузи. Наливаем более 17 видов вин и 10 видов алкогольных напитков разной крепости.</p>
            <a href="/menu">
              <div class="btn rent-button">
                <span>Просмотреть наше меню</span>
              </div>
            </a>
          </div>
          <div class="col-item">
            <img src="../../public/drinks.jpg" alt="coctail">
          </div>
        </div>

        <div class="four-cols">
          <div class="four-cols-item">
            <img src="../../public/drink-1.jpg" alt="drink">
          </div>
          <div class="four-cols-item">
            <img src="../../public/drink-2.jpg" alt="drink">
          </div>
          <div class="four-cols-item">
            <img src="../../public/drink-3.jpg" alt="drink">
          </div>
          <div class="four-cols-item">
            <img src="../../public/drink-4.jpg" alt="drink">
          </div>
        </div>

        <div class="two-cols" style="margin-bottom: 7%">
          <div class="col-item">
            <img src="../../public/dj.png" alt="dj">
          </div>
          <div class="col-item">
            <h2>Частые выступления известных артистов и ди-джеев</h2>
            <p>Мы часто приглашаем известных артистов Москвы и диджеев для вашего отдыха в кальянной.</p>
          </div>
        </div>

        <div class="two-cols">
          <div class="col-item">
            <h2>Наши отзывы</h2>

            <div class="reviews">
              <carousel class="carousel" :autoplay="2000" :wrap-around="true">
                <slide v-for="slide in REVIEW" :key="slide.id">
                  <div>
                    <h2>{{ slide.name }}</h2>
                    <h5>{{ slide.review_message }}</h5>
                  </div>
                </slide>
              </carousel>
            </div>


          </div>
          <div class="col-item">
            <form method="post" class="form-style">

              <h5>Введите Ваше имя*</h5>
              <input type="text" class="text-input" placeholder="Например: Иван/Ольга" v-model="v$.form.visitorName.$model">
              <div class="input-errors" v-for="(error, index) of v$.form.visitorName.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>

              <h5>Расскажите о Вашем посещении*</h5>
              <textarea type="text" class="text-input" placeholder="Что порадовало, а над чем нам стоит работать?" v-model="v$.form.visitorMessage.$model"></textarea>
              <div class="input-errors" v-for="(error, index) of v$.form.visitorMessage.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>

              <button class="btn rent-button" type="submit">
                <span>Добавить отзыв</span>
              </button>

            </form>
          </div>
        </div>

      </div>

      <div class="card">
        <yandex-map :coords="coords" zoom="13">
          <ymap-marker marker-id="123" :coords="coords" hint-content="some hint">

          </ymap-marker>
        </yandex-map>
        <div class="address-block">
          <h2>Мята Platinum</h2>
          <h3>Наши контакты</h3>
          <h4>Адрес:</h4>
          <p>Москва, м. Дубровка <br>ул. 1-я Машиностроения 10, эт.2</p>
          <h4>Режим работы:</h4>
          <p>Вс-Чт 12:00-01:00 <br>Пт-Сб 12:00-03:00</p>
          <h4>Телефон:</h4>
          <h3>+7(919)075-79-55</h3>
        </div>
      </div>
    </template>

  </my-default>
</template>


<script>
import MyDefault from "@/components/layouts/MyDefault";
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import { yandexMap, ymapMarker, loadYmap } from 'vue-yandex-maps'
import {mapActions, mapGetters} from 'vuex'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export function validName(name) {
  let validNamePattern = new RegExp("[A-Za-zА-Яа-яЁё]");
  if (validNamePattern.test(name)){
    return true;
  }
  return false;
}

export default {
  components: {MyDefault, yandexMap, ymapMarker, Carousel, Slide},
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      form: {
        visitorName: '',
        visitorMessage: '',
      },
      coords: [
        55.714044,
        37.670142,
      ],
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
        visitorMessage: {
          required,
          min: minLength(20),
        },
      }
    }
  },
  methods: {
    ...mapActions([
      'GET_REVIEW_FROM_API'
    ])
  },
  computed:{
    ...mapGetters([
      'REVIEW'
    ])
  },
  async mounted() {
    const settings = {
      apiKey: '7f037fcc-21f0-4c1b-ad6e-1f292ef45a2f',
      lang: 'ru_RU',
      coordorder: 'latlong',
      enterprise: false,
      version: '2.1'
    };
    this.GET_REVIEW_FROM_API();
    await loadYmap(settings);
  },
}
</script>

<style scoped src="@/assets/css/MainPage.css">

</style>