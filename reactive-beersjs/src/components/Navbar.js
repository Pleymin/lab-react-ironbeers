import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    
    render() {
        return (
            <div className="Navbar">
                <Link to="/">
                <img src="/homeBtnWhite.png" alt="homebtn"/>
                </Link>
            </div>
        )
    }
}

export default Navbar