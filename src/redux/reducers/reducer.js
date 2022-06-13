const INIT_STATE ={
    carts:[]
}


export const cartreducer =(state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADD_CART":

        const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

        if(IteamIndex>=0){
            state.carts[IteamIndex].quantity += 1
        }else{
            const temp = {...action.payload,quantity:1}
            return{
                ...state,
                carts: [...state.carts,temp]
            }
        }
            

            case 'REMOVE_CART':
                const data = state.carts.filter((el)=>el.id !== action.payload);

                return {
                    ...state,
                    carts : data
                }

                case 'REMOVE_ONE':
                    const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload);


                    if(state.carts[IteamIndex_dec].quantity>=1){
                       const dltitem = state.carts[IteamIndex_dec].quantity -= 1
                       console.log([...state.carts,dltitem]);

                       return{
                        ...state,
                        carts:[...state.carts]
                       }
                    }else if (state.carts[IteamIndex_dec].quantity=== 1){
                        
                        const data = state.carts.filter((el)=>el.id !== action.payload);

                        return {
                            ...state,
                            carts : data
                        }
         
                    }

            default:
                return state
    }
}