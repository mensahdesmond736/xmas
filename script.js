const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

let width, height, snowflakes;

function init() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    snowflakes = [];
    for (let i = 0; i < 150; i++) {
        snowflakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 4 + 1,
            d: Math.random() * 1
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let i = 0; i < snowflakes.length; i++) {
        let p = snowflakes[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    update();
}

function update() {
    for (let i = 0; i < snowflakes.length; i++) {
        let p = snowflakes[i];
        p.y += Math.cos(p.d) + 1 + p.r / 2;
        p.x += Math.sin(0) * 2;

        if (p.y > height) {
            snowflakes[i] = { x: Math.random() * width, y: -10, r: p.r, d: p.d };
        }
    }
}

window.addEventListener('resize', init);
init();
setInterval(draw, 33);