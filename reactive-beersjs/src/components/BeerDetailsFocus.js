import React from 'react';
import axios from 'axios'

class BeerDetails extends React.Component {
    
    state = {
        theBeer: ""
    }

    getBeerFocus = () => {
        console.log(this.props.match)
        if(this.props.match.path === "/random-beers"){
            axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then( responseFromApi => {
                const theBeer = responseFromApi.data;
                this.setState({
                  theBeer: theBeer
                })
          })
          .catch(err =>console.log(err))
        }
        else {
            const {params}=this.props.match;
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
              .then( responseFromApi => {
                  const theBeer = responseFromApi.data;
                  this.setState({
                    theBeer: theBeer
                  })
                      
              })
              .catch(err =>console.log(err))
        }
        
    }

    componentDidMount(){
        this.getBeerFocus();
    }

    render() {
        return (
            <div className="BeerDetailsFocus">
                <div className="BeerDetailsImg">
                    <img src={this.state.theBeer.image_url} alt="beerPicture"/>
                </div>
                <div className="BeerDetailsText">
                    <h2>{this.state.theBeer.name}</h2>
                    <h3>{this.state.theBeer.tagline}</h3>
                    <p>Created by{this.state.theBeer.contributor}</p>
                </div>
                <div>
                    <h2>{this.state.theBeer.description}</h2>
                </div>
            </div>
        )
    }
}

export default BeerDetails