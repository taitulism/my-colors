\u0001b === \x1b  
`\x1b[33;1m${count}\x1b[0m`

* __bold__  
    open: '\u001b[1m'  
    close: '\u001b[22m'

* __dim__  
    open: '\u001b[2m'  
    close: '\u001b[22m'

* __underline__  
    open: '\u001b[4m'  
    close: '\u001b[24m'

ansi  
`\u001B[${code + offset}m`  
"[92m"

ansi256  
`\u001B[38;5;${code}m`  
"[38;5;83m"

ansi16m RGB  
"[38;2;200;40;40m"

old func body
```js
    let fg = '';
    let bg = '';
    let mod = '';
    let isFgBright = false;
    let isBgBright = false;

    if (fgColor) {
        fgColor = fgColor.toLowerCase();

        if (fgColor.startsWith(BRIGHT)) {
            isFgBright = true;
            fgColor = fgColor.substr(BRIGHT_LEN);
        }
        
        const colorNum = color8Map.get(fgColor) + 30;
        
        fg = String(colorNum);
        fg = wrapStart(fg, isFgBright);
    }

    if (bgColor) {
        bgColor = bgColor.toLowerCase();

        if (bgColor.startsWith(BRIGHT)) {
            isBgBright = true;
            bgColor = bgColor.substr(BRIGHT_LEN);
        }
        
        const colorNum = color8Map.get(bgColor) + 40;

        bg = String(colorNum);
        bg = wrapStart(bg, isBgBright);
    }
```