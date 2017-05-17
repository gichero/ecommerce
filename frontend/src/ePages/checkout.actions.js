import $ from 'jquery';

export function write(event,type){
  return {
    type: type,
    text: event
  }
}
export function getItems(user){
  let asyncAction = function(dispatch){
    $.ajax({
      url: 'http://localhost:4000/api/products'
    })
    .then(info=>dispatch(pageInfo(info)))
  }
  return asyncAction;
  }
}
