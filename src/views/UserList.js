import React, { useContext } from 'react'
import { FlatList, View, Alert } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default props => {

    const {state} = useContext(UsersContext)
   
    function confirmUserDeletion(user) {
        setTimeout(() => {
            Alert.alert(
            'Excluir Usuário',
            `Deseja excluir o usuário ${user.name}?`,
            [
                {
                    text: 'Sim',
                    onPress: () => {
                        console.warn(`Usuário ${user.name} excluído!`);
                    },
                },
                {
                    text: 'Não',
                    style: 'cancel',
                },
            ],
            { cancelable: false }
            );
        }, 0);
    }

    function getActions(user){
        return (
            <>
                <Button 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange"/>}
                />
                <Button 
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red"/>}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem bottomDivider>
                <Avatar source={{ uri: user.avatarUrl }} rounded />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                {getActions(user)}
            </ListItem>
        )
    }

    return (
        <View style={{ flex: 1 }} >
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.user}
                renderItem={getUserItem}
            />
        </View>
    )
}
