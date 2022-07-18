<script lang="ts">
import { defineComponent } from "vue"
import Animais from "@/components/Animais.vue"

export default defineComponent({
    name: "TelaAnimais",
    created() {
        document.body.style.backgroundColor = '#FFFFFF'
    },
    components: {
        Animais
    }
})
</script>

<template>
    <div class="conteudoPrincipal">

        <div class="container">
            <p class="conteudoPrincipal-texto1">Olá! Veja os amigos disponíveis para adoção!</p>

            <div class="conteudoPrincipal-animais">
                <Animais nome="Dunga" idade="2 anos" porte="pequeno" personalidade="Calmo e educado"
                    cidade-origem="Rio de Janeiro (RJ)" />

                <Animais nome="Felícia" idade="3 meses" porte="pequeno" personalidade="Ativa e carinhosa"
                    cidade-origem="Nova Iguaçu (RJ)" />

                <Animais nome="Sirius" idade="6 meses" porte="grande" personalidade="Ativo e educado"
                    cidade-origem="Duque de Caxias (RJ)" />

                <Animais nome="Fiona" idade="3 anos" porte="pequeno" personalidade="Calma e carinhosa"
                    cidade-origem="São Gonçalo (RJ)" />

                <Animais nome="Sid" idade="8 meses" porte="médio/grande" personalidade="Brincalhão e amável"
                    cidade-origem="Rio de Janeiro(RJ)" />

                <Animais nome="Yoda" idade="1 ano" porte="médio" personalidade="Ativo e carinhoso"
                    cidade-origem="Nova Iguaçu (RJ)" />

                <Animais nome="Lua" idade="6 meses" porte="médio" personalidade="Ativa e carinhosa"
                    cidade-origem="Duque de Caxias (RJ)" />

                <Animais nome="Amora" idade="45 dias" porte="grande" personalidade="Calma e carinhosa"
                    cidade-origem="São Gonçalo (RJ)" />

                <Animais nome="Zelda" idade="5 meses" porte="médio" personalidade="Ativa e amável"
                    cidade-origem="Rio de Janeiro (RJ)" />
            </div>


        </div>
    </div>
</template>

<style scoped>
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
    margin: 20% 20% 10%;
}

.conteudoPrincipal-animais {
    display: flex;
    flex-direction: column;
}

.conteudoPrincipal-animais * {
    margin: 2.5% 0% 2.5%;
}
</style>
