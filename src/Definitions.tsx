
import { AcronymList } from './AcronymList'
import { drabc, sample, socrates } from './Data'
import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
export function Definitions () {
  return <>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore/>}
                aria-controls="panel1a-content">
                <Typography>DRsABCs</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <AcronymList data={drabc}/>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore/>}
                aria-controls="panel2a-content">
                <Typography>SAMPLE</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <AcronymList data={sample}/>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore/>}
                aria-controls="panel2a-content">
                <Typography>SOCRATES</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <AcronymList data={socrates}/>
            </AccordionDetails>
        </Accordion>
    </>
}
