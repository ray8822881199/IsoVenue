// 取得需要操作的 DOM 元素
const mapContainer = document.getElementById('map-container');
const mapElement = document.getElementsByClassName('venue-element');
const angleXSlider = document.getElementById('angle-x');
const angleZSlider = document.getElementById('angle-z');
const angleXValueSpan = document.getElementById('angle-x-value');
const angleZValueSpan = document.getElementById('angle-z-value');

// 監聽滑動軸的 input 事件，這個事件會在使用者的拖動過程中不斷觸發
angleXSlider.addEventListener('input', updateMapRotation);
angleZSlider.addEventListener('input', updateMapRotation);

// 更新地圖旋轉角度的函式
function updateMapRotation() {
    // 取得滑動軸的當前數值
    const angleX = angleXSlider.value;
    const angleZ = angleZSlider.value;

    // 更新顯示的數值
    angleXValueSpan.textContent = angleX;
    angleZValueSpan.textContent = angleZ;

    // 應用旋轉到地圖容器
    mapContainer.style.transform = `rotateX(${angleX}deg) rotateZ(${angleZ}deg)`;

    // 應用反向旋轉到地圖內容
    Array.from(mapElement).forEach(element => {
        element.style.transform = `rotateZ(${-angleZ}deg) rotateX(${-angleX}deg)`;
    });

}

// 首次載入頁面時，也執行一次更新，確保預設值被正確應用
updateMapRotation();