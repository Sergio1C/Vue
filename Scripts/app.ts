
import Vue from 'vue';
import Counter from './components/Counter.vue'
import Sidebar from './components/Sidebar.vue'
import MddMap from './components/MddMap.vue'
import { LatLng } from 'leaflet';

new Vue({
    el: '#app',
    components: { Counter, Sidebar, MddMap },
    data: {
        msg: "Здесь приложение App.js",
        sidebarOpened: false,

        //leaflet
        mddMapReady: false,
        mddMapMarkers: Array<LatLng>()
    },
    methods: {

        showAlert(alert: string) {
            window.alert(`Сообщаю: ${alert}`);
        },

        onMddMapReady(value: Object) {
            this.mddMapMarkers = [new LatLng(55.7298279, 37.6389351)]
        }

    },

    created: function () {
        //this.mddMapMarkers = [new LatLng(55.7298279, 37.6389351)]
    }

});
