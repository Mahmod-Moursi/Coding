import React from "react";
//Import the components created
import Todo from "./Todo"
const TodoList = ({todos,setTodos,filteredTodos}) => { //a partent component
    //console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                <Todo 
                setTodos={setTodos} 
                todos={todos} 
                todo={todo}
                text={todo.text} key={todo.id}
                />))}
            </ul>
        </div>
    );
};

export default TodoList;