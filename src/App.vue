<script setup lang="ts">
import Cabecalho from "./components/Cabecalho.vue"
import Rodape from "./components/Rodape.vue"

</script>

<template>
    <div class="corpo">

        <header>
            <Cabecalho />
        </header>

        <main>
            <router-view></router-view>
        </main>

        <footer>
            <Rodape />
        </footer>

    </div>
</template>

<style scoped>
#app {
    margin: 0;
    padding: 0;
}

.corpo {
    background-image: url('./assets/img/Forma_top.svg');
    background-repeat: no-repeat;
    background-size: 96%;
    /* background-color: #3772FF; */
    min-height: 100vh;
}

footer {
    position: sticky;
    top: 100%;
}
</style>
