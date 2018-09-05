const initialState = {
    isLoggedIn : true,
    user:{
        displayName: 'Vikas',
        email: 'kundu.vikas13@gmail.com'
        
    },
    currency:[]
}

function CryptoApp (state = initialState, action){
    
    switch(action.type){
        case 'LOGIN':
            return Object.assign({}, state, {
                isLoggedIn: true,
                user: action.payload
            })
            
        case 'SUBSCRIBE':
            console.log("in reducer: ",action);
            return Object.assign({},state, {
                currency:[...state.currency, action.payload.currency]
            })
    
        default:
            return state;
    }
}

export default CryptoApp;