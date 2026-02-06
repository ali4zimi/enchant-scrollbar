# Enchant Scrollbar

A lightweight, customizable scrollbar library for web applications. Create consistent, cross-platform scrollbar designs that work the same on Windows, macOS, and all major browsers.

## Why Enchant Scrollbar?

- **Cross-platform consistency**: Native scrollbars behave differently across operating systems (hidden on macOS, always visible on Windows). Enchant Scrollbar provides a unified experience.
- **Highly customizable**: Control colors, sizes, opacity, border radius, and more
- **Lightweight**: No dependencies, pure TypeScript
- **Easy to use**: Simple API with sensible defaults

## Installation

```bash
npm install enchant-scrollbar
```

## Quick Start

### 1. Set up your HTML structure

```html
<div class="enchant-wrapper" style="position: relative; height: 400px; width: 100%;">
  <div class="enchant-content" style="height: 100%; width: 100%;">
    <!-- Your scrollable content here -->
  </div>
</div>
```

### 2. Initialize the scrollbar

```javascript
import { EnchantScrollbar } from 'enchant-scrollbar';

const wrapper = document.querySelector('.enchant-wrapper');
const scrollbar = new EnchantScrollbar(wrapper);
```

## Using Presets

Enchant Scrollbar includes built-in presets for quick styling:

```javascript
import { EnchantScrollbar, preset_1, preset_2 } from 'enchant-scrollbar';

const wrapper = document.querySelector('.enchant-wrapper');
const scrollbar = new EnchantScrollbar(wrapper, preset_1);
```

## Custom Configuration

Pass a configuration object to customize every aspect:

```javascript
import { EnchantScrollbar } from 'enchant-scrollbar';

const scrollbar = new EnchantScrollbar(wrapper, {
  width: '10px',
  opacity: '0.5',
  opacityWhileActive: '1',
  trackColor: '#f1f1f1',
  thumbColor: '#888888',
  thumbBorderRadius: '5px',
  showArrows: false,
});
```

## Configuration Options

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `width` | string | Yes | Scrollbar width (e.g., `'10px'`) |
| `opacity` | string | Yes | Idle state opacity (e.g., `'0.5'`) |
| `widthWhileActive` | string | Yes | Width when scrollbar is active |
| `opacityWhileActive` | string | Yes | Opacity when scrollbar is active |
| `zIndex` | string | No | CSS z-index for scrollbar wrapper |
| `trackColor` | string | Yes | Background color of the track |
| `trackWidth` | string | No | Width of the track |
| `trackBorderRadius` | string | No | Border radius of the track |
| `trackColorWhileActive` | string | Yes | Track color when active |
| `trackBorderRadiusWhileActive` | string | No | Track border radius when active |
| `thumbColor` | string | Yes | Color of the scrollbar thumb |
| `thumbWidth` | string | No | Width of the thumb |
| `thumbBorderRadius` | string | No | Border radius of the thumb |
| `thumbColorWhileActive` | string | No | Thumb color when active |
| `thumbBorderRadiusWhileActive` | string | No | Thumb border radius when active |
| `showArrows` | boolean | Yes | Show navigation arrows |
| `showArrowsWhileActive` | boolean | Yes | Show arrows only when active |
| `arrowsColor` | string | No | Color of arrow icons |
| `arrowsWidth` | string | No | Width of arrow buttons |
| `arrowsHeight` | string | No | Height of arrow buttons |

## API

### `EnchantScrollbar`

#### Constructor

```typescript
new EnchantScrollbar(wrapper: HTMLDivElement, config?: Config)
```

#### Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `getEnchantWrapper()` | `HTMLDivElement` | Returns the wrapper element |
| `getEnchantContent()` | `HTMLDivElement` | Returns the content element |
| `getVerticalScrollbar()` | `ScrollbarVertical \| undefined` | Returns vertical scrollbar instance |
| `getHorizontalScrollbar()` | `ScrollbarHorizontal \| undefined` | Returns horizontal scrollbar instance |
| `update()` | `void` | Recalculates scrollbar dimensions |

## TypeScript Support

Full TypeScript support with exported types:

```typescript
import { EnchantScrollbar, Config } from 'enchant-scrollbar';

const config: Config = {
  width: '8px',
  opacity: '0.5',
  // ...
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests on [GitHub](https://github.com/ali4zimi/enchant-scrollbar).

## License

MIT License - see [LICENSE](LICENSE) for details.
