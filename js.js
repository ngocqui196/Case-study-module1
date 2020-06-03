// Xây dựng lớp mục tiêu;


let level = 0;
let point = 0;
let positionCircle = null;
let positionBTN    = null;

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

//Xây dựng lớp trỏ:
function Stroke (startx,starty,overx,overy){
    this.startx = startx;
    this.starty = starty;
    this.overx = overx;
    this.overy = overy;
    this.drawStroke = function () {
        let styleStroke = document.getElementById("myCanvas").getContext("2d");
        styleStroke.beginPath();
        styleStroke.lineTo(this.startx,this.starty);
        styleStroke.lineTo(this.overx,this.overy);
        styleStroke.stroke();
        styleStroke.closePath();
    }
}
function DrawText (x,y,color,text,font){
    this.x = x;
    this.y = y;
    this.color = color;
    this.text = text;
    this.font = font;
    this.drawText = function () {
        let drawtext = document.getElementById("myCanvas").getContext("2d");
        drawtext.beginPath()
        drawtext.fillStyle = this.color;
        drawtext.font = this.font;
        drawtext.fillText(this.text,this.x,this.y);
        drawtext.closePath();
    }
}
// Khởi tạo đối tượng trung tâm;
 let object = new Woman(100,100);
 object.drawControl();

// Khởi tạo đối tượng trỏ;
let stroke1 = new Stroke(250,250,100,400);
let stroke2 = new Stroke(250,250,250,400);
let stroke3= new Stroke(250,250,400,400);
let stroke4 = new Stroke(250,250,100,250);
let stroke6 = new Stroke(250,250,400,250);
let stroke7 = new Stroke(250,250,100,100);
let stroke8 = new Stroke(250,250,250,100);
let stroke9 = new Stroke(250,250,400,100);

document.addEventListener('keydown',function (event) {
    if (positionBTN != null)
        return;
    switch (event.keyCode) {
       case 97 :{
           positionBTN = 1;
           stroke1.drawStroke();
           break;
       }
       case 98 :{
           positionBTN = 2;
           stroke2.drawStroke();
           break;
       }
       case 99 :{
           positionBTN = 3;
           stroke3.drawStroke();
           break;
       }
       case 100 :{
           positionBTN = 4;
           stroke4.drawStroke();
           break;
       }
       case 102 :{
           positionBTN = 6;
           stroke6.drawStroke();
           break;
       }
       case 103 :{
           positionBTN = 7;
           stroke7.drawStroke();
           break;
       }
       case 104 :{
           positionBTN = 8;
           stroke8.drawStroke();
           break;
       }
       case 105 :{
           positionBTN = 9;
           stroke9.drawStroke();
           break;
       }
   }
});
 //Chơi game và khởi tạo đối tượng mục tiêu:

let num = 3;
let x = 50;
function playGame() {
    let text1 = new DrawText(x,50,"blue",num,"35px sans-serif");
    text1.drawText();
    num--;
    x+=50;
    if (num >= 0 ){
        setTimeout(playGame,1000);

    }else{
        setTimeout(controle(),1000);
    }
}

 function controle() {
    if (level !== 0){
        if (positionBTN === positionCircle){

            point++;
            console.log("dung")
        }else{
            console.log("sai");
            alert("Game Over");
            return;
        }
    }
    document.getElementById("point").innerHTML = "Your point: " + point ;
     level++;

    if(level >=100){
        setTimeout(controle,500)
    }else if (level >= 50){
        setTimeout(controle, 625);
    }else if (level >= 30){
        setTimeout(controle, 800);
    }else{
        setTimeout(controle,1000);
    }

    positionBTN = null;

    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.clearRect(0,0,500, 500);

    let object = new Woman(100,100);
    object.drawControl();

    let fly1 = new Fly(100,400,20);
    let fly2 = new Fly(250,400,20);
    let fly3 = new Fly(400,400,20);
    let fly4 = new Fly(100,250,20);
    let fly6 = new Fly(400,250,20);
    let fly7 = new Fly(100,100,20);
    let fly8 = new Fly(250,100,20);
    let fly9 = new Fly(400,100,20);

    switch (Math.floor((Math.random() *8 )+1)) {
         case 1:{
             positionCircle = 1;
             fly1.drawCircle();
             break;
         }
         case 2:{
             positionCircle = 2;
             fly2.drawCircle();
             break;
         }
         case 3:{
             positionCircle = 3;
             fly3.drawCircle();
             break;
         }
         case 4:{
             positionCircle = 4;
             fly4.drawCircle();
             break;
         }
         case 5:{
             positionCircle = 6;
             fly6.drawCircle();
             break;
         }
         case 6:{
             positionCircle = 7;
             fly7.drawCircle();
             break;
         }
         case 7:{
             positionCircle = 8;
             fly8.drawCircle();
             break;
         }
         case 8:{
             positionCircle = 9;
             fly9.drawCircle();
             break;
         }
     }
 }







