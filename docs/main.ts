import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


import { mac, defaultPreset } from '../src/presets'


const scrollable = document.querySelectorAll(".enchant-scrollbar2");


scrollable.forEach((el) => {
    // customizeScrollbar(el as HTMLElement, defaultPreset);
    var myScrollbar = new MyScrollbar(el as HTMLDivElement, mac);
});


import { MyScrollbar } from '../src/index'


var mainScrollbar = new MyScrollbar(document.querySelector("#main") as HTMLDivElement, defaultPreset);
const verticalScrollbar = mainScrollbar.getVerticalScrollbar();
if (verticalScrollbar) {
  verticalScrollbar.getWrapper().style.zIndex = '1000';
}