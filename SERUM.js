let serumdata=[
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20_VITC_360x.jpg?v=1655379925" ,
        info:"20% VITAMIN C SERUM WITH BLOOD ORANGE|FOR SKIN GLOW|FADES PIGMENTATION & DARK SPOTS" ,
        oldprice:"Rs: 800.00",
        price:"Rs: 680.00",
        },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/NIACINAMIDE_6ffa90b5-94d9-4ecc-bff1-c4c113fe47b5_360x.jpg?v=1655311005",
     info:"10% NIACINAMIDE FACE SERUM WITH ZINC & ANTIOXIDANTS| TREATS ACNE,DARK SPOTS& ACNE SCARES|WOMEN & MEN",
     oldprice:"Rs: 700.00",
    price:"Rs: 598.00",
        },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/ACNEBUSTING_360x.jpg?v=1655370921",
     info:"RETINOL TIME REVERSE FACE SERUM",
     oldprice:"Rs: 900.00",
    price:"Rs: 715.00", 
         },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/retinolserum_6d24c355-84a6-42bf-b4a4-bcf30318f39a_360x.jpg?v=1655311178",
     info:"HYALURONIC + CEREMIDE HYDRATING",
     oldprice:"Rs: 790.00",
    price:"Rs: 598.00", 
        },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/VITCSERUM_360x.jpg?v=1655311150",
     info:"VITAMIN C++ GLOW FACE SERUM WITH KAKADU PLUM|FOR SKIN",
     oldprice:"Rs: 1022.00",
    price:"Rs: 715.00",
      },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/ha_9b347964-36a7-412d-9d09-bb59e71561c5_360x.jpg?v=1655310900",
     info:"10% AHA +2% BHA EXFOLIATING GLOW HYDRO PEEL",
     oldprice:"Rs: 769.00",
    price:"Rs: 565.00",
        },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/hpgp_80b9ffae-6c52-41f4-ace4-54e30f701a30_360x.jpg?v=1655311040",
     info:"ALPHA ARBUTIN + AZELAIC BIPHASIC RADIANCE SERUM ",
     oldprice:"Rs: 790.00",
    price:"Rs: 590.00",
      },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/gloes_360x.jpg?v=1655303583",
     info:"PHA + BAKUCHIOL DAILY PEEL SERUM",
     oldprice:"Rs: 750.00",
    price:"Rs: 600.00",
      },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/alpha_2d5537db-5f5e-4e89-b23f-2465c39fafac_360x.jpg?v=1655303449",
     info:"2% SALICYLIC FACE SERUM WITH TEA TREE OIL & ZINC | TREATES ACNE",
     oldprice:"Rs: 690.00",
    price:"Rs: 500.00", 
       },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_2_360x.jpg?v=1644862670",
     info:"GLOW ELIXIR FACE OIL",
     oldprice:"Rs: 700.00",
    price:"Rs: 540.00",
     },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/baku_360x.jpg?v=1655303484",
     info:"30% AHA +2% BHA GLOW ACCELERATOR PEEL",
     oldprice:"Rs: 800.00",
    price:"Rs: 698.00",
     },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_1_360x.jpg?v=1644916657",
     info:"SUPERFOODS NOURISHING FACE OIL",
     oldprice:"Rs: 789.00",
    price:"Rs: 520.00",
       },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/SkinAwakening_360x.jpg?v=1610017602",
     info:"AGE DEFENCE + GLOW NIGHT SERUM",
     oldprice:"Rs: 639.00",
    price:"Rs: 400.00",
      },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_11_360x.webp?v=1644493946",
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
   window.location.href="./serumLS/serumLS.html"
    }