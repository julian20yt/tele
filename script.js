let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth, canvas.height = window.innerHeight;
let fontSize = 14, columns = canvas.width / fontSize, items = [];
for (i = 0; i < columns; i++) items[i] = canvas.height;
ctx.font = "14px monospace";
const rand = (min, max)=>Math.floor(Math.random() * max) + min;
const rndChr = ()=>String.fromCharCode(0x00ff + rand(0, 900));
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, .05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let b = 0; b < items.length; b++){
      ctx.fillStyle = `#0f4`;
      ctx.fillText(rndChr(), b * fontSize, items[b] * fontSize);
      if (Math.random()<.97){
          items[b]++;
      }else{
          items[b]=canvas.height;
      }
      if (items[b] * fontSize > canvas.height && .95 < Math.random())items[b] = 0;
  }
}
setInterval(draw, 40);
window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth, canvas.height = window.innerHeight;
    columns = canvas.width / fontSize;
    for (i = 0; i < columns; i++) if (!items[i])items[i] = canvas.height;
    ctx.font = "14px monospace";
}, false)
