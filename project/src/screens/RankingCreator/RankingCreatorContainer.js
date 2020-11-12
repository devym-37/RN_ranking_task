import React, { Component } from 'react';
import RankingCreatorPresenter from '~/screens/RankingCreator/RankingCreatorPresenter';

import RankingCreator from '~/creatorData';

class RankingCreatorContainer extends Component {
    state = {
        creators: []
    }

    componentDidMount(){
        const fetchData = RankingCreator;
        this.setState({
            creators: fetchData
        })
    }

    render(){
        const { creators } = this.state;

        return (
            <RankingCreatorPresenter creators={creators}/>
        )
    }
}

export default RankingCreatorContainer;