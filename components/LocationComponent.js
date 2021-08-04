import React, { Component } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps'
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native'
import { CLUBS } from '../shared/clubs'

function RenderMap({item}) {
    if(item) {
        return(
            <View style={styles.container}>
                <MapView style={styles.map} initialRegion={{
                    latitude: 40.8123,
                    longitude: -73.0784,
                    latitudeDelta: .4922,
                    longitudeDelta: .2421,
                    }} 
                > 
                    <Marker coordinate={{
                        latitude: 40.77071239788484, 
                        longitude: -73.08225197313547
                    }}
                    pinColor='#5c8cd7'
                    >
                        <Callout>
                            <Text>Long Island Judo Club @ Vamos MMA</Text>
                        </Callout>
                    </Marker>
    
    </MapView>
            </View>
            
        )
    }
}

class Location extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clubs: CLUBS
        }
    }

    static navigationOptions = {
        title: 'Location'
    }
    
    render() {
        return(
            /*<ImageBackground source={require('./img/USJA_Logo_Optimized.jpg')} style={{width: '97%', height: '100%'}}
                resizeMode={'contain'}
                opacity={.25}>*/
                    <RenderMap item={this.state.clubs.filter(club => club.myclub)[0]} />
                //</ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})

export default Location