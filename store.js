if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}


const barang = [
  {  nama: 'Indomie Kari Ayam', tipe: 'Makanan', image: 'Images/indomieKariAyam.png', harga: "Rp.4000/pcs" },    
  {  nama: 'Indomie Soto Mie', tipe: 'Makanan', image: 'Images/indomieSotoMie.png', harga: "Rp.4000/pcs" },        
  {  nama: 'Indomie Ayam Bawang', tipe: 'Makanan',  image: 'Images/indomieAyamBawang.png', harga: "Rp.4000/pcs" },
  {  nama: 'Es Teh', tipe: 'Minuman', image: 'Images/esteh.jpg', harga: "Rp.5000/pcs" },
  {  nama: 'Es Jeruk', tipe: 'Minuman', image: 'Images/esJeruk.png', harga: "Rp.5000/pcs" },
  {  nama: 'Indomie Kaldu Ayam', tipe: 'Makanan',  image: 'Images/indomieKalduAyam.png', harga: "Rp.3900/pcs" },
  {  nama: 'Indomie Seblak', tipe: 'Makanan',  image: 'Images/indomieSeblak.png', harga: "Rp.4000/pcs" },
  {  nama: 'Indomie Goreng Original', tipe: 'Makanan',  image: 'Images/indomieGoreng.png', harga: "Rp.3100/pcs" },
  {  nama: 'Indomie Goreng Ayam Pop', tipe: 'Makanan',  image: 'Images/indomieGorengAyamPop.png', harga: "Rp.3700/pcs" },
  {  nama: 'Indomie Goreng Ayam Panggang Jumbo', tipe: 'Makanan',  image: 'Images/indomieGorengAyamPanggangJumbo.png', harga: "Rp.5000/pcs" },
  {  nama: 'Indomie Bolognese', tipe: 'Makanan',  image: 'Images/indomieBolognese.png', harga: "Rp.4000/pcs" },
  {  nama: 'Indomie Goreng Aceh', tipe: 'Makanan',  image: 'Images/indomieGorengAceh.png', harga: "Rp.3900/pcs" },
  {  nama: 'Indomie Goreng Ayam Pop', tipe: 'Makanan',  image: 'Images/indomieGorengAyamPop.png', harga: "Rp.3700/pcs" },
  {  nama: 'Indomie Goreng Ayam Panggang Jumbo', tipe: 'Makanan',  image: 'Images/indomieGorengAyamPanggangJumbo.png', harga: "Rp.5000/pcs" },
  {  nama: 'Supermi Nutrimi Mie Goreng', tipe: 'Makanan',  image: 'Images/supermiNutrimiGoreng.png', harga: "Rp.6000/pcs" },
  {  nama: 'Supermi Nutrimi Steak Ayam', tipe: 'Makanan',  image: 'Images/supermiNutrimiSteakAyam.png', harga: "Rp.6000/pcs" },
  {  nama: 'Bandrek', tipe: 'Minuman', image: 'Images/bandrek.png', harga: "Rp.12000/pcs" },
  {  nama: 'Le Minerale', tipe: 'Minuman', image: 'Images/leMinerale.png', harga: "Rp.5000/pcs" },
  {  nama: 'Teh Botol', tipe: 'Minuman', image: 'Images/tehBotol.png', harga: "Rp.5500/pcs" },
  {  nama: 'Teh Pucuk', tipe: 'Minuman', image: 'Images/tehPucuk.png', harga: "Rp.5500/pcs" },
  {  nama: 'Teh Kotak Apel', tipe: 'Minuman', image: 'Images/tehKotakApel.png', harga: "Rp.3500/pcs" },
  {  nama: 'FresTea Nusantara', tipe: 'Minuman', image: 'Images/fresTeaNusantara.png', harga: "Rp.6000/pcs" },
  {  nama: 'FruitTea Freeze', tipe: 'Minuman', image: 'Images/fruitTeaFreeze.png', harga: "Rp.4500/pcs" },
  {  nama: 'Nu Green Tea', tipe: 'Minuman', image: 'Images/nuGreenTea.png', harga: "Rp.4500/pcs" },
  {  nama: 'Tebs', tipe: 'Minuman', image: 'Images/tebs.png', harga: "Rp.6500/pcs" },
  {  nama: 'Adem Sari', tipe: 'Minuman', image: 'Images/ademSari.png', harga: "Rp.6000/pcs" },
  {  nama: 'Telur', tipe: 'Topping', image: 'Images/sosis.png', harga: "Rp.3000/pcs" },
  {  nama: 'Sosis', tipe: 'Topping', image: 'Images/telur.png', harga: "Rp.2500/pcs" },
  {  nama: 'Bakso Ikan Udang', tipe: 'Topping', image: 'Images/cedeaBaksoIkanUdang.png', harga: "Rp.2500/pcs" },
  {  nama: 'Bakso Kepiting', tipe: 'Topping', image: 'Images/cedeaBaksoKepiting.png', harga: "Rp.2000/pcs" },
  {  nama: 'Bakso Ikan isi Keju', tipe: 'Topping', image: 'Images/cedeaFishDumplingCheese.png', harga: "Rp.2500/pcs" },
  {  nama: 'Bakso Ikan isi Ayam', tipe: 'Topping', image: 'Images/cedeaFishDumplingChicken.png', harga: "Rp.2500/pcs" },
  {  nama: 'Bakso Lobster', tipe: 'Topping', image: 'Images/cedeaLobsterBall.png', harga: "Rp.2500/pcs" },
  
  


]

function ready() {
  let sectionmakanan = document.getElementById("sectionmakanan");
  let makanan = `<h2 class="section-header">MAKANAN</h2>
    <div class="shop-items">`
  for(let i=0;i<barang.length;i++){
    
    if(barang[i].tipe==='Makanan'){
      makanan += `<div class="shop-item">
                      <span class="shop-item-title">${barang[i].nama}</span>
                      <img class="shop-item-image" src="${barang[i].image}">
                      <div class="shop-item-details">
                          <span class="shop-item-price">${barang[i].harga}</span>
                          <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                      </div>
                  </div>`
    }
    
  }    
  makanan += `</div>`
  // console.log(makanan);
  sectionmakanan.innerHTML = makanan ; 

  let sectionminuman = document.getElementById("sectionminuman");
  let minuman = `<h2 class="section-header">MINUMAN</h2>
    <div class="shop-items">`
  for(let i=0;i<barang.length;i++){      
    if(barang[i].tipe==='Minuman'){
      minuman += `<div class="shop-item">
                      <span class="shop-item-title">${barang[i].nama}</span>
                      <img class="shop-item-image" src="${barang[i].image}">
                      <div class="shop-item-details">
                          <span class="shop-item-price">${barang[i].harga}</span>
                          <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                      </div>
                  </div>`
    }
    
  }    
  minuman += `</div>`
  // console.log(makanan);
  sectionminuman.innerHTML = minuman ; 

  let sectiontopping = document.getElementById("sectiontopping");
  let topping = `<h2 class="section-header">TOPPING</h2>
    <div class="shop-items">`
  for(let i=0;i<barang.length;i++){      
    if(barang[i].tipe==='Topping'){
      topping += `<div class="shop-item">
                      <span class="shop-item-title">${barang[i].nama}</span>
                      <img class="shop-item-image" src="${barang[i].image}">
                      <div class="shop-item-details">
                          <span class="shop-item-price">${barang[i].harga}</span>
                          <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                      </div>
                  </div>`
    }
    
  }    
  topping += `</div>`
  // console.log(makanan);
  sectiontopping.innerHTML = topping ; 



  





  var removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  var addToCartButtons = document.getElementsByClassName("shop-item-button");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
  
  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
  alert("Thank you for your purchase");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
  var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("Rp", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 10000) 
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "Rp" + total;
}