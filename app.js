let cartQuantity = 0;
let itemCart = document.getElementById('nItems')

  function cart() {
    console.log(`Cart Quantity: ${cartQuantity}`);
    itemCart.innerHTML = cartQuantity;
  }

  function add1() {
    cartQuantity ++;
    console.log(`Cart Quantity: ${cartQuantity}`);
    itemCart.innerHTML = cartQuantity;
  }

  function add2() {
    cartQuantity += 2;
    console.log(`Cart Quantity: ${cartQuantity}`);
    itemCart.innerHTML = cartQuantity;
  }

  function add3() {
    cartQuantity += 3;
    console.log(`Cart Quantity: ${cartQuantity}`);
    itemCart.innerHTML = cartQuantity;
  }

  function reset() {
    cartQuantity = 0;
    console.log('Cleared Cart');
    console.log(`Cart Quantity: ${cartQuantity}`);
    itemCart.innerHTML = cartQuantity;
  }

  function order() {
    alert('Order placed :)')
    window.location.href = "order-track.html"
  }