import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
    render() {
        console.log(this.props.products)
        return (
            <div>
                <SearchBar />
     
                <ProductTable products={this.props.products}/>
            </div>
        )
    }
}
