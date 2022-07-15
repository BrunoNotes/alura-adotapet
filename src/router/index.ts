import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router"
import Home from "../views/Home.vue"
import Cadastro from "../views/Cadastro.vue"
import Login from "../views/Login.vue"
import TelaAnimais from "../views/TelaAnimais.vue"

const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
},
{
    path: '/login',
    name: 'Login',
    component: Login
},
{
    path: '/telaanimais',
    name: 'TelaAnimais',
    component: TelaAnimais
}
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;
