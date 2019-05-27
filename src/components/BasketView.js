import React from "react";
import "./App.css";

class BasketView extends React.Component {
  render() {
    return (
      <>
        <div id="cart" />
        {this.props.products.map(item => {
          return (
            <div key={item.id + 10}>
              <ul className="user-cart--list">
                <li>
                  <button key={item.id} onClick={() => this.props.deleteItem(item.id, item.price)}>x</button>
                  {item.id - 1} - {item.name} - {item.price} zl
                </li>
              </ul>
            </div>
          );
        })}
      </>
    );
  }
}

export default BasketView;
