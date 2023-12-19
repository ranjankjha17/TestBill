import React from 'react'
import { Home } from './Home'
import { PartyForm } from '../components/PartyForm'
import { PartyFormList } from '../components/PartyFormList'
import { Logout } from '../components/Logout'
import { View } from 'react-native'

export const Main = () => {
    return (
        <View style={{backgroundColor:"#fff",minHeight:710}}>
           <Logout />
            <Home />
            <PartyForm />
            <PartyFormList />
        </View>
    )
}
