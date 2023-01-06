import { useState, useEffect } from "react";
function App() {
    const [counter, setValue] = useState(0);
    // counter의 값은 0으로 세팅
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    // 처음한번 렌더링될때마다 실행되는거
    // state가 변화해도 딱 한번만 실행된다
    // useEffect()
    // 매번 API 호출해주는걸 방지할 수 있겠지

    console.log("hey..i run all the time");
    // watch nothing
    useEffect(() => {
        console.log("i run only once(calling the apis)");
    }, []);
    // 키워드 길이가 5이상일때만 api가 실행되도록
    useEffect(() => {
        if (keyword !== "" && keyword.length > 5) {
            console.log("search for", keyword);
        }
    }, [keyword]);
    // counter 눌릴때마다 변화
    useEffect(() => {
        console.log("i run when counter changes");
    }, [counter]);
    // 괄호의 정체
    // keyword가 바뀔때마다 실행되게끔
    useEffect(() => {
        console.log("i run when keyboad and counter changes");
    }, [keyword, counter]);
    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="search here?" />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;
