import React, {createContext, useEffect, useReducer, useRef, useState} from "react";
import './App.css';
import Edit from "./pages/Edit";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import emotionItem from "./components/EmotionItem";

function reducer(state, action) {
    switch (action.type) {
        case "CREATE": {
            return [action.data, ...state];
        }
        case "UPDATE": {
            return state.map((item) => String(item.id) === String(action.data.id) ? {...action.data} : item);
        }
        case "DELETE": {
            return state.filter((item) => String(item.id) !== String(action.targetId));
        }
        case "INIT": {
            return action.data;
        }
        default : {
            return state;
        }
    }
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

export const router = createBrowserRouter([
    {
        path: "",
        element: <Home/>,
    },
    {
        path: "/new",
        element: (
            <New/>
        ),
    },
    {
        path: "/diary/:id",
        element:
            <Diary/>,
    },
    {
        path: "/edit/:id",
        element: <Edit/>,
    },
]);

const moockData = [
    {
        id: "mock1",
        data: new Date().getTime(),
        content: "mock1",
        emotionId: 1,
    },
    {
        id: "mock2",
        data: new Date().getTime(),
        content: "mock2",
        emotionId: 2,
    },
    {
        id: "mock3",
        data: new Date().getTime(),
        content: "mock3",
        emotionId: 3,
    },
]


function App() {
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        dispatch({
            type: "INIT",
            data: moockData,
        });
        setIsDataLoaded(true);
    }, []);

    const onCreate = (date, content, emotionId) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current,
                date: new Date(date).getDate(),
                content,
                emotionId,
            },
        });
        idRef.current += 1;
    }
    const onUpdate = (targetId, data, content, emotionId) => {
        dispatch({
            type: "UPDATE",
            data: {
                id: targetId,
                data: new Date(data).getTime(),
                content,
                emotionId,
            },
        });

    };
    const onDelete = (targetId) => {
        dispatch({
            type: "DELETE",
            targetId,
        });
    };

    // <div className="App">
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //     <Route path='/new' element={<New/>}/>
    //     <Route path='/diary/:id' element={<Diary/>}/>
    //     <Route path='/edit' element={<Edit/>}/>
    //   </Routes>
    //   <div>
    //     <Link to={"/"}>Home</Link>
    //     <Link to={"/new"}>New</Link>
    //     <Link to={"/diary"}>Diary</Link>
    //     <Link to={"/edit"}>Edit</Link>
    //   </div>

    if (!isDataLoaded) {
        return <div>데이터를 불러오는 중입니다</div>;
    } else {
        return (
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider
                    value={{
                        onCreate,
                        onUpdate,
                        onDelete,
                    }}
                >
                    <div className="App">
                        <RouterProvider router={router}>
                        </RouterProvider>
                    </div>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        );
    }
}

export default App;
