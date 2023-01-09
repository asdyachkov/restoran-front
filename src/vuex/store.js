import Vuex from 'vuex'
import axios from 'axios'

const store = new Vuex.Store({
    state:{
        food:[]
    },
    actions:{
        GET_FOOD_FROM_API({commit}){
            return axios('http://localhost:3000/food', {
                method: 'GET'
            })
                .then((response) => {
                    commit('SET_FOOD_TO_VUEX', response.data)
                })
        }
    },
    mutations:{
        SET_FOOD_TO_VUEX: (state, food) => {
            state.food = food
        }
    },
    getters:{
        FOOD(state){
            return state.food
        }
    }
})

export default store;