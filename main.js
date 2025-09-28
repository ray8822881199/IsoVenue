


const mapContainer = document.getElementById('map-container');
const mapElement = document.getElementsByClassName('venue-element');
mapContainer.style.transform = `rotateX(60deg) rotateZ(50deg)`;
// 反向旋轉
Array.from(mapElement).forEach(element => {
    element.style.transform = `rotateZ(-50deg) rotateX(-60deg)`;
});


