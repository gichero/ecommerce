const INITIAL_STATE = {
    userName: null,
    email: null,
    firstName: null,
    lastName: null,
    password: null
};

export default function reducer(state = INITIAL_STATE, action){
    if(action.type === 'userName'){
        return Object.assign({}, state, {
            userName: action.text
        });
    }
    else if(action.type === 'email'){
        return Object.assign({}, state, {
            email:action.text
        });
    }
    else if(action.type === 'firstName'){
        return Object.assign({}, state, {
            firstName: action.text
        });
    }
    else if(action.type === 'lastName'){
        return Object.assign({}, state, {
            lastName: action.text
        });
    }
    else if(action.type === 'password'){
        return Object.assign({}, state, {
            password: action.text
        });
    }
    else{
        return state;
    }
}
