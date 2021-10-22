import styled from 'styled-components';
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../../redux/reducer";
import { TodoItem } from "../TodoItem";

/* eslint-disable-next-line */
export interface ItemProps {
  id: number,
  item: string,
  completed: boolean,
}

export interface DisplayTodosProps {
  todos: any[],
  addTodo: (obj: any) => void,
  removeTodo: (obj: any) => void,
  updateTodo: (obj: any) => void,
  completeTodo: (obj: any) => void,
}

const mapStateToProps = (state: Array<Object>) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    addTodo: (obj: object) => dispatch(addTodos(obj)),
    removeTodo: (id: number) => dispatch(removeTodos(id)),
    updateTodo: (obj: object) => dispatch(updateTodos(obj)),
    completeTodo: (id: number) => dispatch(completeTodos(id)),
  };
};

const ConectedDisplayTodos: React.FC<DisplayTodosProps> = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <StyledDisplayTodos>
      <div className="buttons">
        <button
          onClick={() => setSort("active")}
        >
          Active
        </button>
        <button
          onClick={() => setSort("completed")}
        >
          Completed
        </button>
        <button
          onClick={() => setSort("all")}
        >
          All
        </button>
      </div>
      <ul>
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
           
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                        
                  )
                );
              })
            : null}
          {/* for completed items */}
          {props.todos.length > 0 && sort === "completed"
            ? props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              })
            : null}
   
      </ul>
    </StyledDisplayTodos>
  );
}

export const DisplayTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConectedDisplayTodos);

const StyledDisplayTodos = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .buttons {
    margin-bottom: 2rem;
  }

  .buttons button {
    padding: 0.5rem 1.2rem;
    border-radius: 20px;
    cursor: pointer;
    border: none;
  }

  .buttons button:focus {
    outline: none;
  }

  .buttons button:not(:last-child) {
    margin-right: 1rem;
  }

  ul {
    list-style: none;
    display: flex;
    align-self: flex-start;
    flex-wrap: wrap;
    margin-left: 5%;
  }
`;
