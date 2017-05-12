import $ from 'jquery';

function pageInfo(info){
    return{
        type: 'signup'
    }
}


export function signup(data){
    console.log(data.pass +' '+data.confPass)
    if(data.pass === data.confPass){
        let asyncAction = function(dispatch){
            $.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: 'http://localhost:4000/api/user/signup',
                data: JSON.stringify({
                    username: data.username,
                    email: data.email,
                    firstName: data.firstname,
                    lastName: data.lastname,
                    password: data.password
                }),
                dataType: 'json'
            })
            .then(info=>dispatch(pageInfo(info)))
        }
        return asyncAction;
    }
}

export function write(event, type){
    return({
        type: type,
        text: event
    });
}
