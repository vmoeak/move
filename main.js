let string = `
    /* 我是一名前端 */
    #bagua {
        width: 100px;
        height: 100px;
        position: relative;
        box-shadow: 0 0 3px rgba(0,0,0,.5);
        border-radius: 50%;
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
    }
    #bagua::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    }
    #bagua::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    }
`
let string1 = '';
let n = 0;
let move = document.querySelector('#move');
let style = document.querySelector('#style');
let show = () => {
    if (n >= string.length) {
        return;
    }
    setTimeout(() => {
        if (string[n] === '\n') {
            string1 += '<br>';
        }
        else if (string[n] === ' ')
        {
            string1 += '&nbsp';
        }
        else {
            string1 += string[n];
        }
        move.innerHTML = string1;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        move.scrollTo(0, 99999);
        n++;
        show();
    }, 10)
}

show();