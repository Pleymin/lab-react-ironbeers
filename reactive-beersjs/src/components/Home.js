import React from 'react'
import { Link } from 'react-router-dom';

class Home extends React.Component {
    
    render() {
        return (
            <div className="Home">
                <div Link className="HomeCard">
                    <Link to="/beers">
                    <img src="/beers.png" alt="allBeers"/>
                    <h2>All Beers</h2>
                    <p>Lorem Ipsum</p>
                    </Link>
                </div>
                <div className="HomeCard">
                    <Link to="/random-beers">
                    <img src="/random-beer.png" alt="allBeers"/>
                    <h2>Random Beer</h2>
                    <p>Lorem Ipsum</p>
                    </Link>
                </div>
                <div className="HomeCard">
                    <Link to="/new-beer">
                    <img src="/new-beer.png" alt="allBeers"/>
                    <h2>New Beer</h2>
                    <p>Lorem Ipsum</p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home