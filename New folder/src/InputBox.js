import React, { useEffect, useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import todoContext from './todoContext';
import TodoList from './TodoList';
import { createStore } from 'redux';
import { connect, useDispatch, useSelector } from 'react-redux';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
        state.push(action.newitem)
        return state
    case 'DELETE':
      state = state.filter(todoItem=>todoItem.todo!==action.payload);
      return state
    default:
      return state;  }
};

export const store = createStore(reducer);

function InputBox() {
    const [todo, setTodo] = useState("")
    // const [todoList, setTodoList] = useState([])
    // const store = useSelector(state=> state.store);
    // const dispatch = useDispatch(reducer);

    const handleChange = (event) =>{
        setTodo(event.target.value)
    }

    const handleClick=()=>{
        store.dispatch({
            type: 'ADD',
            newitem: {todo: todo}
          });
        setTodo("")
    }

    let k = {
        p: "DHARNEESH",
        g: "gokul",
        x(){
            console.log(this.p);
        },
        y(){
            console.log(this.g);
        }
    }

    useEffect(() => {
        console.log(store.getState());
    },[handleClick])

    return (
        <React.Fragment>
            {/* <h1>{store.getState()}</h1> */}
            <div>
            <Input
                icon='tags'
                iconPosition='left'
                value={todo}
                onChange={handleChange}
                placeholder='To-do'
            />
            <Button basic color='red' disabled={todo===""} onClick={handleClick}>ADD TODO</Button>
            </div>
          
            {/* <todoContext.Provider value={{todoList:todoList,setTodoList:setTodoList}}> */}
                <TodoList
                //    todoList={store.getState()}
                //   store={store}
                  />
            {/* </todoContext.Provider> */}
            
        </React.Fragment>
    )
}
export default InputBox;

