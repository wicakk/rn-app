import { combineReducers } from "redux";

const initialState = {
    name: 'wicak',
}

const initialRegistarState = {
    title: 'page login',
    form:{
        fullName: '',
        email: '',
        password: '',
    }
}

const RegistarReducer = (state =initialRegistarState, action)=>{
    if(action.type === 'SET_FORM'){
        return{
            ...state,
            form:{
                ...state.form,
                [action.inputType]:action.inputValue,
            }
        }
    }
    return state;
}

const initialLoginState = {
    title: 'page login',
    isLogin: true,
    form:{
        email: '',
        password: '',
    }
    
}

const LoginReducer = (state =initialLoginState, action)=>{
    if(action.type === 'SET_FORM'){
        return{
            ...state,
            form:{
                ...state.form,
                [action.inputType]:action.inputValue,
            }
        }
    }
    return state;
}

const reducer = combineReducers({
    RegistarReducer,
    LoginReducer,
});

export default reducer;