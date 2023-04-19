Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90
    });
    
    camera = document.getElementById("camera");
    Webcam.attach('#camera');
    
    function Capture(){
        Webcam.snap(function(data_uri){ 
    document.getElementById("result").innerHTML = '<img id="photo" src="'+data_uri+'"/>';
    });
    }
    console.log("ml5 version", ml5.version);
    
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Nnb-o1I6S/model.json",modelLoaded);
    
    function check(){
        img = document.getElementById("photo");
        classifier.classify(img, gotResult);
    }

    function gotResult(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
            document.getElementById("update_gesture").innerHTML = results[0];
            document.getElementById("update_gesture2").innerHTML = results[1];
        }
    }
    
    