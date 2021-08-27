import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { AcronymList } from './AcronymList'
import { drabc, sample, socrates } from './Data'
import React from 'react'

export function Definitions () {
  return <>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content">
                <Typography>DRsABCs</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <AcronymList data={drabc}/>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2a-content">
                <Typography>SAMPLE</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <AcronymList data={sample}/>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2a-content">
                <Typography>SOCRATES</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <AcronymList data={socrates}/>
            </AccordionDetails>
        </Accordion>
    </>
}
