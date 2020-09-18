import {CONSTANTS} from '../actions'

export const addLabel=(name,color)=>{
    return{
        type:CONSTANTS.ADD_LABEL,
        payload:{
            name,
            color
        }
    }
}