Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: 90,
    constraints:{
        facingmode: 'enviroment'
    }
});
camera = document.getElementById("camera")
Webcam.attach('#camera')
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="snap" src="'+data_uri+'"/>';
    })
}
console.log("ml5version", ml5.version);
classifier = ml5.imageClassifier('MobileNet', model_loaded)
function model_loaded(){
    console.log("Model Loaded!")
}
function check(){
    img = document.getElementById("snap")
    classifier.classify(img, gotresult)
}
function gotresult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("resultspan").innerHTML=results[0].label;
    }
}