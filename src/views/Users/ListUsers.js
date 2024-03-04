import React from "react";
import axios from "axios";
import './ListUsers.scss';

class ListUsers extends React.Component {

    state = {
        listUsers: []
    }

    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(res => {
        //         console.log('check res >>>', res.data.data);
        //     })
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
        console.log('check res >>>', res.data.data);

    }

    render() {
        let { listUsers } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id} className="child">
                                    {index + 1} - {item.first_name} - {item.last_name}
                                </div>
                            )
                        })}

                </div>

            </div>
        )
    }
}

export default ListUsers;