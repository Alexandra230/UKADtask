import React, { Component } from 'react';

export default class Products extends Component {
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
        <>
          <div className="container-prod">
            <h1>Product Page</h1>
            <div className="products">
              {items.map((item) => (
                <div key={item.name} className="cards">
                  <div className="img-cont">
                    <img src={item.strDrinkThumb} alt="1" />
                  </div>
                  <div className="prodtext">
                    <span>{item.idDrink}</span>
                    <p>{item.strDrink}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
  }
}
