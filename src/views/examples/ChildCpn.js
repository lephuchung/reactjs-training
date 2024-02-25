import React from "react";

// class Component
class ChildCpn extends React.Component {

    state = {

    }


    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        // let { name, age }
        let { age, name, arrJobs } = this.props; // react tu map bien cung ten voi props, khong quan trong thu tu gan
        let a = '';
        return (
            <>
                <div>
                    {/* Child Component: {this.props.name} - {this.props.age}; */}
                    Child Component: {name} - {age}
                </div>
                <div className="job-lists">
                    {
                        a = arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                    {/* {console.log('check map array >>>', a)} */}
                </div>
            </>
        )
    }
}

export default ChildCpn;