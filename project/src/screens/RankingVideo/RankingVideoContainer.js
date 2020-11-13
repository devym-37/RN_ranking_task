import React, { Component } from 'react';
import RankingVideoPresenter from '~/screens/RankingVideo/RankingVideoPresenter';

import RankingVideo from '~/popularVideoData';

class RankingVideoContainer extends Component {
    state = {
        rankingVideo: [],
        loading: false,
        startIndex: 0,
        endIndex: null,
        offset: 10,
    }

    componentDidMount(){
        const { _getData } = this;
        _getData();
    }

    _convertLoading = () => {
        this.setState({
            loading: true
        })
    }

    _getData =() => {
        const { rankingVideo, offset, startIndex } = this.state;
        const fetchData = RankingVideo;
        const sliceData = rankingVideo.concat(fetchData.slice(startIndex, startIndex + offset));

        this.setState({
            rankingVideo: sliceData,
            loading: false,
            startIndex: startIndex + offset
        })
    }

    _onEndReached = () => {
        const { loading } = this.state;
        const { _getData } = this;
        if(loading){
            return;
        } else {
            _getData();
        }
    }


    render(){
        const { rankingVideo, loading } = this.state;
        const { _getData, _onEndReached, _convertLoading } = this;

        return (
            <RankingVideoPresenter loading={loading} data={ rankingVideo } _getData={_getData} _onEndReached={_onEndReached} _convertLoading={_convertLoading}/>
        )
    }
};

export default RankingVideoContainer;