<template>

    <div>
        <template v-if="modal">
            <div class="overlay" v-bind:class="classModeObject"></div>
        </template>

        <div class="sidebarComp" v-bind:class="classModeObject">
            <div class="sidebarComp__container">
                <div class="d-flex flex-nowrap">
                    <div class="sidebarComp__switch-block" v-if="swithBlock">
                        <!--bug vue with space-->

                        <button v-if="isFull" @click="isFull = false" type="button" class="sidebarComp__btn-toggle sidebarComp__btn-toggle--active">Свернуть окно</button>
                        <button v-if="!isFull" @click="isFull = true" type="button" class="sidebarComp__btn-toggle">Развернуть окно</button>

                        <!--bug vue with space-->
                    </div>
                    <div class="sidebarComp__content-wrapper">
                        <div class="sidebarComp__content" v-bind:class="contentClass">
                            <slot name="sidebarContent">КОНТЕНТ ДЛЯ САЙДБАРА</slot>
                        </div>

                        <slot name="sidebar__footer">
                            <div class="sidebar__footer sidebar-footer">
                                <button type="button" class="sidebar__footer-btn sidebar__footer-btn--close" @click="close()">Закрыть</button>
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">

    import { Vue, Component, Prop } from 'vue-property-decorator'

    enum SideBarModes {
        Half = "half",
        Full = "full"
    }

    @Component({ components: {} })
    export default class Sidebar extends Vue {
        //режим отображения сайдбара ("half","full")
        @Prop({ type: String, default: "half", required: false, validator(val) { return val == SideBarModes.Full || val == SideBarModes.Half; } }) mode: SideBarModes;
        //модальность сайдбара
        @Prop({ type: Boolean, default: false, required: false }) modal: Boolean;
        //блок переключателей (раскрытие сайдбара)
        @Prop({ type: Boolean, default: false, required: false }) swithBlock: Boolean;

        //внутренне состояние компонента
        isClose: Boolean = false;
        isFull: Boolean = false;

        //метод открытия сайдбара
        show(mode: SideBarModes = SideBarModes.Half): void {
            this.isClose = false;
            this.mode = mode;
        }
        //метод закрытия сайдара
        close(): void {
            this.isClose = true;
            this.$emit('close', { 'params': this.isClose });
        }

        get classModeObject(): Object {

            return {
                'sidebarComp--mode-close': this.isClose,
                'sidebarComp--mode-half': !this.isClose && !this.isFull,//this.mode == 'half',
                'sidebarComp--mode-full': !this.isClose && this.isFull, //this.mode == 'full',
                'sidebarComp__modal_false': !this.modal,
            }
        }

        get contentClass(): Object {
            return {
                'sidebarComp__content_fullHeight': false//!this.is_footer
            }
        }

    };

</script>

<style scoped>

    .overlay {
        position: fixed;
        background-color: rgba(0,0,0,0.3);
        transition: opacity 200ms;
        display: none; /* Hidden by default */
        width: 100% !important;
        top: 0;
        left: 0 !important;
        bottom: 0;
        right: 0;
        z-index: 30;
    }

    .sidebarComp {
        position: fixed;
        top: 102px;
        right: 0;
        width: calc(100% - 123px);
        height: calc(100vh - 90px);
        z-index: 30;
        background-color: white;
        transition: all .2s;
    }

    .sidebarComp__container {
        /*height: 100%;*/
    }

    .sidebarComp__content-wrapper {
        flex-grow: 1;
        width: calc(100% - 200px);
    }

    .sidebarComp__content {
        height: calc(100vh - 154px);
    }

    .sidebarComp__content_fullHeight {
        height: calc(100vh - 102px);
    }

    .sidebarComp--mode-close {
        left: 100%;
        display: none;
    }

    .sidebarComp--mode-full {
        width: calc(100% - 123px);
        right: 0;
        display: block !important;
    }

    .sidebarComp--mode-half {
        display: block !important;
        width: 80%;
        right: 0;
        max-width: 1920px;
    }

    @media screen and (width: 1920px) {
        .sidebarComp--mode-half {
            width: 60%;
        }
    }

    @media screen and (min-width: 1921px) {
        .sidebarComp--mode-half {
            width: 50%;
        }
    }

    .sidebarComp--mode-half.sidebarComp-overlay {
        max-width: inherit;
    }

    .sidebarComp__modal_false {
        box-shadow: -3px 2px 10px -4px #b5b5b5;
    }

    .sidebar__content {
        height: calc(100vh - 280px);
        overflow: auto;
    }

    /*SWITCH-BLOCK*/
    .sidebarComp__switch-block {
        min-width: auto;
        background-color: #ebf2fc;
        width: 200px;
    }

        .sidebarComp__switch-block > span:first-child {
            display: block;
            width: 50px;
        }

    .sidebarComp__btn-toggle {
        position: absolute;
        top: 3px;
        left: 8px;
        width: 32px;
        height: 32px;
        padding: 0;
        font-size: 0;
        border: none;
        /*background: transparent url("../Content/images/icon-window-size.png") no-repeat center center;*/
        background-size: 26px 18px;
    }

    .sidebarComp__btn-toggle--active {
        transform: scale(-1, 1);
    }

    /*SIDEBAR-FOOTER*/

    .sidebar__footer {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 52px;
        padding-top: 6px;
        padding-right: 10px;
        background-color: #ebf2fc;
    }

        .sidebar__footer button:not(:last-child) {
            margin-right: 15px;
        }

        .sidebar__footer:empty {
            display: none;
        }

    .sidebar__footer-link,
    .sidebar__footer-btn {
        min-width: 80px;
        height: 40px;
        color: #ffffff;
        border: none;
        border-radius: 4px;
        text-decoration: none;
        text-align: center;
        font-size: 18px;
        line-height: 40px;
    }

    a.sidebar__footer-link:hover,
    button.sidebar__footer-btn:hover,
    button.sidebar__footer-btn:visited,
    a.sidebar__footer-link:visited {
        color: rgba(255, 255, 255, 0.5);
        text-decoration: none;
    }

    a.sidebar__footer-link:active,
    button.sidebar__footer-btn:active {
        box-shadow: inset 0 3px 3px 0 rgba(0, 0, 0, 0.16);
    }

    .sidebar__footer-link--accept,
    .sidebar__footer-btn--accept, .btn-success {
        background-color: #10c5bc;
        border-color: #10c5bc;
        color: #ffffff;
    }


    .sidebar__footer-link--clean,
    .sidebar__footer-btn--clean {
        background-color: #b8dfff;
        border-color: #10c5bc;
        color: #ffffff;
    }

    .sidebar__footer-link--accept:disabled,
    .sidebar__footer-btn--accept:disabled {
        opacity: 0.4;
    }

    .btn-success:disabled {
        background-color: #cccccc;
        border-color: #cccccc;
        color: #000000;
    }

    button.sidebar__footer-btn--close, .btn-close {
        margin-left: auto;
        background-color: #f34b6f;
        color: #ffffff;
    }

    button.sidebar__footer-btn--add, .btn-add {
        margin-left: auto;
        background-color: #007cdc;
        color: #ffffff;
    }

    .btn-close:hover {
        color: #ffffff;
    }
</style>