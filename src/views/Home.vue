<script lang="ts">
export default {
    created() {
        document.body.style.backgroundColor = '#3772FF'
    },
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
                <button class="conteudoPrincipal-botao">Já tenho conta</button>
            </div>
            <div class="conteudoPrincipal-botoes">
                <button type="button" class="conteudoPrincipal-botao">Quero me cadastrar</button>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="rodapePrincipal-ilustracao">
            <img src="../assets/img/Ilustração_(1).png" alt="Ilustacao">
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
    padding: 10%;
}

.conteudoPrincipal-titulo {
    color: white;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 26px;
    display: flex;
    justify-content: space-around;
}

.conteudoPrincipal-texto {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 5% 20% 5%;
}

.conteudoPrincipal-botoes {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2% 0% 2%;
    text-decoration: none;
}

.conteudoPrincipal-botao {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    white-space: nowrap;
    line-height: 24px;
    color: white;
    background-color: #FC7071;
    border: none;
    border-radius: 8px;
    padding: 2.5% 5% 2.5%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}

.rodapePrincipal-ilustracao {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
