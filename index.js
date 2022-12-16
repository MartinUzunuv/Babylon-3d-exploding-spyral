var canvas = document.getElementById("render-canvas");
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);

var light = new BABYLON.PointLight("light", new BABYLON.Vector3(0, 5, 0), scene);

var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);

var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);

// var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 0, 10), scene);

// camera.position.x = 1;

camera.alpha = 45 * Math.PI / 180;

//init shapes  ----------------------->


arr = []

size = 1

for(let a = 0; a < Math.PI*4; a+=Math.PI/600){
    arr.push({box: BABYLON.Mesh.CreateBox("box", size, scene), a:a, za: a})
}

function update(){
   
    for(let i =0; i < arr.length; i++){
        arr[i].box.position.x += Math.cos(arr[i].a)/50*arr[i].a
        arr[i].box.position.z += Math.sin(arr[i].a)/50*arr[i].a
        // if(time < 50){
        // arr[i].box.position.y += Math.tan(arr[i].a)/50*arr[i].a
        // }
        arr[i].box.position.y += Math.cos(arr[i].za)/55*arr[i].za
        arr[i].a+=arr[i].a/1000
        arr[i].za+=arr[i].za/800
    }
    // time ++
    
}

camera.attachControl(
    canvas, // Canvas element to attach the camera control to
    true // Enable rotation of the camera with the mouse
  );

engine.runRenderLoop(function () {
    scene.render();
    update();
    // camera.position.x+=0.1
});