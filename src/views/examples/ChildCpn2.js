import React from "react";

// function component
const ChildCpn2 = (props) => {
    console.log('check child props: ', props);
    let { arrJobs } = props;
    return (
        <>
            <div className="job-lists">
                {
                    arrJobs.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ChildCpn2;