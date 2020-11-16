import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, ActivityIndicator, Alert } from 'react-native';
import RankingVideoPresenter from '~/screens/RankingVideo/RankingVideoPresenter';
import VideoCard from '~/components/VideoCard';

import RankingVideo from '~/popularVideoData';

const FETCHDATA_START_OFFSET = 5;
const FETCHDATA_MORE_OFFSET = 10;

function RankingVideoContainer() {
    const [rankingVideo, setRankingVideo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(15);
    const [isFetching, setIsFetching] = useState(false);

    const  position  = useSelector((state) => state.PositionReducer.position);

    const _getData = async () => {
        setIsFetching(true);
        console.log('startIndex----getData', startIndex)
        console.log('rankingVideo----getData', rankingVideo)
        setRankingVideo(rankingVideo.concat(RankingVideo.slice(0, startIndex + FETCHDATA_MORE_OFFSET)));
        setStartIndex(startIndex + FETCHDATA_MORE_OFFSET);
        console.log('rankingVideo.lenght-----getData', rankingVideo.length)
        await _delayFetch();
    }

    const _delayFetch = useCallback(() => {
        setTimeout(() => {
            setIsFetching(false);
        }, 8000);
    }, [])
    
    const _onEndReached = () => {
        if(isFetching){
            return;
        }else{
            _getData();
        }
    }

    const _renderItem = useCallback((item, index) => {
        return (
            <VideoCard key={`${item, index}`} item={item} />
        )
    }, [])

    const _keyExtractor = useCallback((item, index) => {
        return index.toString();
    }, [])
    
    useEffect(() => {
        _getData();
    }, [])

    if(loading && !rankingVideo){
        return(
            <View style={{flex: 1, justifyContent: "center"}}>
                <ActivityIndicator />
            </View>
        )
    }
    console.log('position------>>>', position);
    console.log('startIndex---beforeRender', rankingVideo.length);
    console.log('isFetching-----beforeRender ', isFetching);
    return (
        <RankingVideoPresenter  
            data={ rankingVideo } 
            getData={ _getData } 
            onEndReached={ _onEndReached }
            renderItem={ _renderItem }
            keyExtractor={ _keyExtractor }
            isFetching={isFetching}
            position={position}
        />
    )
};



export default RankingVideoContainer;