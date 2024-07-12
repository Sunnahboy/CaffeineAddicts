// scripts/three-menu.js

import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';

document.addEventListener('DOMContentLoaded', () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('3d-menu').appendChild(renderer.domElement);

  const loader = new GLTFLoader();

  loader.load(
    'assets/models/bubble-tea-07daee8236d447a3a1479151d097e09d.glb',
    (gltf) => {
      const model = gltf.scene;
      scene.add(model);
      model.position.set(0, 0, 0);
    },
    undefined,
    (error) => {
      console.error(error);
    }
  );

  const light = new THREE.AmbientLight(0x404040); // soft white light
  scene.add(light);

  camera.position.z = 5;

  const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();
});
