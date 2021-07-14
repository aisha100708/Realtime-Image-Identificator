function preload() {
}
function setup() {
    canvas = createCanvas(600, 370);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dBzj4LXU_/model.json", modelLoaded);
}
function draw() {
    image(video, 0, 0, 600, 370);
    classifier.classify(video, getResults);
}
function modelLoaded() {
    console.log("model loaded!");
}
function getResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}