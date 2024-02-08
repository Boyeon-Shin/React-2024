import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


// import Diary from "./pages/Diary";
// import Home from "./pages/Home";
// import New from "./pages/New";
// import Edit from "./pages/Edit";
// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />,
//         children: [
//             {
//                 index: true,
//                 element: <Home />,
//                 label: 'main'
//             },
//             {
//                 path: "/new/*",
//                 element: <New />,
//                 label: 'A'
//             },
//             {
//                 path: "/diary/*",
//                 element: <Diary />,
//                 label: 'A'
//             },
//             {
//                 path: "/edit",
//                 element: <Edit />,
//                 label: 'B'
//             },
//         ]
//     },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <RouterProvider router={router}>
    //     <App />
    // </RouterProvider>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
