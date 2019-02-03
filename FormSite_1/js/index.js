$(document).ready(function(){
    
  $(document).on('scroll', function(){
      if($(this).scrollTop() >= ($('#mainContent').position().top) - 150){

        
        setBigPanelVisibility();
      }
  })


})


function setBigPanelVisibility(){

    document.getElementById('leftList').style.transform = "translateX(0%)";


    document.getElementById('rightList').style.transform = "translateX(0%)";
    
    
    
  
}

