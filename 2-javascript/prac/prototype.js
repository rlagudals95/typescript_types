// prototype은 자바스크립트에서 상속을 구현할 수 있게한다!
// 기존의 object를 재사용할 수 있게함
const x = {};
const y = {};
// 자바스크립트는 모든 object는 proto를 가지고 있다
console.log(x);
console.log(y);
console.log(x.toString());
// x와 y는 동일한 object의 proto를 상속
console.log(x.__proto__ === y.__proto__); // true

const array = [];
// 배열또한 array proto를 가지고 있다
// array는 array proto를 상속하고 array proto는 object proto를 상속한다.
console.log(array);

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member
  //   this.makeCoffee = (shots) => {
  //     console.log("making....");
  //   };
}

// prototype member level
// 프로토 타입 멤버로 추가 위 함수를 주석처리해도 같은 결과 출력
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making....");
};

console.clear();
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

// 두개의 생성자 함수를 연결 Coffee 머신을 상속받음
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123); // 자바스크립트는 타입 보장이 안된다...
console.log(latteMachine);

latteMachine.makeCoffee(); // 상속받아 latteMachine에서도 makeCoffee함수 사용가능
