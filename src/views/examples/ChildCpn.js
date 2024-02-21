import React from "react";

class ChildCpn extends React.Component {

    state = {

    }


    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        // let { name, age }
        let { age, name } = this.props; // react tu map bien cung ten voi props, khong quan trong thu tu gan
        return (
            <>
                <div>
                    {/* Child Component: {this.props.name} - {this.props.age}; */}

                    Child Component: {name} - {age};
                </div>
            </>
        )
    }
}

export default ChildCpn;