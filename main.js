// ステップ0: 寂れた西洋農村の雰囲気を漂わせる簡易的なThree.js演出の初期土台 
window.addEventListener('DOMContentLoaded', () => { const container = document.getElementById('canvas-container');
    // シーン・カメラ・レンダラーの設定
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xe3d7c3); // 寂れた農村の夕暮れ・土色トーン

const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// 既存のオーバーレイ要素を壊さないようにCanvasを挿入
container.insertBefore(renderer.domElement, container.firstChild);

// ライティング
const ambientLight = new THREE.AmbientLight(0xfff5e6, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffb74d, 0.6);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);

// 農村の「関係性の輪郭（抽象的な浮遊オブジェクト群）」を模したジオメトリ
const geometry = new THREE.IcosahedronGeometry(0.8, 0);
const material = new THREE.MeshStandardMaterial({
    color: 0x98b090,
    roughness: 0.6,
    metalness: 0.2,
    wireframe: true
});

const coreMesh = new THREE.Mesh(geometry, material);
scene.add(coreMesh);

// アニメーションループ
function animate() {
    requestAnimationFrame(animate);

    coreMesh.rotation.x += 0.003;
    coreMesh.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();

// ウィンドウリサイズ対応
window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});

// ボタンインタラクションの手触り確認用
const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () => {
    alert('ステップ0：UIの手触り確認中。正常に動作しています。');
});

                                              
                                                  });
