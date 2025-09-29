

// 地圖旋轉
const mapContainer = $('#map-container');
const mapElement = $('.venue-element');
// 旋轉角度
const rotate = {x:60, z:50};
// 地圖正向旋轉到期望角度
mapContainer.css('transform', `rotateX(${rotate.x}deg) rotateZ(${rotate.z}deg)`);
// 反向旋轉地圖物件讓他們正面向螢幕
mapElement.each(function() {
    $(this).css('transform', `rotateZ(-${rotate.z}deg) rotateX(-${rotate.x}deg)`);
});


// 移動角色前往任務地
function animateMove(element, missionCoords, duration) {
    // 檢查傳入的是否為 jQuery 物件，如果是，則轉換為原生 DOM 元素
    const domElement = element instanceof jQuery ? element.get(0) : element;

    return new Promise(resolve => {
        // 取得元素的當前計算樣式
        const computedStyle = window.getComputedStyle(domElement);
        const elementHeight = domElement.offsetHeight;
        const elementWidth = domElement.offsetWidth;
        
        const startX = parseFloat(computedStyle.left);
        const startY = parseFloat(computedStyle.top);
        
        let [endX, endY] = missionCoords;
        endX = endX - elementWidth / 2;
        endY = endY - elementHeight;
        
        const startTime = performance.now();

        function step() {
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const currentX = startX + (endX - startX) * progress;
            const currentY = startY + (endY - startY) * progress;

            // 修正：使用 jQuery 的 .css() 方法設定樣式
            $(domElement).css({
                'left': `${currentX}px`,
                'top': `${currentY}px`
            });
            
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                resolve();
            }
        }
        requestAnimationFrame(step);
    });
}


// 角色清單
window.players = {};

// 觸發執行任務
window.missionGo = async function(){
    
    const idlePlayers = Object.keys(window.players).filter(id => window.players[id].status === 0);

    
    // 檢查有沒有閒置角色
    if(missionPoints.length > 0 && idlePlayers.length > 0){
        
        // 取得任務座標
        const missionCoords = missionPoints.shift();
        
        // 隨機一個閒置角色執行任務
        const randomIndex = Math.floor(Math.random() * idlePlayers.length);
        const playerToMoveId = idlePlayers[randomIndex];
        const playerElement = $(`#${playerToMoveId}`);
        
        // 更新角色狀態為「前往任務中」
        window.players[playerToMoveId].status = 1;
        console.log(`角色 ${playerToMoveId} 開始前往任務點 (${missionCoords[0]}, ${missionCoords[1]})`);
        
        // 執行任務
        await animateMove(playerElement,missionCoords,1000);
        
        // 任務完成，將角色狀態更新為「閒置」
        window.players[playerToMoveId].status = 0;
        console.log(`角色 ${playerToMoveId} 已完成 (${missionCoords[0]}, ${missionCoords[1]}) 任務，返回閒置狀態。`);
        
        // 移除任務標記
        const [x, y] = missionCoords;
        $(`#point-x-${x}-y-${y}`).remove();
        
        // 結束後檢查剩餘任務
        missionGo();
    } else {
        // 沒有閒置角色或沒有任務，印出訊息
        if (missionPoints.length === 0) {
            console.log("所有任務已完成，任務清單為空。");
        } else {
            console.log("任務清單中仍有任務，但沒有閒置角色。");
        }
    }
}; 


window.missionPoints = []; // 任務清單

$(document).ready(function() {
    
    // 取得所有角色清單
    const player = $('.player');
    const playerIds = player.map(function() {
      return $(this).attr('id');
    }).get();
    
    // 初始化角色狀態
    for(const pid of playerIds){
        window.players[pid]={
            status: 0 // 0:閒置 1:前往任務中 2:任務中 3:任務成功 4:任務失敗 
        };
    }
    
    // 監聽 #mapContainer 的點擊事件
    $('#map-container').on('touchend click', function(event) {
        
        // 取得任務座標
        const x = event.offsetX;
        const y = event.offsetY;
        
        // 可視化任務座標
        const newAxis = $('<div>')
            .addClass('axis z-axis')
            .attr('id', `point-x-${x}-y-${y}`)
            .css({
                'left': x + 'px',
                'top': y + 'px'
            });
        $(this).append(newAxis);

        // 將新任務添加到清單中
        missionPoints.push([x,y]);
        console.log(`在座標 (${x}, ${y}) 處新增了一個元素`);
        
        //執行任務
        missionGo();
    });

});


