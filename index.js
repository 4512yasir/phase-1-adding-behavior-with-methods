// Your code here
class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return this.sex === "male" 
        ? `It's me! ${this.name}, the parrot!` 
        : `${this.name} says squawk!`;
    }
  }
  
  // Example Usage
  const felix = new Cat("Felix", "male");
  console.log(felix.speak()); // Felix says meow!
  
  const rex = new Dog("Rex", "male");
  console.log(rex.speak()); // Rex says woof!
  
  const polly = new Bird("Polly", "female");
  console.log(polly.speak()); // Polly says squawk!
  
  const coco = new Bird("Coco", "male");
  console.log(coco.speak()); // It's me! Coco, the parrot!
  