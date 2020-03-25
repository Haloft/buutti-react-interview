import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Card, Container } from "reactstrap";
import DateBar from "./components/DateBar";

const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, name: "Go to the supermarket", complete: false },
        { id: 2, name: "Call Alice", complete: false },
        { id: 3, name: "Ask Alice to call Bob", complete: false },
        { id: 4, name: "Do the dishes", complete: false },
        { id: 5, name: "Change car tyres", complete: false }
    ]);
    const [newTodoName, setNewToDoName] = useState("");

    const generateNewId = () => todos.length + 1;
    
    const onSubmit = (event) => {
        event.preventDefault();
        const todoObject = {
            id: generateNewId(),
            name: newTodoName,
            complete: false
        };

        if (todoObject.name !== "") {
            setTodos(todos.concat(todoObject));
            setNewToDoName("")
        }
    };

    const onClick = (id) => {
        const todo = todos.find(t => t.id === id);
        const changedTodo = { ...todo, complete: !todo.complete };
        setTodos(todos.map(todo => (todo.id !== id ? todo : changedTodo)));
    };


    const onChange = (event)=> setNewToDoName(event.target.value);
    
    const onRemoveClick = (id) => setTodos(todos.filter(todo => todo.id !== id));

   
    const todoItems = () =>
        todos.map(todo => (
            <TodoList
                key={todo.id}
                todo={todo}
                onClick={onClick}
                onRemoveClick={onRemoveClick}
            />
        ));

    return (
      <Container>
        <Card className="frame">
          <DateBar />
          <h2>Things To Do:</h2>
          {todoItems()}
          <TodoForm
            onSubmit={onSubmit}
            newTodoName={newTodoName}
            onInputChange={onChange}
          />
        </Card>
      </Container>
    );
};

export default App;
