// Xây dựng lớp mục tiêu;
function Fly (x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.drawCircle = function () {
        let fly = document.getElementById("myCanvas").getContext("2d");
        fly.beginPath();
        fly.arc(this.x,this.y,this.radius,0,Math.PI * 2);
        fly.fillStyle = 'red';
        fly.fill();
        fly.strokeStyle = 'black';
        fly.stroke();
        fly.closePath();
    }
}
// Xây dựng lớp trung tâm:
function Woman (width,height) {
    this.width = width;
    this.heigth = height;
    this.drawControl = function () {
        let flyswatter = document.getElementById("myCanvas").getContext("2d");
        flyswatter.beginPath();
        flyswatter.fillRect(200,200,this.width,this.heigth);
        flyswatter.fillStyle = 'green';
        flyswatter.fill();
        flyswatter.strokeStyle = 'black';
        flyswatter.stroke();
        flyswatter.closePath();
    }

}

// Xây dựng lớp trỏ:
function Stroke (startx,starty,overx,overy){
    this.startx = startx;
    this.starty = starty;
    this.overx = overx;
    this.overy = overy;
    this.getStartX = function () {
        return this.startx;
    };
    this.getStartY = function () {
        return this.starty;
    };
    this.getOverX = function () {
        return this.overx;
    };
    this.getOverY = function () {
        return this.overy;
    };
    this.drawStroke = function () {
        let styleStroke = document.getElementById("myCanvas").getContext("2d");

    }
}
// Khởi tạo đối tượng trung tâm;
 let object = new Woman(100,100);
 object.drawControl();


function controle() {
    let score = 0;
    let fly1 = new Fly(100,400,20);
    let fly2 = new Fly(250,400,20);
    let fly3 = new Fly(400,400,20);
    let fly4 = new Fly(100,250,20);
    let fly6 = new Fly(400,250,20);
    let fly7 = new Fly(100,100,20);
    let fly8 = new Fly(250,100,20);
    let fly9 = new Fly(400,100,20);
    let k = Math.floor((Math.random() *8 )+1);
            if (k ===1){
                fly1.drawCircle();
                console.log(k);
                // return score++;
            }
            if (k ===2){
                fly2.drawCircle();
                console.log(k);
                // return score++;
            }
            if (k ===3){
                fly3.drawCircle();
                console.log(k);
                // return score++;
            }
            if (k ===4){
                fly4.drawCircle();
                console.log(k);
                // return score++;
            }
            if (k ===5){
                fly6.drawCircle();
                console.log(k);
                // return score++;
            }
            if (k ===6){
                fly7.drawCircle();
                console.log(k);
                // return score++;
            }
            if (k ===7){
                fly8.drawCircle();
                // console.log(k);
                return score++;
            }
            if (k ===8){
                fly9.drawCircle();
                // console.log(k);
                return score++;
            }
            console.log(score)

}
// Khởi tạo đối tượng trỏ;
let stroke = new Stroke();
document.addEventListener('keydown',function (event) {
console.log(event);
if  (event.keyCode === 97){
    stroke.
}
});


