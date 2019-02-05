$(document).ready(function () {

  if (screen.width > 480) {

    $(document).on('scroll', function () {
      if ($(this).scrollTop() >= ($('#mainContent').position().top) - 150) {
        leftScroll();
        rightScroll();
      }
    });

  }
  else {
    $(document).on('scroll', function(){
      if($(this).scrollTop() >= ($('#mainContent').position().top)- 150){
        leftScroll();
      }

      if($(this).scrollTop() >= ($('#leftList').position().top) + 100){
        rightScroll();
      }
    });
  }
})




function leftScroll(){
  document.getElementById('leftList').style.transform = "translateX(0%)";
}

function rightScroll(){
  document.getElementById('rightList').style.transform = "translateX(0%)";
}