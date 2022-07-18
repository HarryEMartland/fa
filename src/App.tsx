import React from 'react'
import './App.css'
import { Definitions } from './Definitions'
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { RandomTest } from './RandomTest'
import { grabBagChecklist, postCheckList, preCheckList } from './Data'
import { Checklist } from './Checklist'
import { Box, Button, Container } from '@mui/material'

function App (): JSX.Element {
  return (
        <Router>
            <div className="App">
                <Container maxWidth="lg">
                    <Box marginTop={4}>
                        <Switch>
                            <Route path="/test">
                                <RandomTest/>
                            </Route>
                            <Route path="/checklist/pre">
                                <Checklist checklist={preCheckList}/>
                            </Route>
                            <Route path="/checklist/post">
                                <Checklist checklist={postCheckList}/>
                            </Route>
                            <Route path="/checklist/bag">
                                <Checklist checklist={grabBagChecklist}/>
                            </Route>
                            <Route path="/">
                                <Definitions/>
                                <Box mt={2}>
                                    <Link to={'/test'}><Button variant="contained">Test yourself</Button></Link>
                                </Box>
                                <Box mt={2}>
                                    <Link to="/checklist/pre"><Button variant="contained">Pre Game
                                        Checklist</Button></Link>
                                </Box>
                                <Box mt={2}>
                                    <Link to="/checklist/post"><Button variant="contained">Post Game Checklist</Button></Link>
                                </Box>
                                <Box mt={2}>
                                    <Link to="/checklist/bag"><Button variant="contained">Grab Bag Checklist</Button></Link>
                                </Box>
                            </Route>
                        </Switch>
                    </Box>
                </Container>

            </div>
        </Router>
  )
}

export default App
