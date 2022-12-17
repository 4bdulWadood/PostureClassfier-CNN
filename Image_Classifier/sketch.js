let shapeClassifier;

let canvas;

function setup() {
  pixelDensity(1);
  canvas = loadImage("proper.png");
 
  let options = { 
    inputs: [64, 64, 4],
    task: "imageClassification",
  };
  
  shapeClassifier = ml5.neuralNetwork(options);
  
  const modelDetails = {
    model: 'model/model.json',
    metadata: 'model/model_meta.json',
    weights: 'model/model.weights.bin'
  }
  
  shapeClassifier.load(modelDetails, modelLoaded);
}

function modelLoaded(){
  console.log("model ready!")
}

function mousePressed(){
  shapeClassifier.classify({image: canvas}, gotResults);
}

function gotResults(err, results){
  if(err){
    console.log(err);
    return;
  }
  console.log(results);
}


function draw() {
  background(64);
  
  
  
}