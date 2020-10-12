1.1 动态类型语言和鸭子类型
鸭子类型：duck typing 如果它走起路来像鸭子，叫起来也是鸭子，那么他就是鸭子。

鸭子类型指导我们只关注对象的行为，而不是关注对象本身，也就是关注HAS-A，而不是IS-A

具体看1.1下的index.js的代码内容


##### 面向接口编程
利用鸭子类型的思想，我们不必借助超类型的帮助，就能轻松的在
动态类型语言中实现一个原则：面向接口编程，而不是面向实现编程。例如：一个对象有push和pop方法就可以当作栈来用，不关心一个对象具体是什么对象。一个对象如果有length属性，也可以依照下标来存取属性，这个对象就可以被当作数组来使用。

面向接口编程是设计模式中最重要的思想


1.2 多态

同一操作作用于不同对象上面，可以产生不同的解释和不同的执行结果。

1.2.1 一段"多态"的javascript代码

多态背后的思想是将"做什么"与"谁去做以及怎样去做"分离开来，也就是将不变的事物与可能改变的事物分离开来。

把不变的分离出来，把可变的封装起来。

1.2.2 对象的多态性
把不变的分离出来，把可变的封装起来。具体参考代码 1.2.2下的index.js

1.2.6 多态在面向对象程序设计中的作用
