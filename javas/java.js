function updateDate(){
    var date =new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours() + ":" + date.getMinutes()+":"+ date.getSeconds();
    var setDate = document.getElementById("setDate");
    setDate.innerHTML = date.getDate() + "-" +parseInt(date.getMonth()+1)+"-"+date.getFullYear() 
}
setInterval(updateDate,100);
onload = updateDate();
function getColor(){
    var getColor= document.getElementById("setColor").value;
    localStorage.setItem("color",getColor);
    document.getElementById("time").style.background = localStorage.getItem("color");
    document.getElementById("body").style.background = localStorage.getItem("color");

}
function setColor(){
document.getElementById("setColor").value = localStorage.getItem("color");
document.getElementById("time").style.background = localStorage.getItem("color");
document.getElementById("body").style.background = localStorage.getItem("color");

}
setInterval(setColor,100);
//function showTime(){

    'use strict';

    var now =new Date(),
     hours =now.getHours(),
     minutes = now.getMinutes(),
     seconds = now.getSeconds();

     console.log(now);
     console.log(hours);
     console.log(minutes);
     console.log(seconds);

     document.getElementById('clock').textContent = hours + ';' + minutes + ';' + seconds ;
     
const fetchTextUsingWoleCard = async()=>{
    let response = await fetch(

    );
    let data =await response.jsone();
    console.log(data);
    let newData = data.map((item)=>{
        return`<div class ="parent" ><img src="${item.urls.thumb}" alt="${item.title}"/><p>${item.user.username}</p></div>`;

    });
    document.querySelector(".div").innerHTML=newData.join("");


};
fetchTextUsingWoleCard();
//window.onload = function(){

    'use strict';

    setInterval(showTime, 500);


