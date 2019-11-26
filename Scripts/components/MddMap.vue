
<template>
    <div id="mddmap" style="border:1px red">
        <l-map :center="center" :zoom="zoom" ref="lmap" @ready="ready">
            <l-tile-layer :url="url">                
            </l-tile-layer>
            <!--<template v-for="markerLatLng in markersLatLng">
        <l-marker :lat-lng="markerLatLng"></l-marker>
    </template>-->                        
            <l-marker :lat-lng="[55.755, 37.675]">
                <l-popup :content="'str'"></l-popup>
            </l-marker>
        </l-map>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    import * as Vue2Leaflet from 'vue2-leaflet';
    import * as L from 'leaflet'; 

    import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
    import { Icon } from 'leaflet'

    L.Icon.Default.imagePath = '.';
    // OR
    //delete (Vue2Leaflet as any).L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });

    @Component({ components: { LMap, LTileLayer, LMarker, LPopup } })
    export default class MddMap extends Vue{

        url: string = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        center: L.LatLng = new L.LatLng(55.755, 37.675);
        zoom: number = 10;
        markersLatLng: L.LatLng[] = [new L.LatLng(55.755, 37.675)];

        ready(value: Object): void {

            this.markersLatLng = [new L.LatLng(55.7298279, 37.6389351)]
            this.$emit("ready");
        }

        mounted() {
            this.$nextTick(() => {
                let lmap: LMap = this.$refs.lmap as LMap;
                //lmap.mapObject.whenReady(() => console.log("ready"));
            })
        }

    }
</script>

<style scoped lang="scss">

@import "~leaflet/dist/leaflet.css";

    #mddmap{
        width: 100%; 
        height: 720px;
    }

</style>