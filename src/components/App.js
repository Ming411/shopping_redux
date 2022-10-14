import React, {Component} from 'react';
import Product from './product';
import Cart from './cart';
export default class App extends Component {
  render() {
    return (
      <div>
        <Product />
        <Cart />
      </div>
    );
  }
}
