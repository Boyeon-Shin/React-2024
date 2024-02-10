const TodoEditor = () => {
    return(
        <div className= "TodoEditor">
        <b>새로운 Todo 작성하기 ✏️</b>
         <div className= "editor_wrapper">
           <input placeholder="새로운 Todo..." />
           <button> 추가 </button>
         </div>
        </div>
    );
};
export default TodoEditor;