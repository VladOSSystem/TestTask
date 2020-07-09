const filmReducer = (state = {}, action) => {
    switch(action.type){
        case 'DATA_FLOW':
            return action.payload
        default:
            return state
    }
}
export default filmReducer