import {useRef, useState} from "react";
import {getFCP} from "web-vitals";

function Body() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [change, setChange] = useState("");
    const[state, setState] = useState({
        email : "",
        password : "",
        change : "",
    });

    const textRef = useRef();
    const text2Ref = useRef();


    const handleOnChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    // const handleOnchange2 = (e) => {
    //     setText2(e.target.value);
    // };

    const handleOnClick = () => {
        if (state.email.length < 5 || state.password.length < 6 || !state.email.includes('@') || !state.email.includes('.com')) {
            textRef.current.focus();
            text2Ref.current.focus();
            // state.change("입력값을 정확하게 입력하세요");,
            setState({ ...state, change: "입력값을 정확하게 입력하세요" });
            setTimeout(() => setState({ ...state, change: "" }), 2000);
            // setTimeout(() => state.change(""), 2000);
        } else {
            alert("로그인 성공");
            // state.email("");
            // state.password("");
            setState({ email: "", password: "", change: "" });
        }
    };

    return (

        // <div>
        //     <section>
        //         Email: <input type="email" ref={textRef} value={text} onChange={handleOnChange}/>
        //     </section>
        //     <section>
        //         Password: <input type="password" ref={text2Ref} value={text2} onChange={handleOnchange2}/>
        //     </section>
        //     <button onClick={handleOnClick}>로그인</button>
        //     <div style={{color: "red"}}> {change} </div>
        //     <div>{text}</div>
        // </div>


        <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <form>
            <table>
                <tr>
                    <h1>Login</h1>
                </tr>
                <tr>
                    <td>Email:</td>
                   <td><input type= "email"  name ="email" ref={textRef} value={state.email}  placeholder="email" onChange={handleOnChange}/></td>
                </tr>

                <tr>
                    <td>Password:</td>
                    <td><input type = "password" name = "password" ref={text2Ref} value={state.password} placeholder="6자리 이상" onChange={handleOnChange}/></td>
                </tr>

                <tr>
                    <td></td>
                    <td>
                        <button onClick={handleOnClick}>로그인</button>
                        <div  style ={{color: "red"}} >{state.change} </div>
                        <div>{state.email}</div>
                    </td>
                </tr>
            </table>
        </form>
        </div>
    );
}

import React from 'react';
