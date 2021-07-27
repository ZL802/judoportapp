import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import { ROSTER } from '../shared/roster'

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            roster: ROSTER
        }
    }

    static navigationOptions = {
        title: 'Directory'
    }
    render() {
        const { navigate } = this.props.navigation
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.rank}
                    onPress={() => navigate('RosterInfo', {rosterId: item.id})}
                    leftAvatar={{source: require('./img/blkMJudoka.jpeg')}}
                />
            )
        }

        return (
            <FlatList
                data={this.state.roster}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        )   
    }
}

export default Directory

