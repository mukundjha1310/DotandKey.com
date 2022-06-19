
let data=JSON.parse(localStorage.getItem("serumdata"))



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


// console.log(JSON.parse(localStorage.getItem("serumdata")))

 let productimg=document.createElement("div")
 productimg.setAttribute("id","productimg")


let img=document.createElement("img")
img.src=data.img

 let productdetail=document.createElement("div");
 productdetail.setAttribute("id","productdetail");
let Info=document.createElement("p");
Info.setAttribute("id","Info");
Info.innerText=data.info;



let pricediv=document.createElement("div");
pricediv.setAttribute("id","pricediv");
let oldprice=document.createElement("p");
oldprice.innerText=data.oldprice;
oldprice.style.textDecoration="line-through";

let price=document.createElement("p");
price.innerText=data.price ;
let tax=document.createElement("p");
tax.innerText="Inclusive of All Taxes";
tax.style.color="grey";
tax.style.paddingTop="5px";

let selecttag=document.createElement("select");
selecttag.style.padding="6px 170px";
selecttag.style.marginTop="15px"
let opt1=document.createElement("option");
opt1.innerText="50 ml";
selecttag.style.fontSize="30px"
selecttag.style.color="grey"

selecttag.append(opt1);





let buttondiv=document.createElement("div");
buttondiv.setAttribute("id","buttondiv");
let button=document.createElement("button");
button.innerText="ADD TO CART";
buttondiv.setAttribute("class","addToCart")


let icon=document.createElement("div");
icon.style.fontSize="50px";
icon.style.marginTop="40px";



icon.innerHTML=`<i class="fa-regular fa-heart"></i>`;




pricediv.append(oldprice,price);


buttondiv.append(button,icon);

productdetail.append(Info,pricediv,tax,selecttag, buttondiv);
productimg.append(img);

 document.querySelector("#product").append(productimg,productdetail);
