import React, {createContext, useReducer} from 'react';
import user from '../data/user';

const UsersContext = createContext({})
const initialState = { user}

const actions = {
    updateUser(state, action){
        const update = action.payload
        return {
            ...state,
            user: state.user.map(u => u.id === update.id ? update : u)
        }
    },
    createUser(state, action){
        const user = action.payload
        user.id = Math.random()
        return{
            ...state,
            user: [...state.user, user],
        }
    },
    deleteUser(state, action){
        const user = action.payload
        return {
             ...state,
            user: state.user.filter(u => u.id !== user.id) 
        }
    }
}

export const UsersProvider = props => {

    function reducer(state, action){
        const fn = actions[action.type]
        return fn? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{
            state, dispatch
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext