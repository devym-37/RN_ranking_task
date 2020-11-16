import * as types from '~/redux/types/types';

export const getPosition = (position) => ({
    type: types.GET_POSITION,
    position
})