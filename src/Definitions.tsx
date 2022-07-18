
import { AcronymList } from './AcronymList'
import { allAcronyms } from './Data'
import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
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

    </>
}
