<template>
    <div>
        <pre>Счетчик: {{counter}}</pre>
        <button class="btn btn-primary" v-on:click="increaseCounter(1)">Увеличить</button>
        <button class="btn btn-primary" v-on:click="increaseCounter(-1)">Уменьшить</button>
    </div>
</template>

<script lang = "ts" >

    import { Vue, Component, Prop } from 'vue-property-decorator'

        @Component
        export default class Counter extends Vue {

            @Prop({ type: Number, default: 100, required: false, validator: function (t: Number) { return t > 0; } }) count!: Number;
           
            increaseCounter(increase: Number): void {
                this.count = +this.count + 1;
            }

            get counter(): Number {
                return this.count;
            }

        };

</script>
<style>

</style>
