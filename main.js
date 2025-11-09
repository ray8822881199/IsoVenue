// 角色清單
window.players = {};
// 物件清單
window.areaItem = [];
// 任務清單
window.missionPoints = [];
// 旋轉
window.rotate_x = 0;
window.rotate_z = 0;

// 定義地圖物件
window.areaItem = [
    // 橘區
    {id: 'table-o-01', bg: 'img/mapitem/item_desk.png', x: 274, y: 22, w: 51, h: 55, btn_s: 0},
    {id: 'table-o-02', bg: 'img/mapitem/item_desk.png', x: 233, y: 22, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-o-03', bg: 'img/mapitem/item_desk.png', x: 192, y: 22, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-o-04', bg: 'img/mapitem/item_desk.png', x: 151, y: 22, w: 51, h: 55, btn_s: 0},
    {id: 'table-o-05', bg: 'img/mapitem/item_desk.png', x: 110, y: 22, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-o-06', bg: 'img/mapitem/item_desk.png', x: 69,  y: 22, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-o-07', bg: 'img/mapitem/item_desk.png', x: 28, y: 22, w: 51, h: 55, btn_s: 0},
    {id: 'table-o-08', bg: 'img/mapitem/item_desk.png', x: -13, y: 22, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-o-09', bg: 'img/mapitem/item_desk.png', x: -54, y: 22, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-o-10', bg: 'img/mapitem/item_desk.png', x: -95, y: 22, w: 51, h: 55, btn_s: 0},
    {id: 'table-o-11', bg: 'img/mapitem/item_desk.png', x: -136, y: 22, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-o-12', bg: 'img/mapitem/item_desk.png', x: -177,  y: 22, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-o-13', bg: 'img/mapitem/item_desk.png', x: -218, y: 22, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-o-14', bg: 'img/mapitem/item_desk.png', x: -259,  y: 22, w: 51, h: 55, btn_s: 0}, 

    // 綠區
    {id: 'table-g-01', bg: 'img/mapitem/item_desk.png', x: 154 , y: 195, w: 51, h: 55, btn_s: 0},
    {id: 'table-g-02', bg: 'img/mapitem/item_desk.png', x: 113,  y: 195, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-g-03', bg: 'img/mapitem/item_desk.png', x: 72,   y: 195, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-g-04', bg: 'img/mapitem/item_desk.png', x: 31,   y: 195, w: 51, h: 55, btn_s: 0},
    {id: 'table-g-05', bg: 'img/mapitem/item_desk.png', x: -10,  y: 195, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-g-06', bg: 'img/mapitem/item_desk.png', x: -51,  y: 195, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-g-07', bg: 'img/mapitem/item_desk.png', x: -92,  y: 195, w: 51, h: 55, btn_s: 0},
    {id: 'table-g-08', bg: 'img/mapitem/item_desk.png', x: -133, y: 195, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-g-09', bg: 'img/mapitem/item_desk.png', x: -174, y: 195, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-g-10', bg: 'img/mapitem/item_desk.png', x: -215, y: 195, w: 51, h: 55, btn_s: 0},
    {id: 'table-g-11', bg: 'img/mapitem/item_desk.png', x: -256, y: 195, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-g-12', bg: 'img/mapitem/item_desk.png', x: -297, y: 195, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-g-13', bg: 'img/mapitem/item_desk.png', x: -338, y: 195, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-g-14', bg: 'img/mapitem/item_desk.png', x: -379, y: 195, w: 51, h: 55, btn_s: 0}, 

    // 黃區
    {id: 'table-y-01', bg: 'img/mapitem/item_desk.png', x: 642, y: 30, w: 51, h: 55, btn_s: 0},
    {id: 'table-y-02', bg: 'img/mapitem/item_desk.png', x: 642, y: 71, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-y-03', bg: 'img/mapitem/item_desk.png', x: 642, y: 112, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-y-04', bg: 'img/mapitem/item_desk.png', x: 642, y: 153, w: 51, h: 55, btn_s: 0},
    {id: 'table-y-05', bg: 'img/mapitem/item_desk.png', x: 597 , y: 190, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-y-06', bg: 'img/mapitem/item_desk.png', x: 556 , y: 190, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-y-07', bg: 'img/mapitem/item_desk.png', x: 515 , y: 190, w: 51, h: 55, btn_s: 0},
    {id: 'table-y-08', bg: 'img/mapitem/item_desk.png', x: 474 , y: 190, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-y-09', bg: 'img/mapitem/item_desk.png', x: 433 , y: 190, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-y-10', bg: 'img/mapitem/item_desk.png', x: 392 , y: 190, w: 51, h: 55, btn_s: 0}, 
    {id: 'table-y-11', bg: 'img/mapitem/item_desk.png', x: 351 , y: 190, w: 51, h: 55, btn_s: 0},
    {id: 'table-y-12', bg: 'img/mapitem/item_desk.png', x: 310 , y: 190, w: 51, h: 55, btn_s: 0}, 

    // 地圖娃
    {id: 'item_small_dyna_1', bg: 'img/mapitem/item_small_dyna_1.png', x: -310, y: -40, w: 55, h: 55, btn_s: 0},
    {id: 'item_small_dyna_2', bg: 'img/mapitem/item_small_dyna_2.png', x: -688, y: 125, w: 47, h: 56, btn_s: 0}
];

// 取得地圖元素
const $mapContainer = $('#map-container');

// 取得地圖中點
const mid_x = $mapContainer.width() / 2;
const mid_y = $mapContainer.height() / 2;


// 計算距離
function calculateEuclideanDistance(p1, p2) {

    const [x1, y1] = [p1[0],p1[1]];
    const [x2, y2] = [p2[0],p2[1]];

    // 計算 x 軸和 y 軸的差值
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // 計算平方和
    const sumOfSquares = Math.pow(deltaX, 2) + Math.pow(deltaY, 2)

    // 開平方根
    return Math.sqrt(sumOfSquares);
}

function animateTransform($el, transformValue, duration) {
    return new Promise(resolve => {
        // 設定過渡時間
        $el.css('transition-duration', `${duration / 1000}s`);

        // 監聽 transition 結束事件
        $el.one('transitionend', () => {
            resolve();
        });

        // 觸發 transform 變更 (開始動畫)
        $el.css('transform', transformValue);
        
        // 增加備用機制
        setTimeout(() => {
            resolve();
        }, duration + 50); 
    });
}


// 地圖旋轉
function containerRotate(rotate) {
    const mapContainer = $('#map-container');
    const mapElement = $('.venue-element');
    
    // 地圖正向旋轉到期望角度
    mapContainer.css('transform', `rotateX(${rotate.x}deg) rotateZ(${rotate.z}deg)`);
    // 反向旋轉地圖物件讓他們正面向螢幕
    mapElement.each(function() {
        $(this).css('transform', `rotateZ(${-rotate.z}deg) rotateX(${-rotate.x}deg)`);
    });
}


function distanceEffect(playerId_1, playerId_2) {
    
    const p1 = window.players[playerId_1].locate || [0, 0];
    const p2 = window.players[playerId_2].locate || [0, 0];
    
    if(calculateEuclideanDistance(p1,p2) < 200){
        // 取得元素的當前計算樣式
        const dom_heart = $('#heart').get(0);
        const heart_height = dom_heart.offsetHeight;
        const heart_width = dom_heart.offsetWidth;
        
        const dom_p1 = $(`#${playerId_1}`).get(0);
        const p1_height = dom_p1.offsetHeight;
        const p1_width = dom_p1.offsetWidth;
        
        const dom_p2 = $(`#${playerId_2}`).get(0);
        const p2_height = dom_p2.offsetHeight;
        const p2_width = dom_p2.offsetWidth;
        
        
        // 將計算點還原到角色中間
        const pc1 = [p1[0] + p1_width / 2, p1[1] + p1_height / 2];
        const pc2 = [p2[0] + p2_width / 2, p2[1] + p2_height / 2];
        
        const centerX = (pc1[0] + pc2[0]) / 2;
        const centerY = (pc1[1] + pc2[1]) / 2;
        
        const finalLeft = centerX - heart_width / 2;
        const finalTop = centerY - heart_height / 2;

        // 特效定位 顯示特效
        $(heart).css({
            'left': `${finalLeft}px`,
            'top': `${finalTop}px`,
            'display': `block`
        });
    }else{
        $(heart).css({
            'display': `none`
        });
    }
    
}

// 移動角色前往任務地
function animateMove(playerId, missionCoords, duration) {
    
    const domElement = $(`#${playerId}`).get(0);

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
            
            window.players[playerId].locate = [currentX, currentY];
            
            // 特定兩人的距離特效計算
            distanceEffect('Midoriya','Bakugo');

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




// 觸發執行任務
async function missionGo(thisPlayer){
    
    const idlePlayers = Object.keys(window.players).filter(id => window.players[id].status === 0);
    
    // 檢查有沒有閒置角色
    if(missionPoints.length > 0 && idlePlayers.length > 0){
        
        // 取得隨機任務座標
        const randomMissionIndex = Math.floor(Math.random() * missionPoints.length);
        const missionCoords = missionPoints.splice(randomMissionIndex, 1)[0];
        
        // 隨機一個閒置角色執行任務
        const randomIndex = Math.floor(Math.random() * idlePlayers.length);
        const playerToMoveId = idlePlayers[randomIndex];
        //const playerElement = $(`#${playerToMoveId}`);
        
        // 更新角色狀態為「前往任務中」 任務座標改印為相對中心座標
        window.players[playerToMoveId].status = 1;
        window.players[playerToMoveId].mission = missionCoords;
        console.log(`英雄 ${playerToMoveId} 開始前往任務點 (${missionCoords[0] - mid_x}, ${missionCoords[1] - mid_y})`);
        
        // 執行任務
        await animateMove(playerToMoveId,missionCoords,1000);
        
        // 任務完成，將角色狀態更新為「閒置」 任務座標改印為相對中心座標
        window.players[playerToMoveId].status = 0;
        window.players[playerToMoveId].mission = null;
        console.log(`英雄 ${playerToMoveId} 已完成 (${missionCoords[0] - mid_x}, ${missionCoords[1] - mid_y}) 任務，返回閒置狀態。`);
        
        // 移除任務標記
        const [x, y] = missionCoords;
        $(`#point-x-${x}-y-${y}`).remove();
        
        // 結束後檢查剩餘任務
        missionGo(playerToMoveId);
    } else {
        // 沒有閒置角色或沒有任務，印出訊息
        if (missionPoints.length === 0) {
            // 查找任務中其他角色
            const missionPlayers = Object.keys(window.players).filter(id => window.players[id].status === 1);
            if(missionPlayers.length > 0){
                // 前往任務地支援
                //const missionPlayerElement = $(`#${thisPlayer}`);
                const mission = window.players[missionPlayers[0]].mission;
                if(Math.random() > 0.5) {
                    console.log(`英雄 ${thisPlayer} 前往任務地 ${mission} 支援 ${missionPlayers[0]}`);
                    await animateMove(thisPlayer,window.players[missionPlayers[0]].mission,700);
                } else {
                    console.log(`英雄 ${thisPlayer} 的傷勢嚴重，無法行動 . . .`);
                }
            } else {
                console.log("所有任務已完成，敵人消失。");
            }
        } else {
            console.log("沒有英雄可以逮捕敵人了！");
        }
    }
}; 


// 遍歷 areaItem 陣列並創建元素
for (let i = 0; i < window.areaItem.length; i++) {
    const item = window.areaItem[i]; // 當前物件
    
    // 1. 計算實際位置 (從中心點偏移)
    const final_left = mid_x + item.x - item.w / 2;
    const final_top = mid_y + item.y - item.h + item.btn_s;
    
    // 2. 創建新的 DOM 元素 (使用 jQuery)
    const $newItem = $('<div></div>')
        .attr('id', item.id) 
        .addClass('venue-element area-item')
        .css({
            'width': `${item.w}px`,
            'height': `${item.h}px`,
            'background-image': `url(${item.bg})`,
            'position': 'absolute', 
            'left': `${final_left}px`,
            'top': `${final_top}px`,
            'z-index': 11,
            'transform-origin': ` 50% calc(100% - ${item.btn_s}px)`,
            'transition': 'transform 0.3s ease-out'
        });
    
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    const LIFT_DURATION = 200; // 提升動畫時間 (毫秒)
    const PAUSE_DURATION = 0; // 停頓時間 (毫秒)
    const FALL_DURATION = 200; // 恢復動畫時間 (毫秒)

    $newItem.on('click',
        function() { 
            const $element = $(this);
            const LIFT_HEIGHT = -20;
            const originalTransform = $element.css('transform'); 
            
            // 避免快速點擊造成動畫混亂
            if ($element.data('isAnimating')) return;
            $element.data('isAnimating', true);

            // 啟動動畫序列
            animateTransform(
                $element, 
                `${originalTransform} translate3d(0px, ${LIFT_HEIGHT}px, 0px)`, 
                LIFT_DURATION
            )
            .then(() => {
                // 動作 2: 停頓
                return delay(PAUSE_DURATION); 
            })
            .then(() => {
                // 動作 3: 恢復原狀
                return animateTransform(
                    $element, 
                    originalTransform, 
                    FALL_DURATION
                );
            })
            .finally(() => {
                // 清理鎖定狀態
                $element.data('isAnimating', false);
            });
        }
    );
    
    // 3. 將元素添加到地圖容器中
    $mapContainer.append($newItem);
}


$(document).ready(function() {
    
    const rotate = {x:60, z:25};
    containerRotate(rotate);
    
    // --- 【地圖旋轉控制邏輯】 ---
    
    const rotateXInput = $('#rotateX');
    const rotateZInput = $('#rotateZ');
    const rotateXValue = $('#rotateX-value');
    const rotateZValue = $('#rotateZ-value');
    
    // 旋轉更新函數
    function updateRotation() {
        const rotate = {
            // 取得滑桿的當前值，並轉換為數字
            x: parseFloat(rotateXInput.val()),
            z: parseFloat(rotateZInput.val())
        };
        
        window.rotate_x = rotate.x;
        window.rotate_z = rotate.z;
        
        // 呼叫地圖旋轉函數
        containerRotate(rotate);
        
        // 更新顯示的數值
        rotateXValue.text(`${rotate.x} deg`);
        rotateZValue.text(`${rotate.z} deg`);
    }
    
    // 1. 設置初始旋轉角度 (根據滑桿的 value 屬性)
    updateRotation(); 
    
    // 2. 監聽滑桿的 input 事件 (拖曳時即時觸發)
    rotateXInput.on('input', updateRotation);
    rotateZInput.on('input', updateRotation);
    
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
        
        
        // 目標不是 #map-container 不執行任務
        if (event.target !== this) {
            return; 
        }
        
        // --- 【修正後的座標獲取邏輯】 ---
        let x = event.offsetX;
        let y = event.offsetY;
        
        if(!x || !y){
            return;
        }
        
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

        console.log(`在座標 (${x - mid_x}, ${y - mid_y}) 發現敵人！`);
        
        //執行任務
        missionGo(null);
    });
    
    // **--- 【平移控制變數初始化】 ---**
    let isDragging = false;
    let startDragX = 0;
    let startDragY = 0;
    
    // 儲存地圖當前的左上角座標（作為累積的平移量）
    // 由於我們使用 left/top，我們需要在初始化時設置它們
    let currentLeft = 0;
    let currentTop = 0;
    
    $mapContainer.css({
        'left': `${currentLeft}px`,
        'top': `${currentTop}px`
    });
    
    const $scene = $('.scene'); // 在更大的容器上監聽拖拉事件
    
    // ----------------------------------------------------
    // 1. 滑鼠按下/觸控開始 (mousedown/touchstart)
    // ----------------------------------------------------
    $scene.on('mousedown touchstart', function(event) {
        // 阻止瀏覽器預設行為 (例如圖片拖動或文字選擇)
        //event.preventDefault(); 
        
        // 判斷是滑鼠還是觸控
        const clientX = event.originalEvent.touches ? event.originalEvent.touches[0].clientX : event.clientX;
        const clientY = event.originalEvent.touches ? event.originalEvent.touches[0].clientY : event.clientY;

        isDragging = true;
        
        // 記錄拖動的起始點
        startDragX = clientX;
        startDragY = clientY;
        
        // 獲取並儲存當前累積的 left/top 值
        // 使用 parseFloat 確保讀取的是數字，而不是字串
        currentLeft = parseFloat($mapContainer.css('left')) || 0;
        currentTop = parseFloat($mapContainer.css('top')) || 0;
        
        $mapContainer.css('cursor', 'grabbing'); 
    });
    
    // ----------------------------------------------------
    // 2. 滑鼠移動/觸控移動 (mousemove/touchmove) - 綁定在 document (為了在拖出範圍時仍能監聽)
    // ----------------------------------------------------
    $(document).on('mousemove touchmove', function(event) {
        if (!isDragging) return;
        //event.preventDefault(); // 確保移動時不滾動頁面

        // 判斷是滑鼠還是觸控
        const clientX = event.originalEvent.touches ? event.originalEvent.touches[0].clientX : event.clientX;
        const clientY = event.originalEvent.touches ? event.originalEvent.touches[0].clientY : event.clientY;

        // 計算相對於起始點的總位移量 (Delta)
        const deltaX = clientX - startDragX;
        const deltaY = clientY - startDragY;
        
        // 計算未經限制的潛在新位置
        const desiredLeft = currentLeft + deltaX; 
        const desiredTop = currentTop + deltaY;
        
        // 獲取視窗和地圖尺寸 (每次移動都獲取，以應對視窗大小改變)
        const windowWidth = $(window).width();
        const windowHeight = $(window).height();
        const mapWidth = $mapContainer.width();
        const mapHeight = $mapContainer.height();
        
        // 設定拖動極限
        const padding = 1000;
        const maxLeft = windowWidth - mapWidth + padding;
        const minLeft = -padding;
        const maxTop = windowHeight - mapHeight + padding;
        const minTop = -padding;
        
        // 計算新的 left/top
        const newLeft = Math.max(Math.min(desiredLeft, maxLeft), minLeft);
        const newTop = Math.max(Math.min(desiredTop, maxTop), minTop);
        
        
        // 應用新的 left/top
        $mapContainer.css({
            'left': `${newLeft}px`,
            'top': `${newTop}px`
        });
    });

    // ----------------------------------------------------
    // 3. 滑鼠放開/觸控結束 (mouseup/touchend) - 綁定在 document 
    // ----------------------------------------------------
    $(document).on('mouseup touchend', function() {
        if (isDragging) {
            isDragging = false;
            
            // 在拖動結束時，更新 currentLeft/currentTop 以確保下一次拖動從正確的位置開始
            currentLeft = parseFloat($mapContainer.css('left')) || 0;
            currentTop = parseFloat($mapContainer.css('top')) || 0;
            
            $mapContainer.css('cursor', 'grab');
        }
    });

});


