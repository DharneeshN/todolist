import React, { useContext } from 'react';
import { useStore } from 'react-redux';
import { Button, Card, Segment } from 'semantic-ui-react';
import todoContext from './todoContext';
import { store } from './InputBox'


const TodoList = () => {
    // const ctx = useContext(todoContext);

    // const handleDelete = (event) => {
    //     ctx.setTodoList(ctx.todoList.filter(todoItem=>todoItem.todo!==event.target.value))
    // }

    const handleClick=(event)=>{
        store.dispatch({
            type: 'DELETE',
            payload: event.target.value
          })
    }

    useEffect(() => {
        console.log(store.getState());
    },[handleClick])

    return (
      <Segment>
        <React.Fragment>
            <Card.Group itemsPerRow={3}>
                {store.getState().map((todoItem,index)=>
                   <Card color='red' key={index}>
                        <Card.Content>{todoItem.todo}</Card.Content>
                        <Card.Content>
                            <Button basic color="red" value={todoItem.todo} onClick={handleClick}>DELETE TODO</Button>
                        </Card.Content>
                    </Card>
                 )}
            </Card.Group>   
        </React.Fragment>
        </Segment>
    )
}

export default TodoList;
