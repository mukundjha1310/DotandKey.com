
let dataLS=JSON.parse(localStorage.getItem("serumdata"))
console.log(dataLS)


 let productimg=document.createElement("div")
 productimg.setAttribute("id","productimg")


let img=document.createElement("img")
img.src= dataLS.img

 let productdetail=document.createElement("div");
 productdetail.setAttribute("id","productdetail");
let Info=document.createElement("p");
Info.setAttribute("id","Info");
Info.innerText=dataLS.info;



let pricediv=document.createElement("div");
pricediv.setAttribute("id","pricediv");
let oldprice=document.createElement("p");
oldprice.innerText=dataLS.oldprice;
oldprice.style.textDecoration="line-through";

let price=document.createElement("p");
price.innerText=dataLS.price ;
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
// buttondiv.style.marginTop="-40px"
// button.style.padding="80px"

let icon=document.createElement("div");
icon.style.fontSize="50px";
icon.style.marginTop="40px";
// icon.style.paddingTop="40px"
// icon.style.border="1px solid"


icon.innerHTML=`<i class="fa-regular fa-heart"></i>`;




pricediv.append(oldprice,price);
// selecttag.append(option)

buttondiv.append(button,icon);

productdetail.append(Info,pricediv,tax,selecttag, buttondiv);
productimg.append(img);

 document.querySelector("#product").append(productimg,productdetail);
