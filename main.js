
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZFuehOkOE/model.json",modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
        num_r=Math.floor(Math.random()*255)+1;
        num_g=Math.floor(Math.random()*255)+1;
        num_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").style.color="rgb("+num_r+","+num_g+","+num_b+")";
        document.getElementById("result_confidence").style.color="rgb("+num_r+","+num_g+","+num_b+")";
        document.getElementById("result_label").innerHTML="I Can Hear- "+ results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+"%";

        img1=document.getElementById("ear");

        if(results[0].label=="barking"){
            img1.src="dog.gif";
        }
        else if(results[0].label=="meowing"){
            img1.src="cat.gif";
        }
       
        else{
            img1.src="ear.png";
        }
    }
}