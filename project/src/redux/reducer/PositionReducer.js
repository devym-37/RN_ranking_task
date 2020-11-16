const initialState = {
    position: 0,
};

const positionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POSITION':{
            return {
                ...state,
                position: action.position
            };
        }
    
        default:{
            return state;
        }
    }
}


export default positionReducer;