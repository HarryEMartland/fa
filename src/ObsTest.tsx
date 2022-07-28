import React, { useState } from 'react'
import { Box, Button, Grid, TextField, ThemeProvider } from '@mui/material'
import { allObs, Obs } from './Data'
import { createTheme } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import { Link } from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: green
  }
})

export function ObTest (props: { ob: Obs, onChange:(low:boolean, high:boolean)=>void}): JSX.Element {
  const { ob, onChange } = props
  const [low, setLow] = useState<string>('')
  const [high, setHigh] = useState<string>('')

  return <><Grid item xs={6}>
      <TextField style={{ width: '100%' }}
                 label={props.ob.name + ' low'}
                 error={parseFloat(low) !== ob.low}
                 value={low}
                 type="number"
                 autoComplete="off"
                 onChange={(e) => {
                   setLow(e.target.value)
                   onChange(parseFloat(low) === ob.low, parseFloat(high) === ob.high)
                 }}/>
  </Grid>
    <Grid item xs={6}>
        <TextField style={{ width: '100%' }}
                   label={props.ob.name + ' high'}
                   error={parseFloat(high) !== ob.high}
                   value={high}
                   type="number"
                   autoComplete="off"
                   onChange={(e) => {
                     setHigh(e.target.value)
                     onChange(parseFloat(low) === ob.low, parseFloat(high) === ob.high)
                   }}/>
    </Grid></>
}

export function ObsTest () {
  return <Box marginTop={2}>
        <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
                {allObs.map(ob => <ObTest key={ob.name} ob={ob} onChange={(low, high) => {}}/>)}
            </Grid>
        </ThemeProvider>
      <Box mt={2}>
          <Link to={'/'}><Button variant="contained" >Back</Button></Link>
      </Box>
    </Box>
}
