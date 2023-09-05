import { EnchantScrollbar } from './.server/index.mjs'

const el = document.getElementById('scrollable');
const enchantScrollbar = new EnchantScrollbar();
enchantScrollbar.init(el, {
    // options
    borderRadius: 0,
});

enchantScrollbar.init();
