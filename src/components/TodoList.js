import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { MdDone } from "react-icons/md";
import { FaRegTrashAlt, FaRedo } from "react-icons/fa"

const TodoList = props => {
  let text,colour,line;

  if (props.todo.complete === true) {
    line = "line-through";
    colour = "lightgrey"
    text = <FaRedo />;
  } else {
    text = <MdDone />;
  }

  return (
      
    <ListGroup>
      <ListGroupItem><span className="todoList" style={{ textDecorationLine: line, color: colour }}> {props.todo.name}</span>
        <Button data-testid="del" size="lg" onClick={() => props.onRemoveClick(props.todo.id)} outline color="danger" className="float-right"><FaRegTrashAlt /></Button>
        <Button data-testid="add" size="lg" onClick={() => props.onClick(props.todo.id)} outline color="success" className="float-right" style={{ marginRight: "4px" }}>{text}</Button>
      </ListGroupItem>
    </ListGroup>
    
  );  

};

export default TodoList;
