const robot = require('robotjs')

function click_send(){
    //这里设置你的发送处的坐标（若不对的话）
    robot.moveMouseSmooth(1550,590);
    robot.mouseClick();
}
function address(address){
    //这里设置你的地址处的坐标（若不对的话）
    robot.moveMouseSmooth(1580,500);
    robot.mouseClick();
    robot.typeString(address);
}
function getRandomNumber(min, max, decimalPlaces) {
    var randomNumber = Math.random() * (max - min) + min;
    var multiplier = Math.pow(10, decimalPlaces);
    randomNumber = Math.round(randomNumber * multiplier) / multiplier;
    return randomNumber;
  }
function money(){
    //这里设置你的金额处的坐标（若不对的话）
    robot.moveMouseSmooth(1580,620);
    robot.mouseClick();
    robot.typeString(getRandomNumber(0.00001,0.00008,6));
}
function forceWait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }







async function run(){

    //打开内置钱包
    robot.moveMouseSmooth(1850,1000)
    robot.mouseClick()
    // 切换链为base
    robot.moveMouseSmooth(1620,320)
    robot.mouseClick()
    robot.moveMouseSmooth(1620,920)
    robot.mouseClick()
    //以上不需要可以注释
    for(var i = 0; i < 100; i++){
        console.log("已完成：" + (i + 1)+"次");
        //点击send
        click_send();
        //输入地址
        address("这里输入你要转的钱包地址");
        //输入金额
        money()
        //点击send
        robot.moveMouseSmooth(1650,870);
        robot.mouseClick();
        // 设置等待时长
        await forceWait(2*1000)
        robot.mouseClick()
        
        //确认钱包
        // 设置等待时间
        await forceWait(2*1000)
        robot.moveMouseSmooth(1850,650);
        robot.mouseClick();
        // 设置等待时间
        await forceWait(2*1000)
        robot.mouseClick();
    }
}




run();







