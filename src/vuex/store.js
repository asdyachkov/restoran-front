import Vuex from 'vuex'
import axios from 'axios'

const store = new Vuex.Store({
    state:{
        food:[],
        review:[]
    },
    actions:{
        GET_FOOD_FROM_API({commit}){
            return axios('http://localhost:3000/food', {
                method: 'GET'
            })
                .then((response) => {
                    commit('SET_FOOD_TO_VUEX', response.data)
                })
        },
        GET_REVIEW_FROM_API({commit}){
            return axios('http://localhost:3000/review', {
                method: 'GET'
            })
                .then((response) => {
                    commit('SET_REVIEW_TO_VUEX', response.data)
                })
        }
    },
    mutations:{
        SET_FOOD_TO_VUEX: (state, food) => {
            state.food = food
        },
        SET_REVIEW_TO_VUEX: (state, review) => {
            state.review = review
        }
    },
    getters:{
        FOOD(state){
            return state.food
        },
        REVIEW(state){
            return state.review
        }
    }
})

export default store;