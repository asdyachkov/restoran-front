<template>
  <my-default>
    <template v-slot:content>
      <h1 class="menu-h1" >Меню Мята <button @click="this.GET_FOOD_FROM_API()" class="refresh-button">&#8635;</button></h1>
      <button onclick="window.print()" class="print-button">Распечатать меню</button>

      <v-table
      :food_info="FOOD"
      />
    </template>

  </my-default>
</template>


<script>
import MyDefault from "@/components/layouts/MyDefault";
import vTable from "@/components/v-table"
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {MyDefault, vTable},

  data() {
    return {

    }
  },
  computed:{
    ...mapGetters([
        'FOOD'
    ])
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

<style scoped src="@/assets/css/MyMenu.css">

</style>