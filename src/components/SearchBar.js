import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <h4>Search</h4>
                <input type="text" placeholder="find smth!"/>
                <br/>
                <input type="checkbox" value="Only show products on stock"/>
            </div>
        )
    }
}

