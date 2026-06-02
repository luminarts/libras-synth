import * as THREE from 'three';

export class App {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    renderer = new THREE.WebGLRenderer();
    timer = new THREE.Timer();

    async start() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        /* 
        -   Load 3d model
        -   Apply AnimationPlayer
        -   await the phrase to be formed via concatenative synthesis
        
        */


    }


    animate = () => {
        requestAnimationFrame(this.animate);
        const delta = this.timer.getDelta();
        this.renderer.render(this.scene, this.camera);
    }

}
