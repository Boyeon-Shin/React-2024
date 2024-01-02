import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import React from "react";

function ChildComp() {
    return <div>child component</div>;
}
function App() {
  return (
    <div className="App">
        <Header />
        <Body >
            <ChildComp />
        </Body>
        <Footer />
    </div>
  );
}

export default App;