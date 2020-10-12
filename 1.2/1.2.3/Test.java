// 把鸭子叫和狗叫转换成Java代码
public class Test {
  public static void main(String args[]) {
    AnimalSound animalSound = new AnimalSound();
    // 声明一个鸭子 并让其叫两声
    Duck duck = new Duck();
    animalSound.makeSound(duck);
    // 声明一个狗子 并让其叫两声
    Dog dog = new Dog();
    // 报错因为只能接受Duck类型
    animalSound.makeSound(dog);
  }
}
