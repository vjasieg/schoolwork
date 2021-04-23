var timer;
var x, y;

function basicCircle(x, y){
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.beginPath();
    ctx.arc(x,y,100,0,2*Math.PI);
    ctx.fillStyle = '#f6ba55';
    ctx.fill();
    ctx.stroke();
}

function basicCircleMad(x, y){
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.beginPath();
    ctx.arc(x,y,100,0,2*Math.PI);
    ctx.fillStyle = '#b50505';
    ctx.fill();
    ctx.stroke();
}

function addNormalEyes(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");

    ctx.beginPath();
    ctx.arc(x + 35, y - 40, 15, 0, 2*Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x + 35, y - 40, 5, 0, 2*Math.PI)
    ctx.fillStyle = 'black'
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x - 35, y - 40, 15, 0, 2*Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x - 35, y - 40, 5, 0, 2*Math.PI)
    ctx.fillStyle = 'black'
    ctx.fill();
    ctx.stroke();
}

function addSadEyes(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");

    ctx.beginPath();
    ctx.arc(x + 35, y - 40, 15, 0, 2*Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x + 35, y - 35, 5, 0, 2*Math.PI)
    ctx.fillStyle = 'black'
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x - 35, y - 40, 15, 0, 2*Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x - 35, y - 35, 5, 0, 2*Math.PI)
    ctx.fillStyle = 'black'
    ctx.fill();
    ctx.stroke();
}

function addSmile(x, y){
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x-50, y+5);
    ctx.fillStyle = "white";
    ctx.bezierCurveTo(x-20 * 2, y+30 * 2, x+20 * 2, y+30 * 2, x+50, y+5);
    ctx.lineTo(x-50,y+5)
    ctx.fill();
    ctx.stroke();
}

function addSad(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.beginPath()
    ctx.moveTo(x-20 * 2, y+20);
    ctx.bezierCurveTo(x-15 * 2, y, x+25, y, x+40, y+20);
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "black";
    ctx.lineTo(x-20 * 2,y+20)
    ctx.fill();
    ctx.stroke();
}


function drawEmoteSmile() {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.moveTo(x, y);
    basicCircle(x, y)
    //drawCircle(x-12, 40, 4, "black")
    //drawCircle(x+12, 40, 4, "black")
    addNormalEyes(x, y)
    addSmile(x, y)
}

function drawEmoteSad() {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.moveTo(x, y);
    basicCircle(x, y)
    addSadEyes(x, y)
    addSad(x, y + 10)
}

function deadEyeLeft(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.beginPath()
    ctx.moveTo(x-24, y-20)
    ctx.lineTo(x-34, y-30)
    ctx.moveTo(x-24, y-20)
    ctx.lineTo(x-14, y-30)
    ctx.moveTo(x-24, y-20)
    ctx.lineTo(x-14, y-10)
    ctx.moveTo(x-24, y-20)
    ctx.lineTo(x-34, y-10)
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke()
}

function deadEyeRight(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.beginPath()
    ctx.moveTo(x+24, y-20)
    ctx.lineTo(x+34, y-30)
    ctx.moveTo(x+24, y-20)
    ctx.lineTo(x+14, y-30)
    ctx.moveTo(x+24, y-20)
    ctx.lineTo(x+14, y-10)
    ctx.moveTo(x+24, y-20)
    ctx.lineTo(x+34, y-10)
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke()
}

function drawWorriedEyebrows(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.beginPath()
    ctx.moveTo(x+30, y-60)
    ctx.lineTo(x+60, y-45)
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x-30, y-60)
    ctx.lineTo(x - 60, y - 45)
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke()
}

function drawMadEyebrows(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.beginPath()
    ctx.moveTo(x+30, y-60)
    ctx.lineTo(x+60, y-75)
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x-30, y-60)
    ctx.lineTo(x - 60, y - 75)
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke()
}

let i = 70;

function drawThinkingEyebrows(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.beginPath()
    ctx.moveTo(x+30, y-60)
    ctx.lineTo(x+60, y-60)
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x-35, y - i)
    ctx.lineTo(x - 70, y - 70)
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke()
    i = i + 0.5
    if(i === 77) {
        i = 70;
    }
}

function drawConcernedMouth(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.moveTo(x, y);
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(x + 30, y + 10);
    ctx.lineTo(210, 270);
    ctx.stroke();
    ctx.closePath();
}

let j = 0;

function drawConcernedMouthAnim(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.moveTo(x, y);
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(x + 30, y + 10 - j);
    ctx.lineTo(210, 270 - j);
    ctx.stroke();
    ctx.closePath();
    j = j + 0.5
    if(j === 7) {
        j = 0;
    }
}

function drawWowMouth(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y + 25, 20, 0, 2*Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill();
    ctx.stroke();
}

function drawEmoteDead(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.moveTo(x, y);
    basicCircle(x, y)
    deadEyeLeft(x - 10, y - 15)
    deadEyeRight(x + 10, y - 15)
    addSad(x, y + 10)
}

function drawEmoteConcerned(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.moveTo(x, y);
    basicCircle(x, y)
    addSadEyes(x, y)
    drawConcernedMouth(x, y)
}

function drawEmoteWorried(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.moveTo(x, y);
    basicCircle(x, y)
    addSadEyes(x, y + 10)
    addSad(x, y + 10)
    drawWorriedEyebrows(x, y)
}

function drawEmoteMad(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.moveTo(x, y);
    basicCircleMad(x, y)
    addSadEyes(x, y + 10)
    addSad(x, y + 10)
    drawMadEyebrows(x, y + 5)
}

function drawEmoteThinking(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.moveTo(x, y);
    basicCircle(x, y)
    addNormalEyes(x, y + 10)
    drawConcernedMouthAnim(x + 10, y + 10)
    drawThinkingEyebrows(x, y + 5)
}

function drawEmoteWow(x, y) {
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.moveTo(x, y);
    basicCircle(x, y)
    addNormalEyes(x, y + 10)
    drawWowMouth(x, y)
    drawWorriedEyebrows(x, y)
}


function emote1(){
    clearInterval(timer)
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.lineWidth = 3
    x=250;
    y=250;
    drawEmoteSmile(x, y)
}

function emote2(){
    clearInterval(timer)
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.lineWidth = 3
    x=250;
    y=250;
    drawEmoteSad(x, y)
}

function emote3(){
    clearInterval(timer)
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.lineWidth = 3
    x=250;
    y=250;
    drawEmoteDead(x, y)
}

function emote4(){
    clearInterval(timer)
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.lineWidth = 3
    x=250;
    y=250;
    drawEmoteConcerned(x, y)
}

function emote5(){
    clearInterval(timer)
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.lineWidth = 3
    x=250;
    y=250;
    drawEmoteWorried(x, y)
}

function emote6(){
    clearInterval(timer)
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.lineWidth = 3
    x=250;
    y=250;
    drawEmoteMad(x, y)
}

function emote7(){
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.lineWidth = 3
    x=250;
    y=250;
    drawEmoteThinking(x, y)
}

function emote8(){
    clearInterval(timer)
    let can=document.getElementById("canvas");
    let ctx=can.getContext("2d");
    ctx.lineWidth = 3
    x=250;
    y=250;
    drawEmoteWow(x, y)
}

function start() {
    timer = setInterval(() => emote7(250, 250), 50);
}