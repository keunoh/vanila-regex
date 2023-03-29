const spanSource = document.querySelector("#span__main");
spanSource.innerHTML = "RECAP REGEX!";

//정규표현식 또는 정규식은 문자열에서 특정 문자 조합을 찾기 위한 패턴입니다.
//JavaScript에서는 정규 표현식도 객체로서, RegExp의 exec()와 test()메서드를 사용할 수 있습니다.
//String의 match(), matchAll(), replace(), replaceAll(), search(), split() 메서드와도 함께 사용할 수 있습니다.

//정규표현식 리터럴 -> 슬래시로 패턴을 감싸서 작성
//바뀔 일이 없는 패턴의 경우 리터럴 사용 시 성능 향상될 수 있습니다.
const re = /ab+c/;
//생성자 함수를 사용하면 정규 표현식이 런타임에 컴파일됩니다.
//사용자 입력등 외부 출처에서 가져오는 패턴의 경우는 이렇게 사용하세요.
const re2 = new RegExp("ab+c");

//(\d+)에 나타난 괄호는 정규표현식에서 기억 장치처럼 쓰여서,
//괄호의 안쪽 패턴과 일치한 부분을 나중에 사용할 수 있도록 기억합니다.

//1. 단순패턴 사용하기
//2. 특수문자 사용하기

//RegExp Assertions
const text = "A quick fox";

const regexpLastWord = /\w+$/;
console.log(text.match(regexpLastWord));
//Expected output: Array["fox"]

const regexpWords = /\b\w+\b/g;
console.log(text.match(regexpWords));
//Expected output: Array["A", "quick", "fox"]

const regexpFoxQuality = /\w+(?= fox)/;
console.log(text.match(regexpFoxQuality));
//Expected output: Array["quick"]

/**
 * 경계 유형 Assertions
 * ^  : 입력의 시작과 일치
 * $  : 입력의 끝과 일치
 * \b : 단어 경계와 일치
 * \B : 비단어 경계와 일치
 * x(?=y) : 미리 보기 어설션
 * x(?!y) : 부정 예측 어설션
 * (?<=y)x : Lookbehind 어설션
 * (?<!y)x : 네거티브 lookbehind 어설션
 */

//일반적인 경계 유형 개요 예
//Using Regex boundaries to fix buggy string.
buggyMultiline = `tey, ihe light-greon apple
tangs on ihe greon traa`;

//1) Use ^ to fix the matching at the begining of the string, and right after newline.
buggyMultiline = buggyMultiline.replace(/^t/gim, "h");
console.log(1, buggyMultiline); //fix 'tey', 'tangs' => 'hey', 'hangs'. Avoid 'traa'.

//2) Use $ to fix matching at the end of the text.
buggyMultiline = buggyMultiline.replace(/aa$/gim, "ee.");
console.log(2, buggyMultiline); //fix 'traa' => 'tree'.

//3) Use \b to match characters right on border between a word and a space.
buggyMultiline = buggyMultiline.replace(/\bi/gim, "t");
console.log(3, buggyMultiline); //fix 'ihe' but does not touch 'light'

//4) Use \B to match characters inside borders of an entity.
fixedMultiline = buggyMultiline.replace(/\Bo/gim, "e");
console.log(4, fixedMultiline); //fix 'greon' but does not touch 'on'.

let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Select fruits started with 'A' by /^A/ Regex.
// Here '^' control symbol used only in one role: Matching begining of an input.

let fruitsStartsWithA = fruits.filter((fruit) => /^A/.test(fruit));
console.log(fruitsStartsWithA);

// 이 예제에서 '^'는 두 가지 모두에 사용됩니다: 입력의 일치 시작점, 그룹에서 사용될 떄
// 부정 또는 보완 문자 세트

//Selecting fruits that dose not start by 'A' by a /^[^A]/ regex.
//In this example, two meanings of '^' control symbol are represented:
//1) Matching begining of the input
//2) A negated or complemented character set: [^A]
//That is, it matches anything that is not enclosed in the brackets.

let fruitsStartsWithNotA = fruits.filter((fruit) => /^[^A]/.test(fruit));
console.log(fruitsStartsWithNotA);
