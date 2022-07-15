<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Cabecalho"
})
</script>

<template>
    <div class="cabecalhoPrincipal">
        <div class="container">
            <nav class="cabecalhoPrincipal-nav">
                <a class="cabecalhoPrincipal-nav-link" href="#"><img src="../assets/img/Casa.svg" alt="Home"></a>
                <a class="cabecalhoPrincipal-nav-link" href="#"><img src="../assets/img/Mensagens.svg"
                        alt="Mensagem"></a>
            </nav>

            <div class="cabecalhoPrincipal-usuario">
                <a href="#" class="cabecalhoPrincipal-usuario-link"><img src="../assets/img/Usuário.png"
                        alt="Usuário"></a>
            </div>
        </div>
    </div>
</template>

<style>
.cabecalhoPrincipal .container {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.cabecalhoPrincipal-nav {
    display: flex;
    align-items: center;
    padding: 10%;
    flex-grow: 1;
}

.cabecalhoPrincipal-nav-link {
    padding-right: 25%;
}

.cabecalhoPrincipal-usuario {
    padding: 10%;
}
</style>
