let allProdArr=[
    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Vit-C-Moisturizer-A_-Listing-NEW_e75ddb63-7d9e-4e71-bb35-0e050969a6b1_360x.jpg?v=1654856343",
    Details:"Vitamin C Moisturizer With Kakadu Plum & Vitamin E| Fades Pigmentation & Dark Spots| Oily & Dry Skin| Wom...",
    Pricecrossed:"R̶s̶.̶5̶9̶5̶.̶0̶0̶",
    Priceshown: "Rs.565.01",
    Pricevalue:"565.01",
    Discount:"save 5%",
    Star:"fa fa-star rd"},

    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_360x.jpg?v=1649323852",
    Details:"CICA Niacinamide Night Gel With Green Tea, Tea Tree Oil & Hyaluronic| Reduces Acne & Dark Spots | Oily,...",
    Pricecrossed:"R̶s̶.̶5̶9̶5̶.̶0̶0̶",
    Priceshown: "Rs.565.01",
    Pricevalue:"565.01",
    Discount:"save 5%",
    Star:"fa fa-star rd"},

    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_9ceca45a-10b4-40ed-b077-28971a3c3775_360x.jpg?v=1649324721",
    Details:"72 HR Hydrating Probiotic Gel Moisturizer For Face With Hyaluronic & Rice Water|For...",
    Pricecrossed:"R̶s̶.̶ ̶7̶4̶5̶.̶0̶0̶",
    Priceshown: "Rs.670.05",
    Pricevalue:"670.05",
    Discount:"save 10%",
    Star:"fa fa-star rd",
    Starvacant:"fa fa-star checked"},

    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_0f431e19-6282-4e3c-8987-51859bf1275a_360x.jpg?v=1649327378",
    Details:"Retinol & Ceramide Age Defense Night Cream For Face| Treats Fine Lines & Wrinkles | Mature,...",
    Pricecrossed:"R̶s̶.̶ ̶9̶4̶5̶.̶0̶0̶",
    Priceshown: "Rs.850.02",
    Pricevalue:"850.02",
    Discount:"save 10%",
    Star:"fa fa-star rd",
    Starvacant:"fa fa-star checked"},

    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-10_360x.jpg?v=1646475087",
    Details:"Watermelon Super Glow Matte Face Cream With Glycolic | Minimizes Pores & Evens Skin Tone|...",
    Pricecrossed:"R̶s̶.̶5̶9̶5̶.̶0̶0̶",
    Priceshown: "Rs.565.00",
    Pricevalue:"565.00",
    Discount:"save 5%",
    Star:"fa fa-star rd"},

    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-18_360x.jpg?v=1644916747",
    Details:"AVOCADO SMOOTHIE DAY CREAM SPF 20",
    Pricecrossed:"R̶s̶.̶ ̶8̶4̶5̶.̶0̶0̶",
    Priceshown: "Rs.718.00",
    Pricevalue:"718.00",
    Discount:"save 15%",
    Star:"fa fa-star rd",
    Starvacant:"fa fa-star checked"},

    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/day-night_1800x1800_1_360x.png?v=1628595712",
    Details:"DAY & NIGHT CARE COMBO",
    Pricecrossed:"R̶s̶.̶ ̶1̶5̶9̶0̶.̶0̶0̶",
    Priceshown: "Rs.1,431.00",
    Pricevalue:"1,431.00",
    Discount:"save 10%",
    Star:"fa fa-star rd",
    Starvacant:"fa fa-star checked"},

    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-L_360x.jpg?v=1638974908",
    Details:"HAND CREAM + SANITIZER, LAVENDER",
    Pricecrossed:"",
    Priceshown: "Rs.395.00",
    Pricevalue:"395.00",
    Discount:"",
    Star:"fa fa-star rd",
    Starvacant:"fa fa-star checked"},

    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-Rose_360x.jpg?v=1644862602",
    Details:"HAND CREAM + SANITIZER, ROSE",
    Pricecrossed:"",
    Priceshown: "Rs.395.00",
    Pricevalue:"395.00",
    Discount:"",
    Star:"fa fa-star rd",
    Starvacant:"fa fa-star checked"},

    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-M_360x.jpg?v=1644916543",
    Details:"HAND CREAM + SANITIZER, MANDRAIN",
    Pricecrossed:"",
    Priceshown: "Rs.395.00",
    Pricevalue:"395.00",
    Discount:"",
    Star:"fa fa-star rd",
    Starvacant:"fa fa-star checked"}

];

displayProduct();

let curtArr=JSON.parse(localStorage.getItem("curtData")) || [];
let Total= Number(localStorage.getItem("totalPrice")) || 0;
function displayProduct() { 
        allProdArr.forEach(function(el,index){
        let divC=document.createElement("div");
        let prodImg=document.createElement("img");
        prodImg.setAttribute("src", el.Image);
        divC.append(prodImg);
        if(index===2||index===3||index===5||index===6||index===7||index===8||index===9) {
            for(let i=1; i<=5; i++) {
                if(i===5) {
                    let starIcon=document.createElement("span");
                    starIcon.setAttribute("class",el.Starvacant);
                    divC.append(starIcon);
                    break;
                }  
                let starIcon=document.createElement("span");
                starIcon.setAttribute("class",el.Star);
                divC.append(starIcon);  
            }
        } else if(index===0||index===1||index===4) {
            for(let i=1; i<=5; i++) {
                let starIcon=document.createElement("span");
                starIcon.setAttribute("class",el.Star);
                divC.append(starIcon);
            }
        }
        let icon=document.createElement("p");
        icon.innerText="♡";  
        divC.append(icon); 
        let prodDet=document.createElement("h4");
        prodDet.innerText=el.Details;
        let oldPrice=document.createElement("p");
        oldPrice.innerText=el.Pricecrossed;
        let recentPrice=document.createElement("p");
        recentPrice.innerText=el.Priceshown;
        let cart=document.createElement("button");
        cart.innerText="ADD TO CART";
        let discountPercent=document.createElement("div");
        discountPercent.innerText=el.Discount;
        divC.append(discountPercent);
        divC.append(prodDet,oldPrice,recentPrice,cart);
        document.querySelector("#allProd").append(divC);
        cart.addEventListener("click", curtFunc);
        function curtFunc(){
            curtArr.push(el);
            Total=Total+Number(el.Pricevalue);
            localStorage.setItem("totalPrice", Total); 
            localStorage.setItem("curtData", JSON.stringify(curtArr));     
        }
    })
    
}

