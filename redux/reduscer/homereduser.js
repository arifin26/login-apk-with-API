import{CHANGE_NAME,CHANGE_UMUR,CHANGE_ALAMAT} from '../type/index'


const initialname={
    name:'',
    umur:'',
    alamat:''
}

export const homeReduscer =(state = initialname,action) =>{
    switch (action.type) {
        case CHANGE_NAME:
            
        return{...state,name:action.payload}

        case CHANGE_UMUR:
            return{...state,umur:action.payload}

        case CHANGE_ALAMAT:
            return{...state,alamat:action.payload}
    
        default:
            return state
    }
}