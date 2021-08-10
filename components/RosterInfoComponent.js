import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements'
import { ROSTER } from '../shared/roster'

function RenderRoster({rosterMem}) {
    if (rosterMem) {
        return (
            <Card
                featuredTitle={rosterMem.name}
                image={require('./img/blkMJudoka.jpeg')}
                imageStyle={{ paddingTop: 440, paddingBottom: -500, borderBottom: 200}}
            >
                <Text style={{margin: 10}}>
                    {rosterMem.rank}
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
        const rosterMem = this.state.roster.filter(rosterMem => rosterMem.id === rosterId)[0]
        return <RenderRoster rosterMem={rosterMem} />
    }
}


export default RosterInfo