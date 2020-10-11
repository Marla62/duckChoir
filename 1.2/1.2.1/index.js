// 多态 能表明多态特性但是并不那么规范的多态 js是委托不是复制对象导致的伪多态
const Duck = function (){};
const Dog = function (){};
function makeSound(animal) {
  // 如果是鸭子的实例
  if( animal instanceof Duck){
    console.log('嘎嘎嘎');
  } else if(animal instanceof Dog) {
    console.log('汪汪汪');
  }
}
makeSound(new Duck())
makeSound(new Dog())
