import React from "react";

// class Component
class ChildCpn extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log(job);
        this.props.deleteAJob(job)
    }

    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        // let { name, age }
        let { age, name, arrJobs } = this.props; // react tu map bien cung ten voi props, khong quan trong thu tu gan
        let a = '';
        let { showJobs } = this.state;
        // let check = showJobs === true ? 'true' : 'false';
        // console.log('check showJobs: ', check);
        return (
            <>
                {/* {<div>
                    Child Component: {this.props.name} - {this.props.age};
                    Child Component: {name} - {age}
                </div>} */}

                {/* co the viet nhu sau
                {showJobs === false && <>phan muon in neu [showJobs === false] dung} </>*/}

                {showJobs === false ?
                    <>
                        <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                    </>
                    :
                    <>
                        <div className="job-lists">
                            {
                                a = arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}$ <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                            {/* {console.log('check map array >>>', a)} */}
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}

export default ChildCpn;