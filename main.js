var mouse_event="empty";
 var last_x,last_y;

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="dark blue";
width_line=3;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouse_event= "mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouse_event= "mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouse_event= "mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_x= e.clientX - canvas.offsetLeft;
    current_y= e.clientY - canvas.offsetTop;
    if (mouse_event == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width_line;

        ctx.moveTo(last_x,last_y);
        console.log("last position of X and Y coordinates= ");
        console.log("X = "+ last_x + "& Y = "+ last_y);

        ctx.lineTo(current_x,current_y);
        console.log("current position of X and Y coordinates= ");
        console.log("X = "+ current_x + "& Y = "+ current_y);

        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;
}










var width= screen.width;
    var new_width= screen.width - 70;
    var new_height= screen.height - 300;

    if (width < 992)
    {
        document.getElementById("myCanvas").width= new_width;
        document.getElementById("myCanvas").height= new_height;
        document.body.style.overflow= "hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log("my_touchstart");
        color = document.getElementById("Color").value;
        width_of_line = document.getElementById("width_Line").value;

       last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
       last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("my_touchmove");
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

function Clear_Area() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
