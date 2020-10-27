import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h2>IronStore</h2>
          <FilterableProductTable products={data.data} />
        </div>
      </div>
    );
  }
}
