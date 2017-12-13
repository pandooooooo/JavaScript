function getInfo () {
  var info=document.getElementById("aqi-input"); //获取信息对象
  var displayInfo=document.getElementById("aqi-display"); //获取显示对象

  displayInfo.innerHTML=info.value;
}
