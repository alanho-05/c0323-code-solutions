const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const array1 = prices.map((e) => ({ price: e, salePrice: e / 2 }));
console.log('Price objects', array1);

const array2 = prices.map((e) => `$${e.toFixed(2)}`);
console.log('Formatted prices', array2);
