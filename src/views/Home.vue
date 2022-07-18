<script lang="ts">
import Botao from "../components/Botao.vue"

export default {
    created() {
        document.body.style.backgroundColor = "#3772FF";
    },
    components: { Botao }
}
</script>

<template>
    <div class="conteudoPrincipal">
        <div class="container">
            <div class="conteudoPrincipal-logo">
                <img src="../assets/img/Logo.svg" alt="AdotaPet Logo">
            </div>

            <h2 class="conteudoPrincipal-titulo">Boas-Vindas!</h2>

            <p class="conteudoPrincipal-texto">Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
                gente!
            </p>

            <div class="conteudoPrincipal-botoes">
                <router-link to="/login" class="conteudoPrincipal-botao">
                    <Botao msg='Já tenho conta' />
                </router-link>
                <router-link to="/cadastro" class="conteudoPrincipal-botao">
                    <Botao msg='Quero me cadastrar' />
                </router-link>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="rodapePrincipal-ilustracao">
            <img src="../assets/img/Ilustração_(1).png" alt="Ilustacao">
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500&family=Poppins&display=swap');

.conteudoPrincipal .container {
    display: flex;
    flex-direction: column;
}

.conteudoPrincipal-logo {
    display: flex;
    justify-content: space-around;
    margin: 0% 10% 2%;
}

.conteudoPrincipal-titulo {
    color: white;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 28px;
    display: flex;
    justify-content: space-around;
}

.conteudoPrincipal-texto {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 1% 20% 1%;
}

.conteudoPrincipal-botoes {
    display: flex;
    flex-direction: column;
}

.conteudoPrincipal-botao {
    display: flex;
    justify-content: center;
    text-decoration: none;
}

.rodapePrincipal-ilustracao {
    width: 100%;
    display: flex;
    justify-content: center;
}

@media only screen and (max-width: 1024px) {
    .conteudoPrincipal-logo {
        margin: 10%;
    }

    .conteudoPrincipal-titulo {
        font-size: 26px;
    }

    .conteudoPrincipal-texto {
        font-size: 16px;
        padding: 5% 20% 5%;
    }
}

@media only screen and (max-width: 600px) {
    .conteudoPrincipal-logo {
        margin: 10%;
    }

    .conteudoPrincipal-titulo {
        font-size: 26px;
    }

    .conteudoPrincipal-texto {
        font-size: 16px;
        padding: 5% 20% 5%;
    }
}
</style>
