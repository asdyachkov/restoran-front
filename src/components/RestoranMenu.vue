<template>
  <my-default>
    <template v-slot:content>
      <h1 class="menu-h1" >Меню Мята <button @click="this.GET_FOOD_FROM_API()" class="refresh-button">&#8635;</button></h1>
      <button onclick="window.print()" class="print-button">Распечатать меню</button>
      <div class="container">
        <v-select
            :options="options"
            :selected="selected"
            @select="optionSelect"
        />
      </div>


      <v-table
      :food_info="filteredFood"
      />
    </template>

  </my-default>
</template>


<script>
import MyDefault from "@/components/layouts/MyDefault";
import vTable from "@/components/v-table"
import vSelect from "@/components/v-select"
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {MyDefault, vTable, vSelect},

  data() {
    return {
      options: [{
        name: 'Все',
        value: 0
      }],
      selected: 'Все',
      sortedProducts: []
    }
  },
  computed:{
    ...mapGetters([
        'FOOD'
    ]),
    filteredFood(){
      if (this.sortedProducts.length){
        return this.sortedProducts
      }
      else {
        return this.FOOD
      }
    }
  },
  methods: {
    ...mapActions([
        'GET_FOOD_FROM_API'
    ]),
    optionSelect(option){
      this.sortedProducts = []
      let vm = this
      this.selected = option.name
      vm.FOOD.map(function (item) {
        if (item.category === option.name){
          vm.sortedProducts.push(item)
        }
      })
    }
  },
  mounted() {
    this.GET_FOOD_FROM_API()
    let options = []
    for (let count = 0; count < this.FOOD.length; count++){
      if(!options.includes(Object.values(this.FOOD)[count].category)){
        options.push(Object.values(this.FOOD)[count].category)
      }
    }
    for (let count = 0; count < options.length; count++){
      console.log(options)
      this.options.push({
        name: options[count],
        value: count + 1
      })
    }
  }
}
</script>

<style scoped src="@/assets/css/MyMenu.css">

</style>