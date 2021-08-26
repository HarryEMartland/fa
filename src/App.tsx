import React from 'react';
import './App.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar, Box, Container, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";

const sample = [
    {
        name: "Signs/Symptoms",
        description: "A symptom is a manifestation of disease apparent to the patient themself, while a sign is a manifestation of disease that you can perceive."
    },
    {
        name: "Allergy",
        description: "Do they have any allergies? For example, nuts or any medication such as penicillin or aspirin?"
    },
    {name: "Medication", description: "Are they taking any medication?"},
    {
        name: "Previous medical history",
        description: "Do they suffer from any medical condition such as diabetes, epilepsy or heart disease? Have they had any previous injuries or surgery?"
    },
    {name: "Last meal", description: "When did they last eat or drink?"},
    {
        name: "Event history",
        description: "What happened and where? Is the incident due to an illness or an accident? Ask any people nearby what happened and look for any clues that may give you more information."
    },
]

const drabc = [
    {name: "Danger", description: "Before approaching the casualty, always make sure the area is safe."},
    {
        name: "Response",
        description: "Check if the casualty is responsive or unresponsive. As you approach them, introduce yourself and ask them questions to see if you can get a response. Kneel next to their chest and gently shake their shoulders, asking, ‘What has happened?’, ‘Open your eyes!’."
    },
    {name: "Shout", description: "Get the attention of a someone else. You may need their assistance shortly"},
    {
        name: "Airway",
        description: "Next, you need to check that the airway is open and clear. Open the airway by placing one hand on the forehead to tilt the head back and use two fingers from the other hand to lift the chin. Check for any obstructions"
    },
    {
        name: "Breathing",
        description: "You now need to check if the casualty is breathing normally. Place your ear above their mouth, looking down their body. Listen for sounds of breathing and see if you can feel their breath on your cheek. Watch to see if their chest moves. Do this for 10 seconds."
    },
    {
        name: "Circulation",
        description: "Once you have established they are breathing, look and check for any signs of severe bleeding."
    },
    {
        name: "Send Help",
        description: "Call for assistance and if you have someone near by ask them to fetch a defibrillator"
    },
]

const socrates = [
    {name: "Site", description: "Where is the pain? Or the maximal site of the pain."},
    {
        name: "Onset",
        description: "When did the pain start, and was it sudden or gradual? Include also whether it is progressive or regressive."
    },
    {name: "Character", description: "What is the pain like? An ache? Stabbing?"},
    {name: "Radiation", description: "Does the pain radiate anywhere?"},
    {name: "Associations", description: "Any other signs or symptoms associated with the pain?"},
    {name: "Time", description: "course	Does the pain follow any pattern?"},
    {name: "Exacerbating / relieving factors", description: "factors Does anything change the pain?"},
    {name: "Severity", description: "How bad is the pain?"},
]


class AcronymEntry {
    constructor(readonly name: string, readonly description: string) {
    }
}

function AcronymList(props: { data: AcronymEntry[] }): JSX.Element {
    return <List>
        {props.data.map(({name, description}) => <ListItem key={name}>
            <ListItemAvatar>
                <Avatar>
                    {name[0]}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={description}/>
        </ListItem>)}
    </List>;
}

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
