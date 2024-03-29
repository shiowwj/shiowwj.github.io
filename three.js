console.log('hi three.js')
//Set up scene, camera and render it
// var canvas = document.getElementById('canvas');
// console.log('HELLO', canvas)

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//camera position (towards screen or away from screen)
camera.position.z = 10;

var renderer = new THREE.WebGLRenderer({ antialias: true });

//Setting scene background color
renderer.setClearColor("#242424");

renderer.setSize(window.innerWidth, window.innerHeight);
console.log("THIS IS ME", renderer.domElement);

//Attached canvas to DOM element
document.body.appendChild(renderer.domElement);

//scene renders responsively to window size

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

//(RAYCASTER) used to determine where the mouse is on the canvas
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

//setting objects and items in the camera view
//define material and form
var geometry = new THREE.SphereGeometry(1, 25, 25);
var material = new THREE.MeshLambertMaterial({ color: 0xF7F7F7 });
// var sphere = new THREE.Mesh(geometry, material);

//z position cant be negative
// sphere.position.set(0,0,0);
// scene.add(sphere);

sphereX = -10;
for (var i = 0; i < 15; i++) {
    var sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = (Math.random() - 0.5) * 10;
    sphere.position.y = (Math.random() - 0.5) * 10;
    sphere.position.z = (Math.random() - 0.5) * 10;
    scene.add(sphere);
    sphereX += 1;
}
// #CD5849
var light = new THREE.PointLight(0xCD5849, 0.8, 300);
light.position.set(0, 0, 0);
scene.add(light);

// #F9D64F
var light = new THREE.PointLight(0xF9D64F, 0.4, 1000);
light.position.set(-10, 5, 15);
scene.add(light);

var light = new THREE.PointLight(0xF9D64F, 0.4, 1000);
light.position.set(10, 5, 15);
scene.add(light);


var render = function() {
    requestAnimationFrame(render);

    renderer.render(scene, camera);
}

function realNumber() {

    var setNum = Math.random() * 2;
    var numStatus;

    if (setNum > 1) {
        numStatus = true;
    } else {
        numStatus = false;
    }

    return numStatus;
}

function randomNum(num) {
    var postiveOrNegative = realNumber();
    var outPut;
    if (postiveOrNegative) {
        outPut = Math.random() * num;
    } else {
        outPut = -1 * (Math.random() * num);
    }

    return outPut;
}

function evenMoreRandom(){
    var outPut = Math.random()*8;
    return outPut
}

function onMouseMove(event) {
    console.log('click handler HELLO');
    event.preventDefault();
    console.log('mouse para', mouse)

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    console.log('after mouse'.mouse);
    raycaster.setFromCamera(mouse, camera);
    //returns array based on the objecs that have intersected where ever the mouse is
    console.log("children in scene", scene.children);
    var intersects = raycaster.intersectObjects(scene.children, true);
    console.log('array of intersected objs', intersects);
    for (var i = 0; i < intersects.length; i++) {
        console.log('yes sir', intersects[i].object);
        intersects[i].object.material.color.set(0xFF0000);
        // intersects[i].object.translateX(1);
        this.tl = new TimelineMax()
        //randomize the movement
        // Math.random()*
        // this.tl.to(intersects[i].object.scale, 1, {x:Math.random()*4, y:Math.random()*4, ease:Expo.easeOut})
        this.tl.to(intersects[i].object.position, 1, { x: randomNum(evenMoreRandom()), y: randomNum(evenMoreRandom()), ease: Expo.easeOut })
        // this.tl.to(intersects[i].object.scale, 1, {x:Math.random()*.3, y:Math.random()*.3, ease:Expo.easeOut})
        // this.tl.to(intersects[i].object.scale, 1, {x:Math.random()*1, y:Math.random()*1, ease:Expo.easeOut})
        this.tl.to(intersects[i].object.position, 1, { x: randomNum(evenMoreRandom()), y: randomNum(evenMoreRandom()), ease:
            Expo.easeOut })
        this.tl.to(intersects[i].object.position, 1, { x: randomNum(evenMoreRandom()), y: randomNum(evenMoreRandom()), ease: Expo.easeOut })
        this.tl.to(intersects[i].object.position, 1, { x: randomNum(evenMoreRandom()), y: randomNum(evenMoreRandom()), ease: Expo.easeOut })
        this.tl.to(intersects[i].object.position, 1, { x: randomNum(evenMoreRandom()), y: randomNum(evenMoreRandom()), ease:
            Expo.easeOut })
        this.tl.to(intersects[i].object.position, 1, { x: randomNum(evenMoreRandom()), y: randomNum(evenMoreRandom()), ease: Expo.easeOut })
        this.tl.to(intersects[i].object.position, 1, { x: randomNum(evenMoreRandom()), y: randomNum(evenMoreRandom()), ease: Expo.easeOut })
        this.tl.to(intersects[i].object.position, 1, { x: randomNum(evenMoreRandom()), y: randomNum(evenMoreRandom()), ease: Expo.easeOut })
    }
}

// this.tl.to(this.sphere.scale, 1, {x:2, ease:Expo.easeOut})

window.addEventListener("click", onMouseMove);

render();