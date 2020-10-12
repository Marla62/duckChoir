// 把鸭子叫和狗叫转换成Java代码
// 使用继承得到多态效果 重写animalSound使其支持
public class Test {
  public static void main(String args[]) {
    AnimalSound animalSound = new AnimalSound();
    // 声明一个鸭子 并让其叫两声
    Animal duck = new Duck();
    // 声明一个狗子 并让其叫两声
    Animal dog = new Dog();
    animalSound.makeSound(duck);
    animalSound.makeSound(dog);
  }
}
