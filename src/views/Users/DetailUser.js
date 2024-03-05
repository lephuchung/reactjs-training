import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class DetailUser extends React.Component {

    state = {
        user: {}
    }

    async componentDidMount() {
        const currentURL = window.location.href;
        const parts = currentURL.split('/');
        const lastPart = parts[parts.length - 1];
        console.log('check last', lastPart);
        let res = await axios.get(`https://reqres.in/api/users/${lastPart}`)
        console.log('res: ', res);
        this.setState({
            user: res && res.data && res.data.data ? res.data.data : {}
        })

    }
    render() {
        let user = this.state.user;
        let isEmptyObj = Object.keys(user).length === 0;

        return (
            <div>
                {isEmptyObj === false &&
                    <>
                        <div>User's Id: {user.id} </div>
                        <div>User's name: {user.first_name} {user.last_name}</div>
                        <div>User's email: {user.email} </div>
                        <img src={user.avatar} />
                        <div>
                            <button><Link to='/user'>Back</Link></button>
                        </div>
                    </>
                }
            </div>
        );
    }
}

export default DetailUser;