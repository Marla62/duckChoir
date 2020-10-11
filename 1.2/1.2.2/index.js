function makeSound(animal) {
  animal.sound();
}

const Duck = function () {
};

Duck.prototype.sound = function (){
  console.log('🦆嘎嘎嘎');
}

const Dog = function () {
};

Dog.prototype.sound = function (){
  console.log('🐶汪汪汪');
}
makeSound(new Duck())
makeSound(new Dog())

