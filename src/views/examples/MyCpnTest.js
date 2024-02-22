import React from "react";
import ChildCpn from "./ChildCpn";

class MyCpnTest extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'job1', title: 'Developer', salary: '500$' },
            { id: 'job2', title: 'Tester', salary: '400$' },
            { id: 'job3', title: 'Project Manager', salary: '1000$' }
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('click me');
        console.log('check state>>>', this.state);
    }

    render() {
        // console.log('check state>>>', this.state);
        return (
            <>
                <form>
                    <label htmlFor="fname">First Name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)} /><br />
                    <label htmlFor="lname">Last Name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)} /><br />
                    <input
                        type="submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>

                <ChildCpn
                    name={this.state.firstName}
                    age={20}
                    // abc = {this.state.arrJobs} co the dat ten khac
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyCpnTest;