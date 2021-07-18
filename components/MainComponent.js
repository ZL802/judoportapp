import React, { Component } from 'react'
import Directory from './DirectoryComponent'
import { ROSTER } from '../shared/roster'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roster: ROSTER
        }
    }

    render() {
        return <Directory roster={this.state.roster} />
    }
}

export default Main