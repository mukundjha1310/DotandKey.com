let ProductTypes = document.querySelectorAll("#prodType>div");
for (let i = 0; i < ProductTypes.length; i++) {
  ProductTypes[i].addEventListener("click", function () {
    if (i == 0) {
      window.location.href = "BodyCare.html";
    } else if (i == 1) {
      window.location.href = "HairCare.html";
    } else if (i == 2) {
      window.location.href = "NUTRITION.html";
    } else if (i == 3) {
      window.location.href = "SERUM.html";
    } else if (i == 4) {
      window.location.href = "moisturizers.html";
    }
  });
}

//  <-------  First Image Banner  ------->

let imgArray1 = [
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Product_banner_Desktop_3.jpg?v=1651751278",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-Vit-C_5.jpg?v=1651751278",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Product_banner_Desktop_4.jpg?v=1651751278",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Desktop_1.jpg?v=1655189395",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1_desk_73e2615b-0026-447e-81af-fe6041105ce8.png?v=1653371967",
];

let Buttons = document.querySelectorAll("#slidImg>button");
let images = document.querySelector("#slidImg>img");
let btnArray1 = document.querySelectorAll("#slidBtn1>button");

let imgPosition = 0;
Buttons[0].addEventListener("click", function () {
  if (imgPosition === 0) {
    imgPosition = imgArray1.length - 1;
  } else {
    imgPosition--;
  }
  images.src = imgArray1[imgPosition];

  for (let j = 0; j < btnArray1.length; j++) {
    if (imgPosition == j) {
      btnArray1[j].style.backgroundColor = "grey";
    } else {
      btnArray1[j].style.backgroundColor = "white";
    }
  }
});

Buttons[1].addEventListener("click", function () {
  if (imgPosition === imgArray1.length - 1) {
    imgPosition = 0;
  } else {
    imgPosition++;
  }
  images.src = imgArray1[imgPosition];
  for (let j = 0; j < btnArray1.length; j++) {
    if (imgPosition == j) {
      btnArray1[j].style.backgroundColor = "grey";
    } else {
      btnArray1[j].style.backgroundColor = "white";
    }
  }
});

setInterval(function () {
  if (imgPosition == imgArray1.length - 1) {
    imgPosition = 0;
  } else {
    imgPosition++;
  }
  images.src = imgArray1[imgPosition];
  for (let j = 0; j < btnArray1.length; j++) {
    if (imgPosition == j) {
      btnArray1[j].style.backgroundColor = "grey";
    } else {
      btnArray1[j].style.backgroundColor = "white";
    }
  }
}, 2500);

//   <-------------     Redirected pages   ----------->

images.addEventListener("click", function () {
  if (images.src === imgArray1[0]) {
    window.location.href = "CICA.html";
  } else if (images.src === imgArray1[1]) {
    window.location.href = "VitaminC.html";
  } else if (images.src === imgArray1[2]) {
    window.location.href = "Retinol_Ceramide.html";
  } else if (images.src === imgArray1[3]) {
    window.location.href = "Cica_Sunscreen.html";
  } else if (images.src === imgArray1[4]) {
    window.location.href = "VitaminCserum.html";
  }
});

//      <---------------------------------------------->

btnArray1[0].style.backgroundColor = "grey";
for (let i = 0; i < btnArray1.length; i++) {
  btnArray1[i].addEventListener("click", changeImgFunc);
  function changeImgFunc() {
    images.src = imgArray1[i];
    for (let j = 0; j < btnArray1.length; j++) {
      if (i == j) {
        btnArray1[j].style.backgroundColor = "grey";
      } else {
        btnArray1[j].style.backgroundColor = "white";
      }
    }
  }
}

//  <-------  Second Image Banner  ------->

let imgArray2 = [
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/BBB_Up_sale_Sale_Desktop_BannerArtboard_2_1.jpg?v=1655305233",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/BBB_Up_sale_Sale_Desktop_BannerArtboard_1_1.jpg?v=1655305234",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/BBB_Up_sale_Sale_Desktop_BannerArtboard_3_01955627-fe6f-4350-9906-4d45589ba915.jpg?v=1655491322",
];

let images2 = document.querySelector("#lovedImg>img");
let btnArray2 = document.querySelectorAll("#slidBtn2>button");
btnArray2[0].style.backgroundColor = "grey";
for (let i = 0; i < btnArray2.length; i++) {
  btnArray2[i].addEventListener("click", changeImgFunc);
  function changeImgFunc() {
    images2.src = imgArray2[i];
    for (let j = 0; j < btnArray2.length; j++) {
      if (i == j) {
        btnArray2[j].style.backgroundColor = "grey";
      } else {
        btnArray2[j].style.backgroundColor = "white";
      }
    }
  }
}

//   <-------------     Redirected pages   ----------->

document.querySelector("#lovedImg").addEventListener("click", function () {
  window.location.href = "BirthdaySale.html";
});

//      <---------------------------------------------->

//  <-------  Cares Category  ------->

let Cares = document.querySelectorAll("#cares>div");

for (let i = 0; i < Cares.length; i++) {
  Cares[i].addEventListener("click", showCaresFunc);
  function showCaresFunc() {
    for (let j = 0; j < Cares.length; j++) {
      if (i == j) {
        Cares[j].style.color = "rgb(255, 95, 175)";
      } else {
        Cares[j].style.color = "rgb(88, 88, 88)";
      }
    }
  }
}

//  <-------  Best sellers Skin Care Cards  ------->

let careButtons = document.querySelectorAll("#careCard>button");

let careCard1_Img = document.querySelector("#careCard>div:nth-child(1)>img");
let careCard1_Name = document.querySelector("#careCard>div:nth-child(1)>div+p");
let careCard1_oldPrice = document.querySelector(
  "#careCard>div:nth-child(1)>p+p>span:nth-child(1)"
);
let careCard1_newPrice = document.querySelector(
  "#careCard>div:nth-child(1)>p+p>span:nth-child(2)"
);

let careCard2_Img = document.querySelector("#careCard>div:nth-child(2)>img");
let careCard2_Name = document.querySelector("#careCard>div:nth-child(2)>div+p");
let careCard2_oldPrice = document.querySelector(
  "#careCard>div:nth-child(2)>p+p>span:nth-child(1)"
);
let careCard2_newPrice = document.querySelector(
  "#careCard>div:nth-child(2)>p+p>span:nth-child(2)"
);

let careCard3_Img = document.querySelector("#careCard>div:nth-child(3)>img");
let careCard3_Name = document.querySelector("#careCard>div:nth-child(3)>div+p");
let careCard3_oldPrice = document.querySelector(
  "#careCard>div:nth-child(3)>p+p>span:nth-child(1)"
);
let careCard3_newPrice = document.querySelector(
  "#careCard>div:nth-child(3)>p+p>span:nth-child(2)"
);

let skinCardArray1 = [
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/VITCMOIST.jpg?v=1655302755",
    Name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
    oldPrice: "595.00",
    newPrice: "499.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS.jpg?v=1655302709",
    Name: "72 HR Hydrating Probiotic Gel Moisturizer For Fa...",
    oldPrice: "745.00",
    newPrice: "596.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICANIGHTGEL_3.jpg?v=1655379818",
    Name: "CICA Niacinamide Night Gel With Green Tea, Tea Tr...",
    oldPrice: "595.00",
    newPrice: "506.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-GreenClayListing_1.jpg?v=1649655908",
    Name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
    oldPrice: "695.00",
    newPrice: "487.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_e423c2c9-3a60-4a5e-9bc0-b0526b7f3c01.jpg?v=1655302612",
    Name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
    oldPrice: "945.00",
    newPrice: "662.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASK.jpg?v=1655311025",
    Name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
    oldPrice: "445.00",
    newPrice: "356.00",
  },
];

let skinCardArray2 = [
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS.jpg?v=1655302709",
    Name: "72 HR Hydrating Probiotic Gel Moisturizer For Fa...",
    oldPrice: "745.00",
    newPrice: "596.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICANIGHTGEL_3.jpg?v=1655379818",
    Name: "CICA Niacinamide Night Gel With Green Tea, Tea Tr...",
    oldPrice: "595.00",
    newPrice: "506.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-GreenClayListing_1.jpg?v=1649655908",
    Name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
    oldPrice: "695.00",
    newPrice: "487.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_e423c2c9-3a60-4a5e-9bc0-b0526b7f3c01.jpg?v=1655302612",
    Name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
    oldPrice: "945.00",
    newPrice: "662.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASK.jpg?v=1655311025",
    Name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
    oldPrice: "445.00",
    newPrice: "356.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/VITCMOIST.jpg?v=1655302755",
    Name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
    oldPrice: "595.00",
    newPrice: "499.00",
  },
];

let skinCardArray3 = [
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICANIGHTGEL_3.jpg?v=1655379818",
    Name: "CICA Niacinamide Night Gel With Green Tea, Tea Tr...",
    oldPrice: "595.00",
    newPrice: "506.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-GreenClayListing_1.jpg?v=1649655908",
    Name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
    oldPrice: "695.00",
    newPrice: "487.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_e423c2c9-3a60-4a5e-9bc0-b0526b7f3c01.jpg?v=1655302612",
    Name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
    oldPrice: "945.00",
    newPrice: "662.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASK.jpg?v=1655311025",
    Name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
    oldPrice: "445.00",
    newPrice: "356.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/VITCMOIST.jpg?v=1655302755",
    Name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
    oldPrice: "595.00",
    newPrice: "499.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS.jpg?v=1655302709",
    Name: "72 HR Hydrating Probiotic Gel Moisturizer For Fa...",
    oldPrice: "745.00",
    newPrice: "596.00",
  },
];

let careCardPlace1 = 0;
careButtons[0].addEventListener("click", function () {
  if (careCardPlace1 == skinCardArray1.length - 1) {
    careCardPlace1 = 0;
  } else {
    careCardPlace1++;
  }
  careCard1_Img.src = skinCardArray1[careCardPlace1].Img;
  careCard1_Name.innerText = skinCardArray1[careCardPlace1].Name;
  careCard1_oldPrice.innerText = skinCardArray1[careCardPlace1].oldPrice;
  careCard1_newPrice.innerText = skinCardArray1[careCardPlace1].newPrice;
});
careButtons[1].addEventListener("click", function () {
  if (careCardPlace1 == 0) {
    careCardPlace1 = skinCardArray1.length - 1;
  } else {
    careCardPlace1--;
  }
  careCard1_Img.src = skinCardArray1[careCardPlace1].Img;
  careCard1_Name.innerText = skinCardArray1[careCardPlace1].Name;
  careCard1_oldPrice.innerText = skinCardArray1[careCardPlace1].oldPrice;
  careCard1_newPrice.innerText = skinCardArray1[careCardPlace1].newPrice;
});

let careCardPlace2 = 0;
careButtons[0].addEventListener("click", function () {
  if (careCardPlace2 == skinCardArray2.length - 1) {
    careCardPlace2 = 0;
  } else {
    careCardPlace2++;
  }
  careCard2_Img.src = skinCardArray2[careCardPlace2].Img;
  careCard2_Name.innerText = skinCardArray2[careCardPlace2].Name;
  careCard2_oldPrice.innerText = skinCardArray2[careCardPlace2].oldPrice;
  careCard2_newPrice.innerText = skinCardArray2[careCardPlace2].newPrice;
});
careButtons[1].addEventListener("click", function () {
  if (careCardPlace2 == 0) {
    careCardPlace2 = skinCardArray2.length - 1;
  } else {
    careCardPlace2--;
  }
  careCard2_Img.src = skinCardArray2[careCardPlace2].Img;
  careCard2_Name.innerText = skinCardArray2[careCardPlace2].Name;
  careCard2_oldPrice.innerText = skinCardArray2[careCardPlace2].oldPrice;
  careCard2_newPrice.innerText = skinCardArray2[careCardPlace2].newPrice;
});

let careCardPlace3 = 0;
careButtons[0].addEventListener("click", function () {
  if (careCardPlace3 == skinCardArray3.length - 1) {
    careCardPlace3 = 0;
  } else {
    careCardPlace3++;
  }
  careCard3_Img.src = skinCardArray3[careCardPlace3].Img;
  careCard3_Name.innerText = skinCardArray3[careCardPlace3].Name;
  careCard3_oldPrice.innerText = skinCardArray3[careCardPlace3].oldPrice;
  careCard3_newPrice.innerText = skinCardArray3[careCardPlace3].newPrice;
});
careButtons[1].addEventListener("click", function () {
  if (careCardPlace3 == 0) {
    careCardPlace3 = skinCardArray3.length - 1;
  } else {
    careCardPlace3--;
  }
  careCard3_Img.src = skinCardArray3[careCardPlace3].Img;
  careCard3_Name.innerText = skinCardArray3[careCardPlace3].Name;
  careCard3_oldPrice.innerText = skinCardArray3[careCardPlace3].oldPrice;
  careCard3_newPrice.innerText = skinCardArray3[careCardPlace3].newPrice;
});

//  <-----------  Best sellers Body Care Cards  ----------->

let bodyCardArray1 = [
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LEMONSCRUB.jpg?v=1655303198",
    Name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
    oldPrice: "595.00",
    newPrice: "499.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-13.jpg?v=1646477177",
    Name: "72 HR Hydrating Probiotic Gel Moisturizer For Fa...",
    oldPrice: "745.00",
    newPrice: "596.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-11_1_1.jpg?v=1655310547",
    Name: "CICA Niacinamide Night Gel With Green Tea, Tea Tr...",
    oldPrice: "595.00",
    newPrice: "506.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/ROSELOTION.jpg?v=1655303248",
    Name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
    oldPrice: "695.00",
    newPrice: "487.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LEMONYOGURT.jpg?v=1655303219",
    Name: "Vitamin C Moisturizer With Kakadu Plum & Vitamin E",
    oldPrice: "945.00",
    newPrice: "662.00",
  },
];

//     <------------  New Arrivals Cards  -------------->

let newArriButtons = document.querySelectorAll("#newArriCard>button");

let newArriCard1_Img = document.querySelector(
  "#newArriCard>div:nth-child(1)>img"
);
let newArriCard1_Name = document.querySelector(
  "#newArriCard>div:nth-child(1)>div+p"
);
let newArriCard1_oldPrice = document.querySelector(
  "#newArriCard>div:nth-child(1)>p+p>span:nth-child(1)"
);
let newArriCard1_newPrice = document.querySelector(
  "#newArriCard>div:nth-child(1)>p+p>span:nth-child(2)"
);

let newArriCard2_Img = document.querySelector(
  "#newArriCard>div:nth-child(2)>img"
);
let newArriCard2_Name = document.querySelector(
  "#newArriCard>div:nth-child(2)>div+p"
);
let newArriCard2_oldPrice = document.querySelector(
  "#newArriCard>div:nth-child(2)>p+p>span:nth-child(1)"
);
let newArriCard2_newPrice = document.querySelector(
  "#newArriCard>div:nth-child(2)>p+p>span:nth-child(2)"
);

let newArriCard3_Img = document.querySelector(
  "#newArriCard>div:nth-child(3)>img"
);
let newArriCard3_Name = document.querySelector(
  "#newArriCard>div:nth-child(3)>div+p"
);
let newArriCard3_oldPrice = document.querySelector(
  "#newArriCard>div:nth-child(3)>p+p>span:nth-child(1)"
);
let newArriCard3_newPrice = document.querySelector(
  "#newArriCard>div:nth-child(3)>p+p>span:nth-child(2)"
);

let newArriArray1 = [
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/prbox.jpg?v=1655304058",
    Name: "Big Birthday Special Skincare Kit",
    oldPrice: "2699.00",
    newPrice: "1999.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICASUNSCREEN.jpg?v=1655303963",
    Name: "Cica + Niacinamide Face Sunscreen SPF 50 PA+++",
    oldPrice: "595.00",
    newPrice: "494.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20_VITC.jpg?v=1655379925",
    Name: "20% Vitamin C Serum with Blood Orange",
    oldPrice: "665.00",
    newPrice: "532.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERTONER.jpg?v=1655304005",
    Name: "Watermelon Skin Glow Face Toner With Glycolic + Lactic",
    oldPrice: "395.00",
    newPrice: "316.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/ACNEBUSTING_720x.jpg?v=1655370921",
    Name: "2% Salicylic Face Serum With Tea Tree Oil & Zinc",
    oldPrice: "655.00",
    newPrice: "499.00",
  },
];
let newArriArray2 = [
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICASUNSCREEN.jpg?v=1655303963",
    Name: "Cica + Niacinamide Face Sunscreen SPF 50 PA+++",
    oldPrice: "595.00",
    newPrice: "494.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20_VITC.jpg?v=1655379925",
    Name: "20% Vitamin C Serum with Blood Orange",
    oldPrice: "665.00",
    newPrice: "532.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERTONER.jpg?v=1655304005",
    Name: "Watermelon Skin Glow Face Toner With Glycolic + Lactic",
    oldPrice: "395.00",
    newPrice: "316.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/ACNEBUSTING_720x.jpg?v=1655370921",
    Name: "2% Salicylic Face Serum With Tea Tree Oil & Zinc",
    oldPrice: "655.00",
    newPrice: "499.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/prbox.jpg?v=1655304058",
    Name: "Big Birthday Special Skincare Kit",
    oldPrice: "2699.00",
    newPrice: "1999.00",
  },
];
let newArriArray3 = [
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20_VITC.jpg?v=1655379925",
    Name: "20% Vitamin C Serum with Blood Orange",
    oldPrice: "665.00",
    newPrice: "532.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERTONER.jpg?v=1655304005",
    Name: "Watermelon Skin Glow Face Toner With Glycolic + Lactic",
    oldPrice: "395.00",
    newPrice: "316.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/ACNEBUSTING_720x.jpg?v=1655370921",
    Name: "2% Salicylic Face Serum With Tea Tree Oil & Zinc",
    oldPrice: "655.00",
    newPrice: "499.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/prbox.jpg?v=1655304058",
    Name: "Big Birthday Special Skincare Kit",
    oldPrice: "2699.00",
    newPrice: "1999.00",
  },
  {
    Img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICASUNSCREEN.jpg?v=1655303963",
    Name: "Cica + Niacinamide Face Sunscreen SPF 50 PA+++",
    oldPrice: "595.00",
    newPrice: "494.00",
  },
];

let newArriCardPlace1 = 0;
newArriButtons[0].addEventListener("click", function () {
  if (newArriCardPlace1 == newArriArray1.length - 1) {
    newArriCardPlace1 = 0;
  } else {
    newArriCardPlace1++;
  }
  newArriCard1_Img.src = newArriArray1[newArriCardPlace1].Img;
  newArriCard1_Name.innerText = newArriArray1[newArriCardPlace1].Name;
  newArriCard1_oldPrice.innerText = newArriArray1[newArriCardPlace1].oldPrice;
  newArriCard1_newPrice.innerText = newArriArray1[newArriCardPlace1].newPrice;
});
newArriButtons[1].addEventListener("click", function () {
  if (newArriCardPlace1 == 0) {
    newArriCardPlace1 = newArriArray1.length - 1;
  } else {
    newArriCardPlace1--;
  }
  newArriCard1_Img.src = newArriArray1[newArriCardPlace1].Img;
  newArriCard1_Name.innerText = newArriArray1[newArriCardPlace1].Name;
  newArriCard1_oldPrice.innerText = newArriArray1[newArriCardPlace1].oldPrice;
  newArriCard1_newPrice.innerText = newArriArray1[newArriCardPlace1].newPrice;
});

let newArriCardPlace2 = 0;
newArriButtons[0].addEventListener("click", function () {
  if (newArriCardPlace2 == newArriArray2.length - 1) {
    newArriCardPlace2 = 0;
  } else {
    newArriCardPlace2++;
  }
  newArriCard2_Img.src = newArriArray2[newArriCardPlace2].Img;
  newArriCard2_Name.innerText = newArriArray2[newArriCardPlace2].Name;
  newArriCard2_oldPrice.innerText = newArriArray2[newArriCardPlace2].oldPrice;
  newArriCard2_newPrice.innerText = newArriArray2[newArriCardPlace2].newPrice;
});
newArriButtons[1].addEventListener("click", function () {
  if (newArriCardPlace2 == 0) {
    newArriCardPlace2 = newArriArray2.length - 1;
  } else {
    newArriCardPlace2--;
  }
  newArriCard2_Img.src = newArriArray2[newArriCardPlace2].Img;
  newArriCard2_Name.innerText = newArriArray2[newArriCardPlace2].Name;
  newArriCard2_oldPrice.innerText = newArriArray2[newArriCardPlace2].oldPrice;
  newArriCard2_newPrice.innerText = newArriArray2[newArriCardPlace2].newPrice;
});

let newArriCardPlace3 = 0;
newArriButtons[0].addEventListener("click", function () {
  if (newArriCardPlace3 == newArriArray3.length - 1) {
    newArriCardPlace3 = 0;
  } else {
    newArriCardPlace3++;
  }
  newArriCard3_Img.src = newArriArray3[newArriCardPlace3].Img;
  newArriCard3_Name.innerText = newArriArray3[newArriCardPlace3].Name;
  newArriCard3_oldPrice.innerText = newArriArray3[newArriCardPlace3].oldPrice;
  newArriCard3_newPrice.innerText = newArriArray3[newArriCardPlace3].newPrice;
});
newArriButtons[1].addEventListener("click", function () {
  if (newArriCardPlace3 == 0) {
    newArriCardPlace3 = newArriArray3.length - 1;
  } else {
    newArriCardPlace3--;
  }
  newArriCard3_Img.src = newArriArray3[newArriCardPlace3].Img;
  newArriCard3_Name.innerText = newArriArray3[newArriCardPlace3].Name;
  newArriCard3_oldPrice.innerText = newArriArray3[newArriCardPlace3].oldPrice;
  newArriCard3_newPrice.innerText = newArriArray3[newArriCardPlace3].newPrice;
});

//     <------------  Ingredients Cards  -------------->

let ingredientsButtons = document.querySelectorAll("#ingredientsCard>button");

let ingredientsCard1_Img = document.querySelector(
  "#ingredientsCard>div:nth-child(1)>img"
);

let ingredientsCard2_Img = document.querySelector(
  "#ingredientsCard>div:nth-child(2)>img"
);

let ingredientsCard3_Img = document.querySelector(
  "#ingredientsCard>div:nth-child(3)>img"
);

let ingredientsImgArray1 = [
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4E-Ingredient_9f9c8a93-1d51-499f-bb3f-c285b0c6345a.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4B3-Ingredient_3.png?v=1655367223",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4D-Ingredient_2c86db10-ce47-4ff7-9792-2ebf0192e29e.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4C-Ingredient_142737df-d244-4493-baaa-5395de309f36.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4A-Ingredient_42a381db-522d-4386-9d1d-64f1a985b92b.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4F-Ingredient_73eaecaf-da67-4a0a-8884-ab3215f5d1ce.jpg?v=1655367539",
];
let ingredientsImgArray2 = [
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4B3-Ingredient_3.png?v=1655367223",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4D-Ingredient_2c86db10-ce47-4ff7-9792-2ebf0192e29e.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4C-Ingredient_142737df-d244-4493-baaa-5395de309f36.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4A-Ingredient_42a381db-522d-4386-9d1d-64f1a985b92b.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4F-Ingredient_73eaecaf-da67-4a0a-8884-ab3215f5d1ce.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4E-Ingredient_9f9c8a93-1d51-499f-bb3f-c285b0c6345a.jpg?v=1655367539",
];
let ingredientsImgArray3 = [
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4D-Ingredient_2c86db10-ce47-4ff7-9792-2ebf0192e29e.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4C-Ingredient_142737df-d244-4493-baaa-5395de309f36.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4A-Ingredient_42a381db-522d-4386-9d1d-64f1a985b92b.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4F-Ingredient_73eaecaf-da67-4a0a-8884-ab3215f5d1ce.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4E-Ingredient_9f9c8a93-1d51-499f-bb3f-c285b0c6345a.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4B3-Ingredient_3.png?v=1655367223",
];

let ingredientsCardPlace1 = 0;
ingredientsButtons[0].addEventListener("click", function () {
  if (ingredientsCardPlace1 == ingredientsImgArray1.length - 1) {
    ingredientsCardPlace1 = 0;
  } else {
    ingredientsCardPlace1++;
  }
  ingredientsCard1_Img.src = ingredientsImgArray1[ingredientsCardPlace1];
});
ingredientsButtons[1].addEventListener("click", function () {
  if (ingredientsCardPlace1 == 0) {
    ingredientsCardPlace1 = ingredientsImgArray1.length - 1;
  } else {
    ingredientsCardPlace1--;
  }
  ingredientsCard1_Img.src = ingredientsImgArray1[ingredientsCardPlace1];
});

let ingredientsCardPlace2 = 0;
ingredientsButtons[0].addEventListener("click", function () {
  if (ingredientsCardPlace2 == ingredientsImgArray2.length - 1) {
    ingredientsCardPlace2 = 0;
  } else {
    ingredientsCardPlace2++;
  }
  ingredientsCard2_Img.src = ingredientsImgArray2[ingredientsCardPlace2];
});
ingredientsButtons[1].addEventListener("click", function () {
  if (ingredientsCardPlace2 == 0) {
    ingredientsCardPlace2 = ingredientsImgArray2.length - 1;
  } else {
    ingredientsCardPlace2--;
  }
  ingredientsCard2_Img.src = ingredientsImgArray2[ingredientsCardPlace2];
});

let ingredientsCardPlace3 = 0;
ingredientsButtons[0].addEventListener("click", function () {
  if (ingredientsCardPlace3 == ingredientsImgArray3.length - 1) {
    ingredientsCardPlace3 = 0;
  } else {
    ingredientsCardPlace3++;
  }
  ingredientsCard3_Img.src = ingredientsImgArray3[ingredientsCardPlace3];
});
ingredientsButtons[1].addEventListener("click", function () {
  if (ingredientsCardPlace3 == 0) {
    ingredientsCardPlace3 = ingredientsImgArray3.length - 1;
  } else {
    ingredientsCardPlace3--;
  }
  ingredientsCard3_Img.src = ingredientsImgArray3[ingredientsCardPlace3];
});

//     <------------  Skincare Guide Cards  -------------->

let guideButtons = document.querySelectorAll("#guideCard>button");

let guideCard1_Img = document.querySelector("#guideCard>div:nth-child(1)>img");

let guideCard2_Img = document.querySelector("#guideCard>div:nth-child(2)>img");

let guideCard3_Img = document.querySelector("#guideCard>div:nth-child(3)>img");

let guideImgArray1 = [
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/serum.jpg?v=1652438356",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/glow_3.jpg?v=1652438348",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/moist.jpg?v=1652438356",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/acne_3_7d4b5389-228e-42ce-9008-0454cff9e3d2.jpg?v=1652438447",
];
let guideImgArray2 = [
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/glow_3.jpg?v=1652438348",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/moist.jpg?v=1652438356",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/acne_3_7d4b5389-228e-42ce-9008-0454cff9e3d2.jpg?v=1652438447",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/serum.jpg?v=1652438356",
];
let guideImgArray3 = [
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/moist.jpg?v=1652438356",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/acne_3_7d4b5389-228e-42ce-9008-0454cff9e3d2.jpg?v=1652438447",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/serum.jpg?v=1652438356",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/glow_3.jpg?v=1652438348",
];

let guideCardPlace1 = 0;
guideButtons[0].addEventListener("click", function () {
  if (guideCardPlace1 == guideImgArray1.length - 1) {
    guideCardPlace1 = 0;
  } else {
    guideCardPlace1++;
  }
  guideCard1_Img.src = guideImgArray1[guideCardPlace1];
});
guideButtons[1].addEventListener("click", function () {
  if (guideCardPlace1 == 0) {
    guideCardPlace1 = guideImgArray1.length - 1;
  } else {
    guideCardPlace1--;
  }
  guideCard1_Img.src = guideImgArray1[guideCardPlace1];
});

let guideCardPlace2 = 0;
guideButtons[0].addEventListener("click", function () {
  if (guideCardPlace2 == guideImgArray2.length - 1) {
    guideCardPlace2 = 0;
  } else {
    guideCardPlace2++;
  }
  guideCard2_Img.src = guideImgArray2[guideCardPlace2];
});
guideButtons[1].addEventListener("click", function () {
  if (guideCardPlace2 == 0) {
    guideCardPlace2 = guideImgArray2.length - 1;
  } else {
    guideCardPlace2--;
  }
  guideCard2_Img.src = guideImgArray2[guideCardPlace2];
});

let guideCardPlace3 = 0;
guideButtons[0].addEventListener("click", function () {
  if (guideCardPlace3 == guideImgArray3.length - 1) {
    guideCardPlace3 = 0;
  } else {
    guideCardPlace3++;
  }
  guideCard3_Img.src = guideImgArray3[guideCardPlace3];
});
guideButtons[1].addEventListener("click", function () {
  if (guideCardPlace3 == 0) {
    guideCardPlace3 = guideImgArray3.length - 1;
  } else {
    guideCardPlace3--;
  }
  guideCard3_Img.src = guideImgArray3[guideCardPlace3];
});

//Adding Products to the cartData key of loacl storage
let addToCartBtn = document.querySelectorAll(".addToCart");
let items = [];
for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener("click", function (event) {
    let item = {
      id: "index" + (i + 1),
      image: event.target.parentElement.children[0].src,
      name: event.target.parentElement.children[2].innerText,
      price: event.target.parentElement.children[3].children[1].innerText,
      quantity: 1,
    };
    if (JSON.parse(localStorage.getItem("cartData")) === null) {
      items.push(item);
      localStorage.setItem("cartData", JSON.stringify(items));
      window.location.reload();
    } else {
      let localItems = JSON.parse(localStorage.getItem("cartData"));
      localItems.map((data) => {
        if (item.id === data.id) {
          item.quantity = data.quantity + 1;
        } else {
          items.push(data);
        }
      });
      items.push(item);
      localStorage.setItem("cartData", JSON.stringify(items));
      window.location.reload();
    }
  });
}
