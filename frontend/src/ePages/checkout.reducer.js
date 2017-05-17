export default function CheckoutReducer(state={userinfo:null},action){
  if(action.type === 'fetchimage'){
    return Object.assign({}, state, {
      allItems: action.payload
    });
  }else if(action.type === 'login'){
    return Object.assign({}, state, {
      userInfo: action.payload
    });
}  else if (action.type === 'userlogin'){
      return Object.assign({}, state, {
        uLog: action.text
      });
  }  else if (action.type === 'passlogin'){
        return Object.assign({}, state, {
          uPass: action.text
        });
      }
  return state;
}
