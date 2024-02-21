import React from "react";
import ChildCpn from "./ChildCpn";

class MyCpnTest extends React.Component {

    state = {
        firstName: '',
        lastName: ''
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
                    name={"Child 1"}
                    age={20} />
                <ChildCpn
                    name={"Child 2"}
                    age={22} />
                <ChildCpn
                    name={"Child 3"}
                    age={26} />
            </>
        )
    }
}

export default MyCpnTest;