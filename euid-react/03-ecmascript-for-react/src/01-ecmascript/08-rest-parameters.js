// --------------------------------------------------------------------------
// rest parameters

function _sum() {
  const numbers = Array.from(arguments); //일반 함수 내부에 arguments는 전달 된 것들의 집합 -> 유사배열이다.
  //console.log(Array.isArray(numbers), numbers.length) //arguments는 배열이 아니지만 numbers는 배열
  return numbers.reduce(
    /*reducer function: 결과 값을 반환시켜주는 형태*/ (result, number) =>
      result + number,
    0
  );
}

// 🔶 나머지 매개변수를 사용해 sum 함수 코드 로직을 다시 작성합니다.
// 참고: https://mzl.la/43Ro9yp
const sum = (...numbers) => numbers.reduce((total, number) => total + number);
//함수는 아무것도 쓰지 않는 경우 undefined가 반환됨
//console.log(Array.isArray(numbers)); //restparams를 사용했다면 그 자체가 배열이다

let result1_1 = _sum(2, 3, 9, 12, 105); //arguments
let result1_2 = sum(2, 3, 9, 12, 105);
console.log(result1_1);
console.log(result1_2);
console.log(Object.is(result1_1, result1_2));

let result2_1 = _sum(90, 418, -7);
let result2_2 = sum(90, 418, -7);
console.log(Object.is(result2_1, result2_2));
