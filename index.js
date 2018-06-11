var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = { itemName: item, itemPrice: Math.floor(Math.random() * 101)}
  cart.push(newItem)
  return item + " has been added to your cart."
}

function viewCart() {
  if (cart.length < 1) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + "."
  } else {
    var myCart = []
    for (var i = 0; i < [cart.length - 1]; i++) {
      myCart.push( " " + cart[i].itemName + " at $" + cart[i].itemPrice)
    }
    return "In your cart, you have" + myCart + ", and " + cart[cart.length-1].itemName + " at $" + cart[cart.length-1].itemPrice + "."
  }
}

function total() {
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    placingOrder = "Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + "."
    cart = []
    return placingOrder
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}