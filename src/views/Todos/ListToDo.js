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
        ],
        editTodo: {},
    }

    handleAddTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
    }

    handleDeleteTodo = (todo) => {
        let currentListTodo = this.state.listTodos;
        currentListTodo = currentListTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentListTodo
        })
        toast.success("Delete Success!")
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex(item => item.id === todo.id);

            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success('Edit Success!')
            return;
        }
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        // console.log('check empty obj:  ', isEmptyObj);

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
                                        <button type="button" className="delete" onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                        <button type="button" className="edit" onClick={() => this.handleEditTodo(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                <span>Save</span>
                                                :
                                                <span>Edit</span>
                                            }
                                        </button>
                                        {isEmptyObj ?
                                            <span> {index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span> {index + 1} - <input type="text" value={editTodo.title} onChange={(event) => this.handleOnChangeEditTodo(event)} /> </span>
                                                    :
                                                    <span> {index + 1} - {item.title} </span>

                                                }

                                            </>
                                        }

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