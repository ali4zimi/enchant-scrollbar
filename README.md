# Enchant Scrollbar
[![npm version](https://badge.fury.io/js/enchant-scrollbar.svg)](https://badge.fury.io/js/enchant-scrollbar)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](
https://opensource.org/licenses/MIT)




## Installation
Welcome to the documentation for the Enchant Scrollbar plugin. This plugin provides a customizable
scrollbar
solution for enhancing the user experience on scrollable elements within your web application.

### Installation
To install the plugin, you can use npm or yarn:
```bash
npm install enchant-scrollbar
```
or
```bash
yarn add enchant-scrollbar
```

### Usage

#### Importing the plugin
To use the plugin, you can import it into your project and then call the init function on the
element you want to make scrollable, or you can leave it empty and it will be applied on body.

```javascript
import { EnchantScrollbar } 'enchant-scrollbar';

// if you want to apply it on body
const enchantScrollbar = new EnchantScrollbar();
enchantScrollbar.init();
```

#### Using on a div
```javascript
import { EnchantScrollbar } 'enchant-scrollbar';

// if you want to apply it on a div
const el = document.getElementById('scrollable');
const enchantScrollbar = new EnchantScrollbar();
enchantScrollbar.init(el, {
    // options
});
```

#### Styling
You can style the scrollable div by using the following classes:
```css
/* e.g. padding for the content */
.enchant-scrollable-content {
    padding: 10px; 
}
```

### Contributing
Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License
This project is licensed under the MIT License - see the <a href="https://github.com/ali4zimi/enchant-scrollbar/blob/main/LICENSE.md">LICENSE.md</a> file for details
