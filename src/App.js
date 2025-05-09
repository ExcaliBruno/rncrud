import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'


const Stack = createStackNavigator()

export default props => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="UserList">
                <Stack.Screen 
                    name="UserList"
                    cmponent = {UserList}
                />
                <Stack.Screen 
                    name="UserForm"
                    cmponent = {UserForm}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}