





const mapContainer = document.getElementById('map-container');
const mapElement = document.getElementsByClassName('venue-element');
mapContainer.style.transform = `rotateX(60deg) rotateZ(50deg)`;
// 反向旋轉
Array.from(mapElement).forEach(element => {
    element.style.transform = `rotateZ(-50deg) rotateX(-60deg)`;
});



function animateMove(element, startCoords, endCoords, duration) {
    return new Promise(resolve => {
        const [startX, startY] = startCoords;
        const [endX, endY] = endCoords;
        const startTime = performance.now();

        function step() {
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const currentX = startX + (endX - startX) * progress;
            const currentY = startY + (endY - startY) * progress;

            element.style.left = `${currentX}px`;
            element.style.top = `${currentY}px`;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                resolve();
            }
        }

        requestAnimationFrame(step);
    });
}

async function moveAlongPathLoop(elementId, pathCoords, speed) {
    const element = document.getElementById(elementId);
    if (!element || pathCoords.length < 2) {
        console.error('無效的元素 ID 或路徑座標。');
        return;
    }

    // 將起始位置設為路徑的第一個點
    element.style.left = `${pathCoords[0][0]}px`;
    element.style.top = `${pathCoords[0][1]}px`;

    // 取得路徑的反向版本，用於往返
    const reversedPath = pathCoords.slice().reverse();

    while (true) {
        // 第一個迴圈：依序前進
        for (let i = 0; i < pathCoords.length - 1; i++) {
            const startPoint = pathCoords[i];
            const endPoint = pathCoords[i + 1];
            const distance = Math.sqrt(
                Math.pow(endPoint[0] - startPoint[0], 2) +
                Math.pow(endPoint[1] - startPoint[1], 2)
            );
            const duration = (distance / speed) * 1000;
            await animateMove(element, startPoint, endPoint, duration);
        }
        
        // 第二個迴圈：反向後退
        for (let i = 0; i < reversedPath.length - 1; i++) {
            const startPoint = reversedPath[i];
            const endPoint = reversedPath[i + 1];
            const distance = Math.sqrt(
                Math.pow(endPoint[0] - startPoint[0], 2) +
                Math.pow(endPoint[1] - startPoint[1], 2)
            );
            const duration = (distance / speed) * 1000;
            await animateMove(element, startPoint, endPoint, duration);
        }
    }
}

const midoriyaPath = [
    [600, 300], // 起始點
    [600, 600], // 第一個目標
    [300, 600], // 第二個目標
    [300, 800]  // 第三個目標
];
const speed = 100; // 每秒移動 100 像素
moveAlongPathLoop('Midoriya', midoriyaPath, speed);