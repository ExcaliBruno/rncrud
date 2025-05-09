import React, {createContext} from 'react';
import user from '../data/user';

const UsersContext = createContext({})



export const UsersProvider = props => {
    return (
        <UsersContext.Provider value={{
            state: {
                user
            }
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext