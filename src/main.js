import Vue from 'vue'
import App from './components/App'
import VueRouter from 'vue-router'
import {firebaseApp} from "./firebaseApp"

Vue.use(VueRouter)

import store from './store'

import Form from './components/form'
import Shop from './components/shop'
import Dashboard from './components/dashboard.vue'
import Signin from './components/SignIn.vue'
import Signup from './components/SignUp'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/dashboard', component: Dashboard},
        { path: '/shop', component: Shop},
        { path: '/form', component: Form},
        { path: '/signin', component: Signin},
        { path: '/signup', component: Signup}
    ]
})

firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        store.dispatch('signIn', user)
        router.push('/dashboard')
    }else{
       router.replace('/signin')
    }
})

new Vue ({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
