import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';
import { OrbitControls } from 'three-orbit-controls';
import { ObjLoader } from 'three-obj-loader';


const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, 20, 100);

function loop() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
} loop();

document.body.appendChild(renderer.domElement);

