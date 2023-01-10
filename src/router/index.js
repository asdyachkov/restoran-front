import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/MainPage.vue'
import RestoranMenu from '../components/RestoranMenu.vue'
import RentATable from '../components/RentATable.vue'
import DishInformation from '../components/DishInformation.vue'

const routes = [
  {path: '/', name: 'MainPage', component: MainPage},
  {path: '/menu', name: 'RestoranMenu', component: RestoranMenu},
  {path: '/rent_a_table', name: 'RentATable', component: RentATable},
  {path: '/dish', name: 'dish', component: DishInformation},
]

const router = createRouter({
  history: createWebHistory(), routes
})

export default router