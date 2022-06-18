let serumdata=[
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_e13fe0e4-6313-45f1-b5f6-fe829a4c5dec_360x.jpg?v=1650465566" ,
        info:"20% VITAMIN C SERUM WITH BLOOD ORANGE|FOR SKIN GLOW|FADES PIGMENTATION & DARK SPOTS" ,
        oldprice:"Rs: 800.00",
        price:"Rs: 680.00",
        },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_3057d434-6349-42b8-aefe-1673c8d24265_360x.jpg?v=1649327316",
     info:"10% NIACINAMIDE FACE SERUM WITH ZINC & ANTIOXIDANTS| TREATS ACNE,DARK SPOTS& ACNE SCARES|WOMEN & MEN",
     oldprice:"Rs: 700.00",
    price:"Rs: 598.00",
        },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-7_2_360x.jpg?v=1646476789",
     info:"RETINOL TIME REVERSE FACE SERUM",
     oldprice:"Rs: 900.00",
    price:"Rs: 715.00", 
         },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_4_7a306ce8-6ac4-4704-9284-aa5264e20546_360x.jpg?v=1646476826",
     info:"HYALURONIC + CEREMIDE HYDRATING",
     oldprice:"Rs: 790.00",
    price:"Rs: 598.00", 
        },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_32f28fd1-371e-4840-b4a1-216f31a43318_360x.jpg?v=1649328433",
     info:"VITAMIN C++ GLOW FACE SERUM WITH KAKADU PLUM|FOR SKIN",
     oldprice:"Rs: 1022.00",
    price:"Rs: 715.00",
      },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_3_360x.jpg?v=1646477545",
     info:"10% AHA +2% BHA EXFOLIATING GLOW HYDRO PEEL",
     oldprice:"Rs: 769.00",
    price:"Rs: 565.00",
        },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_4_763d27a2-de17-476f-9058-0891cd25b094_360x.jpg?v=1646476808",
     info:"ALPHA ARBUTIN + AZELAIC BIPHASIC RADIANCE SERUM ",
     oldprice:"Rs: 790.00",
    price:"Rs: 590.00",
      },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_2_ff47654b-ba0b-43c5-ac01-7888e451d4e7_360x.jpg?v=1646476750",
     info:"PHA + BAKUCHIOL DAILY PEEL SERUM",
     oldprice:"Rs: 750.00",
    price:"Rs: 600.00",
      },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_2_360x.jpg?v=1644862670",
     info:"2% SALICYLIC FACE SERUM WITH TEA TREE OIL & ZINC | TREATES ACNE",
     oldprice:"Rs: 690.00",
    price:"Rs: 500.00", 
       },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_4_ae587533-265c-4e47-84bf-81c14bbc6539_360x.jpg?v=1646476775",
     info:"GLOW ELIXIR FACE OIL",
     oldprice:"Rs: 700.00",
    price:"Rs: 540.00",
     },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_1_360x.jpg?v=1644916657",
     info:"30% AHA +2% BHA GLOW ACCELERATOR PEEL",
     oldprice:"Rs: 800.00",
    price:"Rs: 698.00",
     },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/SkinAwakening_360x.jpg?v=1610017602",
     info:"SUPERFOODS NOURISHING FACE OIL",
     oldprice:"Rs: 789.00",
    price:"Rs: 520.00",
       },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_11_360x.webp?v=1644493946",
     info:"AGE DEFENCE + GLOW NIGHT SERUM",
     oldprice:"Rs: 639.00",
    price:"Rs: 400.00",
      },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_3_360x.jpg?v=1646476857",
     info:"MOISTURIZING SERUM",
     oldprice:"Rs: 780.00",
    price:"Rs: 500.00",
       },
    ]

  // let data=JSON.parse(localStorage.getItem("serumdata"))||[]

  displayproduct(serumdata)

function  displayproduct(serumdata)
{
    serumdata.forEach(function(ele){
        let box=document.createElement("div")
         
        box.addEventListener("click",function(){
          serumpage(ele);
    })

        let image=document.createElement("img")
        image.setAttribute("src",ele.img)
        let Info=document.createElement("p")
        Info.setAttribute("class", "para");
        Info.innerText=ele.info;
        let pricediv=document.createElement("div")
        pricediv.setAttribute("id","pricediv")
        let oldprice=document.createElement("p")
        oldprice.innerText=ele.oldprice
        oldprice.style.textDecoration="line-through"
        oldprice.style.color="grey"
        let price=document.createElement("p")
        price.innerText=ele.price;
        let button= document.createElement("button")
        button.innerText="ADD TO CART"
        button.setAttribute("class","addToCart")
         

        // starbox.append(star)
        pricediv.append(oldprice,price)
        box.append(image,Info,pricediv,button);
        
        document.querySelector("#middle").append(box)

    })
    
}

function serumpage(ele)
    {
   localStorage.setItem("serumdata",JSON.stringify(ele))
   window.location.href="../serumLS/serum.html"
    }