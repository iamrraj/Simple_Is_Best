import React, { Component } from 'react'

class Product extends Component {
    render() {
        return (
            <div className='item'>
                <div className='image'>
                <img src='https://c8.alamy.com/comp/K93921/blue-glossy-button-blank-icon-square-empty-shape-isolated-form-background-K93921.jpg' alt="mage" height="60px;" width="6px;" />
                </div>
                <div className='middle aligned content'>
                <div className='description'>

                <a href="# " > Fort Knight</a>
                <p>Authentic renaissance actors, delivered in just two weeks.</p>
                </div>
                <div className='extra'>
                <span>Submitted by:</span>
                <img
                    className='ui avatar image'
                    src='images/avatars/daniel.jpg'
                    alt="lol"
                />
</div>
</div>
</div>
        )
    }
}

export default Product;
