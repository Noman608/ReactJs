var arr = [
  { price: 100, product: "apple" },
  { price: 200, product: "app" },
  { price: 300, product: "ap" },
];
const ar = arr.map((value) => {
  return value.price+10;
});
console.log(ar);
