import React from 'react';
import './App.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Box, Container} from "@material-ui/core";
import {AcronymList} from "./AcronymList";
import {drabc, sample, socrates} from "./Data";


function App(): JSX.Element {

    return (
        <div className="App">
            <Container maxWidth="lg">
                <Box m={2}>
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
                </Box>
            </Container>
        </div>
    );
}

export default App;
