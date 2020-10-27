import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    console.log(this.props.products);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {this.props.products.map((item) => {
                  return <ProductRow product={item} key={item.id} />;
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
