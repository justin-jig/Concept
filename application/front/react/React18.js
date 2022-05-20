
/**
 *  React v18
 * 
 * 1. Automatic batching
 * 
 * 2. Suspense on the server
 * 
 * 3. New APIs for app and library deveolper
 * 
 */

 const root = React.createRoot(document.getElementById('root'));
 root.render(<h1>Hello, world!</h1>);

/** 1. Automatic batching */

// 예시 1 
function handleClick() {

    setIsFetching(false);
    setError(null);
    setFormStatus('success');
}

// 예시 2

fetch('/something').then(() => {

    setIsFetching(false);
    setError(null);
    setFormStatus('success');

})

/** 
 * 
 * 보통 한 이벤트 핸들러 함수 및 비동기 promise에서 setState를 여러번 하면
 * 여러번 Re-rendering이 되는데 React 18부터는 자동적으로 이벤트 핸들러 함수
 * 한 번 요청안에 SetState를 완료하고 나서 Re-rendering을 하게 해준다.
 * 
 * => Fewer re-renders for better performance ( 성능 향상을 위한 재랜더링 수 감소)
 * => Work outside of event handlers (이벤트 핸들러 외부에서 작업)
 * => Safe, but you can opt out when needed
 * 
 */


/** 1. Suspense on the server (Server rendering) 
 * 
 *  React v 18 이전에는 로딩 
 * 
 *  client Side Rendering vs Server Side Rendering
 * 
 *  client Side Rendering 
 *  => Load JS => Ferch Data => Render Components => Interactive
 * 
 *  Server Side Rendering
 *  => Fetch Data => Render as HTML => Load JS => Hydrate
 * 
 * => One slow part doesn't slow down the whole page
 * => Show initial HTML early and stream the rest
 * => Code splitting fully integrated with server rendering
 * 
*/

/**  3. New APIs for app and library deveolper 
 *  
 * startTransition()
 * useTransition()
 * useDeferredValue() (demo)
 * useId()
 * useSyncExternalStore()
 * 
*/