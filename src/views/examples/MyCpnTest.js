import React from "react";

class MyCpnTest extends React.Component {

    state = {
        name: 'Le Phuc Hung',
        uni: 'Hust'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)} />
                    <p>
                        Hello from MyComponent Test,
                        My name is {this.state.name}
                    </p>
                </div>
                <div className="second">
                    <p>
                        I'm from {this.state['uni']}
                    </p>
                </div>
            </>
        )
    }
}

export default MyCpnTest;