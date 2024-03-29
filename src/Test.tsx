import { AcronymEntry } from './AcronymEntry'
import React, { useState } from 'react'
import { Box, Button, LinearProgress, TextField, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import {
  Link
} from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: green
  }
})

function correct (name: string, values: Map<string, string>): boolean {
  return name.toLowerCase() === (values.get(name) || '').trim().toLowerCase()
}

export function Test (props: { data: AcronymEntry[] }): JSX.Element {
  const { data } = props
  const [values, setValues] = useState<Map<string, string>>(new Map())
  const percentComplete = data.filter(({ name }) => correct(name, values)).length / data.length * 100
  return <Box marginTop={2}>
        <ThemeProvider theme={theme}>
            {data.map(({ name }) => <Box key={name} marginTop={2}>
                <TextField style={{ width: '100%' }}
                           label={name[0]}
                           error={!correct(name, values)}
                           value={values.get(name)}
                           autoComplete="off"
                           onChange={(e) => setValues(new Map(values).set(name, e.target.value))}/>
            </Box>)}
            <Box mt={2}>
                <LinearProgress variant="determinate"
                                color={percentComplete === 100 ? 'primary' : 'secondary'}
                                value={percentComplete}/>
            </Box>
            <Box mt={2}>
                <Link to={'/'}><Button variant="contained" >Back</Button></Link>
            </Box>
        </ThemeProvider>
    </Box>
}
