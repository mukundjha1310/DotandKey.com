// write code here
function what_to_show() {
    let len = JSON.parse(localStorage.getItem("login-data")) || [];
    if (len.length > 0) {
      window.location.href = "details.html";
    } else {
      window.location.href = "login.html";
    }
  }

  function yes(){
    let x=document.querySelector("#filter").value;
    if(x=="Whats New"){
        window.location.href = "newArrivel.html";
     }else if(x=="hair care"){
        window.location.href = "HairCare.html";
     }else if(x=="body care"){
        window.location.href = "BodyCare.html";
     }else if(x=="app"){
        window.location.href ="https://onelink.to/4bzhqy";
     }else if(x=="knowUsBatter"){
        window.location.href ="aboutus.html";
     }else if(x=="profile"){
        window.location.href ="details.html";
     }else if(x=="login"){
        window.location.href ="login.html";
     }
  }