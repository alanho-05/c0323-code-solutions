function ExampleConstructor() {}

console.log('prototype of ExampleConstructor:', ExampleConstructor.prototype);

console.log('typeof prototype of ExampleConstructor:', typeof ExampleConstructor.prototype);

const example = new ExampleConstructor();
console.log('value of example:', example);

const instance = example instanceof ExampleConstructor;
console.log('value of instance:', instance);
