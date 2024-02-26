import React from "react";

class AddCpn extends React.Component {
    state = {
        title: '',
        salary: '',
    }

    handleChangeJobTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // alert('click me');
        // console.log('check state>>>', this.state);
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params');
            return;
        }
        console.log('check data input: ', this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
                <div>
                    <form>
                        <label htmlFor="title">Job's title:</label><br />
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={(event) => this.handleChangeJobTitle(event)} /><br />
                        <label htmlFor="salary">Salary:</label><br />
                        <input
                            type="text"
                            value={this.state.salary}
                            onChange={(event) => this.handleChangeSalary(event)} /><br />
                        <input
                            type="submit"
                            onClick={(event) => this.handleSubmit(event)} />
                    </form>
                </div>
            </>
        )
    }
}
export default AddCpn;