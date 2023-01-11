<template>
  <div class="v-select">
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">Показать только категорию: {{selected}}</p>
    <div class="options" v-if="areOptionsVisible">
      <p v-for="option in options" :key="option.value" @click="selectOption(option)">
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props:{
    options:{
      type: Array,
      default(){
        return []
      }
    },
    selected:{
      type: String,
      default() {
        return '';
      }
    }
  },
  data(){
    return {
      areOptionsVisible: false
    }
  },
  computed:{

  },
  methods:{
    selectOption(option){
      this.$emit('select', option)
      this.areOptionsVisible = false
    },
    hideSelect(){
      this.areOptionsVisible = false
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style scoped>
.v-select{
  position: relative;
  width: 200px;
  color: white;
  cursor: pointer;
  text-align: center;
}
.title{
  border: solid 1px white;
}
.v-select p{
  margin: 0;
}
.options p:hover{
  color: #ab8e6c;
}
.options{
  border: solid 1px white;
  position: absolute;
  top: 30px;
  right: 0;
  width: 100%;
  background-color: black;
}
</style>