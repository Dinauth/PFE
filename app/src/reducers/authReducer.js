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
        default:
            return state
    }
}