import React from 'react';
import axios from 'axios';
import BeerDetails from './BeerDetails.js'

class BeerList extends React.Component {
    
    state = {
        beerList: [],
        showItems: 10
    }

    // 👨‍🏫
    getBeerDetail = () => {
        
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
          .then( responseFromApi => {
              const beerList = responseFromApi.data;
              this.setState({
                beerList: beerList
              })
                  
          })
          .catch(err =>console.log(err))
    }

    componentDidMount(){
        this.getBeerDetail();
    }

    render() {

        const items = this.state.beerList.slice(0,this.state.showItems)
        console.log(items)

        return (
            <div className="BeersList">
                {items.map(element => {
                    return  (
                        <BeerDetails
                        key={element._id}
                        {...element}
                         />
                    )
                })}
            </div>
        )
    }
}

export default BeerList


/* [0 … 99]
0:
image_url: "https://images.punkapi.com/v2/2.png"
_id: "5ccc1e2caea376c9272c5a76"
id: 2
name: "Trashy Blonde"
tagline: "You Know You Shouldn't"
first_brewed: "04/2008"
description: "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist."
abv: 4.1
ibu: 41.5
target_fg: 1010
target_og: 1041.7
ebc: 15
srm: 15
ph: 4.4
attenuation_level: 76
volume: {value: 20, unit: "liters"}
boil_volume: {value: 25, unit: "liters"}
method: {mash_temp: Array(1), fermentation: {…}, twist: null}
ingredients: {malt: Array(3), hops: Array(4), yeast: "Wyeast 1056 - American Ale™"}
food_pairing: (4) ["Fresh crab with lemon", "Garlic butter dipping sauce", "Goats cheese salad", "Creamy lemon bar doused in powdered sugar"]
brewers_tips: "Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort."
contributed_by: "Sam Mason <samjbmason>"
expireAt: "2020-02-20T19:23:17.188Z"
__proto__: Object
*/