import Vue from 'vue';
//import Vuetify from 'vuetify';
//import Vuetify from '../Scripts/vuetify';
//import "vuetify/dist/vuetify.css";
import Custom from './components/Custom.vue';
//Vue.use(Vuetify);
new Vue({
    el: '#app',
    components: { Custom: Custom },
    data: {
        msg: "Здесь приложение App.js"
    }
});
