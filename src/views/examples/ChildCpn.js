import React from "react";

class ChildCpn extends React.Component {

    state = {

    }


    render() {
        return (
            <>
                <div>
                    Child Component: {this.props.name};
                </div>
            </>
        )
    }
}

export default ChildCpn;