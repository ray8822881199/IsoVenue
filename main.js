// 角色清單
window.players = {};
// 物件清單
window.areaItem = [];
// 任務清單
window.missionPoints = [];
// 旋轉
window.rotate_x = 0;
window.rotate_z = 0;

window.WIDE_SCREEN_THRESHOLD = 720; // 定義寬螢幕的最小寬度
window.IS_WIDE_SCREEN = false;

window.border_color = {
    'table-o': '#EF8D5B',
    'table-g': '#9EC98D',
    'table-y': '#EABB6A',
    'area-stamp': '#CC4A75',
    'area-camera': '#EE879D',
    'area-coser': '#659B7F',
    'area-bkginterview': '#E76845',
};

// 定義地圖物件
window.areaItem = [
    // 橘區
    {id: 'table-o-01', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_orange_1.png',  x: 274,  y: 22, w: 51, h: 55, icon_shift: 50},
    {id: 'table-o-02', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_orange_2.png',  x: 233,  y: 22, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-o-03', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_orange_3.png',  x: 192,  y: 22, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-o-04', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_orange_4.png',  x: 151,  y: 22, w: 51, h: 55, icon_shift: 50},
    {id: 'table-o-05', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_orange_5.png',  x: 110,  y: 22, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-o-06', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_orange_6.png',  x: 69,   y: 22, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-o-07', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_orange_7.png',  x: 28,   y: 22, w: 51, h: 55, icon_shift: 50},
    {id: 'table-o-08', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_orange_8.png',  x: -13,  y: 22, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-o-09', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_orange_9.png',  x: -54,  y: 22, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-o-10', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_orange_10.png', x: -95,  y: 22, w: 51, h: 55, icon_shift: 50},
    {id: 'table-o-11', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_orange_11.png', x: -136, y: 22, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-o-12', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_orange_12.png', x: -177, y: 22, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-o-13', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_orange_13.png', x: -218, y: 22, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-o-14', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_orange_14.png', x: -259, y: 22, w: 51, h: 55, icon_shift: 50}, 

    // 綠區
    {id: 'table-g-01', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_green_1.png',  x: 154,  y: 195, w: 51, h: 55, icon_shift: 50},
    {id: 'table-g-02', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_green_2.png',  x: 113,  y: 195, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-g-03', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_green_3.png',  x: 72,   y: 195, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-g-04', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_green_4.png',  x: 31,   y: 195, w: 51, h: 55, icon_shift: 50},
    {id: 'table-g-05', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_green_5.png',  x: -10,  y: 195, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-g-06', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_green_6.png',  x: -51,  y: 195, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-g-07', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_green_7.png',  x: -92,  y: 195, w: 51, h: 55, icon_shift: 50},
    {id: 'table-g-08', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_green_8.png',  x: -133, y: 195, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-g-09', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_green_9.png',  x: -174, y: 195, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-g-10', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_green_10.png', x: -215, y: 195, w: 51, h: 55, icon_shift: 50},
    {id: 'table-g-11', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_green_11.png', x: -256, y: 195, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-g-12', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_green_12.png', x: -297, y: 195, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-g-13', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_green_13.png', x: -338, y: 195, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-g-14', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_green_14.png', x: -379, y: 195, w: 51, h: 55, icon_shift: 50}, 

    // 黃區
    {id: 'table-y-01', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_yellow_1.png',  x: 642, y: 30,  w: 51, h: 55, icon_shift: 50},
    {id: 'table-y-02', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_yellow_2.png',  x: 642, y: 71,  w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-y-03', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_yellow_3.png',  x: 642, y: 112, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-y-04', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_yellow_4.png',  x: 642, y: 153, w: 51, h: 55, icon_shift: 50},
    {id: 'table-y-05', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_yellow_5.png',  x: 597, y: 190, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-y-06', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_yellow_6.png',  x: 556, y: 190, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-y-07', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_yellow_7.png',  x: 515, y: 190, w: 51, h: 55, icon_shift: 50},
    {id: 'table-y-08', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_yellow_8.png',  x: 474, y: 190, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-y-09', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_yellow_9.png',  x: 433, y: 190, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-y-10', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_yellow_10.png', x: 392, y: 190, w: 51, h: 55, icon_shift: 50}, 
    {id: 'table-y-11', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_yellow_11.png', x: 351, y: 190, w: 51, h: 55, icon_shift: 50},
    {id: 'table-y-12', bg: 'img/mapitem/item_desk.png', icon: 'img/icon/map_icon_icon_yellow_12.png', x: 310, y: 190, w: 51, h: 55, icon_shift: 50}, 

    // 地圖娃
    {id: 'item_small_dyna_1', bg: 'img/mapitem/item_small_dyna_1.png', x: -310, y: -40, w: 55, h: 55},
    {id: 'item_small_dyna_2', bg: 'img/mapitem/item_small_dyna_2.png', x: -688, y: 125, w: 47, h: 56},
    {id: 'item_small_dyna_3', bg: 'img/mapitem/item_small_dyna_3.png', x: 567,  y: -244,w: 53, h: 54},
    {id: 'item_small_dyna_4', bg: 'img/mapitem/item_small_dyna_4.png', x: -511,  y: 356,w: 45, h: 56},
    
    // 區域氣泡
    {id: 'area-coser',        icon: 'img/icon/map_icon_icon_coser_0.png',        x: -460, y: -85,  w: 170, h: 225, icon_shift: 50},
    {id: 'area-bkginterview', icon: 'img/icon/map_icon_icon_bkginterview_0.png', x: -97,  y: 474,  w: 300, h: 200, icon_shift: 50},
    {id: 'area-stamp-01',     icon: 'img/icon/map_icon_icon_stamp.png',          x: 180,  y: -310, w: 50,  h: 40,  icon_shift: 40},
    {id: 'area-camera-01',    icon: ''/*'img/icon/map_icon_icon_camera.png'*/,         x: 240,  y: -310, w: 50,  h: 40,  icon_shift: 40}, 
    {id: 'area-stamp-02',     icon: 'img/icon/map_icon_icon_stamp.png',          x: -440, y: -34,  w: 50,  h: 40,  icon_shift: 40},
    {id: 'area-camera-02',    icon: ''/*'img/icon/map_icon_icon_camera.png'*/,         x: -370, y: -34,  w: 50,  h: 40,  icon_shift: 40}, 
    {id: 'area-stamp-03',     icon: 'img/icon/map_icon_icon_stamp.png',          x: -755, y: -20,  w: 40,  h: 55,  icon_shift: 40},
    {id: 'area-camera-03',    icon: ''/*'img/icon/map_icon_icon_camera.png'*/,         x: -755, y: 40,   w: 40,  h: 55,  icon_shift: 40}, 
    {id: 'area-stamp-04',     icon: 'img/icon/map_icon_icon_stamp.png',          x: 120,  y: 320,  w: 40,  h: 55,  icon_shift: 40},
    {id: 'area-camera-04',    icon: ''/*'img/icon/map_icon_icon_camera.png'*/,         x: 120,  y: 380,  w: 40,  h: 55,  icon_shift: 40}, 


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


// 桌面跳動
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
        if(!$(this).data('is-area')){
            // 不是地區物件則轉向
            $(this).css('transform', `rotateZ(${-rotate.z}deg) rotateX(${-rotate.x}deg)`);
        }else{
            // 提升一點點高度
            $(this).css('transform', `translateZ(3px)`);
        }
        
        $(this).data('oriTrans', $(this).css('transform'));
    });
}


function distanceEffect(playerId_1, playerId_2, is_support) {
    
    const p1 = window.players[playerId_1].locate || [0, 0];
    const p2 = window.players[playerId_2].locate || [0, 0];
    
    const ori_display = $(heart).css('display');
    
    if(calculateEuclideanDistance(p1,p2) < 90){
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
        const finalTop = centerY - heart_height / 2 - (p1_height + p2_height) / 4 + 0 ; // 愛心高度提升需修改此處

        // 特效定位 顯示特效
        $(heart).css({
            'left': `${finalLeft}px`,
            'top': `${finalTop}px`,
            'display': `block`
        });
        
        if(ori_display == 'none' && is_support) {
            
            // 爆豪支援出久
            if(playerId_1 == 'Bakugo' && playerId_2 == 'Midoriya'){
                console.log(`爆豪勝己 ：「小心一點，Deku。」`);
                console.log(`綠谷出久：「嗯！小勝也是。」`);
                console.log(`爆豪勝己：「叫我大爆殺神Dynamight！」`);
            }
            // 出久支援爆豪
            if(playerId_1 == 'Midoriya' && playerId_2 == 'Bakugo'){
                
                console.log(`綠谷出久：「小勝！我來支援了！」`);
                console.log(`爆豪勝己：「給我叫英雄名啦臭書呆子！」`);
                console.log(`綠谷出久：「好、好的！大爆殺神Dynamight！」`);
                
            }
        }
        
    }else{
        $(heart).css({
            'display': `none`
        });
    }
    
}

// 移動角色前往任務地
function animateMove(playerId, missionCoords, duration, toSupportId) {
    
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
            if(playerId && toSupportId){
                distanceEffect(playerId,toSupportId,true);
            } else {
                distanceEffect('Bakugo','Midoriya',false);
            }

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
        await animateMove(playerToMoveId,missionCoords,1000,null);
        
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
                if(Math.random() > (1 - 0.57)) {
                    console.log(`英雄 ${thisPlayer} 任務完成，前往新任務地 (${mission}) 支援 ${missionPlayers[0]}`);
                    await animateMove(thisPlayer,window.players[missionPlayers[0]].mission,700,missionPlayers[0]);
                } else {
                    console.log(`英雄 ${thisPlayer} 任務繁忙，無法支援 . . .`);
                }
            } else {
                console.log("所有任務已完成，敵人消失。");
            }
        } else {
            console.log("沒有英雄可以逮捕敵人了！");
        }
    }
}; 


// 動畫時間常數 (毫秒)
const LIFT_DURATION = 200; 
const PAUSE_DURATION = 0;
const FALL_DURATION = 200;
const LIFT_HEIGHT = -20;

function handleItemEnter($element) {
    
    const $element_icon = $(`#${$element.data('icon-id')}`);
    
    const hasIcon = $element_icon.length > 0;
    const is_area = $element.data('is-area');
    const is_store = $element.data('is-store');
    
    if(!is_area && !is_store){return;}

    $element.css('transition','transform 0.3s ease-out, opacity 0.3s ease-out');
    hasIcon && $element_icon.css('transition','transform 0.3s ease-out');

    let originalTransform = $element.data('oriTrans');
    let originalIconTransform = hasIcon ? $element_icon.data('oriTrans') : 'none';

    
    // 載入資訊卡
    //loadStoreData($element, $element_icon);
    if(window.IS_WIDE_SCREEN){
        const $tooltip = $('#custom-tooltip');
        const infoObjId = $element.attr('id');
        const infoObj = areaInfo[infoObjId];
        $tooltip.text(infoObj.stall_card_name).show();
    }
    
    if (hasIcon) {
        
        $element_icon.addClass('highlight');
        // 全部半透明
        $('.table-bubbles').css('opacity', '0.5'); 
        // 選中者維持高亮
        $('.loadStoreData').css('opacity', '1');
        // 同步多標記者維持高亮
        $('.highlight').css('opacity', '1');
        // 當下互動者維持高亮
        $element_icon.css('opacity', '1');
        // 氣泡彈跳
        $element_icon.css('transform', `${originalIconTransform} translate3d(0px, ${LIFT_HEIGHT * 1.3}px, 0px)`);
    }
    // 店鋪彈跳
    if(!is_area && is_store){
        $element.css('transform', `${originalTransform} translate3d(0px, ${LIFT_HEIGHT}px, 0px)`);
    }

    $element.data('isAnimating', true);

}

function handleItemLeave($element) {
    
    const $element_icon = $(`#${$element.data('icon-id')}`);
    
    const hasIcon = $element_icon.length > 0;
    const is_area = $element.data('is-area');
    const is_store = $element.data('is-store');
    
    // 吉祥物沒有滑鼠離開事件
    if(!is_area && !is_store){return;}
    
    // 說明文字
    const $tooltip = $('#custom-tooltip');
    $tooltip.hide();
    
    // 沒有被選擇的落回原始高度
    const is_selected = hasIcon && $element_icon.hasClass('loadStoreData');
    if(!is_selected){
        // 落回原始高度
        $element.css('transform', $element.data('oriTrans')); 
        if (hasIcon) {
            $element_icon.css('transform', $element_icon.data('oriTrans'));
        }
        // 可再次觸發動畫
        $element.data('isAnimating', false);
    }
    
    $element_icon.removeClass('highlight');
    // 全部半透明
    $('.table-bubbles').css('opacity', '0.5'); 
    // 選中者維持高亮
    $('.loadStoreData').css('opacity', '1');
    // 同步多標記者維持高亮
    $('.highlight').css('opacity', '1');
}

function handleItemClick($element) {
    
    const $element_icon = $(`#${$element.data('icon-id')}`);
    const hasIcon = $element_icon.length > 0;
    
    const is_area = $element.data('is-area');
    const is_store = $element.data('is-store');
    
    let originalTransform = $element.data('oriTrans');
    let originalIconTransform = hasIcon ? $element_icon.data('oriTrans') : 'none';

    // 載入資訊卡
    loadStoreData($element);
    
    
    // 未選回落
    const $selected = $('.loadStoreData');
    if($selected.attr('id') != $element_icon.attr('id')){
        $selected.each(function() {
            const $item = $(`#${$(this).data('item-id')}`);
            $(this).removeClass('loadStoreData');
            handleItemLeave($item);
        });
        // 切換選中者
        $element_icon.addClass('loadStoreData');
        // 全部半透明
        $('.table-bubbles').css('opacity', '0.5'); 
        // 選中者維持高亮
        $('.loadStoreData').css('opacity', '1');
        // 同步多標記者維持高亮
        $('.highlight').css('opacity', '1');
    }
    
    // 所有非自身 .highlight 觸發滑鼠離開以回落
    $('.highlight').filter(`:not([id=${$element_icon.attr('id')}])`).each(function(){
        const $item = $(`#${$(this).data('item-id')}`);
        handleItemLeave($item);
        $item.data('isAnimating', false);
    });
    
    // 只有地圖娃要作動
    if(!is_area && !is_store){
        // 避免快速點擊造成動畫混亂
        if ($element.data('isAnimating')) return;
        $element.data('isAnimating', true);
        
        animateTransform(
                $element,
                `${originalTransform} translate3d(0px, ${LIFT_HEIGHT}px, 0px)`,
                LIFT_DURATION
            )
            .then(() => {
                return delay(PAUSE_DURATION);
            })
            .then(() => {
                return Promise.all([
                    animateTransform(
                        $element,
                        originalTransform,
                        FALL_DURATION
                    )
                ]);
            })
            .finally(() => {
                $element.data('isAnimating', false);
            });

    }

}

// 載入資訊卡
function loadStoreData($element) {
    
    const infoObjId = $element.attr('id');
    const infoObj = areaInfo[infoObjId];
    
    
    if (infoObj) {
        // 更新資訊卡內容
        $('.cp_type').text(infoObj.cp_type);
        $('.stall_color').text(infoObj.stall_color);
        $('.stall_card_name').text(infoObj.stall_card_name);
        
        $('.stall_good_info').text(infoObj.product_type||'');
        
        $('.stall_sns_link').html('');
        const $sns_link = $(`<a href="${infoObj.sns_link||''}" target="_blank">${infoObj.sns_type||''}</a>`);
        const $mark_div = $(`<div>當日販售品項以現場為準</div>`);
        
        $('.stall_sns_link').append($sns_link);
        $('.stall_sns_link').append($mark_div);

        // 更改資訊卡色彩
        let borderColor = null;
        if (infoObjId.startsWith('table-o')) { borderColor = window.border_color['table-o']; }
        if (infoObjId.startsWith('table-g')) { borderColor = window.border_color['table-g']; }
        if (infoObjId.startsWith('table-y')) { borderColor = window.border_color['table-y']; }
        
        if (infoObjId.startsWith('area-stamp')) { borderColor = window.border_color['area-stamp']; }
        if (infoObjId.startsWith('area-camera')) { borderColor = window.border_color['area-camera']; }
        if (infoObjId.startsWith('area-coser')) { borderColor = window.border_color['area-coser']; }
        if (infoObjId.startsWith('area-bkginterview')) { borderColor = window.border_color['area-bkginterview']; }
        
        borderColor && $('.border_color_a').css({
            borderColor: borderColor,
            backgroundColor: borderColor,
            color: '#fff'
        });
        borderColor && $('.mission_map_info_stall_card > .divider').css({
            borderColor: borderColor,
            backgroundColor: borderColor
        });
        
    }
}

// 載入菜單
// 20251129 修改預定標記 拆開同步台升 拆開代表資訊
function loadMenu() {
    
    const key_list = {};
    
    // 取得對照
    for (const key in window.areaInfo) {
        if (areaInfo.hasOwnProperty(key)) {
            const value = areaInfo[key];
            key_list[value.type] = key_list[value.type] || [];
            key_list[value.type].push(key);
        }
    }
    
    // 透過對照建立菜單
    for (const menuMapKey in key_list) {
        
        if(menuMapKey == 'STORE'){
            // 店鋪邏輯
            for(const table of key_list[menuMapKey]){
                const value = areaInfo[table]
                const stall_color = value.stall_color
                const stall_card_name = value.stall_card_name
                
                const $row = $(`<tr id="tr-info-${table}">
                    <td class="number">${stall_color}</td>
                    <td class="stall_name">${stall_card_name}</td>
                </tr>`)
                
                // 將資料列與攤位綁定
                $row.data('ref-item',table);
        
                // 綁定同步觸發
                $row.on('click', function() {
                    const $item = $(`#${$(this).data('ref-item')}`);
                    handleItemClick($item);
                });
                $row.on('mouseenter', function() {
                    const $item = $(`#${$(this).data('ref-item')}`);
                    handleItemEnter($item);
                });
                $row.on('mouseleave', function() {
                    const $item = $(`#${$(this).data('ref-item')}`);
                    handleItemLeave($item);
                });
                
                // 加入畫面
                table.startsWith('table-y') && $('.cp_type_osanana table.stall_osanana').append($row);
                table.startsWith('table-o') && $('.cp_type_bkdk table.stall_bkdk').append($row);
                table.startsWith('table-g') && $('.cp_type_dkbk table.stall_dkbk').append($row);
            }
            
        }else{
            // 官方邏輯
            // 相同 type 只有第一筆作為菜單資料 但每一個點都能有自己的資料
            const value = areaInfo[key_list[menuMapKey][0]];
            const $row = $(`<div class="evnet_name">${value.stall_card_name}</div>`)
            
            // 將資料列與攤位綁定
            $row.data('ref-item',key_list[menuMapKey]);
            
            // 綁定同步觸發
            $row.on('click', function() {
                const table_list = $(this).data('ref-item');
                // 觸發第一個當主要代表
                const $item_0 = $(`#${table_list[0]}`);
                handleItemClick($item_0);
                // 其餘物件後觸發進入 顯示高亮
                for(const table of table_list){
                    const $item = $(`#${table}`);
                    const $item_icon = $(`#${$item.data('icon-id')}`);
                    $item_icon.addClass('loadStoreData');
                    handleItemEnter($item); 
                }
            });
            $row.on('mouseenter', function() {
                const table_list = $(this).data('ref-item');
                // 清單內全部觸發
                for(const table of table_list){
                    const $item = $(`#${table}`);
                    handleItemEnter($item);
                }
            });
            $row.on('mouseleave', function() {
                const table_list = $(this).data('ref-item');
                // 清單內全部觸發
                for(const table of table_list){
                    const $item = $(`#${table}`);
                    handleItemLeave($item);
                }
            });
            
            if($(`.${value.menu_type}`).length == 0) {
                // 沒有找到該分組菜單 建立菜單
                $('#static_divider').before($(`<div class="divider"></div>`));
                $('#static_divider').before($(`<div class="stall_official_type ${value.menu_type}">${value.cp_type}</div>`));
            }
            
            if($(`.${menuMapKey}`).length == 0) {
                // 沒有找到該菜單 建立菜單
                $('#static_divider').before($(`<div class="stall_official_evnet ${menuMapKey}">`));
            }
            
            $(`.${menuMapKey}`).append($row);

        }

    }
    //清除多餘分隔線 只有第一個子元素是分隔線才移除
    $('.stall_official > .divider:first-child').remove();
}




function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
    


// 遍歷 areaItem 陣列並創建元素
for (let i = 0; i < window.areaItem.length; i++) {
    const item = window.areaItem[i]; // 當前物件
    
    // 1. 計算實際位置
    const final_left = mid_x + item.x - item.w / 2;
    const final_top = mid_y + item.y - item.h;
    
    // 2. 創建新的 DOM 元素 ($newItem)
    const $newItem = $('<div></div>')
        .attr('id', item.id)
        .addClass('venue-element area-item')
        .data('item-index', i) 
        .css({
            'width': `${item.w}px`,
            'height': `${item.h}px`,
            'background-image': `url(${item.bg || ''})`,
            'position': 'absolute',
            'left': `${final_left}px`,
            'top': `${final_top}px`,
            'z-index': 11,
            'transform-origin': ` 50% 100%`
            //'transition': 'transform 0.3s ease-out' 
        });
    
    $newItem.data('is-area', !item.bg);
    $newItem.data('is-store', (!!item.bg && !!item.icon));
    $newItem.data('isAnimating', false)
    
    // 3. 元素專屬泡泡 ($newIcon)
    
    let $newIcon = null;
    if (item.icon) {
        const iconId = item.id + '_icon';
        
        const icon_left = mid_x + item.x - 35 / 2;
        const icon_top = mid_y + item.y - item.h - item.icon_shift;
    
        $newIcon = $('<div></div>')
            .attr('id', iconId)
            .addClass('venue-element area-item table-bubbles')
            .css({
                'pointer-events': 'none', // 確保滑鼠穿透
                'opacity': `0.5`,
                'width': `35px`,
                'height': `50px`,
                'background-image': `url(${item.icon})`,
                'position': 'absolute',
                'left': `${icon_left}px`,
                'top': `${icon_top}px`,
                'z-index': 12,
                'transform-origin': ` 50% calc(100% + ${item.icon_shift}px)`
                //'transition': 'transform 0.3s ease-out, opacity 0.3s ease-out' // 確保 Icon 透明度也能過渡
            });
        //建立雙向關聯
        $newItem.data('icon-id', iconId); 
        $newIcon.data('item-id', item.id); 
    }

    $newItem.on('click', function() {
        handleItemClick($(this));
    });
    $newItem.on('mouseenter', function() {
        handleItemEnter($(this));
    });
    $newItem.on('mouseleave', function() {
        handleItemLeave($(this));
    });
    
    $mapContainer.append($newItem);
    $newIcon && $mapContainer.append($newIcon);
    //$newItem.css('transition','transform 0.3s ease-out, opacity 0.3s ease-out');
    //$newIcon && $newIcon.css('transition','transform 0.3s ease-out');
}


    
$(document).ready(function() {
    
    const rotate = {x:0, z:0};
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
    
    // 載入菜單
    loadMenu();
    
    // 設定「當點擊官方任務」時要做什麼
    $('#tab-official').on('click', function() {
        $(this).addClass('tab-active');
        $('#tab-creator').removeClass('tab-active');
        $('#content-official').show();
        $('#content-creator').hide();
    });

    // 設定「當點擊攤位資訊」時要做什麼 (動作相反)
    $('#tab-creator').on('click', function() {
        $(this).addClass('tab-active');
        $('#tab-official').removeClass('tab-active');
        $('#content-official').hide();
        $('#content-creator').show();
    });
    
    function isWideScreen() {
        const isWide = $(window).width() >= window.WIDE_SCREEN_THRESHOLD;
        if(!isWide){
            //手機
            $('.mission_map_stall_list').css({display:'none'});
            $('.map_warning_text').css({fontSize:'9px',margin:'auto 8px auto auto'});
            window.IS_WIDE_SCREEN = false;
        }else{
            //電腦
            $('.mission_map_stall_list').css({display:'inline-flex'});
            $('.map_warning_text').css({fontSize:'12px',margin:'auto 80px auto auto'});
            window.IS_WIDE_SCREEN = true;
        }
        return isWide;
    }
    
    function applyInitialTransform() {
        let initialScale;
        
        if (isWideScreen()) {
            // 寬螢幕 (電腦)
            initialScale = 0.9;
        } else {
            // 窄螢幕 (手機)
            initialScale = 0.6;
        }
        
        // 更新全域 currentScale 變數，作為滾輪/捏合縮放的起始值
        window.currentScale = initialScale;

        // 應用 3D 變換
        $mapContainer.css('transform', 
            `rotateX(${window.rotate_x}deg) rotateZ(${window.rotate_z}deg) scale3d(${initialScale}, ${initialScale}, ${initialScale})`
        );
    }
    
    const $tooltip = $('#custom-tooltip');
    const tooltipOffset = 15;
    function updateTooltipPosition(x, y) {
        $tooltip.css({
            left: x + tooltipOffset + 'px',
            top: y + tooltipOffset + 'px'
        });
    }
    
    // A. 頁面載入時執行一次
    applyInitialTransform();

    // B. 監聽視窗大小改變 (使用防抖/節流優化性能)
    let resizeTimeout;
    $(window).on('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // 在尺寸改變時，重新檢查並應用適當的初始縮放
            applyInitialTransform();
        }, 200); // 200ms 延遲以優化性能
    });

    
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
        /*const newAxis = $('<div>')
            .addClass('axis z-axis')
            .attr('id', `point-x-${x}-y-${y}`)
            .css({
                'left': x + 'px',
                'top': y + 'px'
            });
        $(this).append(newAxis);*/

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
    // 由於使用 left/top，需在初始化時設置
    window.currentLeft = 0;
    window.currentTop = 0;
    
    
    const $scene = $('.scene'); // 在更大的容器上監聽拖拉事件
    
    // ----------------------------------------------------
    // 1. 滑鼠按下/觸控開始 (mousedown/touchstart)
    // ----------------------------------------------------
    $scene.on('mousedown touchstart', function(event) {

        // 判斷是滑鼠還是觸控
        const clientX = event.originalEvent.touches ? event.originalEvent.touches[0].clientX : event.clientX;
        const clientY = event.originalEvent.touches ? event.originalEvent.touches[0].clientY : event.clientY;

        isDragging = true;
        
        // 記錄拖動的起始點
        startDragX = clientX;
        startDragY = clientY;
        
        // 獲取並儲存當前累積的 left/top 值
        // 使用 parseFloat 確保讀取的是數字，而不是字串
        window.currentLeft = parseFloat($mapContainer.css('left')) || 0;
        window.currentTop = parseFloat($mapContainer.css('top')) || 0;
        
        $mapContainer.css('cursor', 'grabbing');
            
    });
    
    
    // ----------------------------------------------------
    // 2. 滑鼠移動/觸控移動 (mousemove/touchmove) - 綁定在 document (為了在拖出範圍時仍能監聽)
    // ----------------------------------------------------
    $(document).on('mousemove touchmove', function(event) {
        if (!isDragging) return;

        // 判斷是滑鼠還是觸控
        const clientX = event.originalEvent.touches ? event.originalEvent.touches[0].clientX : event.clientX;
        const clientY = event.originalEvent.touches ? event.originalEvent.touches[0].clientY : event.clientY;

        // 計算相對於起始點的總位移量 (Delta)
        const deltaX = clientX - startDragX;
        const deltaY = clientY - startDragY;
        
        // 計算未經限制的潛在新位置
        const desiredLeft = window.currentLeft + deltaX; 
        const desiredTop = window.currentTop + deltaY;
        
        // 獲取視窗和地圖尺寸 (每次移動都獲取，以應對視窗大小改變)
        const windowWidth = $(window).width();
        const windowHeight = $(window).height();
        const mapWidth = $mapContainer.width();
        const mapHeight = $mapContainer.height();
        
        // 設定拖動極限      
        let maxLeft = Math.max(windowWidth * 0.5 - mapWidth * 0.5, mapWidth * 0.5 - windowWidth * 0.5);
        let minLeft = Math.min(windowWidth * 0.5 - mapWidth * 0.5, mapWidth * 0.5 - windowWidth * 0.5);
        let maxTop =  Math.max(windowHeight * 0.5 - mapHeight * 0.5, mapHeight * 0.5 - windowHeight * 0.5);
        let minTop = Math.min(windowHeight * 0.5 - mapHeight * 0.5, mapHeight * 0.5 - windowHeight * 0.5);
        
        
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
            window.currentLeft = parseFloat($mapContainer.css('left')) || 0;
            window.currentTop = parseFloat($mapContainer.css('top')) || 0;
            
            $mapContainer.css('cursor', 'grab');
        }
    });
    
    $(document).on('mousemove', function() {
        updateTooltipPosition(event.pageX, event.pageY);
    });

});


