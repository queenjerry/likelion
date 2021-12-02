// 날짜
undefined
let d = new Date();
undefined
d
Wed Dec 01 2021 10:35:01 GMT+0900 (한국 표준시)
d.getMonth()
11
d.getDate()
1
// 월은 0부터 시작합니다.
undefined
// 일은 1부터 시작합니다.
undefined
d.getDay()
3
// 일요일부터 0입니다.
undefined
d.getHours()
10
d.getMinutes()
35
d.getSeconds()
1
d.getMinutes()
35
let dd = new Date();
undefined
dd.getMinutes()
39
// 실시간 아니고 new Date() 했을 때에 시간
d.getFullYear()
2021
d.getFullYear()
121

// getYear()를 사용하면 원래 년도만 반환한다고 하네요.. 예를 들어 1999년이면 99
//근데 이게 2000년이 넘어오면서 앞에 100이 붙어버리는 현상이 있어서 새로만든 메서드가 getFullYear 라고 합니다.
//그래서 지금이 21 년이기 때문에 121을 반환합니다