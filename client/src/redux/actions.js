export const LOGIN = 'LOGIN';
export const SUBSCRIBE = 'SUBSCRIBE';


export function login(user){
    return {
        type: LOGIN,
        payload: user
    }
}

export function subscribe(data){
    
    return {
        type: SUBSCRIBE,
        payload: data
    }
}