import React from "react";
import ChildCpn from "./ChildCpn";
// import ChildCpn2 from "./ChildCpn2";
import AddCpn from "./AddCpn";

class MyCpnTest extends React.Component {

    state = {
        arrJobs: [
            { id: 'job1', title: 'Developer', salary: '500' },
            { id: 'job2', title: 'Tester', salary: '400' },
            { id: 'job3', title: 'Project Manager', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        // console.log('check job from parent: ', job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    render() {
        // console.log('check state>>>', this.state);
        return (
            <>
                <AddCpn
                    addNewJob={this.addNewJob} />

                <ChildCpn
                    // abc = {this.state.arrJobs} co the dat ten khac
                    arrJobs={this.state.arrJobs}
                />
                {/* <ChildCpn2
                    name={this.state.firstName}
                    age={20}
                    // abc = {this.state.arrJobs} co the dat ten khac
                    arrJobs={this.state.arrJobs}
                /> */}
            </>
        )
    }
}

export default MyCpnTest;