import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

// Adjust the renderer size and append it to the model container
const modelContainer = document.getElementById('model-container');
renderer.setSize(modelContainer.clientWidth, modelContainer.clientHeight);
modelContainer.appendChild(renderer.domElement);

// Add lighting to the scene
const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Load a GLTF model
const loader = new THREE.GLTFLoader();
loader.load('./models/scene.gltf', (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.set(0, 0, 0); // Adjust model position as needed

    // Optional: Adjust scale if the model is too small or too large
    gltf.scene.scale.set(1, 1, 1); // Change scale values if needed

    // Optional: Center the model
    gltf.scene.position.set(0, 0, 0); // Center the model
}, undefined, (error) => {
    console.error('An error occurred while loading the model:', error);
});

camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Adjust camera and renderer on window resize
window.addEventListener('resize', () => {
    renderer.setSize(modelContainer.clientWidth, modelContainer.clientHeight);
    camera.aspect = modelContainer.clientWidth / modelContainer.clientHeight;
    camera.updateProjectionMatrix();
});

// Start animation
animate();
