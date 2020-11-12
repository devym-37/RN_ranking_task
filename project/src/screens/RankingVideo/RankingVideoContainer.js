import React, { Component } from 'react';
import RankingVideoPresenter from '~/screens/RankingVideo/RankingVideoPresenter';

import RankingVideo from '~/popularVideoData';

class RankingVideoContainer extends Component {
    state = {
        rankingVideo: []
    }

    componentDidMount(){
        const fetchData = RankingVideo;
        this.setState({
            rankingVideo: fetchData
        })
    }

    render(){
        const { rankingVideo } = this.state;

        return (
            <RankingVideoPresenter data={ rankingVideo } />
        )
    }
};

export default RankingVideoContainer;