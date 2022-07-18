
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
import { ExpandMore } from '@mui/icons-material'
export function Definitions () {
  return <>
      {allAcronyms.map(acronym => <Accordion key={acronym.name}>
          <AccordionSummary
              expandIcon={<ExpandMore/>}
              aria-controls="panel1a-content">
              <Typography>{acronym.name}</Typography>
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
