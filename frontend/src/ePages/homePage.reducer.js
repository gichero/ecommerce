const INITIAL_STATE = {
  allImages: []
};

export default function reducer(state = INITIAL_STATE, action) {
    if (action.type === 'fetchImage'){
        console.log(action.payload)
        return Object.assign({}, state, {
            allImages: action.payload
        });

    }
  return state;
}
