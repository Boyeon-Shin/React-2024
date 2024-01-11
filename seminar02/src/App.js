import './App.css';
import {useState} from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
    const [number, setNumber] = useState(0);

    const handleSetNumber = (value) => {
        setNumber(number + value);
    };

    // const handleSetGame = () => {
    //     switch (number) {
    //         case 3: case 6: case 9:
    //            return alert("짝");
    //         default:
    //             return ;
    //     }
    //
    // };

    // const handleSetGame = ({number}) => {
    //     if (3 && 6 && 9) {
    //         return alert("짝");
    //     } else
    //         return;
    // };
    //

return (
    <div className="App">
        <header className="App-header">
            <Viewer number={number}/>
            <Controller handleSetNumber={handleSetNumber} handleSetGame={handleSetGame}/>
        </header>
    </div>
);
}

export default App;
