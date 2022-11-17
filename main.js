function preload(){
    //nothin
}

function setup(){
    canvas = createCanvas(600, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 200, 200, 300, 240);
    fill('red');
    rect(100, 100, 440, 10);
    rect(100, 100, 10, 440);
    fill('red');
    rect(100, 450, 440, 10);
    fill('red');
    rect(550, 100, 10, 440);
    fill('green');
    circle(100, 100, 50)
    fill('green');
    circle(550, 100, 50)
    fill('green');
    circle(550, 450, 50)
    fill('green');
    circle(100, 450, 50)
    fill('red');
}

function take_snapshot(){
    save("student_name.png");
}