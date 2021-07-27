import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements'
import { ROSTER } from '../shared/roster'

function RenderRoster({rosterm}) {
    if (rosterm) {
        return (
    
            <Card
                featuredTitle={rosterm.name}
                image={require('./img/blkMJudoka.jpeg')}>
                    <Text style={{margin: 10}}>
                        {rosterm.rank}
                    </Text>
            </Card>
            
        )
    }
    return <View />
}

class RosterInfo extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            roster: ROSTER
        }
    }
    static navigationOptions = {
        title: 'Roster Information'
    }

    render() {
        const rosterId = this.props.navigation.getParam('rosterId')
        const rosterm = this.state.roster.filter(rosterm => rosterm.id === rosterId[0])
        return <RenderRoster rosterm={rosterm} />
}
}


export default RosterInfo