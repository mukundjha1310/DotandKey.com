//Retriving data from cartData key of loacl Storage to fromCartDataArr
let fromCartDataArr = JSON.parse(localStorage.getItem("cartData")) || [];

//Calculating the total no. of products that has been added to cart
let totalQuantity = 0;
if (fromCartDataArr === null) {
  totalQuantity = 0;
  document.querySelector("#quant").innerText = "(" + totalQuantity + ")";
} else {
  fromCartDataArr.map((data) => {
    totalQuantity = totalQuantity + data.quantity;
  });
  document.querySelector("#quant").innerText = "(" + totalQuantity + ")";
}

//Calculating Subtotal of all the cart products
if (fromCartDataArr.length === 0) {
  let subTotal = 0;
  document.querySelector("#totalPrice>span").innerText = subTotal.toFixed(2);
} else {
  let subTotal = fromCartDataArr.reduce(function (accumulator, el) {
    return accumulator + Number(el.price.replace(/\,/g, "")) * el.quantity;
  }, 0);
  document.querySelector("#totalPrice>span").innerText = subTotal.toFixed(2);
}

displayCart();

function displayCart() {
  if (fromCartDataArr.length === 0 || fromCartDataArr == null) {
    let head = document.createElement("h1");
    head.innerText = "YOUR BAG IS EMPTY. LET'S FILL IT UP!";
    head.style.marginTop = "180px";
    head.style.marginBottom = "150px";
    head.style.textAlign = "center";
    document.querySelector("#allProduct").innerHTML = "";
    document.querySelector("#container>div>p").innerText = "";
    document.querySelector("#container>div>p+hr").remove();
    document.querySelector("#footer").innerHTML = "";
    document.querySelector("#allProduct").append(head);
  } else {
    fromCartDataArr.map(function (el) {
      let divC = document.createElement("div");
      divC.setAttribute("id", "divC");
      let divS = document.createElement("div");
      divS.setAttribute("id", "divS");
      let divI = document.createElement("div");
      divI.setAttribute("id", "divI");
      let Image = document.createElement("img");
      Image.setAttribute("src", el.image);
      divI.append(Image);
      let divD = document.createElement("div");
      divD.setAttribute("id", "divD");
      let divBar1 = document.createElement("div");
      divBar1.setAttribute("id", "divBar1");
      let name = document.createElement("p");
      name.innerText = el.name;
      let remove = document.createElement("p");
      remove.innerText = "×";
      divBar1.append(name, remove);
      let divBar2 = document.createElement("div");
      divBar2.setAttribute("id", "divBar2");
      let divR = document.createElement("div");
      divR.setAttribute("id", "divR");
      let divMin = document.createElement("div");
      divMin.innerText = "-";
      let divCount = document.createElement("div");
      divCount.innerText = el.quantity;
      let divPlus = document.createElement("div");
      divPlus.innerText = "+";
      divR.append(divMin, divCount, divPlus);
      divPlus.setAttribute("class", "Plus");
      let priceSpan = document.createElement("span");
      priceSpan.innerText = el.price;
      let price = document.createElement("p");
      price.innerText = "Rs.";
      price.append(priceSpan);
      divBar2.append(divR, price);
      divD.append(divBar1, divBar2);
      divS.append(divI, divD);
      let under = document.createElement("HR");
      divC.append(divS, under);
      document.querySelector("#allProduct").append(divC);

      //Functionality for increasing number of products in fromCartDataArr as well as in cartData key of local Storage
      divPlus.addEventListener("click", plusFunc);
      function plusFunc(event) {
        el.quantity = el.quantity + 1;
        divCount.innerText = el.quantity;
        localStorage.setItem("cartData", JSON.stringify(fromCartDataArr));
        window.location.reload();
      }

      //Functionality for decreasing number of products in fromCartDataArr as well as in cartData key of local Storage
      divMin.addEventListener("click", minusFunc);
      function minusFunc(event) {
        if (el.quantity === 1) {
          event.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
          let x = el;
          let filt = fromCartDataArr.filter(function (elem) {
            return elem !== x;
          });
          localStorage.setItem("cartData", JSON.stringify(filt));
          fromCartDataArr = filt;
          window.location.reload();
        } else {
          el.quantity = el.quantity - 1;
          divCount.innerText = el.quantity;
          localStorage.setItem("cartData", JSON.stringify(fromCartDataArr));
          window.location.reload();
        }
      }

      //Functionality for removing products in fromCartDataArr as well as in cartData key of local Storage
      remove.addEventListener("click", removeFunc);
      function removeFunc(event) {
        event.target.parentNode.parentNode.parentNode.parentNode.remove();
        let y = el;
        let filt = fromCartDataArr.filter(function (elem) {
          return elem !== y;
        });
        localStorage.setItem("cartData", JSON.stringify(filt));
        fromCartDataArr = filt;
        window.location.reload();
      }
    });
  }
}
