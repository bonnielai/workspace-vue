import Vue from 'vue'
import App from './app.vue'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render:(h)=>(App)
}).$mount(root)