import logo from './logo.svg';
import './App.css';
import React from "react";
import Text from "./Text";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.circle = React.createRef(null);
    }

    hoverEvent = (e) => {
      // 콘솔로 이 이벤트가 누구에게서 일어났는 지 확인할 수 있습니다.
      console.log(e.target);
      // ref랑 같은 녀석인 지 확인해봐요!
      console.log(this.circle.current);

      // 바뀔 색깔 지정
      this.circle.current.style.background = "yellow";
    }

    componentDidMount() { 
      // addEventListener를 사용하려면 DOM요소까지 완성이 되어있어야한다.
      // 즉, mount가 끝나있어여한다. 그래서 DidMount에 이벤트리스너를 넣어줄거다

        // 리액트 요소가 잘 잡혔나 확인해봅시다!
        console.log(this.circle);
        
        this.circle.current.addEventListener("mouseover", this.hoverEvent);
        // addEventLister(어떤 이벤트, 어떤 행동할래)
    }
    
    // 컴포넌트 사라질때 이벤트를 해제되게 해주자. 클린업!
    componentWillUnmount() {
      this.circle.current.removeEventListener("mouseover", this.hoverEvent);
    }

    render() {
        return (
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    textAlign: "center"
                }}>
                <Text/>
                <div
                    style={{
                        margin: "auto",
                        width: "250px",
                        height: "250px",
                        background: "green",
                        borderRadius: "250px"
                    }}
                    ref={this.circle}></div>

            </div>
        );
    }
}

export default App;
