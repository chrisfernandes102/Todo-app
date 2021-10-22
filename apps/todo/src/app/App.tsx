// import DisplayTodos from "./components/DisplayTodos";
import { Todos } from "../components/Todos";
import { motion } from "framer-motion";
import styled from 'styled-components';
import "./App.css";

function App() {
  return (
    <StyledApp>
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        {/* <DisplayTodos /> */}
      </motion.div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  h1 {
    display: inline;
    text-align: center;
    margin-bottom: 2rem;
    color: #e1ebfd;

    text-shadow: 0 0 5px #433aa8, 3px -1px 5px #271c6c;
  }
`

export default App;