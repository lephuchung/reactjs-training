import React from "react";

class AddCpn extends React.Component {
    state = {
        jobTitle: '',
        salary: '',
    }

    handleChangeJobTitle = (event) => {
        this.setState({
            jobTitle: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('click me');
        console.log('check state>>>', this.state);
    }

    render() {
        return (
            <>
                <div>
                    <form>
                        <label htmlFor="jobTitle">Job's title:</label><br />
                        <input
                            type="text"
                            value={this.state.jobTitle}
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