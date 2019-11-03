//import vuetify from '../Scripts/vuetify';
import Vue from 'vue';
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.css";
import App from '../Scripts/components/Table.vue';

Vue.set(Vuetify);

new Vue({
    el: '#app',
    components: { App },
    data: {
        msg: "Hello"
    }
});
