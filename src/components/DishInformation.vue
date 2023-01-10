<template>
  <my-default>
    <template v-slot:content>
      <div class="dish_info container">
        <img :src="dish.image_link" alt="" class="dish_image">
        <h1>{{dish.name}}</h1>
        <a href="/menu">
          <div class="btn rent-button">
            <span>Назад к меню</span>
          </div>
        </a>
      </div>
    </template>

  </my-default>
</template>


<script>
import MyDefault from "@/components/layouts/MyDefault";
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {MyDefault},

  data() {
    return {

    }
  },
  computed:{
    ...mapGetters([
      'FOOD'
    ]),
    dish(){
      let result = {}
      let vm = this
      this.FOOD.map(function (item){
        if (item.id.toString() === vm.$route.query.dishid){
          result = item
          return result
        }
      })
      return result
    }
  },
  methods: {
    ...mapActions([
      'GET_FOOD_FROM_API'
    ])
  },
  mounted() {
    this.GET_FOOD_FROM_API()
  }
}
</script>

<style scoped src="@/assets/css/DishInformation.css">

</style>