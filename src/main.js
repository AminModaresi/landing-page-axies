import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBookmark, faCube, faImage, faSearch, faSpaceShuttle, faWallet  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faSearch , faWallet , faSpaceShuttle ,faCube , faBookmark , faImage)

import "./assets/styles/tailwind.css"

const app = createApp(App)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')

