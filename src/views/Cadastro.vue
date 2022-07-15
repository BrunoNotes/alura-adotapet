<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: "Cadastro",
    created() {
        document.body.style.backgroundColor = '#FFFFFF'
    },
})
</script>

<template>
    <div class="conteudoPrincipal">

        <div class="container">
            <div class="conteudoPrincipal-logo">
                <img src="../assets/img/Logo_-_azul.svg" alt="AdotaPet Logo" class="conteudoPrincipal-logo-img">
            </div>

            <p class="conteudoPrincipal-texto1">Ainda não tem cadastro?</p>
            <p class="conteudoPrincipal-texto2">Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>

            <form class="formulario">
                <label for="email">Email</label><br>
                <div class="formulario-input">
                    <input type="text" name="email" placeholder="Escolha seu melhor email"><br>
                </div>

                <label for="nome">Nome</label><br>
                <div class="formulario-input">
                    <input type="text" name="nome" placeholder="Digite seu nome completo"><br>
                </div>

                <label for="senha">Senha</label><br>
                <div class="formulario-input">
                    <input type="text" name="senha" placeholder="Crie uma senha"><br>
                </div>

                <label for="csenha">Confima sua senha</label><br>
                <div class="formulario-input">
                    <input type="text" name="csenha" placeholder="Repita a senha criada acima"><br>
                </div>
            </form>

            <div class="conteudoPrincipal-botoes">
                <button class="conteudoPrincipal-botao">Cadastrar</button>
            </div>

        </div>
    </div>
</template>

<style>
.conteudoPrincipal .container {
    display: flex;
    flex-direction: column;
}

.conteudoPrincipal-logo {
    display: flex;
    justify-content: space-around;
    padding: 10% 10% 0%;
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

.conteudoPrincipal-texto2 {
    color: #3772FF;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 0% 10% 0%;
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

.formulario-input {
    width: 100%;
    display: flex;
    justify-content: center;
}

.conteudoPrincipal-botoes {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5% 0% 5%;
    text-decoration: none;
}

.conteudoPrincipal-botao {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    line-height: 24px;
    color: white;
    background-color: #FC7071;
    border: none;
    border-radius: 8px;
    padding: 2.5% 5% 2.5%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}
</style>
