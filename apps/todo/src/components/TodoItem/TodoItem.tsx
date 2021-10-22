import styled from 'styled-components';
import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { Reducer } from 'redux';

/* eslint-disable-next-line */
export interface ItemProps {
  id: number,
  item: string,
  completed: boolean,
}

export interface TodoItemProps {
  item: ItemProps,
  updateTodo: Function,
  removeTodo: Function,
  completeTodo: Function,
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;
  const update = (id: Number, value: String | null) => {
    console.log(value);
    updateTodo({ id, item: value });
  };

  return (
    <StyledCard
      key={item.id}
    >
      <textarea
        defaultValue={item.item}
        onChange={(event) => update(item.id, event.target.value)}
      />
      <StyledButtons>
        {item.completed === false && (
          <button
            style={{ color: "green" }}
            onClick={() => completeTodo(item.id)}
          >
            <IoCheckmarkDoneSharp />
          </button>
        )}
        <button
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)} >
    
          <IoClose />
        </button>

      </StyledButtons>
      {item.completed && <StyledCompletedSpan>done</StyledCompletedSpan>}
    </StyledCard>
  );
}

const StyledButtons = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  button {
    border-radius: 20%;
    border: none;
    margin: 0 0.6rem;
    font-size: 1.4rem;
    cursor: pointer;
    color: #271c6c;
    background-color: transparent;
  }

  button:focus {
    outline: none;
  }
`

const StyledCompletedSpan = styled.span`
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
  background-color: #867bcd;
  border: 2px solid #272727;
  color: #e1ebfd;

  font-size: 0.8rem;
  padding: 0.3rem 1rem;
  border-radius: 20px;
`

const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  background: rgb(180, 182, 218);
  background: radial-gradient(
    circle,
    hsla(237, 34%, 78%, 0.9) 0%,
    hsla(219, 88%, 94%, 0.9) 100%
  );

  margin: 0 1rem 1rem 0;
  height: 8rem;
  width: 18rem;
  border-radius: 0.5rem;
  padding: 1rem;

  position: relative;

  textarea {
    padding: 0.5rem;
    border-radius: 8px;
    border: none;
    background-color: #e1ebfd;

    color: #271c6c;
    height: 70%;
  }
  
  textarea:disabled {
    background-color: transparent;
  }
`;
