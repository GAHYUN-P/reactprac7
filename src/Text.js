import React from "react";

const Text = (props) => {
    const text = React.useRef(null);
    const hoverEvent= () => {
        text.current.style.background = "yellow";
    }

    // useEffect()훅 
    // 라이프 사이클 함수 중 componentDidMount와 componentDidUpdate, componentWillUnmount를 합쳐둔 거

    // 첫번째 인자는 익숙하죠! 화살표 함수! 넵, 렌더링 시 실행할 함수가 여기에 들어갑니다.
    // 첫 랜더링때는 화살표 함수가 무조건 작동한다.
    // 두번째 인자의 []! 디펜던시 어레이라고 불러요. 여기 넣어준 값이 변하면 첫번째 인자인 콜백함수를 실행합니다.
    // 두번째 인자가 없으면 화살표함수가 한번만 실행되고 다시는 실행되지 않는다.
    
    React.useEffect(() => {
    // 여기가 rendering 때 실행될 구문이 들어가는 부분입니다.
    // componentDidMount, componentDidUpdate일 때 동작하는 부분이 여기예요.
    
        text.current.addEventListener("mouseover", hoverEvent);
        
        // return에서 clean up을 해준다.
        return () => {
            text.current.removeEventListener("mouseover", hoverEvent);
        }
    }, []);
    
    return (<h1 ref={text}>텍스트입니다!</h1>)
}

export default Text;