// this란 자바스크립트에서 객체지향을 구현할 수 있게 도와주는 친구!
// 호출하는 주체의 문맥에따라 변경될 수 있다 class내에 this를 이용하는 함수가 있다면 arrow function을 이용하는게 바람직함

console.log(this); // window

function simpleFunc() {
  console.log(this);
}

simpleFunc(); // window

class Counter {
  count = 0;
  increase = () => {
    // bind를 이용하지 않아도 this 사용가능
    console.log(this);
  };
}

console.clear();

const counter = new Counter();
counter.increase(); // Counter를 가르킴

const caller = counter.increase.bind(counter);

caller(); // undefined /// this의 정보를 잃어버림 // 그 어떤 object를 가르키지 않는다.

// 기본적으로 자바스크립트 함수가 선언되면 global객체에서 접근가능
// 반면에 let, const같은 키워드를 이용해 선언하면 선언된 변수는 global(window)객체로 접근불가 var는 제외...

class Bob {}

const bob = new Bob();

bob.run = counter.increase;
bob.run();
