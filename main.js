function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 230,150,220,200);

    
    

    fill(0,128,0);
    stroke(0,128,0);
    rect(90,50,460,20);
    rect(90,420,460,20);
    rect(90,50,20,380);
    rect(530,50,20,380);

    fill(255,0,0);
    stroke(255,0,0);
    circle(540,50,80);
    circle(70,50,80);
    circle(70,50,80);
    circle(80,420,80);
    circle(530,420
    ,80);
    
    

}