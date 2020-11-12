import React, { Component } from 'react';
import RankingPresenter from '~/screens/Ranking/RankingPresenter';

class RankingContainer extends Component {
    state = {
        pageTitle: "랭킹"
    }

    render(){
        const { pageTitle } = this.state;

        return (
            <RankingPresenter pageTitle={pageTitle}/>
        )
    }
}

export default RankingContainer;