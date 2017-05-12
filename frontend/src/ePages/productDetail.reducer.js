
export default function productDetailReducer(state={items: []},action){
    if(action.type === 'fetchImage'){
        return Object.assign({}, state, {
            items: action.payload
        });
    }
    return state;
}
