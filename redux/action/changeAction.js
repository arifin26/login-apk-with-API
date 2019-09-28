import {CHANGE_NAME,CHANGE_UMUR,CHANGE_ALAMAT} from '../type/index'


export const rubahnama =(payload) => {
    return{
        type :CHANGE_NAME,
        payload : payload
    }
}


export const rubahumur =(payload) => {
    return{
        type :CHANGE_UMUR,
        payload : payload
    }
}


export const rubahalamat =(payload) => {
    return{
        type :CHANGE_ALAMAT,
        payload : payload
    }
}