
import Vue from 'vue';
import Counter from './components/Counter.vue'
import Sidebar from './components/Sidebar.vue'

new Vue({
    el: '#app',
    components: { Counter, Sidebar },
    data: {
        msg: "Здесь приложение App.js",
        sidebarOpened: false
    },
    methods: {

        showAlert(value: Object) {
            window.alert(`сайдбар закрыт: ${value}`);
        }
    }
});
