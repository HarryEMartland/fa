
import { AcronymList } from './AcronymList'
import { allAcronyms, allObs } from './Data'
import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar, ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material'
import QuizIcon from '@mui/icons-material/Quiz'
import { ExpandMore } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const noUnderLine = { textDecoration: 'none' }

export function Definitions () {
  return <>
      {allAcronyms.map(acronym => <Accordion key={acronym.name}>
          <AccordionSummary
              expandIcon={<ExpandMore/>}
              aria-controls="panel1a-content">
              <Typography>{acronym.name}</Typography>
            <Link style={noUnderLine} to={`/acronym/test/${acronym.name}`}>&nbsp;<QuizIcon/></Link>
          </AccordionSummary>
          <AccordionDetails>
              <AcronymList data={acronym.letters}/>
          </AccordionDetails>
      </Accordion>)}
    <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMore/>}
          aria-controls="panel1a-content">
        <Typography>Observations</Typography>
        <Link style={noUnderLine} to={'/obs/test'}>&nbsp;<QuizIcon/></Link>
      </AccordionSummary>
        <AccordionDetails>
          {allObs.map(ob =>
          <ListItem key={ob.name}>
            <ListItemAvatar>
              <Avatar>
                {ob.shortName}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={ob.name} secondary={`${ob.low} - ${ob.high}`}/>
          </ListItem>)}
        </AccordionDetails>
    </Accordion>
    </>
}
