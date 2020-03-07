node-colors
===========
Colorize terminal text for Node

## `createColorizer(foreground, background, [modifier])`

Create a colorizer function.
First two arguments are required. Pass `null` to skip a color.

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