function menuFunction(x) {

  var nav = document.querySelector("#nav_menu")
    x.classList.toggle("change");

    if (nav.style.transform == "translateX(0%)"){
      nav.style.transform = "translateX(-200%)";
      console.log("Menu Closed")
    }
    else{
      nav.style.transform = "translateX(0%)";
      console.log("Menu opened")
    }

    

   
  }

  function scrollFunction1() {
    let e = document.querySelector("#content");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }


 

function modalFunction(id){
  var modal = document.getElementById(id);




  var span = document.getElementsByClassName("close")[0];
console.log('done')


    modal.style.display = "block";



  span.onclick = function() {
    modal.style.display = "none";
  }


  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 

  }

  function modalClose(id){
    var modal = document.getElementById(id);
    modal.style.display = "none";
    console.log("closed")
  }