import './App.css';
import {useState} from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
    const [number, setNumber] = useState(0);

    const handleSetNumber = (value) => {
        setNumber(number + value);
        handleSetGame(number);
    };

    // const handleSetGame = () => {
    //     const remainder = number % 10;
    //     const first = number/10;
    //
    //     switch (remainder || first) {
    //         case 3:
    //         case 6:
    //         case 9:
    //             return alert("짝");
    //             break;
    //         default:
    //             return;
    //     }
    //
    // };

    const handleSetGame = () => {
        let count = 0;
        let first = number / 10;
        let remainder = number % 10;

        if (first === 3 || 6 || 9) {
            count++;
        }
        if (remainder === 3 || 6 || 9) {
            count++;
        } else {
            return;
        }

        switch (count) {
            case 1:
                alert("짝");
                break;
            case 2:
                alert("짝짝");
                break;
            case  0:
                break;

            default:

        }

    }

    return (
        <div className="App">
            <header className="App-header">
                <Viewer number={number}/>
                <Controller handleSetNumber={handleSetNumber}/>
            </header>
        </div>
    );
    }

export default App;
