<template>
  <div class="container">
    <div class="v-table">
      <div class="v-table_header">
        <p @click="sortByCategory">Категория &#8597; </p>
        <p @click="sortByName">Название &#8597; </p>
        <p @click="sortByWeight">Масса &#8597; </p>
        <p @click="sortByCost">Стоимость &#8597; </p>
      </div>
      <div class="v-table-body">
        <div class="v-table-row" v-for="item in paginatedFood" :key="item.id">
          <div class="my-row row_category">{{ item.category }}</div>
          <div class="my-row row_name" @click="dishClick(item.id)" style="cursor: pointer">{{ item.name }}</div>
          <div class="my-row row_mass">{{ item.mass }}</div>
          <div class="my-row row_cost">{{ item.cost }}</div>
        </div>
      </div>

      <div class="v-table_pagination">
        <div class="page" v-for="page in pages" :key="page" @click="pageClick(page)" :class="{'page_selected': page === pageNumber}">
          {{page}}
        </div>
      </div>

    </div>

    </div>
</template>

<script>
export default {
  name: "v-table",
  props:{
    food_info:{
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data(){
    return {
      foodPerPage: 5,
      pageNumber: 1
    }
  },
  computed:{
    pages(){
      return Math.ceil(this.food_info.length / this.foodPerPage)
    },
    paginatedFood(){
      let from = (this.pageNumber - 1) * this.foodPerPage;
      let to = from + this.foodPerPage;
      return this.food_info.slice(from, to)

    }
  },
  methods:{
    pageClick(page){
      this.pageNumber = page
    },
    sortByName(){
      //eslint-disable-next-line
      this.food_info.sort((a, b) => a.name.localeCompare(b.name))
    },
    sortByCategory(){
      //eslint-disable-next-line
      this.food_info.sort((a, b) => a.category.localeCompare(b.category))
    },
    sortByWeight(){
      //eslint-disable-next-line
      this.food_info.sort((a, b) => a.mass - b.mass)
    },
    sortByCost(){
      //eslint-disable-next-line
      this.food_info.sort((a, b) => a.cost - b.cost)
    },
    dishClick(id){
      this.$router.push({name: 'dish', query: {'dishid': id}})
    }
  }
}
</script>

<style scoped>
.row_name:hover{
  color: #ab8e6c;
}
.v-table{
  margin: 20px auto;
  color: white;
  background: none;
}
.v-table p{
  flex-basis: 25%;
  cursor: pointer;
}
.v-table_header{
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px #ab8e6c;
}
.v-table-row{
  display: flex;
  justify-content: space-around;
}
.my-row{
  flex-basis: 25%;
  padding: 8px 16px;
  text-align: left;
}
.v-table_pagination{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}
.page{
  padding: 8px;
  margin-right: 5px;
  border: solid 1px #ab8e6c;
  border-radius: 3px;
}
.page:hover{
  background: #ab8e6c;
  cursor: pointer;
  color: #ffd700;
}
.page_selected{
  background: #ab8e6c;
}
</style>