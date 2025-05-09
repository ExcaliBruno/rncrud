import React from 'react'
import { Alert, FlatList, View } from 'react-native'
import users from '../data/user'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'

export default props => {

    function confirmUserDeletion(user) {
        console.warn('Confirmação: usuário ' + user.name + ' seria excluído.')
    }


    function getActions(user){
        console.log('getActions chamado para:', user.name);
        return (
            <>
                <Button 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange"/>}
                />
                <Button 
                    onPress={() =>confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red"/>}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        console.log("Renderizando usuário:", user.id)
        return (
            <ListItem
                bottomDivider 
                onPress={() => props.navigation.navigate('UserForm', user)}
            >
                <Avatar source={{ uri: user.avatarUrl }} rounded />
                <ListItem.Content >
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
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}
