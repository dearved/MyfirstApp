var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.lineWidth = 5;
var down = false;
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown', function(){
    down=true;
    context.beginPath();
    context.moveTo(xPos,yPos)
    context.addEventListener("mousemove",draw);
});

canvas.addEventListener('mouseup' , function(){down = false; });

function draw(e){
    xPos = e.clientX - canvas.offsetLeft;
    yPos = e.clientY - canvas.offsetTop;
    if(down == true){
        context.lineTo(xPos,yPos);
        context.stroke();
    }
}
function changecolor(color){context.strokeStyle = color; context.fillStyle = color; }
function clearcanvas(){context.clearRect(0,0,canvas.width,canvas.height); }
function changebrushsize(size){context.lineWidth = size;}
function fillcanvas(){context.fillRect(0,0,canvas.width,canvas.height); }
function changebrushstyle(brushstyle){context.lineCap = brushstyle; }
function triggerClick(){document.getElementById('file').click(); }

document.getElementById('file').addEventListener('change', function(e)
{
    clearcanvas()
    var temp = URL.createObjectURL(e.target.files[0]);
    var image = new Image();
    image.src = temp;
    
    image.addEventListener('load', function(){
        context.drawImage(image, 0, 0 ,800, 500);
    });
});