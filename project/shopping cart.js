// Selling product list
// const products=[
//     {id:
//     Name:
//     price:
//     Description:
//     img:}
// ]
const products=[
    {name:"Addidas Shoes",Price:980,id:1,quantity: 1,};
    
]

let cart=[]
const productlist=document.getElementById("product-list");
const cartitems= document.getElementById("cart-items");
const cartTotal=document.getElementById("cart-total");
// Display Products
products.forEach{product) = > {
    const div= document.createElement("div");
    div.className="product",
    div.innerHTML=
        <strong>
            ${product.name}</strong>-$${product.price}
            <button onclick="addToCart({product.id})">Add to cart</button>;
productlist.appendChild(div);
});

//Add product to Cart/
function addToCart(productId){
    const product=products.find(p=>p.id=== productId);
    const cartitem=cart.find(item =>item.id===);

}