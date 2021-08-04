import React, { Component } from 'react'
import Home from './HomeComponent'
import Directory from './DirectoryComponent'
import RosterInfo from './RosterInfoComponent'
import About from './AboutComponent'
import Contact from './ContactComponent'
import Location from './LocationComponent'
import Constants from 'expo-constants'
import { View, Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, overlayColor } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'


const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        RosterInfo: { screen: RosterInfo }
    },
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5c8cd7'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const HomeNavigator = createStackNavigator(
    {
        Home:  {screen: Home }
      
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5c8cd7'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const AboutNavigator = createStackNavigator(
    {
        About:  {screen: About }
      
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5c8cd7'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const ContactNavigator = createStackNavigator(
    {
        Contact:  {screen: Contact }
      
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5c8cd7'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const LocationNavigator = createStackNavigator(
    {
        Location:  {screen: Location }
      
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5c8cd7'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator },
        About: { screen: AboutNavigator },
        Contact: { screen: ContactNavigator },
        Location: { screen: LocationNavigator }
    },
    {
        drawerBackgroundColor: '#5c8cd7',
        overlayColor: '#FFF',
        contentOptions: {
            activeTintColor: '#FFF',
            activeBackgroundColor: '#D0020D',
            inactiveTintColor: '#FFF',
            labelStyle: '20px'
        }
    }
)

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

    render() {
        return(
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight  
            }}>
               <AppNavigator />
            </View>
        )
    }
}

export default Main