import React, { Component } from 'react'
import { ScrollView, ImageBackground, Text } from 'react-native'
import { Card } from 'react-native-elements'
import { CLUBS } from '../shared/clubs'

function RenderContact({item}) {
    if(item) {
        return (
            <Card title='Contact Info'
                wrapperStyle={{margin: 10}}
                container
            >
                <Text style={{marginBottom: 5}}>Call: {item.telephone} </Text>
                <Text style={{marginBottom: 5}}>Address: {item.address} {'\n'}
                {item.town}, {item.state} {item.zip} </Text>

            </Card>
        )
    }
}

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clubs: CLUBS
        }
    }

    static navigationOptions = {
        title: 'Contact'
    }

    render() {
        return(
        <ImageBackground source={require('./img/USJA_Logo_Optimized.jpg')} style={{width: '97%', height: '100%'}}
            resizeMode={'contain'}
            opacity={.25}>
            <ScrollView>
                <RenderContact item={this.state.clubs.filter(club => club.myclub)[0]}/>
            
            </ScrollView>
        
        </ImageBackground>
        
        )
    }
}

export default Contact