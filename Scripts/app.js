import Vue from 'vue';
import Counter from './components/Counter.vue';
import Sidebar from './components/Sidebar.vue';
new Vue({
    el: '#app',
    components: { Counter: Counter, Sidebar: Sidebar },
    data: {
        msg: "Здесь приложение App.js",
        sidebarOpened: false
    },
    methods: {
        showAlert: function (value) {
            window.alert("\u0441\u0430\u0439\u0434\u0431\u0430\u0440 \u0437\u0430\u043A\u0440\u044B\u0442: " + value);
        }
    }
});
