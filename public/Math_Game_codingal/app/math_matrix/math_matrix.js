const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
        this.characters = '0123456789'
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = '';
        this.canvasHeight = canvasHeight;
    }
    draw(context) {
        this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length))
        context.fillStyle = "#dbaaf7"
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize)
        if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.957) {
            this.y = 0;
        } else {
            this.y += 1;
        }
    }
}

class Effect {
    constructor(canvasWidth, canvasHeight) {
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.fontSize = 25;
        this.colums = this.canvasWidth / this.fontSize;
        this.symbol = []
        this.initialize()
    }

    initialize() {
        for (let i = 0; i < this.colums; i++) {
            this.symbol[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight)
        }
    }
}
const effect = new Effect(canvas.width, canvas.height)
    //time
let lastTime = 0;
const fps = 30;
const nextFrame = 1000 / fps;
let timer = 0;



function animation(t) {
    const deltaTime = t - lastTime;
    lastTime = t;
    if (timer > nextFrame) {
        ctx.fillStyle = 'rgba(255,255,255,0.1)'

        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.font = effect.fontSize + 'px monospace'
        effect.symbol.forEach(symbol => symbol.draw(ctx))
        timer = 0;
    } else {
        timer += deltaTime
    }


    requestAnimationFrame(animation)
}
animation(0)