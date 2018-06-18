


let canvas = document.querySelector('canvas');


canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255, 0, 0)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'yellow';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'green';
// c.fillRect(300, 300, 100, 100);

//Line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = '#fa34a3';
// c.stroke();

//arc/circle
// c.beginPath();
// c.arc(300,300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// for (let i = 0; i < 1000; i++) {
//     var x = Math.random() * canvas.width;
//     var y = Math.random() * canvas.height;
//     var r = Math.random() * 255;
//     var g = Math.random() * 255;
//     var b = Math.random() * 255;

//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = `rgba(${r}, ${g}, ${b}`;
//     c.stroke();  
// }

var mouse = {
    x: undefined,
    y: undefined
};

window.addEventListener('mousemove', 
    function() {
        mouse.x = event.x;
        mouse.y = event.y;
        console.log(mouse);
});

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.r = Math.random() * 255;
    this.g = Math.random() * 255;
    this.b = Math.random() * 255;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // c.strokeStyle = `rgba(${this.r}, ${this.g}, ${this.b}`;
        // c.stroke();
        c.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}`;
        c.fill();
    }

    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var circleArray = [];
for (let i = 0; i < 100; i++) {
    let radius = 30;
    let x = Math.random() * (innerWidth - radius*2) + radius;
    let y = Math.random() * (innerHeight-radius*2) + radius;
    let dx = (Math.random() - 0.5) * 10;
    let dy = (Math.random() - 0.5) * 10;

    circleArray.push(new Circle(x,y,dx,dy,radius));
    
}

console.log(circleArray);



// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI * 2, false);
// c.strokeStyle = `rgba(255, 0, 0`;
// c.stroke();



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth, innerHeight);
    // c.beginPath();
    // c.arc(x, y, radius, 0, Math.PI * 2, false);
    // c.strokeStyle = `rgba(255, 0, 0`;
    // c.stroke();
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }


}

animate();

console.log(canvas);