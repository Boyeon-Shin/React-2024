import './App.css';
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import React, {useCallback, useMemo, useReducer, useRef} from "react";
// import TestComp from "./components/TestComp";
// import {tab} from "@testing-library/user-event/dist/tab";

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();


function reducer(state, action) {
    switch (action.type) {
        case "CREATE" : {
            return [action.newItem, ...state];
        }
        case "UPDATE": {
            return state.map((it) =>
                it.id === action.targetId ? {...it, isDone: !it.isDone,} : it);
        }
        case "DELETE": {
            return state.filter((it) => it.id !== action.targetId);
        }
        default:
            return state;
    }
}

const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        createDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래 널기",
        createDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        createDate: new Date().getTime(),
    },
];

function App() {
    // const[todo, setTodo] = useState(mockTodo);
    const [todo, dispatch] = useReducer(reducer, mockTodo);
    const idRef = useRef(3);

    const onCreate = useCallback((content) => {
        dispatch({
            type: "CREATE",
            newItem: {
                id: idRef.current,
                content,
                isDone: false,
                createDate: new Date().getTime(),
            },
        });
        idRef.current += 1;
    }, []);


    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: "UPDATE",
            targetId,
        });
    }, []);

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "DELETE",
            targetId,
        });
    }, []);


    const memoizedDispatches = useMemo(() => {
        return {onCreate, onUpdate, onDelete};
    }, []);


    // const onCreate = (content) => {
    //     const newItem = {
    //         id: 0,
    //         content,
    //         isDone: false,
    //         createDate: new Date().getTime(),
    //     };
    //     setTodo([newItem, ...todo]);
    //     idRef.current += 1;
    // };
    // const onUpdate = (targetId) => {
    //     setTodo(
    //         todo.map((it) =>
    //             it.id === targetId ? {...it, isDone: !it.isDone } :it
    //         )
    //     );
    // };
    //
    // const onDelete = (targetId) => {
    //     setTodo(todo.filter((it) => it.id !== targetId))
    // };

    return (
        <div className="App">
            {/*<TestComp />*/}
            <Header/>
            <TodoStateContext.Provider value={todo}>
                <TodoDispatchContext.Provider value={memoizedDispatches}>
                    {/*<TodoEditor onCreate = {onCreate} />*/}
                    {/*<TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />*/}
                    <TodoEditor/>
                    <TodoList/>
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

export default App;
