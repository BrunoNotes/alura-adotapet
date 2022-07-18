<script lang="ts">
import { defineComponent } from "vue"
import Botao from "../components/Botao.vue"

export default defineComponent({
    name: "Login",
    created() {
        document.body.style.backgroundColor = "#FFFFFF";
    },
    components: { Botao }
})
</script>

<template>
    <div class="conteudoPrincipal">

        <div class="container">
            <div class="conteudoPrincipal-logo">
                <img src="../assets/img/Logo_-_azul.svg" alt="AdotaPet Logo" class="conteudoPrincipal-logo-img">
            </div>

            <p class="conteudoPrincipal-texto1">Já tem conta? Faça seu login:</p>

            <form class="formulario">
                <label for="email">Email</label><br>
                <div class="formulario-input">
                    <input type="text" name="email" placeholder="Insira seu email"><br>
                </div>

                <label for="senha">Senha</label><br>
                <div class="formulario-input">
                    <input type="text" name="senha" placeholder="Insira sua senha"><br>
                </div>
            </form>

            <div class="conteudoPrincipal-botao-texto">
                <a>Esqueci minha senha</a>
            </div>

            <div class="conteudoPrincipal-botoes">
                <Botao msg="Entrar" />
            </div>

        </div>
    </div>
</template>

<style scoped>
.conteudoPrincipal .container {
    display: flex;
    flex-direction: column;
}

.conteudoPrincipal-logo {
    display: flex;
    justify-content: space-around;
    padding: 10% 10% 10%;
}

.conteudoPrincipal-logo-img {
    width: 50%;
}

.conteudoPrincipal-texto1 {
    color: #3772FF;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 5% 10% 5%;
}

.formulario {
    display: flex;
    flex-direction: column;
}

.formulario label {
    display: flex;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #737380;
    padding: 6% 0% 2%;
}

.formulario input {
    width: 80%;
    height: 40px;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    text-align: center;
    color: #BCBCBC;
    border: 0 solid;
    border-radius: 6px;
    background: #F7F7F7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
}

.conteudoPrincipal-botoes {
    display: flex;
    justify-content: center;
}

.formulario-input {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
