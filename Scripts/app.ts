
import Vue from 'vue';
import Counter from './components/Counter.vue'

new Vue({
    el: '#app',
    components: { Counter },
    data: {
        msg: "Hello"
    }
});
