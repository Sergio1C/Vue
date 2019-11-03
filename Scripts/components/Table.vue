<template>
    <div id="app">
        <v-app>
            <v-card>card</v-card>
            <v-btn dark>Button</v-btn>
        </v-app>
    </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  props: {}
};
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>