import {Router, Route, hashHistory, Link, IndexRoute, IndexLink} from 'react-router';
import $ from 'jquery';

export function pageInfo(info){
    console.log(info);
    return{
        type: 'fetchImage',
        payload: info
    }
}

export function fetchImage(){
    let asyncAction = function(dispatch){
        $.ajax({
            url: 'http://localhost:4000/api/products/'
        })
        .then(info => dispatch(pageInfo(info)))
    }
    return asyncAction;
}
