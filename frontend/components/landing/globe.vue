<template>
    <div>
        <div ref="canvas" id="canvas" class="mx-auto w-[300px] h-[300px] md:w-[500px] md:h-[500px] "></div>
    </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'

const { x, y } = useMouse()
const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const light = new THREE.PointLight( 0xffffff, 1, 150 );
light.position.set( 0, 20, 25 );
const light2 = new THREE.AmbientLight( 0xffffff, 1 );
light2.position.set( 0, -100, 100 );
scene.add( light, light2 );
let canvas = <any>null
let camera = <any>null
let globe = <any>null
let rotationSpeed = 0.005
let outer = <any>null

onMounted(()=>{
    canvas.value = ref('canvas').value
    init()
})

function init(){
    console.log(canvas, canvas!.clientWidth)
    camera = new THREE.PerspectiveCamera(75, canvas!.clientWidth / canvas!.clientHeight, 0.1, 1000)
    camera.position.z = 3.7
    renderer.setSize(canvas!.clientWidth, canvas!.clientHeight)
    renderer.setClearColor(0x000000, 0)
    canvas!.appendChild(renderer.domElement)
    addGlobe()
    animate()
    window.addEventListener('resize', onWindowResize, false);
}

function addGlobe(){
    let geometry = new THREE.SphereGeometry( 2, 64, 64 );
    let texture = new THREE.TextureLoader().load( '/static/frontend/images/t5.png' );
    let material = new THREE.MeshPhongMaterial( {
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: .9,
        alphaTest: .16,
    } );
    globe = new THREE.Mesh( geometry, material );
    scene.add( globe );

    
    geometry = new THREE.SphereGeometry( 2.2, 164, 164 );
    texture = new THREE.TextureLoader().load( '/static/frontend/images/outer.png' );
    material = new THREE.MeshPhongMaterial( {
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: .5,
        alphaTest: 0
    } );
    outer = new THREE.Mesh( geometry, material );
    scene.add( outer );
}

function animate(){
    requestAnimationFrame(animate)
    globe.rotation.y += rotationSpeed
    outer.rotation.y += (rotationSpeed-rotationSpeed/2)
    if( rotationSpeed > .005){
        rotationSpeed -= .005
    } else if (rotationSpeed < .005){
        rotationSpeed += .005
    }
    renderer.render(scene, camera)
    if(canvas){
        onWindowResize()
    }
}

// watch x y change  with old new
watch([x, y], ([x, y], [oldX, oldY]) => {
    if (x > oldX && rotationSpeed < .1){
        rotationSpeed += .01
    } else if (rotationSpeed > -.1) {
        rotationSpeed += -.01
    }
})


function onWindowResize(){
    if(canvas && canvas.clientWidth){
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( canvas.clientWidth, canvas.clientHeight );
    }
}


</script>

<style scoped>

</style>