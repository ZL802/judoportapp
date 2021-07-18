import React from 'react'
import { FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{source: require('./img/blkMJudoka.jpeg')}}
            />
        )
    }

    return (
        <FlatList
            data={props.roster}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default Directory

