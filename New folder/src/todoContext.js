import {createContext} from 'react';

const todoContext = createContext({
    todoList: [],
    setTodoList: () => {}
});

export default todoContext;
