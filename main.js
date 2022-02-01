noseX=0;
noseY=0;

function preload()
{
nose= loadImage('https://i.postimg.cc/hvzVZZGR/fwehiehyewihjwdkhjnose.png');
}

function setup() 
{
canvas=createCanvas(301,301);
canvas.center();
video=createCapture(VIDEO);
video.size(301,301);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw()
{
image(video,0,0, 301,301);
fill(0, 191, 255);
//circle(noseX, noseY, 20);
image(nose, noseX, noseY, 30, 30);



}



function takephoto()
{
    save('hugevirus.png');
}

function modelLoaded()
{
    console.log('poseNet is activated');
}


function gotPoses(results)
{
    if(results.length>0)
    {
console.log(results);
console.log("nose x="+results[0].pose.nose.x);
console.log("nose y="+results[0].pose.nose.y);
noseX=results[0].pose.nose.x-15;
noseY=results[0].pose.nose.y-15;
}
}