// module이란 파일안에 코드를 모듈화해서 작성하는 것
// 한 모듈이란 한 파일안에 작성 되어있는 코드라 할 수 있다!
// 규모가 큰 프로젝트 일수록 모듈은 필수!

// 모듈화된 함수를 다른 파일에서 사용하고 싶다면 export이용

export function add(a, b) {
  return a + b;
}

export function print() {
  console.log("print");
}

export const number = 10;
