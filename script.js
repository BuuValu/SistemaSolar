const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometrysol = new THREE.SphereGeometry(1.2, 32, 32);
const materialSol = new THREE.MeshBasicMaterial({ color: 0xefe83a });

const geometrytierra = new THREE.SphereGeometry(0.4, 32, 32);
const materialtierra = new THREE.MeshBasicMaterial({ color: 0x48bb1b });

const geometryluna = new THREE.SphereGeometry(0.18, 16, 16);
const materialluna = new THREE.MeshBasicMaterial({ color: 0xb3b4b3 });

const geometryP1 = new THREE.SphereGeometry(0.5, 32, 32);   
const materialP1 = new THREE.MeshBasicMaterial({ color: 0xff5733 });

const geometryP2 = new THREE.SphereGeometry(0.7, 32, 32);   
const materialP2 = new THREE.MeshBasicMaterial({ color: 0x3399ff });

const geometryP3 = new THREE.SphereGeometry(1.1, 32, 32);   
const materialP3 = new THREE.MeshBasicMaterial({ color: 0xffa500 });

const geometrylunas = new THREE.SphereGeometry(0.25, 16, 16);
const materialluna1 = new THREE.MeshBasicMaterial({ color: 0xffffff });
const materialluna2 = new THREE.MeshBasicMaterial({ color: 0xcccccc });
const materialluna3 = new THREE.MeshBasicMaterial({ color: 0xfff0aa });
const materialluna4 = new THREE.MeshBasicMaterial({ color: 0xaaffff });

const sol = new THREE.Mesh(geometrysol, materialSol);
scene.add(sol);

const tierra = new THREE.Mesh(geometrytierra, materialtierra);
scene.add(tierra);

const luna = new THREE.Mesh(geometryluna, materialluna);
scene.add(luna);

const planeta1 = new THREE.Mesh(geometryP1, materialP1);
scene.add(planeta1);

const planeta2 = new THREE.Mesh(geometryP2, materialP2);
scene.add(planeta2);

const planeta3 = new THREE.Mesh(geometryP3, materialP3);
scene.add(planeta3);

const luna1 = new THREE.Mesh(geometrylunas, materialluna1);
const luna2 = new THREE.Mesh(geometrylunas, materialluna2);
const luna3 = new THREE.Mesh(geometrylunas, materialluna3);
const luna4 = new THREE.Mesh(geometrylunas, materialluna4);
scene.add(luna1, luna2, luna3, luna4);

camera.position.z = 13;

let Tierra = 0;
let Luna = 0;
let P1 = 0;
let P2 = 0;
let P3 = 0;
let Luna1 = 0;
let Luna2 = 0;
let Luna3 = 0;
let Luna4 = 0;


function animate() {
  requestAnimationFrame(animate); 

  sol.position.x = 0;
  sol.position.y = 0;

  tierra.position.x = 2 * Math.sin(Tierra);
  tierra.position.y = 2 * Math.cos(Tierra);

  luna.position.x = tierra.position.x + 0.6 * Math.sin(Luna);
  luna.position.y = tierra.position.y + 0.6 * Math.cos(Luna);

  planeta1.position.x = 4 * Math.sin(P1 + 1);
  planeta1.position.y = 4 * Math.cos(P1 + 1);

  planeta2.position.x = 6 * Math.sin(P2 + 1.5);
  planeta2.position.y = 6 * Math.cos(P2 + 1.5);

  planeta3.position.x = 8 * Math.sin(P3 + 3);
  planeta3.position.y = 8 * Math.cos(P3 + 3);

  luna1.position.x = planeta3.position.x + 1.2 * Math.sin(Luna1);
  luna1.position.y = planeta3.position.y + 1.2 * Math.cos(Luna1);

  luna2.position.x = planeta3.position.x + 1.6 * Math.sin(Luna2 + 1);
  luna2.position.y = planeta3.position.y + 1.6 * Math.cos(Luna2 + 1);

  luna3.position.x = planeta3.position.x + 2.0 * Math.sin(Luna3 + 2);
  luna3.position.y = planeta3.position.y + 2.0 * Math.cos(Luna3 + 2);

  luna4.position.x = planeta3.position.x + 2.4 * Math.sin(Luna4 + 3);
  luna4.position.y = planeta3.position.y + 2.4 * Math.cos(Luna4 + 3);

  Tierra += 0.02;
  Luna += 0.08;
  P1 += 0.018;
  P2 += 0.015;
  P3 += 0.012;
  Luna1 += 0.09;
  Luna2 += 0.07;
  Luna3 += 0.05;
  Luna4 += 0.03;

  renderer.render(scene, camera);
}

animate(); 

var a = 0;
function estudiantes() {
  a++;
  console.log(a);

  const txt = document.querySelector(".Info h2");
  if (txt) txt.textContent = "Clicks: " + a;
}
addEventListener("click", (event) => { estudiantes(); });

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});