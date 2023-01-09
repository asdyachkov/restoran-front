import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import YmapPlugin from 'vue-yandex-maps'
import store from './vuex/store'

const settings = {
    apiKey: '7f037fcc-21f0-4c1b-ad6e-1f292ef45a2f',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
}

createApp(App)
    .use(router)
    .use(YmapPlugin, settings)
    .use(store)
    .mount('#app')