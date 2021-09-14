console.log(add(1, 2)); // module에 선언했지만 module.html을 통해 add 함수 선언가능
// 모듈화를 하지않아 global scope로 됨..

//import add, { print } from "./module.js"; // module 가져옴 // 이름은 원하는대로 선언가능
// export default는 한모듈당 1개 가능

// 이렇게 모두가져와서 사용가능
import * as calc from "./module.js";

calc.add();
calc.print();
const num = calc.number; // 변수도 import 가능
