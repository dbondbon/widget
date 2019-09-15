//return [param, param + max]
function getRandomParameter(param, max) {
    return param + Math.floor(Math.random() * (max + 1));
}

// bounds(a,b,c,d)   (a,b)为组件左上角的坐标，(c,d)为矩形组件的宽度和高度

// 刷文章
for (var i = 0; i < 6; i++) {
    var clickX = 80;   // 点击文章的坐标
    var clickY = 900;
    var swipeX1 = 80;  // 滑动结束坐标
    var swipeY1 = 80;
    var swipeX2 = swipeX1;  // 滑动开始坐标
    var swipeY2 = 1350;
    var duration = 1000;    // 滑动时间
    var time1 = 3 * 60 * 1000;    // 保持屏幕常量时间
    var time2 = 2 * 60 * 1000;    // 显示文章时长

    clickX = getRandomParameter(clickX, 50);
    clickY = getRandomParameter(clickY, 100);
    swipeX1 = getRandomParameter(swipeX1, 50);
    swipeY1 = getRandomParameter(swipeY1, 50);
    swipeX2 = swipeX1;
    swipeY2 = getRandomParameter(swipeY2, 100);
    duration = getRandomParameter(duration, 200);
    time1 = getRandomParameter(time1, 1000 * 60);
    time2 = getRandomParameter(time2, 1000 * 60);

    click(clickX,clickY);
    for (var j = 0; j < 2; j++) {
        swipe(swipeX2, swipeY2, swipeX1, swipeY1, duration);
    }
    device.keepScreenOn(time1);
    sleep(time2);
    back();
    for (j = 0; j < 2; j++) {
        swipe(swipeX2, swipeY2, swipeX1, swipeY1, duration);
    }
}
home()
