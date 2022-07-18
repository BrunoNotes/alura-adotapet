<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Botao",
    props: ['msg']
})
</script>

<template>
    <button class="botao">{{ msg }}</button>
</template>

<style scoped>
.botao-spaco {
    padding: 2% 0% 2%;
    width: auto;
}

.botao {
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
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    padding: 2.5% 2.5% 2.5%;
    width: 45%;
    margin-top: 2%;
    margin-bottom: 2%;
}
</style>
