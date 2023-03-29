//innerText와 Node.textContent를 비교합니다.
//innerText가 <br>태그를 인식하고, 숨겨진 요소를 무시하는 점에 주목하세요.

const source = document.getElementById("source");
const textContentOutput = document.getElementById("textContentOutput");
const innerTextOutput = document.getElementById("innerTextOutput");

textContentOutput.innerHTML = source.textContent;
innerTextOutput.innerHTML = source.innerText;
