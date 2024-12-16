import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

import { EnchantScrollbar } from '../src/index'
import { preset_1, preset_2 } from '../src/presets'


const scrollable = document.querySelector("#enchant-wrapper2");


var myScrollbar = new EnchantScrollbar(scrollable as HTMLDivElement, preset_2);





var mainScrollbar = new EnchantScrollbar(document.querySelector("#main") as HTMLDivElement, preset_1);
const verticalScrollbar = mainScrollbar.getVerticalScrollbar();
if (verticalScrollbar) {
  verticalScrollbar.getWrapper().style.zIndex = '1000';
}