import React from "react"
import { Button, Form, FormGroup, Input } from 'reactstrap';

const TodoForm = props => {
  return (

    <Form onSubmit={props.onSubmit}>
      <FormGroup className="flex">
        <Input onChange={props.onInputChange} value={props.newTodoName} placeholder="Add New Todo" />
        <Button color="primary" type="submit">Submit</Button>
      </FormGroup>
    </Form>

  );
};

export default TodoForm