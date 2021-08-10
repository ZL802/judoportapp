import React, { Component } from 'react'
import Home from './HomeComponent'
import Directory from './DirectoryComponent'
import RosterInfo from './RosterInfoComponent'
import About from './AboutComponent'
import Contact from './ContactComponent'
import Location from './LocationComponent'
import RankInfo from './RankComponent'
import Constants from 'expo-constants'
import { View, Platform, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, overlayColor } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import { Icon } from 'react-native-elements'
import SafeAreaView from 'react-native-safe-area-view'


const DirectoryNavigator = createStackNavigator(
    {
        Directory: { 
            screen: Directory,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='users'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
         },
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
        Home:  { screen: Home }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5c8cd7'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
)

const AboutNavigator = createStackNavigator(
    {
        About:  {screen: About }
      
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5c8cd7'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='newspaper'
                type='font-awesome-5'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
)

const ContactNavigator = createStackNavigator(
    {
        Contact:  {screen: Contact }
      
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5c8cd7'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='phone-square-alt'
                type='font-awesome-5'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
)

const LocationNavigator = createStackNavigator(
    {
        Location:  {screen: Location }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5c8cd7'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='map-pin'
                type='font-awesome-5'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
)

const RanksNavigator = createStackNavigator(
    {
        Progress: {screen: RankInfo }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5c8cd7'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='book'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
)

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Options</Text>
                </View>
                <DrawerItems {...props} />
            </SafeAreaView>
    </ScrollView>
)

const MainNavigator = createDrawerNavigator(
    {
        Home: { 
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                    name='home'
                    type='font-awesome'
                    size={32}
                    color={tintColor}
                />
                )
            } 
        },
        Directory: { 
            screen: DirectoryNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='users'
                        type='font-awesome'
                        size={32}
                        color={tintColor}
                    />
                )
            }
         },
        About: { 
            screen: AboutNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='newspaper'
                        type='font-awesome-5'
                        size={32}
                        color={tintColor}
                    />
                )
            } 
        },
        Contact: { 
            screen: ContactNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='phone-square-alt'
                        type='font-awesome-5'
                        size={32}
                        color={tintColor}
                    />
                )
            }
         },
        Location: { 
            screen: LocationNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='map-pin'
                        type='font-awesome-5'
                        size={32}
                        color={tintColor}
                    />
                )
            } 
        },
        Progress: {
            screen: RanksNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='book'
                        type='font-awesome'
                        size={32}
                        color={tintColor}
                    />
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#5c8cd7',
        contenComponent: CustomDrawerContentComponent,
        overlayColor: '#FFF',
        contentOptions: {
            activeTintColor: '#FFF',
            activeBackgroundColor: '#D0020D',
            inactiveTintColor: '#FFF',
            labelStyle: '32px'
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

styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#D0020D',
        fontSize: 32
    }
})

export default Main