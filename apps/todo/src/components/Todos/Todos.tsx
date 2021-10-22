import styled from 'styled-components';
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../../redux/reducer";

/* eslint-disable-next-line */
export interface TodosProps {
  todos: Array<any>,
  addTodo: (obj: any) => void,
}

// Map state to props function.
const mapStateToProps = (state: Array<Object>) => {
  return {
    todos: state,
  };
};

// Map dispatch to props function.
const mapDispatchToProps = (dispatch: Function) => {
  return {
    addTodo: (obj: any) => dispatch(addTodos(obj)),
  };
};

// ToDos functional component with passed in props.
const ConnectedTodos: React.FC<TodosProps> = (props) => {
  const [todo, setTodo] = useState("");

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    }
    else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <AddTodos>
      <TodoInput
        type="text"
        onChange={(e) => handleChange(e)}
        value={todo}
      />
      <AddButton onClick={() => add()}>
        Add
      </AddButton>
      <br />
    </AddTodos>
  )
}

// Export connected Todos component.
export const Todos = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedTodos)

const AddTodos = styled.div`
  display: flex;
  justify-content: center;
`;

const TodoInput = styled.input`
  min-width: 15rem;
  width: 40vw;
  max-height: 2.5rem;
  background-color: #e1ebfd;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  align-self: center;

  &:hover {
    outline: none;
    border: 2px solid rgb(67, 58, 168);
  }

`

const AddButton = styled.button`
  margin-left: 1rem;
  background-color: #271c6c;
  color: #e1ebfd;
  border-radius: 50%;
  border: 2px solid #e1ebfd;
  font-size: 1.5rem;
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
  box-shadow: 2px 4px 10px #271c6c;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`
