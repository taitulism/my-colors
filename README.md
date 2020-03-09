[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

node-colors
===========
Colorize terminal text for Node

## `createColorizer(foreground, background, modifier)`
Create a colorizer function.

Both foreground & background arguments expect a color.
A color could be one of the following:
* A supported color name (see list below)
* 0-255 Number - [256 color palette](https://upload.wikimedia.org/wikipedia/commons/1/15/Xterm_256color_chart.svg)
* HEX - a hex color string that starts with a hash sign (e.g. `'#1d3ddf'`)
* RGB - an array of three values (e.g. `[200, 40, 40]`)

Example:
```js
// my-app.js
const createColorizer = require('node-colors');
const warning = createColorizer('yellow', 'red', 'bold');
const msg = warning('Attention: Do not do that.');

console.log(msg)
```
![Terminal Example](/example.png)

Supported Color Names
---------------------
* Black
* Red
* Green
* Yellow
* Blue
* Magenta
* Cyan
* White

### 16 colors terminals
You can add `'bright'` before each color to use its bright mode e.g. `'brightBlue'`. Casing is ignored.

Modifiers
---------
> Note: Support may vary between different OS/terminals
* Bold
* Underline
* Reverse
<!-- * Dim -->

<!-- 
### TODO:
You can also use the first letter e.g. `B` for Bold. 
-->