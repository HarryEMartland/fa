import { Link, useParams } from 'react-router-dom'
import React from 'react'
import { Test } from './Test'
import { allAcronyms } from './Data'
import { Alert, Box, Button } from '@mui/material'

export function SingleAcronymTest () {
  const { acronymName } = useParams<{ acronymName: string }>()
  const data = allAcronyms.find(a => a.name === acronymName)

  if (!data) {
    return <>
      <Alert severity="error">Unable to find Acronym</Alert>
      <Box mt={2}>
        <Link to={'/'}><Button variant="contained" >Back</Button></Link>
      </Box>
    </>
  }
  return <Test data={data.letters}/>
}
