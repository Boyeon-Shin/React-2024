const Controller = ({handleSetNumber, handleSetGame}) => {

    return (
        <button onClick = {() => {handleSetNumber(1)}}>+</button>
    );

};
export default Controller;