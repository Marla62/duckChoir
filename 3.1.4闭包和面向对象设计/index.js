// 面向对象的设计 都可以用闭包实现
/**
 * 用闭包的方式实现面向对象的功能
 * @returns {{call: (function(): number)}}
 */
function extendValue() {
  let value = 1;
  return {
    call: function (){
      value++;
      console.log(value);
      return value;
    }

  }
}

var extend = extendValue();

extend.call();

/**
 * 用面向对象的方式1
 */
function ExtendValueB() {
  this.value = 1;
}
ExtendValueB.prototype.call = function (){
  this.value++;
  console.log(this.value);
}

let extendB = new ExtendValueB();
extendB.call();
/**
 * 用面向对象的方式2
 */
let extendC = {
  value: 1,
  call: function (){
    this.value++;
    console.log(this.value);
  }
}
extendC.call();
