// Select Section5
const section5 = document.querySelector(".Section5");

// Create scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
section5.appendChild(renderer.domElement);

// Create a torus (donut) geometry
const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xff5733, wireframe: true });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Position torus to the right
torus.position.x = 2;

// Position the camera
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Spin the torus
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.02;

  renderer.render(scene, camera);
}

// Start animation
animate();

// Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
