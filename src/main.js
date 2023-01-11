import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import YmapPlugin from 'vue-yandex-maps'
import store from './vuex/store'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const settings = {
    apiKey: '7f037fcc-21f0-4c1b-ad6e-1f292ef45a2f',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
}

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(router)
    .use(YmapPlugin, settings)
    .use(store)
    .use(vuetify)
    .mount('#app')