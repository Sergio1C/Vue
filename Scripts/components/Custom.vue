<template>
    <div>
        <pre>Кастоный Компонент {{gettitle}}. Номер {{number}} </pre>
    </div>
</template>

<script lang = "ts" >

    import { Vue, Component, Prop } from 'vue-property-decorator'

        @Component
        export default class CustomComponent extends Vue {
            title: string;
            mounted() {
                this.title = "Title"
            }

            @Prop({ type: Number, default: 100, required: false, validator: function (t: Number) { return t > 0; } }) number;
            get gettitle() {
                return this.title;
            }
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
