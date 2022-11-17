$(".increase-qty, .reduce-qty").on("click", function () {
  const qtyNode = this.parentNode.childNodes[2];
  let qty = Number(qtyNode.value);
  qty = this.classList.contains("increase-qty")
    ? qty + 1
    : qty == 0
      ? qty
      : qty - 1;
  qtyNode.value = qty;
});
var cart =
  JSON.parse(sessionStorage.getItem("cart")) == null
    ? {}
    : JSON.parse(sessionStorage.getItem("cart"));

$("input.qty").on("keydown", function (e) {
  if (e.key == "-") {
    return false;
  }
});
$(".addtocart").on("click", function () {
  const priceString = this.parentNode.childNodes[3].textContent;
  const unitPrice = parseFloat(
    priceString.replace("$ ", "").replace(/,/g, "")
  ).toFixed(2);
  let quantity = parseInt(
    this.parentNode.childNodes[5].childNodes[2].value
  );
  let totalCost = quantity * unitPrice;
  let productName = this.parentNode.childNodes[1].textContent;
  if (quantity > 0) {
    cart[productName] = {
      cost: totalCost,
      price: priceString,
      productQty: quantity,
    };
    alert(
      `\nYou have added ${productName} to your cart\n\nQuantity: ${quantity}\n`
    );
  }
  sessionStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
});
