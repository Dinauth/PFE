export const SignInReducer = (state,action) =>{
    switch(action.type){
        case  'UPDATE_SIGN_IN':
            return{
                userToken:action.payload.userToken
            }
        case  'CARD_UPDATE':
                return{
                    userCard:action.payload.userCard
                }
        case  'ORDER_UPDATE':
            return{
                orderCard:action.payload.orderCard
            }
        default:
            return state
    }
}