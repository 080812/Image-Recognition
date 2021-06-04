Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera")
Webcam.attach('#camera')

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">'

    });
}
console.log("ml5version",ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vkUr-o6Si/model.json',modelloaded)
function modelloaded(){
    console.log("model is loaded")
}

function check(){
    img=document.getElementById('captured_image')
    classifier.classify(img,gotresult)
}

function gotresult(error,results){
    if(error){
        console.log(error)
    }
else{
    console.log(results)
}
}