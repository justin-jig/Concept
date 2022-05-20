

/** 1. 최상위 root */
// React v 18
const root = React.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);
// react v 18 before
ReactDOM.render(<h1>Hello, world!</h1>)

/** 2. JSX 확장 
 * 
 * 이벤트 처리 방식, 시간 경과에 따른 상태 변경 방식, 데이터 표시 준비 방식
 * 
*/

// 표현식
const jsx = <h1>Hello, world!</h1>;
const jsxName = 'Josh Perez';
function jsxUserFormaName(user) {
    return user.firstName + ' ' + user.lastName;
}
const jsxUser = {
    firstName : 'Harper',
    lastName : 'Perez'
}

// 속성 지정
const jsxAttr = <a href="https://www.reactjs.org"> link </a>;
const jsxAttr2 = <img src={jsxUser.firstName}/>;

// 주입 공격 방지 ( React DOM은 렌더링하기 전에 JSX에 포함된 모든 값을 이스케이프 한다.)
// XSS(교차 사이트 스크립팅) 공격 방지
const title = response.potentiallyMaliciousInput;
const jsxElement4 = <h1>{title}</h1>

// Babel은 JSX를 React.createElement() 호출로 컴파일한다.
const jsxCreateElement = (
    <h1 className="greeting">
      Hello, world!
    </h1>
);
const jsxCreateElement2 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);

/** 2. 렌더링 방식
 * 
 * 
 *  
 */
const root1212 = ReactDOM.createRoot(document.getElementById('root'));
  
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);