import React from 'react';
import { Link } from 'react-router-dom'; 

class BeerDetails extends React.Component {
    
      render() {
        return (
            <div className="BeerDetails">
               
                <div className="BeerDetailsImg">
                    <Link to={`/beers/${this.props._id}`}>
                    <img src={this.props.image_url} alt="beerPicture"/>
                    </Link>
                </div>
                <div className="BeerDetailsText">
                    <h2>{this.props.name}</h2>
                    <h3>{this.props.tagline}</h3>
                    <p>Created by{this.props.contributed_by}</p>
                </div>
            </div>
        )
    }
}

export default BeerDetails