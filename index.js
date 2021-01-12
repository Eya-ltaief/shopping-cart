// remove buttons//
let cartItemContainer = document.querySelector('cart');
var clearRow = document.getElementsByClassName('btn-outline-primary');
console.log(clearRow);
for (var i = 0; i < clearRow.length; i++) {
        var button = clearRow[i]
        button.addEventListener('click', function(event){
            console.log('clicked')
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.parentElement.remove()
             cartTotal()
        })
}
// heart buttons//
var heart = document.getElementById('heart');
console.log('heart')
heart.addEventListener('click', function() {
heart.classList.toggle('red');
});

var heartIcon = document.getElementById('secondheart');
heartIcon.addEventListener('click', function() {
heartIcon.classList.toggle('red');
});
// declaration of variables//
var plusButton = document.querySelectorAll(".plus");
var moinsButton = document.querySelectorAll(".moins");

console.log(plusButton);
console.log(moinsButton);
let priceElement = document.querySelectorAll(".shop-price")
let PriceTotal= document.querySelectorAll(".total-price")
 let total = 0
//plus button
var qteButton = document.getElementsByClassName("qte");
for (let i = 0; i < plusButton.length; i++) {
  plusButton[i].addEventListener("click", function () {
    qteButton[i].innerHTML = Number(qteButton[i].innerHTML) + 1;
    cartTotal()
  });
}
//minus buttons//

for (let i = 0; i < moinsButton.length; i++){
  
    moinsButton[i].addEventListener("click", function () {
       qteButton[i].innerHTML = Number(qteButton[i].innerHTML) - 1;
      cartTotal()
  });
}
// calculating the cart total price
function cartTotal() {
    let price = document.querySelectorAll('.shop-price');
    console.log(price)
    let qte = document.getElementsByClassName('qte');
    let total=0
    for(let i=0 ;i<price.length;i++){
       total = total + (price[i].innerHTML * qte[i].innerHTML)
      }
        document.querySelector('.total-price').innerHTML = '$' + total;
    }
