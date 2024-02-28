import React from "react";
import './ListToDo.scss';
import AddToDo from "./AddToDo";
import { toast } from 'react-toastify';

class ListToDo extends React.Component {

    state = {
        addTodo: '',
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Coding web' },
            { id: 'todo3', title: 'Playing game' }
        ]
    }

    handleAddTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
    }

    render() {
        let listTodos = this.state.listTodos;

        return (
            <>
                <div>
                    Simple Todo App With Le Phuc Hung
                </div>
                <div className="list-todo-container">
                    <AddToDo addNewToDo={this.handleAddTodo} />
                    <div className="list-todo-content">

                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        <button type="button" className="edit">Edit</button>
                                        <button type="button" className="delete">Delete</button>
                                        <span> {index + 1} - {item.title} </span>
                                    </div>
                                )
                            })}


                    </div>
                </div>
            </>
        )
    }

}

export default ListToDo;