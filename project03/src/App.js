import './App.css';
import Edit from "./pages/Edit";
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";


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

function App() {
  return (

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

      <RouterProvider router={router}>
          <div className="App">
          </div>
      </RouterProvider>
  );
}

export default App;
