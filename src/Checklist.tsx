import React from 'react'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export class Checklist extends React.Component<{ checklist: { name: string; list: ({ name: string } | { name: string })[] } }> {
  render () {
    return <Box>
            <Typography variant="h4" component="div" gutterBottom>
                {this.props.checklist.name}
            </Typography>
            <FormGroup>
                {this.props.checklist.list.map(({ name }) => <FormControlLabel key={name} control={<Checkbox/>}
                                                                             label={name}/>)}
            </FormGroup>
        <Link to="/"><Button variant="contained">Back</Button></Link>

    </Box>
  }
}
