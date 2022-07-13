import React from "react";
//line below, what's inside the () is the setInputtext in the App.js that was added to the form
const Form = ({ setInputText,todos,setTodos,inputText,setStatus }) => {

    //JS code and functions

    const inputTextHandler = (e) => {
        console.log(e.target.value); //e is the event that just happend which is the user typying something and .target.value is value of what has been written
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault(); // when paired with the button will stop it from refreshing the page if clicked
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000}
        ]);//above this, inputed text are sumbited,
        setInputText("");
    };

    const statusHandler = (e) => {
        //console.log(e.target.value);
        setStatus(e.target.value);
    }

    return (
        <form>
            <input value={inputText}  onChange={inputTextHandler} type="text" className="todo-input"></input>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>

            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All tasks</option>
                <option value="completed">Completed tasks</option>
                <option value="uncompleted">Uncompleted tasks</option>
                </select>
            </div>
        </form>
    );
};
export default Form;