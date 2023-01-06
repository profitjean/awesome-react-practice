import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
function App() {
    const [counter, setValue] = useState(0);
    // counter의 값은 0으로 세팅
    const onClick = () => setValue((prev) => prev + 1);
    console.log("i run all the time");
    // 처음한번 렌더링될때마다 실행되는거
    // state가 변화해도 딱 한번만 실행된다
    // useEffect()
    // 매번 API 호출해주는걸 방지할 수 있겠지
    const iRunOnlyOnce = () => {
        console.log("i run only once");
    };
    useEffect(() => {
        console.log("call the api");
    }, []);
    return (
        <div>
            <h1 className={styles.title}>Welcome back!</h1>
            <Button text={"Continue"} />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;
