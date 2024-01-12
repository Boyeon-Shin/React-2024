const Controller = ({handleSetNumber}) => {

    return (
        <button onClick = {() => {handleSetNumber(1)}}>+</button>
    );

};
export default Controller;