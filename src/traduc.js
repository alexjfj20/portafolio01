var check=document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma() {
  let id=check.checked;
     if (id==false){
        location.href="/portafolio/index.html";   
  }else {
       location.href="/portafolio/ingles/index.html";
  }
 
}


