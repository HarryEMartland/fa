import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'
import { AcronymEntry } from './AcronymEntry'

export function AcronymList (props: { data: AcronymEntry[] }): JSX.Element {
  return <List>
        {props.data.map(({ name, description }) => <ListItem key={name}>
            <ListItemAvatar>
                <Avatar>
                    {name[0]}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={description}/>
        </ListItem>)}
    </List>
}
