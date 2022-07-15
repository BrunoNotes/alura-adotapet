<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: "TelaAnimais",
    created() {
        document.body.style.backgroundColor = '#FFFFFF'
    },
})
</script>

<template>
    <div class="conteudoPrincipal">

        <div class="container">
            <p class="conteudoPrincipal-texto1">Olá! Veja os amigos disponíveis para adoção!</p>

            <div class="conteudoPrincipal-animal">
                <img src="../assets/img/animais/Animais_-_Dunga.png" alt="Dunga"
                    class="conteudoPrincipal-animal-imagem">
                <div class="conteudoPrincipal-animal-texto">
                    <p class="conteudoPrincipal-animal-nome">Dunga</p>
                    <div class="conteudoPrincipal-animal-descricao">
                        <p>2 anos</p>
                        <p>Porte pequeno</p>
                        <p>Calmo e educado</p>
                    </div>
                    <div class="conteudoPrincipal-animal-footer">
                        <p class="conteudoPrincipal-animal-cidade">Rio de Janeiro (RJ)</p>
                        <div class="conteudoPrincipal-animal-mensagem">
                            <img src="img/ícone_mensagem.svg" alt="mensagem">
                            <p>Falar com responsável</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="conteudoPrincipal-animal">
                <img src="../assets/img/animais/Animais_-_Felícia.png" alt="Dunga"
                    class="conteudoPrincipal-animal-imagem">
                <div class="conteudoPrincipal-animal-texto">
                    <p class="conteudoPrincipal-animal-nome">Felícia</p>
                    <div class="conteudoPrincipal-animal-descricao">
                        <p>3 meses</p>
                        <p>Porte pequeno</p>
                        <p>Ativa e carinhosa</p>
                    </div>
                    <div class="conteudoPrincipal-animal-footer">
                        <p class="conteudoPrincipal-animal-cidade">Nova Iguaçu (RJ)</p>
                        <div class="conteudoPrincipal-animal-mensagem">
                            <img src="img/ícone_mensagem.svg" alt="mensagem">
                            <p>Falar com responsável</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="conteudoPrincipal-animal">
                <img src="../assets/img/animais/Animais_-_Sirius.png" alt="Dunga"
                    class="conteudoPrincipal-animal-imagem">
                <div class="conteudoPrincipal-animal-texto">
                    <p class="conteudoPrincipal-animal-nome">Sirius</p>
                    <div class="conteudoPrincipal-animal-descricao">
                        <p>6 meses</p>
                        <p>Porte grande</p>
                        <p>Ativo e educado</p>
                    </div>
                    <div class="conteudoPrincipal-animal-footer">
                        <p class="conteudoPrincipal-animal-cidade">Duque de Caxias (RJ)</p>
                        <div class="conteudoPrincipal-animal-mensagem">
                            <img src="img/ícone_mensagem.svg" alt="mensagem">
                            <p>Falar com responsável</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="conteudoPrincipal-animal">
                <img src="../assets/img/animais/Animais_-_Fiona.png" alt="Dunga"
                    class="conteudoPrincipal-animal-imagem">
                <div class="conteudoPrincipal-animal-texto">
                    <p class="conteudoPrincipal-animal-nome">Fiona</p>
                    <div class="conteudoPrincipal-animal-descricao">
                        <p>3 anos</p>
                        <p>Porte pequeno</p>
                        <p>Calma e carinhosa</p>
                    </div>
                    <div class="conteudoPrincipal-animal-footer">
                        <p class="conteudoPrincipal-animal-cidade">São Gonçalo (RJ)</p>
                        <div class="conteudoPrincipal-animal-mensagem">
                            <img src="img/ícone_mensagem.svg" alt="mensagem">
                            <p>Falar com responsável</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="conteudoPrincipal-animal">
                <img src="../assets/img/animais/Animais_-_Sid.png" alt="Dunga" class="conteudoPrincipal-animal-imagem">
                <div class="conteudoPrincipal-animal-texto">
                    <p class="conteudoPrincipal-animal-nome">Sid</p>
                    <div class="conteudoPrincipal-animal-descricao">
                        <p>8 meses</p>
                        <p>Porte médio/grande</p>
                        <p>Brincalhão e amável</p>
                    </div>
                    <div class="conteudoPrincipal-animal-footer">
                        <p class="conteudoPrincipal-animal-cidade">Rio de Janeiro (RJ)</p>
                        <div class="conteudoPrincipal-animal-mensagem">
                            <img src="img/ícone_mensagem.svg" alt="mensagem">
                            <p>Falar com responsável</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="conteudoPrincipal-animal">
                <img src="../assets/img/animais/Animais_-_Yoda.png" alt="Dunga" class="conteudoPrincipal-animal-imagem">
                <div class="conteudoPrincipal-animal-texto">
                    <p class="conteudoPrincipal-animal-nome">Yoda</p>
                    <div class="conteudoPrincipal-animal-descricao">
                        <p>1 ano</p>
                        <p>Porte médio</p>
                        <p>Ativo e carinhoso</p>
                    </div>
                    <div class="conteudoPrincipal-animal-footer">
                        <p class="conteudoPrincipal-animal-cidade">Nova Iguaçu (RJ)</p>
                        <div class="conteudoPrincipal-animal-mensagem">
                            <img src="img/ícone_mensagem.svg" alt="mensagem">
                            <p>Falar com responsável</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="conteudoPrincipal-animal">
                <img src="../assets/img/animais/Animais_-_Lua.png" alt="Dunga" class="conteudoPrincipal-animal-imagem">
                <div class="conteudoPrincipal-animal-texto">
                    <p class="conteudoPrincipal-animal-nome">Yoda</p>
                    <div class="conteudoPrincipal-animal-descricao">
                        <p>6 meses</p>
                        <p>Porte médio</p>
                        <p>Ativo e carinhosa</p>
                    </div>
                    <div class="conteudoPrincipal-animal-footer">
                        <p class="conteudoPrincipal-animal-cidade">Duque de Caxias (RJ)</p>
                        <div class="conteudoPrincipal-animal-mensagem">
                            <img src="img/ícone_mensagem.svg" alt="mensagem">
                            <p>Falar com responsável</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="conteudoPrincipal-animal">
                <img src="../assets/img/animais/Animais_-_Amora.png" alt="Dunga"
                    class="conteudoPrincipal-animal-imagem">
                <div class="conteudoPrincipal-animal-texto">
                    <p class="conteudoPrincipal-animal-nome">Amora</p>
                    <div class="conteudoPrincipal-animal-descricao">
                        <p>45 dias</p>
                        <p>Porte grande</p>
                        <p>Calma e carinhosa</p>
                    </div>
                    <div class="conteudoPrincipal-animal-footer">
                        <p class="conteudoPrincipal-animal-cidade">São Gonçalo (RJ)</p>
                        <div class="conteudoPrincipal-animal-mensagem">
                            <img src="img/ícone_mensagem.svg" alt="mensagem">
                            <p>Falar com responsável</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="conteudoPrincipal-animal">
                <img src="../assets/img/animais/Animais_-_Zelda.png" alt="Dunga"
                    class="conteudoPrincipal-animal-imagem">
                <div class="conteudoPrincipal-animal-texto">
                    <p class="conteudoPrincipal-animal-nome">Zelda</p>
                    <div class="conteudoPrincipal-animal-descricao">
                        <p>5 meses</p>
                        <p>Porte médio</p>
                        <p>Ativa e amável</p>
                    </div>
                    <div class="conteudoPrincipal-animal-footer">
                        <p class="conteudoPrincipal-animal-cidade">Rio de Janeiro (RJ)</p>
                        <div class="conteudoPrincipal-animal-mensagem">
                            <img src="img/ícone_mensagem.svg" alt="mensagem">
                            <p>Falar com responsável</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
.conteudoPrincipal .container {
    display: flex;
    flex-direction: column;
}

.conteudoPrincipal-texto1 {
    color: #3772FF;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    margin: 20% 0% 10%;
}

.conteudoPrincipal-animal {
    display: flex;
    background-color: #F6F6F6;
    padding: 5%;
    white-space: nowrap;
    margin-top: 5%;
}

.conteudoPrincipal-animal-imagem {
    width: 100%;
}

.conteudoPrincipal-animal-texto {
    display: flex;
    flex-direction: column;
    padding-left: 5%;
}

.conteudoPrincipal-animal-nome {
    color: #3772FF;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 10%;
}

.conteudoPrincipal-animal-descricao {
    color: #737380;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
}

.conteudoPrincipal-animal-footer {
    position: sticky;
    top: 100%;
}

.conteudoPrincipal-animal-cidade {
    color: #737380;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
}

.conteudoPrincipal-animal-mensagem {
    display: flex;
    color: #737380;
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    font-weight: 400;
    padding-top: 10%;
    align-items: center;
}

.conteudoPrincipal-animal-mensagem p {
    padding-left: 5%;
}
</style>
