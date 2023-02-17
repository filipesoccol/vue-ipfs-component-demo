import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueIPFS from 'vue-ipfs-components'

createApp(App).use(VueIPFS, {verbose:true}).mount('#app')
