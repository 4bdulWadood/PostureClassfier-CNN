let proper = [];
let improper = [];

function preload(){
   for(let i = 1; i <= 5; i++){
      proper[i-1] = loadImage(`data/proper (${i}).png`);
      improper[i-1] = loadImage(`data/improper (${i}).png`);
  }
}

let shapeClassifier;

function setup() {
  createCanvas(128, 128);
  pixelDensity(1);
  //background(0);
  //image(circles[0], 0, 0, width, height);
  
  let options = { 
    inputs: [256, 192, 4],
    task: "imageClassification",
    debug: true,
  }
  
  shapeClassifier = ml5.neuralNetwork(options);
  
  for (let i = 0; i < 5; i++){
          shapeClassifier.addData({ image: proper[i] }, { label: "proper" } );
          shapeClassifier.addData({ image: improper[i] }, { label: "improper" } ); 
  }
  

  shapeClassifier.normalizeData();
  shapeClassifier.train({ epochs: 100 }, finishedTraining);
  
}


function finishedTraining(){
  console.log("Finished Training");
  shapeClassifier.save();
}