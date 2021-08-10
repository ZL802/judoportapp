import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { RANK } from '../shared/rank'

function RenderRanks({rankDegree}) {
    if (rankDegree) {
        return (
            <Card
                image={require('./img/6kyu.png')}>
                    <Text>
                        FIsh
                    </Text>
            </Card>
        )
    }
}

class RankInfo extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            rank: RANK
        }
    }
    static navigationOptions = {
        title: 'Progression'
    }

    render() {
        const rankId = this.props.navigation.getParam('rankId')
        const rankDegree = this.state.rank.filter(rankDegree => rankDegree.id === rankId)[0]
        return <RenderRanks rankDegree={rankDegree} />
    }
}

export default RankInfo