import './App.css';
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import React, {useCallback, useReducer, useRef} from "react";

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


    return (
        <div className="App">
            <Header/>
            <TodoStateContext.Provider value={todo}>
                <TodoDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
                    <TodoEditor/>
                    <TodoList/>
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

export default App;
