// 漢堡按鈕

document.addEventListener('DOMContentLoaded', function(){
        
    var hamburger_icon = document.getElementsByClassName("hamburger_icon")[0];
    var header_list = document.getElementsByClassName("rwd-header")[0];
    hamburger_icon.addEventListener("click", function(){
        if( hamburger_icon.classList.contains("-on") ){
        hamburger_icon.classList.remove("-on");
        header_list.classList.remove("-on");
        }else{
        hamburger_icon.classList.add("-on");
        header_list.classList.add("-on");
        }
    });
    
    });