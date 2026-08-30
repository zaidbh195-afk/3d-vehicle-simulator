import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.179.1/build/three.module.js";

// 1. Create the 3D world
const scene = new THREE.Scene();

// 2. Create the camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// 3. Create the renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(renderer.domElement);

// 4. Put the camera above and behind the car
camera.position.set(0, 3, 8);

// 5. Create a simple car body
const carGeometry = new THREE.BoxGeometry(2, 1, 4);

const carMaterial = new THREE.MeshBasicMaterial({
    color: 0x1565c0
});

const car = new THREE.Mesh(
    carGeometry,
    carMaterial
);

scene.add(car);

// 6. Create the animation loop
// Physics
let u = 0;          // initial velocity (m/s)
let a = 3;          // acceleration (m/s²)
let t = 0;          // time (s)
let dt = 0.016;     // time step
function animate() {

    requestAnimationFrame(animate);
    
    // v = u + at
    const v = u + a * t;

    // Move the car forward
    car.position.x -= v * dt;

    // Increase simulation time
    t += dt;
    

    renderer.render(scene, camera);
}

animate();
