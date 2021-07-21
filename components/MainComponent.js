import React, { Component } from 'react'
import Directory from './DirectoryComponent'
import RosterInfo from './RosterInfoComponent'
import { View } from 'react-native'
import { ROSTER } from '../shared/roster'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roster: ROSTER,
            selectedRoster: null
        }
    }

    onRosterSelect(rosterId) {
        this.setState({selectedRoster: rosterId})
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <Directory 
                    roster={this.state.roster}
                    onPress={rosterId => this.onRosterSelect(rosterId)} 
                />
                <RosterInfo
                    roster={this.state.roster.filter(roster => roster.id === this.state.selectedRoster)[0]}
                />
            </View>
        )
    }
}

export default Main