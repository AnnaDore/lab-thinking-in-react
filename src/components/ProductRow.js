import React, { Component } from 'react'

export default class ProductRow extends Component {
    
    render() {
        console.log(this.props.product)
        return (
            <div>
                <p>{this.props.product.name} {this.props.product.price}</p>
            </div>
        )
    }
}
