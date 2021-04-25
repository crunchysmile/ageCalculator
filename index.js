
function showLive(){
var update_bdy = setInterval(function showLive(){

    var userName = document.getElementById("name");
    var birthDay = document.getElementById("bdy");
  

    var birthDate = new Date( birthDay.value ).getTime();
    // console.log(birthDate);

    var today = new Date().getTime();
    // console.log(today);

    var miliSecands = today - birthDate ;
    // console.log(miliSecands);

    var years = Math.floor(miliSecands / (86400*1000*365)) ;// 1
    // console.log(years); 

    var months = Math.floor(miliSecands % (86400*1000*365) / (86400*1000*30) ); //2
    // console.log(months);

    var days = Math.floor((miliSecands % (86400*1000*365) % (86400*1000*30)) / (86400*1000)) ; //3
    // console.log(days);

    var hours = Math.floor(((miliSecands % (86400*1000*365) % (86400*1000*30)) % (86400*1000)) / (3600*1000)) ; //4 
    // console.log(hours);

    var minutes = Math.floor((((miliSecands % (86400*1000*365) % (86400*1000*30)) % (86400*1000)) % (3600*1000)) / (60*1000)) ; //5
    // console.log(minutes);

    var secands = Math.floor(((((miliSecands % (86400*1000*365) % (86400*1000*30)) % (86400*1000)) % (3600*1000)) % (60*1000)) / (1000)) //6
    // console.log(secands);

    var miliSecand  = Math.floor(((((miliSecands % (86400*1000*365) % (86400*1000*30)) % (86400*1000)) % (3600*1000)) % (60*1000)) % (1000)); //7
    // console.log(miliSecand);

    document.getElementById("years").innerHTML =  years ;
    document.getElementById("months").innerHTML =  months ;
    document.getElementById("days").innerHTML = days ;
    document.getElementById("hours").innerHTML = hours ;
    document.getElementById("minutes").innerHTML = minutes ;
    document.getElementById("secands").innerHTML = secands ;
    document.getElementById("miliSecands").innerHTML = miliSecand ;
    document.getElementById("sayHi").innerHTML = "Hi " + userName.value + "! Hope ur Fine." ;
    document.getElementById("congrats").innerHTML = "congratulations " +  " You are " + years +" years "+ " now.";
    
    document.getElementById("hide").style.display = "block" ;

    },100) ;


    
}