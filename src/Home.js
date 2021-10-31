import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1400, itemsToShow: 4 },
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    var limit = 8;
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.drinks.slice(0, limit),
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="container-slider">
          <h1>Home Page</h1>
          <Carousel breakPoints={breakPoints}>
            {items.map((item) => (
              <Item key={item.name}>
                <img src={item.strDrinkThumb} alt="1" />
                <div className="text">
                  <span>{item.idDrink}</span>
                  <p>{item.strDrink}</p>
                </div>
              </Item>
            ))}
          </Carousel>
        </div>
      );
    }
  }
}
