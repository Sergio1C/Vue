import Vue from 'vue';
import Counter from './components/Counter.vue';
import Sidebar from './components/Sidebar.vue';
import MddMap from './components/MddMap.vue';
import { LatLng } from 'leaflet';
new Vue({
    el: '#app',
    components: { Counter: Counter, Sidebar: Sidebar, MddMap: MddMap },
    data: {
        msg: "Здесь приложение App.js",
        sidebarOpened: false,
        //leaflet
        mddMapReady: false,
        mddMapMarkers: Array()
    },
    methods: {
        showAlert: function (alert) {
            window.alert("\u0421\u043E\u043E\u0431\u0449\u0430\u044E: " + alert);
        },
        onMddMapReady: function (value) {
            this.mddMapMarkers = [new LatLng(55.7298279, 37.6389351)];
        }
    },
    created: function () {
        //this.mddMapMarkers = [new LatLng(55.7298279, 37.6389351)]
    }
});
//# sourceMappingURL=app.js.map