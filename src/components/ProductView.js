import React from "react";
import "./App.css";

class ProductView extends React.Component {
  render() {
    return (
      <>
        <div id="product"/>
        {this.props.items.map(item => {
          return (
            <div key={item.id} id="product">
            <div className="product-box">
              <div>
                <img className="product-box--image" src={item.photo} alt="Logo" />
              </div>
              <div>
                <h2>{item.name}</h2>
                <pre>{item.price} zl</pre>
                <p>{item.description}</p>
                <button className="js-product-add" item={item} onClick={() => this.props.addItem(item, item.id)}>
                  Dodaj do koszyka
                </button>
              </div>
            </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default ProductView;
