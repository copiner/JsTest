/*
MDN web DOCS
Function.prototype.call()
Function.prototype.apply()
call() �������ܵ���һ�������б�
apply() �������ܵ���һ������������������顣

*/

//call()
function Product(name,price){
    this.name = name;
    this.price = price;
}

function Food(name,price){
    Product.call(this,name,price);
    this.category = "food";
}

var foo = new Food('cheese',5);
console.log(foo.name);
console.log(foo.price);
console.log(foo.category);

//apply()
var numbers = [5,6,2,3,7];

var max = Math.max.apply(null,numbers);

console.log(max);

var min = Math.min.apply(null,numbers);

console.log(min);

var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array);
