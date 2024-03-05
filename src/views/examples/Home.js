import React from "react";
import logo from '../../assets/images/testImg.jpg'

class Home extends React.Component {
    render() {
        return (
            <>
                <p>
                    Lê Phúc Hưng, hello world.
                </p>
                <img src={logo} />
            </>
        )
    }
}

export default Home;