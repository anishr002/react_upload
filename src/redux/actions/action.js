export const ADD =(item)=>{
    return{
        type:"ADD_CART",
        payload: item
    }
}

//REMOVE ITEMS
export const DLT =(id)=>{
    return{
        type:"REMOVE_CART",
        payload: id
    }
}


//REMOVE INDIVIDUAL ITEMS

export const REMOVE =(iteam)=>{
    return{
        type:"REMOVE_ONE",
        payload: iteam
    }
}