export const Count=(state=1,action)=>{
    switch(action.type){
        case "PLUS":{
            return state=state+1
        }
        default: {
            return state
        }
    }
}