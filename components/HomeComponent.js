import React, { Component,} from 'react';
import  { View, Text, ImageBackground,  } from 'react-native'

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <View>
                <ImageBackground source={require('./img/USJA_Logo_Optimized.jpg')} style={{width: '97%', height: '100%'}}
                 resizeMode={'contain'}
                 opacity={.25}>
                    <Text> Home Component</Text>
                </ImageBackground>
            </View>
        )
    }
}

export default Home