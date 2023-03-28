const form = document.querySelector("#form");
const input = document.querySelector("#phone");
const output = document.querySelector("#output");

/**
 * 정규 표현식의 구조
 * 1. 데이터의 시작점(^)
 * 2. 비캡처 그룹((?:))으로, 1의 뒤를 잇는 세 개의 숫자(\d{3}), 또는 (|), 여는 괄호 (\()의 뒤를 잇는
 *  세 개의 숫자(\d{3})의 뒤를 잇는 닫는 괄호(\))
 * 3. 캡처 그룹(())으로, 2의 뒤를 잇는 하나의 대시, 슬래시, 또는 마침표
 * 4. 3의 뒤를 잇는 네 개의 숫자 (\d{4})
 * 5. 4의 뒤를 잇는, 첫 번째 캡처 그룹에서 기억한 부분 문자열(\1)
 * 6. 5의 뒤를 잇는 네 개의 숫자 (\d{4})
 * 7. 데이터의 끝점 ($)
 */
const re = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{4}\1\d{4}$/;

function testInfo(phoneInput) {
  const ok = re.exec(phoneInput.value);

  if (!ok) {
    output.textContent = `형식에 맞지 않는 전화번호입니다. (${phoneInput.value})`;
  } else {
    output.textContent = `감사합니다. 전화번호는 ${ok[0]} 입니다.`;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  testInfo(input);
});
