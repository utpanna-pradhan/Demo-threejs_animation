import * as THREE from "three";
// set up scene= renderer,camera,scene obj
//1.create rendered first
const w= window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);


//2.Camera
const fov = 75;
const aspect = w/h;
const near=0.1;
const far =10;
const camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
camera.position.z=2;


const Scene=new THREE.Scene();
const geo = new THREE.IcosahedronGeometry(1.0,2);
const mat = new THREE.MeshBasicMaterial({
    color:0xccff
});
const mesh = new THREE.Mesh(geo,mat);
Scene.add(mesh);

function animate(t=0){
    requestAnimationFrame(animate);
    mesh.scale.setScalar(Math.cos(t*0.001)+1);
   renderer.render(Scene,camera);
}
animate();


