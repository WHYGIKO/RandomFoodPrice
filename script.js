let sum = 0;
let yetkazish = 12000;
const cart = cartObj();

for (const key in cart) {
  sum+= cart[key].price
  sum += yetkazish;
//   console.log(`Buyurtma: ${Object.keys(cart)}, buyurtma narxi: ${cart[key].price} yetkazib berish narxi: ${yetkazish}. Umumiy narx: ${sum}.`);
}


alert(`Sizning buyurtmangiz: ${Object.keys(cart)}. Yetkazib berish bilan bo'lgan umumiy summa: ${sum} sum.`);
console.log(`Sizning buyurtmangiz: ${Object.keys(cart)}. Yetkazib berish bilan bo'lgan umumiy summa: ${sum} sum.`);