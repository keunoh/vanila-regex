//정규 표현식 -> 2가지 방법으로 만들 수 있다.
//정규 표현식 리터럴은 스크립트를 불러올 때 컴파일 되므로, 바뀔 일이 없다면 이 방식 이용
//성능이 향상될 수 있음.
const re1 = /ab*c/;

//정규표현식이 런타임에 컴파일됨.
//패턴이 동적으로 변해야한다면 생성자 방식을 사용하라.
const re2 = new RegExp("ab+c");

// /abc/ / ab + c / /Chapter (\d+)\.\d*/;
//(\d+)에 나타난 괄호는 정규 표현식에서 기억 장치처럼 쓰인다.

//하나의"a" 이후에 0개 이상의 "b", 그 뒤에 "c"와 일치해야하면 /ab*c/ 패턴을 사용할 수 있다.

const myName = "abbbbbbc";
console.log("regex -> " + re1.test(myName));

/**
 * 문자 클래스
 * \, ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
 * 어서션
 * ^, $, x(?=y), x(?!y), (?<=y)x, (?<!y)x, \b, \B
 * 그룹과 범위
 * (x), (?:x), (?<Name>x), x|y, [xyz], [^xyz], \Number
 * 수량자
 * *, +, ?, x{n}, x{n,}, x{n,m}
 * 유니코드 속성 이스케이프
 * \p{UnicodeProperty}, \P{UnicodeProperty}
 */

// 특수 문자를 있는 그대로 탐색해야하는 경우, 특수 문자 앞에 "\" 를 배치해서 이스케이핑해야 합니다.

const re3 = /[A-Z]:\\/;

function escapeRegEx(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $&은 일치한 문자열 전체를 의미
}

// 정규 표현식 뒤에 "g"는 전체 문자열을 탐색해서 모든 일치를 반환하도록 지정하는 전역 탐색 플래그

console.log(escapeRegEx("abcdefg.*efwe"));

// RegExp의 메서드 -> test(), exec()
// String의 메서드 -> match(), replace(), search(), split()
/**
 * exec() : 문자열에서 일치하는 부분을 탐색. 일치 정보를 나타내는 배열, 또는 일치가 없는 경우 null을 반환
 * test() : 문자열에 일치하는 부분이 있는지 확인. true 또는 false 반환
 * match() : 캡처 그룹을 포함 모든 일치를 담은 배열 반환. 일치가 없으면 null 반환
 * matchAll() : 캡처 그룹을 포함해서 모든 일치를 담은 반복기 반환
 * search() : 문자열에서 일치하는 부분을 탐색. 일치하는 부분의 인덱스, 또는 일치가 없는 경우 -1 반환
 * replace() : 문자열에서 일치하는 부분을 탐색하고, 그 부분을 대체 문자열로 바꿈
 * replaceAll() : 문자열에서 일치하는 부분을 모두 탐색하고,  모두 대체 문자열로 바꿈
 * split() : 정규 표현식 또는 문자열 리터럴을 사용해서 문자열을 부분 문자열의 배열로 나눔
 */

const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");
console.log("myArray : ", myArray);

const myArray2 = /d(b+)d/g.exec("cdbbdbsbz");
console.log("myArray2 : ", myArray2);

const myArray3 = "cdbbdbsbz".match(/d(b+)d/g);
console.log("myArray3 : ", myArray3);

const myReString = new RegExp("d(b+)d", "g");
const myReArray = myReString.exec("cdbbdbsbz");

console.log(`lastIndex의 값은 ${myRe.lastIndex}`);

/**
 * 플래그를 활용한 고급 탐색
 * 정규 표현식은 전역 탐색이나 대소문자 무시와 같은 특성을 지정하는 플래그를 가질 수 있습니다.
 * 플래그는 단독으로 사용할 수도 있고, 순서에 상관없이 한꺼번에 여럿을 지정할 수도 있습니다.
 * d : 부분 문자열 일치에 대해 인덱스 생성
 * g : 전역 탐색
 * i : 대소문자를 구분하지 않음
 * m : 여러 줄에 걸쳐 탐색
 * s : 개행 문자가 .과 일치함
 * u : "unicode" 패턴을 유니코드 코드 포인트의 시퀀스로 간주함
 * y : "접착" 탐색, 대상 문자열의 현재 위치에서 탐색을 시작함
 */

// const regex = /pattern/flags;
// const regexCon = new RegExp("pattern", "flags");

const regex1 = /\w+\s/g;
const str = "fee fi fo fum";
const myArrayRegex = str.match(regex1);
console.log(myArrayRegex);

console.log(regex1.exec(str));
console.log(regex1.exec(str));
console.log(regex1.exec(str));
console.log(regex1.exec(str));
console.log(str.match(regex1));
