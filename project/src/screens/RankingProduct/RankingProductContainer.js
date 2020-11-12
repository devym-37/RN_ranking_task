import React, { Component } from 'react';
import RankingProductPresenter from '~/screens/RankingProduct/RankingProductPresenter';

import RankingProduct from '~/popularProductData'

class RankingProductContainer extends Component {
    state = {
        products: []
    }

    componentDidMount(){
        const fetchData = RankingProduct;
        this.setState({
            products: fetchData
        })
    }


    render(){
        const { products } = this.state;

        return (
            <RankingProductPresenter products={products}/>
        )
    }
}

export default RankingProductContainer;