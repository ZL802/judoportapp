import React from 'react';
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements'

function RenderRoster({roster}) {
    if (roster) {
        return (
            <Card
                featuredTitle={roster.name}
                image={require('./img/blkMJudoka.jpeg')}>
                    <Text style={{margin:10}}>
                        {roster.rank}
                    </Text>
                </Card>
        )
    }
    return <View />
}

function RosterInfo(props) { 
    return <RenderRoster roster={props.roster} />
}

export default RosterInfo