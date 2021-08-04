import React, { Component } from 'react'
import { ScrollView, ImageBackground, Text } from 'react-native'
import { Card } from 'react-native-elements'
import { CLUBS } from '../shared/clubs'


class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clubs: CLUBS
        }
    }

    static navigationOptions = {
        title: 'About'
    }

    render() {
        return(
            <ImageBackground source={require('./img/USJA_Logo_Optimized.jpg')} style={{width: '97%', height: '100%'}}
                 resizeMode={'contain'}
                 opacity={.25}>
                <ScrollView className="clubs">
                    <Card title='About'
                        wrapperStyle={{margin: 15}}>
                        <Text style={{marginBottom: 10}}>
                        The Long Island Judo & Martial Arts Association (LIJMAA) is a Judo-based school that combines elements of Boxing, Karate, Jiu-Jitsu, and Submission Grappling under a single effective self-defense system. Our training program is devised to meet the needs and goals of the individual, ranging from beginners to experienced Judo players and competitive grapplers. We also offer street-combat self-defense, which includes weapon defense training. We welcome men, women, adults and children of any age to come visit us at our location in Port Jeff. The first month is free at no obligation, so come down and experience a real, effective, Judo-based combat system. LIJMAA is a member school of both the United States Judo Association (USJA) and the World Combat Arts Federation (WCAF).
                        </Text>
                    </Card>

                </ScrollView>
            </ImageBackground>
        )
    }
}

export default About