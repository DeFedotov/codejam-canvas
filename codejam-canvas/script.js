
var img = new Image();
img.src = 'image.png'; 

img.onload = function() {
    ctx.drawImage(img, 0, 0, 512, 512);
}
 

var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
//first line
ctx.fillStyle = '#00bcd4';
ctx.fillRect(0,0,128,128);

ctx.fillStyle = '#ffeb3b';
ctx.fillRect(128,0,128,128);

ctx.fillStyle = '#ffeb3b';
ctx.fillRect(256,0,128,128);

ctx.fillStyle = '#00bcd4';
ctx.fillRect(384,0,128,128);

//second line
ctx.fillStyle = '#ffeb3b';
ctx.fillRect(0,128,128,128);

ctx.fillStyle = '#ffc107';
ctx.fillRect(128,128,128,128);

ctx.fillStyle = '#ffc107';
ctx.fillRect(256,128,128,128);

ctx.fillStyle = '#ffeb3b';
ctx.fillRect(384,128,128,128);

//third line
ctx.fillStyle = '#ffeb3b';
ctx.fillRect(0,256,128,128);

ctx.fillStyle = '#ffc107';
ctx.fillRect(128,256,128,128);

ctx.fillStyle = '#ffc107';
ctx.fillRect(256,256,128,128);

ctx.fillStyle = '#ffeb3b';
ctx.fillRect(384,256,128,128);

//forth line
ctx.fillStyle = '#00bcd4';
ctx.fillRect(0,384,128,128);

ctx.fillStyle = '#ffeb3b';
ctx.fillRect(128,384,128,128);

ctx.fillStyle = '#ffeb3b';
ctx.fillRect(256,384,128,128);

ctx.fillStyle = '#00bcd4';
ctx.fillRect(384,384,128,128);

