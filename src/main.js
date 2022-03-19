import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBagShopping, faBookmark, faCube, faFire, faHeart, faImage, faSearch, faSpaceShuttle, faWallet  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';


library.add(faSearch , faWallet , faSpaceShuttle ,faCube , faBookmark , faImage , faFire , faBagShopping , faHeart)

import "./assets/styles/tailwind.css"

const app = createApp(App)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)
app.mount('#app')

