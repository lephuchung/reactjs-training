import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnClickAddToDo = () => {
        if (!this.state.title) {
            toast.error(`Missing title's Todo!`)
            return;
        }

        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addNewToDo(todo);
        toast.success("Add Success!");
        this.setState({
            title: ''
        })

    }

    render() {
        let { title } = this.state;
        return (
            <>
                <div className="add-todo">
                    <input type="text" value={title} onChange={(event) => this.handleOnChangeTitle(event)} />
                    <button type="button" onClick={(eve) => this.handleOnClickAddToDo()}>Add</button>
                </div>
            </>
        )
    }
}

export default AddToDo;