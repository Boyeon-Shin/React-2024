import React, {useRef, useState} from "react";

function Body() {
    const [text, setText] = useState("");
    // const  [change, setChange] = useState ("");
    const [change, setChange]  = useState(false);

    const textRef = useRef();
    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const handleOnClick = () => {
        if (text.length < 5) {
            textRef.current.focus();
            // setChange("입력값을 정확하게 입력하세요");
            setChange(true);
            setTimeout(() => setChange(""), 2000);

        } else {
            alert("입력 완료");
            setText("");
        }


    };

    return (
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange}/>
            <button onClick={handleOnClick}>작성완료</button>
            {/*<div  style ={{color: "red"}} >{change}</div>*/}
            {change ? <div style ={{color: "red"}}>"입력값을 정확하게 입력하세요"</div> : <></>}
            <div>{text}</div>

        </div>

    );
}

export default Body;