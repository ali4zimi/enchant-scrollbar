import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


import { mac, defaultPreset } from '../src/presets'


const scrollable = document.querySelectorAll(".enchant-wrapper2");


scrollable.forEach((el) => {
    // customizeScrollbar(el as HTMLElement, defaultPreset);
    var myScrollbar = new EnchantScrollbar(el as HTMLDivElement, mac);
});


import { EnchantScrollbar } from '../src/index'


var mainScrollbar = new EnchantScrollbar(document.querySelector("#main") as HTMLDivElement, defaultPreset);
const verticalScrollbar = mainScrollbar.getVerticalScrollbar();
if (verticalScrollbar) {
  verticalScrollbar.getWrapper().style.zIndex = '1000';
}