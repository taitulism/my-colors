[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

node-colors
===========
Colorize terminal text for Node

## `createColor(foreground, background, modifier)`
Returns a colorizer function.

Both foreground & background arguments expect a color.
A color could be one of the following:
* A supported color name ([see list below](#supported-safe-color-names))
* 0-255 Number - [see 256 color palette](https://upload.wikimedia.org/wikipedia/commons/1/15/Xterm_256color_chart.svg)
* HEX - a hex color string that starts with a hash sign (e.g. `'#1d3ddf'`)
* RGB - an array of three values (e.g. `[200, 40, 40]`)

Example:
```js
// my-app.js
const createColor = require('node-colors');

const warning = createColor('yellow', 'red', 'bold');
const msg = warning('Attention: Do not do that.');

console.log(msg)
```
![Terminal Example](/example.png)

Supported Safe Color Names
--------------------------
* Black
* Red
* Green
* Yellow
* Blue
* Magenta
* Cyan
* White

Modifiers
---------
> **Note:** Support may vary between different OS/terminals

* bold
* dim
* italic
* underline
* invert
* strike

Example:
```js
createColor('#000000', [77, 160, 255], ['bold', 'underline']);
```
