import React, { Component,} from 'react';
import  { View, Text, ImageBackground, ScrollView } from 'react-native'
import { Card, Divider } from 'react-native-elements'
import { CLUBS } from '../shared/clubs'

function RenderItem({item}) {
    if (item) {
        return (
            
            <Card
            featuredTitle={item.name}
            image={require('./img/lijcbadge.jpg')}
            >
                <Text style={{margin: 10}}>
                   Instructor {item.instructor}
                </Text>
                <Text style={{margin: 10}}>
                   Contact {item.telephone}
                </Text>
            </Card>
           
        )
    }
    return <View />
}
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clubs: CLUBS
        }
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
                <ImageBackground source={require('./img/USJA_Logo_Optimized.jpg')} style={{width: '97%', height: '100%'}}
                 resizeMode={'contain'}
                 opacity={.25}>
                     <ScrollView>
                    <RenderItem
                        item={this.state.clubs.filter(club => club.myclub)[0]}
                    />
                    </ScrollView>
                </ImageBackground>
        )
    }
}

export default Home