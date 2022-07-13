import React, { useState,useEffect } from "react";
import './App.css';
//Import the components created
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  //the states are here in the app so that they can be used in the form or the todolist
  const [inputText, setInputText] = useState(""); // this is a state for the text entered by the user
  const [todos, setTodos] = useState([]); //an Array cuz it's an array of objects
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]); //the shown todos

  //one-time when app starts
  useEffect(()=>{
    filterHandler();
    getLocalTodos();
  },[]);//an empty array means it only runs once

  //UseEffect

  useEffect(() => {
    //console.log("test");
    filterHandler();
    saveLocalTodos();
  },[todos, status]);
  
  //functions and event

  const filterHandler = () => {
    switch(status){
      case 'completed' :
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted' :  
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //saving to local storage
  const saveLocalTodos = () =>{
    if (todos.length > 0){localStorage.setItem('todos',JSON.stringify(todos))};
  };
  const getLocalTodos = () => {
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };


  return (
    <div className="App">
      <header>
        <h1>Mahmoud's Todo List</h1>
      </header>
      {/* the line below, we now have this value in the form */}
      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      /> 
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
