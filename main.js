noseX=0;
noseY=0;



function preload(){
clownNose= loadImage('https://i.postimg.cc/W3hnnFDF/Remove-background.png');
}

function setup(){
canvas= createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(result){
if (result.length>0) {
console.log(result);

noseX= result[0].pose.nose.x;
noseY= result[0].pose.nose.y;

console.log("Nose X= " + noseX);
console.log("Nose Y= " + noseY);

}
}

function modelLoaded(){
    console.log('PoseNet has been initialised');
}

function draw(){
image(video,0,0,300,300);

fill(255, 0, 21);
stroke(255, 77, 0);
circle(noseX,noseY,20);
image(clownNose,noseX-20,noseY-20,40,40)
}

function takesnapshot(){
    save('poopy_pic2.png');
}